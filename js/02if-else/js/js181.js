var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
   var lowerNum = input.toLowerCase(); //全部小写
var newNum = lowerNum.slice(0,1);//第一个小写取出来
var newn = newNum.toUpperCase();//第一个小写变大写
var result = lowerNum.replace(newNum,newn);
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
