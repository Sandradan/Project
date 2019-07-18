// var we =new Vue({
//     el: '#watch_ex',
//     data: {
//         firstname: 'foo',
//         lastname: 'ex',
//         fullname: 'foo ex'
//     },
    
//     watch: {
//         firstname: function(val){
//             this.fullname = val + this.lastname
//         },
//         lastname: function(val){
//             this.fullname = this.firstname + val
//         }

//     }
// })
    var we =new Vue({
        el: '#watch_ex',
        data: {
            firstname: 'foo',
            lastname: 'dg'
        },
        computed: {
            fullname: function(){
                 return this.firstname + " " + this.lastname
            }
        }
    })
