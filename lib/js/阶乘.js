function fa(num){
    var i = num;
    while(i>1){
        num *=i-1;
        i--;
    }
    return num;
}

function fac(num){
    if(num<=1){
        return 1
    }else{
        return num*arguments.callee(num-1);
    }
}