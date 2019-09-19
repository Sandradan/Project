import React from 'react'
import ReactDOM from 'react-dom'
//boilingVerdict组件
function BoilingVerdict (props){
    if(props.celsius >=100){
        return <p>the water would boil</p>
    }else{
        return <p>the water wouldnot boil</p>
    }
}


//摄氏度和华氏度转换函数
function  toCelsius(fahrenheit){
    return (fahrenheit - 32) *5 / 9
}
function toFahrenheit(celsius){
    return (celsius * 9 /5 ) + 32
}

//两个输入框值转换函数
function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){
        return ''
    }else{
        const output = convert(input)
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString()
    }
}

//TemperatureInput组件
const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}


class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     temperature: ''
        // }
    }
    handleChange = (e)=>{
        // this.setState({
        //     temperature :e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        // const temperature = this.state.temperature
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend> Enter temperature in {scaleNames[scale]}:</legend>
                    <input 
                    value ={temperature}
                    onChange = {this.handleChange}
                    />
            </fieldset>
        )
    }
}


 

//Calculator组件
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
            scale:'f'
        }
    }

    handleCelsiusChange=(temperature)=>{
        this.setState({scale:'c',temperature})
    }
    handleFahrenheitChange=(temperature)=>{
        this.setState({scale:'f',temperature})
    }
    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale ==='f'?tryConvert(temperature,toCelsius):temperature
        const fahrenheit = scale ==='c'?tryConvert(temperature,toFahrenheit):temperature

        return(
            <div>
                <TemperatureInput 
                    scale = 'f'
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange}
                />
                <TemperatureInput scale = 'c'
                    temperature = {celsius}
                    onTemperatureChange = {this.handleCelsiusChange}
                />
                <BoilingVerdict celsius = {parseFloat(celsius)}/>
            </div>
        )

    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)
