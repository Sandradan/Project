window.onload = function(){
var changeStyle_1 = document.getElementById("style01");
var changeStyle_2 = document.getElementById("style02");
var changeStyle_3 = document.getElementById("style03");
var css = document.getElementById("cssfile");

changeStyle_1.onclick = function(){
    css.href = "../css/resume_new1.css";
    changeStyle_1.style.backgroundColor = "#BEBEBE";
    changeStyle_2.style.backgroundColor = "";
    changeStyle_3.style.backgroundColor = "";
    document.querySelector('#current').innerHTML = 'style01'
}
changeStyle_2.onclick = function(){
    css.href = "../css/resume_new2.css";
    changeStyle_1.style.backgroundColor = "";
    changeStyle_2.style.backgroundColor = "#BEBEBE";
    changeStyle_3.style.backgroundColor = "";
    document.querySelector('#current').innerHTML = 'style02'

}
changeStyle_3.onclick = function() {
    css.href = "../css/resume_new3.css";
    changeStyle_1.style.backgroundColor = "";
    changeStyle_2.style.backgroundColor = "";
    changeStyle_3.style.backgroundColor = "#BEBEBE";
    document.querySelector('#current').innerHTML = 'style03'
}
}
