const withCss = require('@zeit/next-css')

//官方提供
if(typeof require !== 'undefined'){
    require.extensions['.css'] = file =>{}
}
module.exports = withCss({})