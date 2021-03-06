//覆盖react中组件app的地方
import App, { Container } from 'next/app'
import 'antd/dist/antd.css'

import MyContext from '../lib/my-context'

import Layout from '../components/Layout'
class MyApp extends App{

    state = {
        context: "value"
    }
    static async getInitialProps({ Component, ctx }){
        // console.log("app init")
        let pageProps
        if( Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }
    render(){

        const { Component, pageProps } = this.props
        console.log(Component)

        return(
            <Container>
                <Layout>
                    <MyContext.Provider value = {this.state.context}>
                        <Component {...pageProps} />
                        <button onClick = {() => this.setState({context: `${this.state.context}111`})}> update context </button>
                    </MyContext.Provider>
                </Layout>
            </Container>
        )
    }

}
export default MyApp