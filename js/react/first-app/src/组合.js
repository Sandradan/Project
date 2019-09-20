import React from 'react'
import ReactDOM from 'react-dom'

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

const styleh1 = {
    color:"yellow"
}
function Dialog(props){
    return(
        <FancyBorder color = 'blue'>
            <h1 className = 'Dialog-title' style = {styleh1}>
                {props.title}
            </h1>
            <p className = 'Dialog-message'>
                {props.message}
            </p>
        </FancyBorder>
    )
}

// function WelcomeDialog(props){
//     return(
//         <Dialog 
//             title = 'Welcome'
//             message = 'thank you for visiting our spacecraft'
//         />
//     )
// }

class WelcomeDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: ''
        }
    }
    render(){
        return(
        <Dialog 
            title = 'Welcome'
            message = 'thank you for visiting our spacecraft'
        />
        )
    }

}








ReactDOM.render(
    <WelcomeDialog/>,
    document.getElementById('root')
)