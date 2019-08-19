//  1.在 // number 1 注释下面是一些字符串，每个字符串包含一个产品名称和一个冒号分隔的价格。 
//  products 的数组中。
//  2.与 // number 2 注释同一行的是 for 循环的开头。 在这行中，我们目前有 i <= 0，这是一个条件测试，导致 for循环 
//  i 不再小于或等于0”时停止，而 i 从0开始。 我们希望您使用条件测试来替换它，当 i 不再小于 products 数组的长度时，该条件测试会停止循环。
//  3.就在 // number 3 注释的下方，我们希望您编写一行代码，将当前数组项目（名称：价格）分成两个独立的项目，一个只包含该名称，一个只包含该价格。
//  如果您不确定如何执行此操作，请参阅有用的字符串方法文章以获得一些帮助，甚至更好的看看本文中的转换字符串和数组部分。
//  4.作为上述代码行的一部分，您还需要将价格从字符串转换为数字。 如果你不记得如何做，请查看第一个字符串文章。
//  5.有一个名为 total 的变量被创建，并在代码的顶部赋值为 0。 在循环内（在 // number 4 注释下面），我们希望您添加一行，
// 将当前项目价格添加到循环中的迭代变量，以便在代码结尾处将正确的总数打印到发票上。 您可能需要一个赋值运算符来执行此操作。
//  6.我们希望您改变 // number 5 注释的行，以便使  itemText 变量等于“当前项目名称 - $ 当前项目价格”，例如“Shoes - $ 23.99”，
// 以此将每个项目的正确信息都印在发票上。 这只是简单的字符串连接，您应该对此很熟悉。

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
];

for (var i = 0; i < products.length; i++) { // number 2
    // number 3
    var input = products[i];
    var name = input.slice(0, input.indexOf(':'));
    var price = Number(input.slice(input.indexOf(':')+1));
    // number 4
    total += price;
    // number 5
    // var itemText ;
    itemText = name+'-$'+price; 

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);