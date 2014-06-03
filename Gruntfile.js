module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'connect': {
      'static': {
        options: {
          base: 'docs/build/',
          hostname: '0.0.0.0',
          port: 8001
        }
      }
    },

    'watch': {
      sass: {
        files: ['lib/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }
    },

    'sass': {
      dist: {
        files: {
          'dist/viewport-grid/viewport-grid.css': 'lib/scss/viewport-grid.scss'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask(
    'default', [
      'connect',
      'sass',
      'watch'
    ]
  );
};