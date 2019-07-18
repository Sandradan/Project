var ex = new Vue({
    el: '#example',
    data: {
        message: 'keep it up , sandra'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
            //computed方法调用一次后就缓存数据，只要message没变，下次调用直接从缓存中取值
        }
    // }
    // methods: {
    //     reversedMessage: function(){
    //          return this.message.split('').reverse().join('')
    //         //method方法调用一次就重新计算一次数据
    //     }
    }
})