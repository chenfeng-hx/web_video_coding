window.addEventListener("load", function () {
    // 位左右箭头添加事件：鼠标离开图片消失，经过图片出现
    var lt = document.querySelector("#lt");
    var gt = document.querySelector("#gt");
    var box = document.querySelector(".box");
    var boxWidth = box.offsetWidth;

    box.addEventListener("mouseenter", function () {
        lt.style.display = "block";
        gt.style.display = "block";
        clearInterval(timer);
        timer = null;
    });
    box.addEventListener("mouseleave", function () {
        lt.style.display = "none";
        gt.style.display = "none";
        timer = setInterval(function () {
            gt.click();
        }, 2000);
    });

    // 动态生成小圆点，并绑定事件，点击之后改变颜色
    var imgs_count = box.querySelector("ul");
    // console.log(imgs_count.children.length);
    var ol = box.querySelector(".circle");
    var first = imgs_count.children[0].cloneNode(true);   // deepcopy 第一张图片
    imgs_count.appendChild(first);
    for (var i = 0; i < imgs_count.children.length - 1; i++) {
        li = document.createElement("li");
        //记录当前的 索引号，采用自定义属性方式
        li.setAttribute("index", i);

        ol.appendChild(li);
        li.addEventListener("click", function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].id = "";
            }
            this.id = "org_color";

            //点击圆点img的ul进行动画移动
            var index = this.getAttribute("index");
            animate(imgs_count, -index * boxWidth);
            count = index;
        });
    }
    //初始化一个圆点为选中状态
    ol.children[0].id = "org_color";


    // 添加箭头功能，点击箭头，图片做动画，小圆点移动

    //节流阀(可以共用)
    var flag = true;

    var count = 0;
    gt.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (count == imgs_count.children.length - 1) {
                count = 0;
                imgs_count.style.left = 0;
            }
            count++;
            animate(imgs_count, -count * boxWidth, 30, function () {
                flag = true;
            });
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].id = "";
            }
            if (count == imgs_count.children.length - 1) {
                ol.children[0].id = "org_color";
            } else {
                ol.children[count].id = "org_color";
            }

        }
    });

    lt.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (count == 0) {
                count = imgs_count.children.length - 1;
                imgs_count.style.left = - count * boxWidth + 'px';
            }
            count--;
            animate(imgs_count, -count * boxWidth, 30, function () {
                flag = true;
            });
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].id = "";
            }
            if (count == 0) {
                ol.children[0].id = "org_color";
            } else {
                ol.children[count].id = "org_color";
            }

        }
    });

    //自动调用 右键 点击事件
    var timer = setInterval(function () {
        gt.click();
    }, 2000);
});
