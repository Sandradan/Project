var se =new Vue({
    el: '#set',
    data: {
        firstname: 'zhou',
        lastname: 'sandra'
    },
    computed: {
        fullname: {
            get: function(){
                return this.firstname + " " + this.lastname

            },
            set: function(newvalue){
                var nv = newvalue.split(' ');
                this.firstname = nv[0];
                this.lastname = nv[nv.length-1]
        }
    }
}
})