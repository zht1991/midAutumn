//设置html字体大小
var screenW = document.documentElement.clientWidth || document.body.clientWidth;
var html = document.querySelectorAll('html')[0];
html.style.fontSize = screenW / 7.5 + 'px';

// 动态设置html高度
function getViewPort() {
    if (document.compatMode == "BackCompat") { //浏览器嗅探，混杂模式
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
}

function getDocumentPort() {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        };
    } else {
        return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
        }
    }
}
if (getViewPort().height >= getDocumentPort().height) {
    document.getElementsByTagName('html')[0].style.height = '100%';
}

//封装遮罩层和loading
function Mask(opt) {
    this.src = opt.src; //loadig图片的路径，string
    this.opacity = opt.opacity; //遮罩层透明度，number
    this.interval = opt.interval; //loading的动画时间，number
    this.timing = opt.timing || 'ease'; //loading动画的缓冲方式，string
    this.init();
}
Mask.prototype.init = function () {
    this.mask = document.createElement('div');
    var img = document.createElement('img');
    img.src = this.src;
    this.mask.style.cssText = 'display:none;position: fixed;height: 100vh;top:0;left:0;right: 0;bottom: 0;z-index: 100;background: rgba(0,0,0,' + this.opacity + ');';
    img.style.cssText = 'width:1rem;height:1rem;position: absolute;left:50%;top:50%;margin-top: -7%;margin-left: -6%;animation:mask ' + this.interval + ' infinite ' + this.timing + ';-webkit-animation:mask ' + this.interval + ' infinite ' + this.timing + '';
    this.mask.appendChild(img);
    document.body.appendChild(this.mask);
}
Mask.prototype.show = function () {
    this.mask.style.display = 'block';
}
Mask.prototype.hide = function () {
    this.mask.style.display = 'none';
}

function toast(str, callback) {
    var tip = document.createElement('div');
    tip.innerHTML = str;
    tip.style.cssText = 'padding:5% 10%;opacity:0;width:calc(100% - 2rem);font-size:16px;color:#fff;background:rgba(0,0,0,.7);position: fixed;top:30%;left:50%;text-align: center;border-radius: 5px;transform:translate(-50%,20px);transition:all .25s;'
    document.body.appendChild(tip);
    tip.style.opacity = '1';
    var timer1 = setTimeout(function () {
        tip.style.opacity = 0;
        var timer2 = setTimeout(function () {
            document.body.removeChild(tip);
            clearTimeout(timer2)
        }, 400)
        clearTimeout(timer1);
        callback && callback();
    }, 2000);
}