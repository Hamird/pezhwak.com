module.exports = function(grunt){
  "use strict";

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors:    true,
          consolidateMediaQueries:    true
        },
        files: {
          'assets/style.css': 'assets/style.css'
        }
      }
    },

    cssmin: {
      build: {
        src: 'assets/style.css',
        dest: 'assets/style.css'
      }
    },

    sass: {
      build: {
        files: {
          'assets/style.css': 'sass/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 5%']
      },
      build: {
        files: {
          'assets/style.css': 'assets/style.css'
        }
      }
    },
    watch: {
      html: {
        files: ['index.html'],
        tasks: ['htmlhint']
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['buildcss']
      }
    },
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
        },
        src: ['index.html']
      }
    }
  });


  grunt.registerTask('default', []);
  grunt.registerTask('buildcss',  ['sass', 'cssc', 'autoprefixer']);

};
