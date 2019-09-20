import React from 'react'
import "./Todolist.css"
import ToDoItem from './ToDoItem'

//Todolist
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:'',list:[]}
    }
    handlerChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handlerSubmit=(e)=>{
        this.setState({value:'',list:[...this.state.list,this.state.value]})
    }
    handleItemClick(index) {
        console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
          list
        })
      }

    handleDelete = (index) =>{
        console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
        list
        })
    }
    getTodoItem = ()=>{
        return this.state.list.map((item, index) => {
            return (
              <ToDoItem
                deleteItem={this.handleDelete}
                key={index}
                content={item}
                index={index}
              />
            )
          })
    }
    render(){
        return(
                    <div className='box' onSubmit={this.handlerSubmit}>
                        <h3>please input what you need to do:</h3>
                        <input type='text' onChange={this.handlerChange} value={this.state.value}/>
                        <input type='submit' value='submit' />
                        <ul>{this.getTodoItem()}</ul>
                    </div>
        )
    }
}

export default ToDoList




