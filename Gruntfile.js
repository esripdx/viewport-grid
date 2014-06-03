module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'connect': {
      'static': {
        options: {
          port: 8001,
          hostname: '0.0.0.0',
          base: './site/build/'
        }
      }
    },

    'watch': {
      sass: {
        files: ['lib/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      },
      assemble: {
        files: ['site/source/**/*.md', 'site/source/**/*.hbs'],
        tasks: ['newer:assemble'],
        options: {
          nospawn: true
        }
      }
    },

    'sass': {
      options: {
        banner: '/* Viewport Grid - <%= pkg.version %> \n' +
        '*   https://github.com/esripdx/viewport-grid\n' +
        '*   Licensed ISC */\n'
      },
      dist: {
        files: {
          'dist/viewport-grid.css': 'lib/viewport-grid.scss'
        }
      },
      build: {
        files: {
          'site/build/css/viewport-grid.css': 'lib/viewport-grid.scss'
        }
      },
      site: {
        files: {
          'site/build/css/style.css': 'site/source/scss/style.scss'
        }
      }
    },

    'cssmin': {
      options: {
        banner: '/* Viewport Grid - <%= pkg.version %> \n' +
        '*   https://github.com/esripdx/viewport-grid\n' +
        '*   Licensed ISC */\n'
      },
      dist: {
        files: {
          'dist/viewport-grid.min.css': ['dist/viewport-grid.css']
        }
      }
    },

    'assemble': {
      options: {
        layout: 'layout.hbs',
        layoutdir: 'site/source/layouts/',
        partials: 'site/source/partials/**/*.hbs'
      },
      'posts': {
        files: [{
          cwd: 'site/source/pages',
          dest: 'site/build',
          expand: true,
          src: ['**/*.hbs']
        }]
      }
    }
  });

  // Require all grunt modules
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  // Default grunt task
  grunt.registerTask('default', ['assemble', 'sass', 'cssmin', 'connect', 'watch' ]);
};