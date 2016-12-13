module.exports = {
    dist: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: ['ie >= 9', 'Safari >= 6', 'iOS >= 7', 'last 2 Opera versions', 'last 2 Edge versions', 'last 4 Chrome versions', 'last 4 ff versions']
                })
            ]
        },
        src: 'css/style.css'
    }
};
