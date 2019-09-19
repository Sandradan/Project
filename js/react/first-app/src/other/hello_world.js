import ReactDOM from 'react-dom'
import React from 'react'
//hello world
const name = 'josh perez';
function formatName(user){
    return user.firstname +" "+user.lastname;
}
const user={
    firstname:'harper',
    lastname:'perez'
}

function greeting(user){
    if(user){
        return <h1>hello, {formatName(user)}</h1>
    }else{
        return <h1>hello, stranger</h1>
    }
}

function Welcome(props){
    return <h1>hello,{props.name}</h1>
}
function App(){
    return(
        <div>
            <Welcome name = 'sara'/>
            <Welcome name = 'sandra'/>
            <Welcome name = 'cahal'/>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
