// var app = new Vue({
//     el: '#app',
//     data:{
//         message: 'Hello Vue!'
//     }
// })

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message: '页面加载于' + new Date().toLocaleDateString()
//     }
// })

// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//         seen: true //seen: false,内容就消失了
//     }
// })

// var app4 = new Vue({
//     el: '#app-4',
//     data: {
//         todos: [
//             {text: '学习js'},
//             {text: '学习vue'},
//             {text: '整个牛项目'}
//         ]
//     }
// })

// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//         message: 'hello vue.js!'
//     },
//     methods: {
//         reverseMessage: function(){
//             this.message = this.message.split('').reverse().join('')
//         }
//     }
// })

// var app6 = new Vue({
//     el:'#app-6',
//     data: {
//         message: 'hello Vue!'
//     }
// })

//定义名为todo-item的新组件
Vue.component('todo-item', {
    //todo-item组件现在接受一个‘prop’，类似与一个自定义特性。这个prop名为todo
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList: [
            {id: 0, text: '蔬菜'},
            {id: 1, text: '水果'},
            {id: 2, text: '其他'}
    
        ]
    }
    
})