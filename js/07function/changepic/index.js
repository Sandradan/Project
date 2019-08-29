var thumbar = document.querySelector('.thumb-bar');
var bigimg = document.querySelector('.displayed-img');
var btn = document.querySelector('button');
var overlay =document.querySelector('.overlay');
for(var i = 0;i< 5;i++){
    var pics = document.createElement('img');
    pics.setAttribute('src','images/pic'+Number(i+1)+'.jpg');
    thumbar.appendChild(pics);
    pics.onclick = function(e){
        var imgSrc = e.target.getAttribute('src');
        bigimg.setAttribute('src',imgSrc);
    }
}
btn.addEventListener('click',function(){
    var btnClass = btn.getAttribute('class');
    if(btnClass == 'dark'){
        btn.setAttribute('class','light');
        btn.innerHTML = '变亮';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    if(btnClass == 'light'){
        btn.setAttribute('class','dark');
        btn.innerHTML = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

})
