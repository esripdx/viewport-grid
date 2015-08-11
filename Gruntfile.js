module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: 'site/build'
      },
      src: ['**']
    },

    'shell': {
      release: {
        command: 'npm run release'
      }
    },

    'compress': {
      main: {
        options: {
          archive: 'viewport-grid.zip'
        },
        files: [
          {
            src: ['dist/**', '!dist/__MACOSX'],
            dest: './'
          },
        ]
      }
    },

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
      sitesass: {
        files: ['site/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['site/source/js/*.js'],
        tasks: ['jshint', 'concat'],
        options: {
          nospawn: true
        }
      },
      img: {
        files: ['site/source/img/**/*.{png,jpg,svg}'],
        tasks: ['newer:imagemin'],
        options: {
          nospawn: true
        }
      },
      assemble: {
        files: ['site/source/**/*.md', 'site/source/**/*.hbs'],
        tasks: ['assemble'],
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

    'jshint': {
      files: [
        'site/source/js/*.js',
      ]
    },

    'concat': {
      docs: {
        src: ['site/source/js/*.js'],
        dest: 'site/build/js/script.js'
      }
    },

    'imagemin': {
      docs: {
        files: [{
          expand: true,
          cwd: 'site/source/img/',
          src: ['**/*.{png,jpg,jpeg,svg}'],
          dest: 'site/build/img/'
        }]
      }
    },

    'assemble': {
      options: {
        layout: 'layout.hbs',
        assets: 'site/build/',
        layoutdir: 'site/source/layouts/',
        partials: 'site/source/partials/**/*.hbs'
      },
      'posts': {
        files: [{
          cwd: 'site/source/pages',
          dest: 'site/build',
          expand: true,
          src: ['**/*.hbs', '**/*.md']
        }]
      }
    }
  });

  // Require all grunt modules
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  // Default grunt task
  grunt.registerTask('default', ['assemble', 'sass', 'cssmin', 'newer:imagemin', 'concat', 'connect', 'watch' ]);
  grunt.registerTask('deploy', ['assemble', 'sass', 'cssmin', 'newer:imagemin', 'concat', 'gh-pages']);
  grunt.registerTask('release', ['sass', 'cssmin', 'compress', 'shell:release']);
};
