window.onload = function(){
var tabs = document.querySelectorAll('.info-box li a');
var texts = document.querySelectorAll('.info-box article');
for(i = 0; i < tabs.length; i ++){
   var tab = tabs[i];
   setTabHandler(tab, i);
}
function setTabHandler(tab, tabPos){
    tab.onclick = function(){
        for(i = 0; i < tabs.length; i++){
          if(tabs[i].getAttribute('class')){
              tabs[i].removeAttribute('class');
          }
        }
        tab.setAttribute('class', 'active');
        for(i = 0;i < texts.length; i++){
            if(texts[i].getAttribute('class')){
                texts[i].removeAttribute('class');
        }
        }
        texts[tabPos].setAttribute('class', 'active-panel')
    }
}

}