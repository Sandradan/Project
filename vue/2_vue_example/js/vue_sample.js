// var data = {
//     a : 1,
//     b : '',
//     c : null
// }
// var vm = new Vue({
//     el: '#vm1',
//     data: data
// })
// console.log(vm.a) //----------a=1
// console.log(data.a)//----------a=1


// var obj = {
//     foo: 'bar',
//     count: 0,
//     name : '2'   
// }
// var vm2 = new Vue({
//     el: '#vm2',
//     data: obj
// })

var data = {
    a: 1
}
var vm = new Vue({
    el: '#vm3',
    data: data
})
vm.$watch('a', function(newValue, oldValue){
    console.log('111')
})

console.log(vm.$data);
console.log(vm.$el);