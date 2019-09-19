import React from 'react'
import ReactDOM from 'react-dom'
class Fruits extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'please select:'
        }
    }
        handlerChange= (e)=>{
            this.setState(
                // {value:e.target.value}
            )
        }
        handlerSubmit =(e)=>{
            alert('you selected: '+this.state.value);
            e.preventDefault()
        }
        render(){
            return(
            <form onSubmit ={this.handlerSubmit}>
                <select onChange={this.handlerChange} >
                    <option>bananas</option>
                    <option>apple</option>
                    <option>grape</option>
                    <option>pear</option>
                </select>
                <input type='submit'/>
                <input type='file'/>
            </form>
        )
    }
}
ReactDOM.render(
    <Fruits />,
    document.getElementById('root')
)

