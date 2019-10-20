import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import {Card} from 'antd'
import {
    DragSource,
    DropTarget,
} from 'react-dnd'
import flow from 'lodash/flow'

const Types = {
    CARD: 'CARD'
};

//DragSource相关设定
const CardSource = {//设定DragSource的拖拽事件方法
    beginDrag(props, monitor, component){
        return {
            index: props.index
        }
    },
    // endDrag(props, monitor, component){
    //     //拖拽结束时的事件，可选
    // },
    // canDrag(props, monitor){
    //     //是否可以拖拽的事件，可选
    //     return true
    // },
    // isDragging(props, monitor){
    //     //拖拽时触发的事件，可选
    // }
}

//DropTarget相关设定
const CardTarget = {
    drop(props, monitor, component){
        //组件放下时触发的事件
    },
    canDrop(props, monitor){
        //组件可以被放置时放置时触发的事件，可选
    },
    hover(props,monitor,component){
        //组件在target上方时触发的事件，可选
        if(!component) return null
        const dragIndex = monitor.getItem().index //拖拽目标的Index
        const hoverIndex = props.index //目标Index
        if(dragIndex === props.lastIndex || hoverIndex === props.lastIndex) return null
        if(dragIndex === hoverIndex) return null //如果拖拽目标和目标ID相同不发生变化
        const hoverBoundingRect =(findDOMNode(component)).getBoundingClientRect() //获取卡片的边框矩形
        const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2 //获取x轴中点
        const clientOffset = monitor.getClientOffset() //获取拖拽目标偏移量
        const hoverClientX = (clientOffset).x -hoverBoundingRect.left
        if(dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            return null
        }
        if(dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            return null
        }
        props.onDND(dragIndex, hoverIndex)
        monitor.getItem().index = hoverIndex
    }
}
function collect1(connect, monitor){
    //同DragSource的collect函数
    return{
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(), //source是否在Target上方
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(), //能否被放置
        itemType: monitor.getItemType()//获取拖拽组件type
    }
}

function collect(connect, monitor){
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


class CardItem extends Component{
    render(){
        const {isDragging, connectDragSource, connectDropTarget} = this.props;
        let opacity = isDragging ? 0.1 : 1;
        
        return connectDragSource( //使用DragSource和 DropTarget
        connectDropTarget(<div>
                <Card
                    title = {this.props.title}
                    style = {{width: 300, opacity}}
                    >
                    <p>{this.props.content}</p>
                </Card>
            </div>)
        )
    }
}
// let flow = require('lodash.flow');
export default flow(
    DragSource(Types.CARD, CardSource, collect),
    DropTarget(Types.CARD, CardTarget, collect1)
)(CardItem)