import React from 'react'
import propTypes from 'prop-types'
import  PubSub from 'pubsub-js'
export default class Search extends React.Component{
    
    search = () =>{
        //得到输入的关键字
        const searchName = this.input.value.trim()
        if(searchName){
            //搜索
            //发布消息
            PubSub.publish('search', searchName)
            
        }
    }
    render(){
        return(
            <section className = "jumbotron">
                   <h3 className = "jumbotron-heading">
                       Search Github Users
                   </h3>
                   <div>
                       <input type="text" placeholder ="enter the name you search" ref ={input => this.input = input}/>
                       <button style = {{marginLeft: 20}} onClick = {this.search}>Search</button>
                   </div>
               </section>
        )
    }
}