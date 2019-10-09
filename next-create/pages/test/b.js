import React, {useState, useReducer, useContext, useEffect, useLayoutEffect, memo, useMemo, useCallback} from 'react'
import { func } from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import MyContext from '../../lib/my-context'

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
    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('jocky')
    
    const config = useMemo(() =>({
        text: `count is ${count}`,
        color: count > 3 ? 'red' : 'blue'
    }), [count]) //只要count不变，每次返回的都是原来的对象

    const handleButtonClick = useCallback(() =>dispatchCount({type: 'add'}), [])
    return (
        <div>
            <input value= {name} onChange = {(e) => setName(e.target.value)}/>
            <Child 
            config = {config}
            onButtonClick = {handleButtonClick} />
        </div>
    )
}
const Child = memo(function Child({onButtonClick, config}){
    console.log('child render')
    return (
        <button 
        onClick = {onButtonClick} 
        style = {{ color: config.color}}
        config = {config.text}
        >{config.text}</button>
    )
})

export default MyCountFun
// export default MyCount
// export default ()=><span>test</span>