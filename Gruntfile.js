module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app.js',
                dest: 'min/app-min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        js: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'js/min/main.ctrl-min.js': 'js/main.ctrl.js'
                }
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: "Project Name", // defaults to the name in package.json, or will use project directory's name
                success: false, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },
        notify: {
            scripts: {
                options: {
                    title: 'JS',
                    message: 'JavaScript complete!'
                }
            },
            css: {
                options: {
                    title: 'SCSS',
                    message: 'SCSS compilled!'
                }
            }
        },
        svgstore: {
            options: {
                prefix : 'shape-' // This will prefix each <g> ID
            },
            default : {
                files: {
                    'assets/scg/svg-defs.svg': ['svgs/*.svg']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        jshint: {
             all: ['js/main.js']
        },
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['jshint', 'uglify', 'notify:scripts'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'notify:css'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');




    // Default task(s).
    // grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['watch']);

};