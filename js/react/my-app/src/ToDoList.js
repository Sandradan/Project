// import React,{Component} from 'react';
// import TodoItem from './TodoItem';
import './Todolist.css'
// class TodoList extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             item:['learning English','travelling','exercise everyday'],
//             input:''
//         }
//     }
//     btnChangeHandle = (e) =>{
//         this.setState(
//             {input:e.target.value}
//             )
//     }
//     btnClickHandle= (e) =>{
//         this.setState({
//             item:[...this.state.item,this.state.input],
//             input:''
//         })
//     }
//     delItem(index){
//         var list = [...this.state.item];
//         list.splice(index,1);
//         this.setState({
//             item:list
//         })
//     }
//     render(){
//         return (
//             <div className='box'>
//                 <div className = 'container'>
//                     <p>please input items:</p>
//                     <input value={this.state.input} placeholder='add items' onChange={this.btnChangeHandle}/>
//                     <input type='button' onClick={this.btnClickHandle} value='AddItem'/>
//                     <ul>
//                         {
//                             this.state.item.map((value,index)=>{
//                                 return (<TodoItem index={index} key={index} item={value} clickHandle={(i)=>{this.delItem(i)}}/>);
//                             })
//                         }
//                     </ul>
                    
//                 </div>
//             </div>
//         );
//     }
// }
// export default TodoList;




import React from 'react'
import TodoItem from './TodoItem'
class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            list:[]
        }
    }
    btnChangeHandle = (e) =>{
        this.setState({
            value:e.target.value
        })
    }
    btnClickHandle = (e) =>{
        this.setState({
            value:'',
            list:[...this.state.list,this.state.value]
        })
    }
    delete=(index)=>{
        console.log(index)
        var list =[...this.state.list]  
        list.splice(index,1)
        this.setState({
          list:list
        })

    }
    render(){
        return(
            <div className ='box'>
                <div className ='container'>
                    <p>please input items:</p>
                    <input value = {this.state.value} type = 'text' placeholder='addItems' onChange={this.btnChangeHandle}/>
                    <input type = 'button' value='add' onClick = {this.btnClickHandle}/>
                    <ul>
                        {this.state.list.map((item,index)=>{
                            return(
                            <TodoItem key = {index} list = {item} index = {index} deleteHandle = {this.delete}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )

    }
}
export default TodoList


