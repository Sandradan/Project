// import React,{Component} from 'react';
// import './Todolist.css'

// class TodoItem extends Component{
//     clickHandle=()=>{
//         this.props.clickHandle(this.props.index);
//     }
   
//     render(){
//         return (
//             <li>{this.props.item}
//                 <button className= 'deleteItem' onClick={this.clickHandle}>delete</button>
//             </li>
//         );
//     }
// }

// export default TodoItem; 



import React from 'react'
import './Todolist.css'
class TodoItem extends React.Component{
    // deleteHandle=()=>{
    //     this.props.deleteHandle(this.props.index)
    // }
    render(){
        return(
            <li>
                {this.props.list}
                <button className = 'deleteItem' onClick={()=>this.props.deleteHandle(this.props.index)}>delete</button>
            </li>
        )
    }
}
export default TodoItem