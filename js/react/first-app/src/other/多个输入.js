import React from 'react'
import ReactDOM from 'react-dom'
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <form>
                参与：
                <input 

                />
                <br />
                来宾人数：
                <input />
            </form>
        )
    }
}
ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)