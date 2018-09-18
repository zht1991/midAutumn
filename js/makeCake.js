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
addForEachToNodeList();

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
    }
}
//鼠标释放时候的函数
function end() {
    flag = false;
}


// 计算元素相对于文档左侧的偏移量
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
// 计算元素相对于文档顶部的偏移量
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

/**
 * 为nodelist添加forEach函数
 */
function addForEachToNodeList () {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this)
            }
        }
    }
}