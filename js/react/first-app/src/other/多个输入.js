import React from 'react'
import ReactDOM from 'react-dom'
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isgoing: true,
            numberOfGuests: 2
        }
    }
    handleInputChange = (e)=>{
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
                [name]:value
        });
    }
    render(){
        return(
            <form>
                <label>
                is going：
                <input 
                    name='isgoing'
                    type='checkbox'
                    checked = {this.state.isgoing}
                    onChange={this.handleInputChange}
                />
                </label>
                <br />
                <label>
                number of guests:
                <input 
                    name = 'numberOfGuests'
                    type = 'number'
                    value = {this.state.numberOfGuests}
                    onChange = {this.handleInputChange}
                />
                </label>
            </form>
        )
    }
}
ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)
