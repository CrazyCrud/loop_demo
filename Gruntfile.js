module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                imagePath: 'assets',
                outputStyle: 'compressed',
            },
            dist: {
                files: {
                    'css/home.css': 'scss/home.scss'
                }
            }
        },
        cssmin: {
            dist: {
                options: {
                    
                },
            files: {
                'css/home.min.css': 'css/home.css'
                }
            }
        },
        concat: {
            options: {
              separator: ';',
              stripBanners: true,
            },
            home: {
              src: ['js/vendor/jquery.js', 'js/sections/home.js'],
              dest: 'js/home.js',
            }
        },
        criticalcss: {
            custom_options:{
                options: {
                    url: "http://localhost/portfolio-website-2/index.php",
                    width: 1200,
                    height: 900,
                    outputfile: "css/critical.css",
                    filename: "css/app.css",
                    buffer: 800*1024
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            css: {
                files: 'scss/**/*.scss',
                tasks: ['sass'],
                options: {
                  livereload: false,
                },
            },
            scripts: {
                files: ['js/vendor/jquery.js', 'js/sections/home.js'],
                tasks: ['concat'],
                options: {
                  spawn: true,
                },
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('build', ['sass', 'cssmin', 'concat']);
    grunt.registerTask('default', ['build', 'watch']);

};