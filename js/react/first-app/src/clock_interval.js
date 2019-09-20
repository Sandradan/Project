
//循环时钟(函数组件)
function SetDate(){
    return new Date().toLocaleTimeString()
}
// function Clock(props){
//     return(
//         <div>
//            <h1>Hello,world</h1>
//            <h2>It is {props.date}</h2>
//        </div> 
//     )
// }


//循环时钟(类组件)
function FormattedDate(props){
    return <h2>It is {props.date}</h2>
}
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: SetDate()}
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount(){
          clearInterval(this.timerID)
      }
    tick(){
        this.setState({
            date: SetDate()
        })
    }
    render(){
        return(
           <div>
                <h1>Hello,world</h1>
                <FormattedDate date={this.state.date}/>
            </div>   
        )
    }
}
function Combine(){
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}
    ReactDOM.render(
        <Combine />,
        document.getElementById('root')
    )


function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        alert('the link was linked')
    }
    return(
        <a href="#" onClick={handleClick}>Click me</a>
    )
}
ReactDOM.render(
    <ActionLink />,
    document.getElementById('root')
)