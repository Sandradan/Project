function fa(num){
    var i = num;
    while(i>1){
        num *=i-1;
        i--;
    }
    return num;
}