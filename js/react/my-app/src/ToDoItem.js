import React from 'react'
class ToDoItem extends React.Component{
    constructor(props){
        super(props)
    }
     handleDelete = (e) =>{
        const {deleteItem, index} = this.props
        deleteItem(index)
    }
    render(){
        const {content} = this.props
        return (<div onClick={this.handleDelete}>{content}</div>)}
}
export default ToDoItem
