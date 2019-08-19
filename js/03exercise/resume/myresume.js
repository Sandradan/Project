var text = document.querySelector('.flag');
var name = document.querySelector('.name');
setInterval(function () {
        fnDate();
}, 1000);

function fnDate() {
       
        var nowtime = new Date();
        if ( nowtime.getHours() > 5&& nowtime.getHours() <12) {
                text.innerHTML="<img src='上午.png'> good morning,Sandra";
        } else if (nowtime.getHours()< 18) {
                text.innerHTML="<img src='下午.png'> good afternoon,Sandra";
        } else {
                text.innerHTML="<img src='晚上.png'> good evening,Sandra";
        }
}