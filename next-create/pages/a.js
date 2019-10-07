import {withRouter} from 'next/router'
import Link from 'next/link'
import { resolve } from 'any-promise';
// const A = ({ router,name })=><Link href='#aaa'><a>hello a{router.query.id}{name}</a></Link>
const A = ({ router })=><Link href='#aaa'><a>A { router.query.id }</a></Link>

A.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        setTimeout(() =>{
            resolve({
                name:'jack'
            })
        },1000)
    })
    return await promise
}
export default withRouter(A)