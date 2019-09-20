//个人资料

import React from 'react'
import ReactDOM from 'react-dom'

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Avatar(props){
    return(
        <img className='Avatar'
            src= {props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}
function UserInfo(props){
    return(
        <div className='UserInfo'>
                <Avatar user={props.user} />
                <div className='UserInfo-name'>
                    {props.user.name}
                </div>
            </div>
    )
}
function Comment(props){
    return(
        <div className='Comment'>
            <UserInfo user={props.author}/>
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {formatDate(props.date)}
            </div>
        </div>
    )
}
const pic = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author:{
        name:'hello',
        avatarUrl:'https://placekitten.com/g/64/64'
    }
}
ReactDOM.render(
    <Comment 
        date ={pic.date}
        text = {pic.text}
        author = {pic.author}
    />,
    document.querySelector('#root')
)