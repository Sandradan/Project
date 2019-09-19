//与运算符
function Mailbox(props){
    const unreadmessages = props.unreadmessages;
    return(
        <div>
            <h1>hello</h1>
            {unreadmessages.length >0&&
                <h2>you have {unreadmessages.length} unread messages</h2>
            }
        </div>
    )
}
const str = 'fdhgsgh';
ReactDOM.render(
    <Mailbox unreadmessages= {str}/>,
    document.getElementById('root')
)