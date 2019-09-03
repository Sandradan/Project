## 单体内置对象
#### 1.global对象
###### 1.uri编码方法
encodeURI()编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成%20；
encodeURIComponent()方法替换所有非字符数字字符。
```
var uri = "http://www.wrox.com/illegal  value.htm#start"
//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri))

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));
```
decodeURI()对encodeURI()解码。
decodeURIComponent()方法把所有非字符数字字符替换为对应的符号。
```
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

//http%3A%2F%2Fwww.wrox.com%2Fillegal  value.htm%23start
alert(decodeURI(uri));

//http://www.wrox.com/illegal  value.htm#start
alert(decodeURIComponent(uri));
```
###### 2.eval()方法
eval只接受一个参数；
```
eval("alert('hi')");
等价于：
alert("hi");
```
eval()执行的代码可以引用在包含环境定义的变量：
```
var msg = "hello world";
eval("alert(msg)"); //"hello world"
```
在eval()调用中定义一个函数，然后再在该调用的外部不代码中引用这个函数：
```
eval("function sayHi() { alert('hi'); }");
sayHi();
```
严格模式下。外部访问不到eval()中创建的任何变量或函数:
```
"use strict";
eval = "hi"; //causes error
```
###### 3.global对象的属性
![9878d99d2bcaa4d4e39527a3744945af.png](en-resource://database/1880:1)

###### 4.window对象
web浏览器都是讲全局对象作为window对象的一部分加以实现的。在全局作用域中声明的所有变量和函数，都成为了window对象的属性。
```
var color = "red";
function sayColor(){
alert(window.color);
}
window.sayColor(); //"red"
```
#### 2.Math对象
###### 1.Math对象的属性
![Image.png](en-resource://database/1882:1)

###### 2.min()和max()方法
```
var max = Math.max(3, 54, 32, 16)
alert(max)   //54
var min = Math.min(11,45,4,36,1)
alert(min)  //1
```
要找到数组中的最大或最小值，可以像下面这样使用apply()方法。
```
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values)
//8
把Math对象作为apply()的第一个参数，从而正确的设置this的值。然后，可以将任何数组作为第二个参数。
```
###### 3.舍入方法
Math.ceil()向上舍入
```
alert(Math.ceil(25.9)); //26
alert(Math.ceil(25.5)); //26
alert(Math.ceil(25.1)); //26
```

Math.round()标准舍入
```
alert(Math.round(25.9)); //26
alert(Math.round(25.5)); //26
alert(Math.round(25.1)); //25
```
Math.floor()向下舍入
```
alert(Math.floor(25.9)); //25
alert(Math.floor(25.5)); //25
alert(Math.floor(25.1)); //25
```
###### 4.random()方法
Math.random()方法返回[0，1)的一个随机数。

**值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)**
如选择一个介于2-10之间的值：
```
var num = Math.floor(Math.random() * 9 + 2);
```
**随机函数selectFrom**
```
function selectFrom(lowerValue, upperValue) {
var choices = upperValue - lowerValue + 1;
return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
alert(num); // 介于 2 和 10 之间（包括 2 和 10）的一个数值
```
**在colors中随机取出一个颜色：**
```
var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length-1)];
alert(color); // 可能是数组中包含的任何一个字符串
```
###### 5.其他方法
![7b62c424b1aae0a4e166a4bf3435f310.png](en-resource://database/1884:1)

