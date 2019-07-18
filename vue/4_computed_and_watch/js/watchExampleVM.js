var we = new Vue({
    el: '#watch_ex',
    data: {
        question: '',
        answer: 'sorry,i cant understand you'
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function(newQuestion, oldQuestion){
             this.answer = 'waiting for you'
             this.debouncedGetAnswer()

        }
    },
    //`_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出
    created:function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        
    },
    methods: {
        getAnswer: function(){
            if(this.question.indexof('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this  
            axios.get('https://yesno.wtf/api')
            .then(function(response){
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error){
                vm.answer = 'Error! Could not reach the API. ' + error
            })
        }
    }
})
