var cakeMold = document.querySelector('#cake-mold');
var cakeLeft = getElementLeft(cakeMold);
var cakeTop = getElementTop(cakeMold);
var cakeWidth = cakeMold.offsetWidth;
var cakeHeight = cakeMold.offsetHeight;
var moldCenterPosX = cakeLeft + cakeWidth;
var moldCenterPosY = cakeHeight + cakeTop;
var productBox = document.querySelectorAll('.product-operation')[0];
var stuffings = productBox.querySelectorAll('.stuffing');
var flag = false;
var cur = {
    x: 0,
    y: 0
}

var nx=0, ny=0, dx=0, dy=0, x=0, y=0;
function down() {
    flag = true;
    var touch = event.touches[0];
    cur.x = touch.clientX;
    cur.y = touch.clientY;
}
function move(ele) {
    if (flag) {
        var touch = event.touches[0];
        nx = touch.clientX - cur.x;
        ny = touch.clientY - cur.y;
        x = dx + nx;
        y = dy + ny;
        ele.style.left = x + "px";
        ele.style.top = y + "px";
        // //阻止页面的滑动默认事件
        // document.addEventListener("touchmove", function () {
        //     event.preventDefault();
        // }, { passive:false });
    }
}
//鼠标释放时候的函数
function end() {
    flag = false;
}

function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while(current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}


stuffings.forEach(function(val,index){
    val.addEventListener('touchstart',function(e){
        e.preventDefault();
        down();
    },false);
    val.addEventListener('touchmove',function(e){
        e.preventDefault();
        move(this);
    },false);
    val.addEventListener('touchend',function(e){

    },false);
})

