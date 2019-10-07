import {Button} from 'antd'
import Link from 'next/link'
import Router from 'next/router';

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
        <Link href = '/a?id=1' as= '/a/1' title='aaa'>
            <Button>跳转</Button>
        </Link>
        <Button onClick={gotoB}>b</Button>
    </>
    )
}