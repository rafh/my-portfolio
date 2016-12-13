module.exports = {
    options: {
        compress: true,
        mangle: true,
        beautify: false,
        sourceMap: false
    },
    theme: {
        files: {
            'js/min/merged-min.js': ['js/min/angular.min.js', 'js/min/angular-messages.min.js', 'js/min/jquery.min.js', 'js/main.ctrl.js','js/main.js']
        }
    }
};
