import {Button} from 'antd'
import Link from 'next/link'
import Router from 'next/router';
import store from '../store/store'

const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete'
]
function makeEvent(type){
    return (...args)=>{
        console.log(type,...args)
    }
}
events.forEach(event=>{
    Router.events.on(event,makeEvent(event))
})
export default ()=>{
    function gotoB(){
        Router.push({
            pathname:'/test/b',
            query:{
                id:2
            }
        },'/test/b/2')
    }
    return(
    <>
        <span>Index</span>
    </>
    )
}