window.onload = function() {
    var btn = document.querySelector('.btn'); //滑块
    var box = document.querySelector('.box'); //盒子
    var bg = document.querySelector('.bg'); //背景
    var text = document.querySelector('.text');
    var flag = false;
    //事件 onmousedown onmousemove
    btn.onmousedown = function(e) {
            var btnX = e.clientX; //按下后与x轴的距离
            btn.onmousemove = function(e) { //event事件的状态
                var MoveX = e.clientX - btnX;

                //移动范围
                if (MoveX > 0) {
                    this.style.left = MoveX + 'px';
                    bg.style.width = MoveX + 'px';
                    if (MoveX >= (box.offsetWidth - btn.offsetWidth)) {
                        //验证成功
                        flag = true;
                        text.innerText = '验证成功';
                        text.style.color = 'white';
                        //事件清除
                        btn.onmousedown = null;
                        btn.onmousemove = null;
                    }
                }

            }

        } //松开事件
    btn.onmouseup = function() {
        //事件清除
        btn.onmousemove = null;
        //判断是否验证成功
        if (flag) return;
        this.style.left = 0;
        bg.style.width = 0;
    }
}