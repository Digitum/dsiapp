module.exports = function(grunt) {

  grunt.initConfig({
    clean: ["dist/"],
    copy: {
      server: {
        files: [
          // includes files within path
          {
            expand: true, 
            cwd: 'src/server',
            src: ['**'], 
            dest: 'dist/server/' 
          },
          {
            expand: true,
            cwd: 'src/html',
            src: ['**'],
            dest: 'dist/html/'
          },
          {
            expand: true,
            cwd: 'node_modules/angular/',
            src: ['angular.min.js'],
            dest: 'dist/html/components/angular/'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.min.js'],
            dest: 'dist/html/components/jquery/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy']);

};
