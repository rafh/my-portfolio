module.exports = {
    'default': [
        'watch'
    ],
    'build': [
        'clean:all',
        'copy:build',
        'jshint',
        'uglify',
        'sass',
        'postcss:dist',
        'imagemin:dynamic',
        'notify:build'
    ],
    'start': [

    ]
};