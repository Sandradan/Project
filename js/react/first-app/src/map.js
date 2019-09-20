

//map遍历数组
function ListItem(props){
    return(
            <li>{props.value}</li>
    )
}
function NumberLists(props){
    const numbers =props.numbers;
    const double = numbers.map((number,index)=>(
        <ListItem value = {number*2}
        key={index}/>
    ))
    return(
        <ul>{double}</ul>
    )
}
const numbers = [1,2,3,4,5]
ReactDOM.render(
    <NumberLists numbers={numbers}/>,
    document.getElementById('root')
)