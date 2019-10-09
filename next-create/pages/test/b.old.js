import React, {useState, useReducer, useContext, useEffect, useLayoutEffect} from 'react'
import { func } from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import MyContext from '../../lib/my-context'

class MyCount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    
    componentDidMount(){
       this.interval = setInterval(() => {
            this.setState({count:this.state.count + 1 })
        }, 1000);
    }
    componentWillUnmount(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }
    render(){
        return <span>{this.state.count}</span>
    }
}

function countReducer(state, action){
    switch(action.type){
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}

function MyCountFun(){
    // const [count, setCount] = useState(0)//传入默认值,[a, b] 默认值只有第一次有用，后面返回的是更新后的值
    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('jocky')
    // setCount(1)//设置为1，count = 1
    //setCount((c) => c + 1) //这种方法是基于最新值+1

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(c => c + 1)
    //         // dispatchCount({ type: 'minus'})
    //     }, 1000);
    //     return () => clearInterval(interval)
    // }, [])

    // return <span>{count}</span>


    const context = useContext(MyContext)

    useEffect(() =>{
        console.log('effect invoked')
        return () => console.log('effect deteched')
    }, [name])

    //在没更新html之前执行useLayout，少用，如在里面写需要长时间加载的程序，会加载很慢，影响用户体验
    useLayoutEffect(() =>{
        console.log('layout effect invoked')
        return () => console.log('layout effect deteched')
    }, [name])

    return (
        <div>
            <input value= {name} onChange = {(e) => setName(e.target.value)}/>
            <button onClick = {() => dispatchCount({type: 'add'})}>{count}</button>
            <p> {context} </p>
        </div>
    )
}

export default MyCountFun
// export default MyCount
// export default ()=><span>test</span>