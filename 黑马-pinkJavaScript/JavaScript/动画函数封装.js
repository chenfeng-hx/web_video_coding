function animate(obj, target, timeout=30, callback) {
    // 先清除以前的定时器, 只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft >= target && target > 0) {
            // 停止动画, 本质是停止定时器
            clearInterval(obj.timer);
        }
        // 改变距离(缓动动画)
        // distance = (target - obj.offsetLeft) / 10;
        // obj.style.left = obj.offsetLeft + distance + 'px';
        // Math.ceil 向上取整   避免出现500px 只走到 496.4px，出现小数问题

        // distance = Math.ceil((target - obj.offsetLeft) / 10);

        // 来回折返问题
        step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        obj.style.left = obj.offsetLeft + step + 'px';

        // if (callback) {
        //     callback();
        // };    

        callback && callback();
    }, timeout);

};