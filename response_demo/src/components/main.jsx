import propTypes from 'prop-types'
import React, {Component} from 'react'
import axios from 'axios'
import './main.css'
import  PubSub from 'pubsub-js'

export default class Main extends Component{
    
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    componentDidMount(){
        //订阅消息(search)
        PubSub.subscribe('search',(_, searchName) => {
            this.setState({
                initView: false,
                loading: true
            })
            //发ajax请求
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then((response) =>{
                //得到响应数据
                const result = response.data
                const users = result.items.map(
                    // item => ({name: item.login})
                    item => {
                        return{name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                    }
                )
                //更新状态（成功）
                this.setState({
                    loading: false,
                    users
                })
                console.log(users)
            }).catch(error => {
                //更新状态（失败）
                this.setState({
                    loading: false,
                    errorMsg: "请求错误哦~"
                })
            }) 
        })
    }
    
    render(){
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        if(initView){
            return <h2>please input keywords:{searchName}</h2>
        }else if(loading){
            return <h2>loading...</h2>
        }else if(errorMsg){
            return <h2>errorMsg</h2>
        }else
        {
            return(
            <div className = "row">
                {users.map((user,index) =>{
                    return(
                        <div className = "card" key = {index}>
                       <a href= {user.url} target="_blank">
                            <img src= {user.avatarUrl} style = {{width: 100}} alt=""/>
                       </a>
                       <p className ="card-text">{user.name}</p>
                   </div>   
                    )
                })}
                </div>
                   
        )}
    }
}