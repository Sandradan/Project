

//列表
function Blog(props){
    const siderbar = (
        <ul>
            {props.posts.map((post)=>
                <li key = {post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
    const content = props.posts.map((post)=> 
        <div key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.content}</h3>
        </div>

    )
    return(
        <div>
            {siderbar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id:1, title:'hello', content:'111'},
    {id:2, title:'hi', content:'222'}
]
ReactDOM.render(
    <Blog  posts={posts}/>,
    document.getElementById('root')
)