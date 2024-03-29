import Document,{Html, Head, Main, NextScript} from 'next/document'
import { Component } from 'react';
import { ServerStyleSheet } from 'styled-components'

function withLog(Comp){
    return (props) =>{
        console.log(props)
        return <Comp {...props} />
    }
}
class MyDocument extends Document{
    static async getInitialProps(ctx){
        const originalRenderPage = ctx.renderPage
        const sheet = new ServerStyleSheet()
        try{
            ctx.renderPage = async () =>
                originalRenderPage({
                    enhanceApp: App => props =>sheet.collectStyles(<App {...props} />)
                })
                const props = await Document.getInitialProps(ctx)
                return{
                    ...props,
                    styles: <>{props.styles}{sheet.getStyleElement()}</>
                }
            
        } finally {
            sheet.seal()
        }
       
        
    }
    render(){
        return(
    <Html>
        <Head>
            {/* <title>my app</title> */}
            {/* <style>{ `.test { color: red}` }</style> */}
        </Head>
        <body className = 'test'>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
    }
}
export default MyDocument