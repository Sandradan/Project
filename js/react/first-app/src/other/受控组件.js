//受控组件
import React from 'react'
import ReactDOM from 'react-dom'
// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { value: ''}
//     }
//     handleChange=(e)=>{
//         this.setState(
//             {value:e.target.value}
//         )
//     }
//     handleSubmit=(e)=>{
//         alert(this.state.value);
//         e.preventDefault()
//     }
//     render(){
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 Name: {' '}
//                 <input type="text" onChange={this.handleChange}/>
//                 <input type="submit" value="提交" />
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// )

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('提交的文章: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            文章:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }
  ReactDOM. render(
      <EssayForm/>,
      document.getElementById('root')
  )