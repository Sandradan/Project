//覆盖react中组件app的地方
import App, {Container} from 'next/app'
import 'antd/dist/antd.css'

class MyApp extends App{

    render(){

        const { Component } = this.props
        console.log(Component)

        return(
            <Container>
                <Component />
            </Container>
        )
    }

}
export default MyApp