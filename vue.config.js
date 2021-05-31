//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "PC STATS - MONITOR YOUR PC";
                return args;
            })
    }
}