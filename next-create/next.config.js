const withCss = require('@zeit/next-css')

const configs = {
    env:{
        customKey:'value' //域名或clientKey
    },
    serverRuntimeConfig:{
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    publicRuntimeConfig:{
        staticFolder: '/static',
    },
    distDir: 'dest',
}
//官方提供
if(typeof require !== 'undefined'){
    require.extensions['.css'] = file =>{}
}
module.exports = withCss({
    // distDir: 'dest',
    env:{
        customKey:'value' //域名或clientKey
    },
    serverRuntimeConfig:{
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    publicRuntimeConfig:{
        staticFolder: '/static',
    },
})