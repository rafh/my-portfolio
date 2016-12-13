module.exports = {
    scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'uglify', 'notify:scripts'],
        options: {
            spawn: false,
            livereload: true
        },
    },
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss:dist', 'notify:css'],
        options: {
            spawn: false,
            livereload: true
        }
    },
    images: {
        files: ['assets/**/*.{png,jpg,gif,svg}'],
        tasks: ['newer:imagemin:dynamic', 'notify:images'],
        options: {
            spawn: false,
        }
    },
    structure: {
        files: ['**/*.php', '**/*.html'],
        tasks: ['newer:copy:build'],
        options: {
            spawn: false,
            livereload: true
        }
    }
};
