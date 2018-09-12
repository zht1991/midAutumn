var getCode = document.querySelectorAll('.getCode')[0];
var payBtn = document.querySelectorAll('.pay-btn')[0];
var tel = document.querySelector('#tel');

var mask = new Mask({
    src: '../images/loading.png',
    interval: '700ms',
    opacity: .6,
    timing: 'linear'
});

var waitTime = 60; //获取验证码等待时间
var timer;
var flag = true;
// 获取验证码
function getCheckCode(obj) {
    if (waitTime === 0) {
        obj.removeAttribute('disabled');
        obj.innerHTML = '获取验证码';
        waitTime = 60;
    } else {
        obj.setAttribute('disabled', true);
        obj.innerHTML = "重新发送(" + waitTime + "s)";
        waitTime--;
        timer = setTimeout(function () {
                getCheckCode(obj);
            },
            1000)
    }
}

getCode.addEventListener('click', function (e) {
    // 手机号码正确才开始倒计时
    var telVal = tel.value.trim();
    if (!telVal) {
        if (flag) {
            flag = false;
            toast('手机号码不能为空', function () {
                flag = true
            });
        }
    } else if (!/^1(3|4|5|7|8)\d{9}/.test(telVal)) {
        if (flag) {
            flag = false;
            toast('请正确输入手机号码', function () {
                flag = true
            });
        }
    } else {
        getCheckCode(this);
    }
});

payBtn.addEventListener('click', function () {
    var telVal = tel.value.trim();
    var checkCode = document.querySelector('#checkText');
    if (!telVal) {
        if (flag) {
            flag = false;
            toast('手机号码不能为空', function () {
                flag = true
            });
        }
    } else if (!checkCode) {
        if (flag) {
            flag = false;
            toast('验证码不能为空', function () {
                flag = true
            });
        }
    } else if (/^1(3|4|5|7|8)\d{9}/.test(telVal)) {
        if (!checkText) {
            if (flag) {
                flag = false;
                toast('请输入验证码', function () {
                    flag = true
                });
            }
        } else {
            mask.show();
            //提交数据
            // $.ajax({
            //   type:"post",
            //   url:"",
            //   async:true,
            //   dataType:'json',  
            //   data:'',
            //   //提交成功后可以让mask消失
            //   success:function(data){

            //   }
            // });
        }
    } else {
        if (flag) {
            flag = false;
            toast('请正确输入手机号码', function () {
                flag = true
            });
        }
    }
})