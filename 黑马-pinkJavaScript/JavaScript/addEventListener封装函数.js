// 解决兼容问题

// 兼容处理的规则：先解决大多数的浏览器，在解决特殊浏览器

function addEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持 addEventListener 方法
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);     //第三个参数，默认是 false
    }else if (element.attachEvent){
        element.attachEvent('on' + eventName, fn);
    }else {
        // 相当于 element.onclick=fn;
        element['on' + eventName] = fn;
    }
}

//移除事件
divs = document.querySelectorAll('div');
function fv() {
    alert('hello');
    this.removeEventListener(fv);
}
divs[1].addEventListener('click', fv);  //fv 不需要小括号


// 删除事件兼容性解决方案
function removeEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持 removeEventListener 方法
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);    //第三个参数  默认是false
    } else if (element.detachEvent) {
        element.detachEvent('on' + eventName, fn);    
    } else {
        element['on' + eventName] = null;
    }
}

//e.target 和 this 的区别
// 假设此处有一个 ul>li*3

ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {    //点击li
    console.log(event.target);      //<li></li>
    console.log(this);      //<ul></ul>
});

div.onclick = function(event) {
    e = e || windows.event;
    target = e.target || e.srcElement;
    console.log(target);
}

// 阻止冒泡
if(e && e.stopPropagation) {
    e.stopPropagation();
} else {
    window.event.cancelBubble = true;
}