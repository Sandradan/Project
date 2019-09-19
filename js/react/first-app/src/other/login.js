

//登录或注册，点击按钮切换
function Select(props){
    if(!props.select){
      return UserGreeting(); 
    } else{
      return GuestGreeting();
    } 
  }
  function UserGreeting(){
      return <h1>Welcome back</h1>
  }
  function GuestGreeting(){
      return <h1>please sign in</h1>
  }
  class Greeting extends React.Component{
          constructor(props){
          super(props)
          this.state = {isLoggin:false}
      }
      handle =()=>{
          this.setState(state=>({
              isLoggin:!this.state.isLoggin
          }))
      } 
      render(){
          return(
              <div>
              <button onClick={this.handle}>
              {this.state.isLoggin?'Greeting':'Sign in'}
              </button>
              <Select select = {this.state.isLoggin} />
              </div>
          )
         
      }
  }
  ReactDOM.render(
      <Greeting />,
      document.getElementById('root')
  )
  
  
  //注销和登录
  // function LoginButton(props){
  //     return (
  //         <button onClick={props.onClick}>Login</button>
  //     )
  // }
  // function LogoutButton(props){
  //     return(
  //         <button onClick = {props.onClick}>Logout</button>
  //     )
  // }
  // class LoginControl extends React.Component{
  //     constructor(props){
  //         super(props);
  //         this.state = {isLoggin:false};
  //     }
  //     handleLoginClick = ()=>{
  //         this.setState({isLoggin:true})
  //     }
  //     handleLogOutClick = () =>{
  //         this.setState({isLoggin:false})
  //     }
  //     render(){
  //         const isLoggin = this.state.isLoggin;
  //         let button;
  //         if(isLoggin){
  //             button = <LogoutButton onClick={this.handleLogOutClick}/>
  //         }else{
  //             button = <LoginButton onClick={this.handleLoginClick}/>
  //         }
  //         return(
  //             <div>
  //                 <Greeting isLoggin = {isLoggin}/>
  //                 {button}
  //             </div>
  //         )
  //     }
  // }
  // ReactDOM.render(
  //     <LoginControl />,
  //     document.getElementById('root')
  // )
  