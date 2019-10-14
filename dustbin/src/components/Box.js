import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

import ItemTypes from '../types'
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

const boxSource = {
    //开始拖拽时触发当前函数
    beginDrag(props) {
        //返回的对象可以在monitor.getItem()中获取
        return {
            id: props.id
        }
    },
    //拖拽结束时触发当前函数
    endDrag(props, monitor){
        //当前拖拽的item组件
        const item = monitor.getItem()

        //拖拽元素放下时，drop结果
        const dropResult = monitor.getDropReault()

        //如果drop结果存在，就弹出alert提示
        if (dropResult){
            alert(`you dropped ${item.id} into ${dropResult.id}!`)
        }

    }
}
@DragSource{
    
}