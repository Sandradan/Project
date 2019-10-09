import {withRouter} from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
// import moment from 'moment'
import dynamic from 'next/dynamic'
// import Comp from '../components/comp'
import getConfig from 'next/config'

const Comp =dynamic(import('../components/comp'))

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const Title = styled.h1`
color: yellow;
font-size: 40px;`

const color = '#113366'
// const A = ({ router,name })=><Link href='#aaa'><a>hello a{router.query.id}{name}</a></Link>
const A = ({ router, name, time })=>{
    console.log(serverRuntimeConfig, publicRuntimeConfig)
    return(
        (
            <>
                <Title>This is Title {time} </Title>
                <Comp />
                <Link href='#aaa'>
                <a className='link'>
                    A { router.query.id } {name} {process.env.customKey}
                    </a>
                </Link>
                <style jsx>
                    {
                        `a{
                            color:blue
                        }
                        .link{
                            color:red
                        }
                        `
                    }
                </style>
                <style jsx global>
                    {`
                        a{
                            color:yellow
                        }
                    `}
                </style>
            </>
        )
        
    )
}

A.getInitialProps = async (ctx)=>{
    const moment = await import('moment') //执行到这行代码才会加载
    const promise = new Promise((resolve)=>{
        setTimeout(() =>{
            resolve({
                name:'jack',
                time: moment.default( Date.now() - 60*1000 ).fromNow()
            })
        },1000)
    })
    return await promise
}
export default withRouter(A)