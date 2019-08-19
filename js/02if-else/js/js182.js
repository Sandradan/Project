// 提取三个字母的站代码并将其存储在一个新的变量中。
// 查找分号的字符索引号。
// 使用分号字符索引号作为参考点提取人可读的站名，并将其存储在新变量中。
// 连接两个新的变量和一个字符串文字，使最终的字符串。
// 将 result 变量的值更改为等于最终的字符串，而不是 input。
// MAN: Manchester Piccadilly
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here   
    var indexn = input.indexOf(';');
    var spl = input.slice(0,indexn);
    var spl2 = input.slice(indexn + 1);
    var stations_name = spl.slice(0,3);
  var result = stations_name+':'+spl2;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
