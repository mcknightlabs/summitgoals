'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({


    responsive_images: {
      digital: {
        options: {
          sizes: [{
            upscale: true,
            width: 300
          }, {
            upscale: true,
            width: 600
          }, {
            upscale: true,
            width: 1400
          }, {
            upscale: true,
            width: 2000
          }]
        },
        files: [{
          expand: true,
          src: ['gestures/*.{gif,jpg,png}'],
          cwd: 'media/assets',
          dest: 'media/responsive_images'
        }]
      },
      film: {
        options: {
          sizes: [{
            upscale: true,
            width: 300
          }, {
            upscale: true,
            width: 600
          }, {
            upscale: true,
            width: 1400
          }, {
            upscale: true,
            width: 2000
          }]
        },
        files: [{
          expand: true,
          src: ['film/canon_ae1/*.{gif,jpg,png}'],
          cwd: 'media/assets',
          dest: 'media/responsive_images'
        }]
      },
      medium_format: {
        options: {
          sizes: [{
            upscale: true,
            width: 300
          }, {
            upscale: true,
            width: 600
          }, {
            upscale: true,
            width: 1400
          }, {
            upscale: true,
            width: 2000
          }]
        },
        files: [{
          expand: true,
          src: ['film/mamiya_6/*.{gif,jpg,png}'],
          cwd: 'media/assets',
          dest: 'media/responsive_images'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);

};