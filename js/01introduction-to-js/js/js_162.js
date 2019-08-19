var firstNum = document.getElementById('first-number');
var secondNum = document.getElementById('second-number');
var result = document.getElementById('result');
var add = document.getElementById('add-btn');
var minus =document.getElementById('minus-btn');
var times =document.getElementById('times-btn');
var divide =document.getElementById('divide-btn');
result.innerHTML = "运算结果：<span id='text'></span>";

add.onclick = function(){
    if(firstNum.value === ''||secondNum.value === ''){
        alert('输入框不能为空');
        return false;
    }else if(isNaN(firstNum.value)|| isNaN(secondNum.value)){
        alert('请输入数字');
        return false;
    }else if(firstNum.value.length>3||secondNum.value.length>3){
        alert("长度不能超过3位");
        return false;
    }
    else{
    document.getElementById('text').innerHTML =Number(firstNum.value) +Number(secondNum.value);}
}
minus.onclick = function(){
    
    if(firstNum.value === ''||secondNum.value === ''){
        alert('输入框不能为空');
        return false;

    }else if(isNaN(firstNum.value)|| isNaN(secondNum.value)){
        alert('请输入数字');
        return false;

    }else if(firstNum.value.length>3||secondNum.value.length>3){
        alert("长度不能超过3位");
        return false;

    }
    else{
    document.getElementById('text').innerHTML =Number(firstNum.value) -Number(secondNum.value);}
}
times.onclick = function(){
    
    if(firstNum.value === ''||secondNum.value === ''){
        alert('输入框不能为空');
        return false;

    }else if(isNaN(firstNum.value)|| isNaN(secondNum.value)){
        alert('请输入数字');
        return false;

    }else if(firstNum.value.length>3||secondNum.value.length>3){
        alert("长度不能超过3位");
        return false;

    }
    else{
    document.getElementById('text').innerHTML =Number(firstNum.value) *Number(secondNum.value);}

}
divide.onclick = function(){
    if(firstNum.value === ''||secondNum.value === ''){
        alert('输入框不能为空');
        return false;

    }else if(isNaN(firstNum.value)|| isNaN(secondNum.value)){
        alert('请输入数字');
        return false;

    }else if(secondNum.value === '0'){
       alert('除数不能为0');
       return false;

    }else if(firstNum.value.length>3||secondNum.value.length>3){
        alert("长度不能超过3位");
        return false;

    }
    else{
    document.getElementById('text').innerHTML =Number(firstNum.value) /+Number(secondNum.value);}
} 