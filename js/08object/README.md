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
![9855b8176c4a9c8043a195715a8494ba.png](en-resource://database/1882:1)

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





## 理解对象
### 一、属性类型
###### 1.创建对象的两种方式：
**1.创建一个object实例**
```
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function(){
alert(this.name);
};
```
**2.对象字面量创建方法**
```
var person = {
name: "Nicholas",
age: 29,
job: "Software Engineer",
sayName: function(){
alert(this.name);
}
};
```

###### 2.数据属性：
Configurble、Enumerable、Writable、Value
把configurable设置为false，表示不能从对象中删除属性。可以多次调用`Object.defineProperty()`方法修改同一个属性，但在把configurable设置为false之后就有限制了。
```
var person = {};
Object.defineProperty(person, "name", {
configurable: false,
value: "Nicholas"
});
//抛出错误
Object.defineProperty(person, "name", {
configurable: true,
value: "Nicholas"
});
```
###### 3.访问器属性
包含setter和getter函数。四个特性:Configurble、Enumerable、get、set

访问器属性不能直接定义，必须使用Object.defineProperty()来定义：
```
var book = {
_year: 2004,
edition: 1
};
Object.defineProperty(book, "year", {
get: function(){
return this._year;
},
set: function(newValue){
if (newValue > 2004) {
this._year = newValue;
this.edition += newValue - 2004;
}
}
});
book.year = 2005;
alert(book.edition); //2
```
以上代码创建了一个`book`对象,并给它定义两个默认的属性:year和 edition。_year前面
的下划线是一种常用的记号,用于表示只能通过对象方法访间的属性。而访问器属性year则包含一个getter函数和一个setter函数。 getter函数返回_year的值, setter函数通过计算来确定正确的版本。因此,把year属性修改为2005会导致_year变成2005,而 edition变为2。这是使用访间器属性的常见方式,即设置一个属性的值会导致其他属性发生变化。


### 二、定义多个属性

Object.defineProperties() 方法
```

var book = {};
Object.defineProperties(book, {
_year: {
    value: 2004
},
edition: {
    value: 1
},
year: {
        get: function () {
            return this._year;
},
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
```
以上定义了两个数据属性（_year和edition）和一个访问器属性（year）。
### 三、读取属性的特性

`Object.getOwnPropertyDescriptor()`方法
```
var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value); //2004
alert(descriptor.configurable); //false
alert(typeof descriptor.get); //"undefined"
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value); //undefined
alert(descriptor.enumerable); //false
alert(typeof descriptor.get); //"function"
```
对于数据属性_year，value等于最初的值，configurable是false，而get等于undefined。
对于访问器属性year，value等于undefined，enumerable是false，而get是一个指向getter函数的指针。
## 创建对象
### 1.工厂模式
```
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
    alert(this.name);
    };
    return o;
}
var person1 = createPerson('sandra' ,23, 'engineer');
var person2 = createPerson('Fref', 28, 'Doctor')
```
### 2.构造函数模式
```
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name)
    }
}
var person1 = new Person('sandra' ,23, 'engineer');
var person2 = new Person('Fref', 28, 'Doctor')
alert(person1.sayName == person2.sayName) //false
```
两种模式的不同处：

* 没有显示的创建对象
* 直接将属性和方法赋给了this对象  
* 没有return语句

创建`Person`的新实例必须使用`new`操作符。会经过以下几个步骤：

1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（this只想这个新对象）
3. 执行构造函数的代码
4. 返回新对象


**构造函数与普通函数的区别
1.this指向：构造函数的this指向创建的对象实例上；普通函数:函数的调用者
2.调用方式：构造函数new；**
```
// 当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); //"Nicholas"

// 作普通函数调用
Person("Greg", 27, "Doctor"); // 添加? window
window.sayName(); //"Greg"

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //"Kristen"
```
### 3.原型模式
使用原型对象可以让所有对象实例共享它所包含的属性和方法。
```
function Person(){
}
Pereson.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    alert(this.name)
};
var person1 = new Person();
person1.sayName()     //'Nicholas'
var person2 = new Person();
person2.sayName()   //'Nicholas'
alert(person1.sayName == person2.sayName) //true
```
