import React from 'react'
import ReactDOM from 'react-dom'
import "./todolist.css"
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''}
    }
    handlerChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handlerSubmit=(e)=>{
        const newValue = this.state.value;
        e.preventDefault()
        // <ul>
        //     <li>{newValue}</li>
        // </ul>
    }
    render(){
        return(
            <form className='box' onSubmit={this.handlerSubmit}>
                <div>
                    <h3>please input what you need to do:</h3>
                    <input type='text' onChange={this.handlerChange}/>
                    <input type='submit' value='submit' />
                </div>
            </form>
        )
    }
}
ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
)