var vm = new Vue({
    el:'#vm1',
    data: {a: 1},
    created: function(){
    console.log('a is:' + this.a)
}
})
