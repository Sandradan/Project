var st = new Vue({
    el: '#obj',
    // data: {
    //     classObject:{
    //         active: true,
    //         'text-danger': true
    //     }
    // }
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function(){
            return {
                active: this.isActive && this.error,
                'text-danger': this.error && this.error.type == 'fatal'
            }
        }
    }
})