const publicIp = require('public-ip');
var express = require('express');
var app = express();
os = require('os');
const exec = require('child_process').exec;

// Test
// Static files
app.use(express.static(__dirname + '/../html'));

// Default index page
app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/../html" } );
    res.end();
});
// Get ip addresses
app.get('/myip.json', function(req, res){
    publicIp.v4().then(ip => {
        app.set('json spaces', 2);
        res.json({"external": ip, "internal": getLocalIp()});
    });
});
// Send reload browser command
app.get('/reload', function(req, res){
  exec('/bin/su - pi -c /home/pi/scripts/refresh', (err, stdout, stderr) => {
    if (err) {
      res.send([err, stderr]);
      return;
    }
    res.send(stdout);
    res.end();
  });
});
// Send reboot
app.get('/reboot', function(req, res){
  exec('shutdown -r now', (err, stdout, stderr) => {
    if (err) {
      res.send([err, stderr]);
      return;
    }
    res.send(stdout);
    res.end();
  });
});
// Send shutdown
app.get('/shutdown', function(req, res){
  exec('shutdown -h now', (err, stdout, stderr) => {
    if (err) {
      res.send([err, stderr]);
      return;
    }
    res.send(stdout);
    res.end();
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function getBtDevices() {




}
function getLocalIp(){
  var interfaces = os.networkInterfaces();
  var data = [];
  for(var x in interfaces) {
    var interface = interfaces[x];
    for(var i = 0; i < interface.length; i++) {
      item = interface[i];
      item.interface = x;
      data.push(item);
    }
  }
  return data;
}
