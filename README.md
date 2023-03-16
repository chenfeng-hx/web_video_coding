# flex布局学习

## 热身—了解flex布局

【【前端教程】我是flex布局，6分钟彻底懂我、了解我？】 https://www.bilibili.com/video/BV1x14y1Y7Rs/?share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304

【【前端教程】我是flex，你真的懂我，了解我吗？】 https://www.bilibili.com/video/BV1it4y1A7vS/?share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304



## 资料视频

【千锋教育flex弹性布局基础入门和案例项目实战精讲教程】 https://www.bilibili.com/video/BV1eV4y1P7Y6/?p=2&share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304



## flex布局的含义

1. **flex布局含义:**
	1. flex布局, 也被称之为弹性盒子布局, 是CSS3里面新增的一种布局方式, 通过使用flex布局,我们可以让布局更加便捷高效.
2. **如何触发弹性盒子:**
	1. 给父元素添加display属性, 并且将取值设置成:flex
3. **触发弹性盒子有哪些特点?**
	1. 子元素默认横向显示
	2. 子元素会默认变成块级元素, 能设置宽度高度
	3. 如果只有一个子元素的话, 则给子元素添加margin:auto的时候，会让子元素直接实现水平垂直居中显示





## flex布局中的基础概念

Flex容器：采用 Flex 布局的元素的父元素

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316123737162.png" alt="image-20230316123737162" style="zoom: 50%;" />

Flex项目：采用 Flex 布局容器里面的子元素

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316123813657.png" alt="image-20230316123813657" style="zoom: 50%;" />

横轴(水平轴): 水平方向轴线

纵轴(垂直轴): 垂直方向轴线

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316124052540.png" alt="image-20230316124052540" style="zoom:50%;" />

主轴:  触发弹性盒子之后, 项目的排列方向

侧轴(交叉轴):  触发弹性盒子之后, 与主轴对立的方向

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316124150486.png" alt="image-20230316124150486" style="zoom:50%;" />

> 注意:   触发弹性盒子之后, 项目默认沿主轴排列。





## 如何触发弹性盒子

1. 给父元素添加display属性，取值flex
2. 父元素触发弹性盒子之后,子元素默认横向显示
	1. ==父元素触发弹性盒子之后,子元素会横向显示,类似于浮动,不是浮动,与浮动没有关系==
	2. 不会影响孙子辈份的元素
	3. 触发弹性盒子之后,会改变子元素的元素类型,会让子元素变成块级元素
3. ==触发弹性盒子之后,如果只有一个子元素,给子元素添加margin:auto的时候，子元素会位于水平垂直居中位置显示==

<img src="C:\Users\尘封\AppData\Roaming\Typora\typora-user-images\image-20230316124954946.png" alt="image-20230316124954946" style="zoom:25%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin:0;padding:0
        }
        .bigbox{
            width:500px;
            height:500px;
            border:10px solid gray;
            margin:100px auto;
            /* 弹性盒子 */
            display: flex;
        }
        .bigbox>div,.bigbox>b{
            width:50px;
            height:50px;
            border:2px dashed red;
            /* 属性 */
            margin:auto
        }
    </style>
</head>
<body>
    <!-- 父元素 -->
    <div class="bigbox">
        <!-- 子元素 -->
        <!-- <div>1</div>
        <div>2</div>
        <div>3</div> -->
        <b>1</b>
        <!-- <b>2</b>
        <b>3</b> -->
    </div>
</body>
</html>
```





## flex布局中的容器属性

默认的情况下项目都是纵向排列的，原因：项目是块级元素,块级本质就是纵向排列

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125226684.png" alt="image-20230316125226684" style="zoom:50%;" />

给容器(父元素)触发弹性盒子—— display:flex；触发弹性盒子之后: 项目默认横向显示, 主轴在横向,交叉轴在纵向

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

### 修改主轴方向:

==flex-direction属性触发:==        

1. 取值: row的时候, 默认值就是横向

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

2. 取值: row-reverse的时候, 主轴在横向,项目是反方向排列的

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125613165.png" alt="image-20230316125613165" style="zoom:50%;" />

3. 取值: column的时候, 主轴在纵向, 项目正向显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125642765.png" alt="image-20230316125642765" style="zoom:50%;" />

4. 取值: column-reverse的时候, 主轴在纵向, 项目反方向显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125722327.png" alt="image-20230316125722327" style="zoom:50%;" />

	

### 主轴对其方式

==justify-content来触发==

1. 取值为: flex-start的时候, 代表的是主轴的开始位置显示, 默认值

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

2. 取值为: flex-end的时候, 代表的是主轴的结束位置显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130058216.png" alt="image-20230316130058216" style="zoom:50%;" />

3. 取值为: center的时候, 代表的是主轴的居中位置显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130132653.png" alt="image-20230316130132653" style="zoom:50%;" />

4. 取值为: space-between的时候, 代表的是主轴的两端对齐

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130158600.png" alt="image-20230316130158600" style="zoom:50%;" />

5. 取值为: space-around的时候, 代表的是主轴的两端环绕

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130226231.png" alt="image-20230316130226231" style="zoom:50%;" />

6. 取值为: space-evenly的时候, 代表的是主轴的间距均分

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130302882.png" alt="image-20230316130302882" style="zoom:50%;" />



### 交叉轴对其方式

==属性: align-items触发：==

1. 取值: flex-start的时候, 位于交叉轴的开始位置显示,也是一个默认值

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

2. 取值: flex-end的时候, 位于交叉轴的结束位置显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130459099.png" alt="image-20230316130459099" style="zoom:50%;" />

3. 取值: center的时候, 位于交叉轴的中间位置显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130532418.png" alt="image-20230316130532418" style="zoom:50%;" />

4. 取值: baseline的时候, 位于交叉轴的基线位置显示,效果与flex-start一致,实际开发的时候几乎不会使用(了解即可)

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

5. 取值: stretch的时候, 效果为拉伸效果,但是项目前提是没有高度的,或者是高度是自适应的

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130624338.png" alt="image-20230316130624338" style="zoom:50%;" />



### 折行属性

没有触发弹性盒子之前, 子元素过多的时候, 默认会产生溢出效果, 元素有自己的宽度和高度

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130702644.png" alt="image-20230316130702644" style="zoom:50%;" />

当给父元素触发完弹性盒子之后,display: flex。子元素会横向显示, 没有折行, 并且原有宽度被挤压了

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130751615.png" alt="image-20230316130751615" style="zoom:50%;" />



==属性: flex-wrap触发:让项目折行的效果==

1. 取值为:nowrap的时候,就是默认值不折行

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130751615.png" alt="image-20230316130751615" style="zoom:50%;" />

2. 取值为:wrap的时候, 代表的是折行显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316130923539.png" alt="image-20230316130923539" style="zoom:50%;" />

==问题：==为什么折行之后, 右侧会有留白空间呢? 为什么行与行之间有这么大的间距?

1. 原因点: 因为右侧区域留白放不下一个项目了只能折行显示
2. 原因点: 因为项目设置了固定的高度, 如果没有高度的话,高度默认是拉伸的效果, 高度均分在每一行中





### 多行侧轴对齐——设置多行之间的间距

==使用属性: align-content完成==：

1. 取值为: flex-start的时候, 会实现在侧轴的开始位置显示, 没有行间距

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131208151.png" alt="image-20230316131208151" style="zoom:50%;" />

2. 取值为: flex-end的时候, 会实现在侧轴的结束位置显示, 没有行间距

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131234546.png" alt="image-20230316131234546" style="zoom:50%;" />

3. 取值为: center的时候, 会实现在侧轴的居中位置显示, 没有行间距

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131300964.png" alt="image-20230316131300964" style="zoom:50%;" />

4. 取值为: space-between的时候, 会实现在侧周的两端对其位置显示

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131348058.png" alt="image-20230316131348058" style="zoom:50%;" />

5. 取值为: space-around的时候, 会实现在侧轴的行间距环绕

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131412210.png" alt="image-20230316131412210" style="zoom:50%;" />

6. 取值为: space-evenly的时候, 会实现侧轴行间距均分

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131435484.png" alt="image-20230316131435484" style="zoom:50%;" />





## flex布局中的项目属性

==项目中的属性, 主要是对项目(子元素)的修饰==



### 单独侧轴对齐

项目中的单独对其方式, 可以让不同的元素位于不同的位置显示：==对子项目进行分别设置==

==使用属性: align-self —— 分别为每一个项目添加对应的取值：==

1. align-self: flex-start; 侧轴开始位置

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131939441.png" alt="image-20230316131939441" style="zoom:50%;" />

2. align-self: flex-end; 侧轴的结束位置

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316132004794.png" style="zoom:50%;" />

3. align-self:  center; 侧轴的居中位置

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316134821376.png" alt="image-20230316134821376" style="zoom:50%;" />

4. align-self:  baseline; 侧轴的基线位置

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316134844763.png" alt="image-20230316134844763" style="zoom:50%;" />

5.  align-self: stretch; 侧轴默认拉伸

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316134911311.png" alt="image-20230316134911311" style="zoom:50%;" />



### 项目调整显示顺序

==使用属性: order属性, 取值就是为数值：==

1. 默认order取值为: auto;可以理解成0;

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316131939441.png" alt="image-20230316131939441" style="zoom:50%;" />

	元素添加, order:5; 位于最后显示         元素添加, order:-1; 位于最前面显示

2. ==综合得出结论: order取值可以为正数,可以为负数, 取值越大越靠后面==





### 剩余空间的所有

==占剩余控件的所有: flex:1来实现==

1. 主轴在横向的时候

	1. 如果项目不设置高度的话, 默认高度是拉伸的,  

	2. 项目添加flex:1实现的是占剩余宽度的所有

		1. 其中一个项目添加 flex:1

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316135337677.png" alt="image-20230316135337677" style="zoom:50%;" />

		2. 所有项目添加 flex:1

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316135410458.png" alt="image-20230316135410458" style="zoom: 50%;" />

		3. 项目原图：

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316125324620.png" alt="image-20230316125324620" style="zoom:50%;" />

2. 主轴在纵向的时候    

	1.  如果项目不设置宽度的话, 默认宽度是拉伸的,     

	2. 项目添加flex:1实现的是占剩余高度的所有

		1. 其中一个项目添加 flex:1

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316135448625.png" alt="image-20230316135448625" style="zoom:50%;" />

		2. 所有项目添加 flex:1

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316135512384.png" alt="image-20230316135512384" style="zoom: 50%;" />

		3. 项目原图：

			<img src="https://gitee.com/chenfenghx/typora-images/raw/master/CSS/flex/image-20230316135538941.png" alt="image-20230316135538941" style="zoom:50%;" />

​	

### flex:1 详解( •̀ ω •́ )✧

1. flex属性 是一个复合属性     是由:  flex-grow、flex-shrink、flex-basis三个属性的缩写。
2. flex-grow：定义项目的的放大比例，；默认为0，即 即使存在剩余空间，也不会放大； 所有项目的flex-grow为1：等分剩余空间（自动放大占位）；    flex-grow为n的项目，占据的空间（放大的比例）是flex-grow为1的n倍。
3. flex-basis：定义在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据此属性计算主轴是否有多余空间。相当于设置初始值, 默认值为auto
4. flex-shrink: 定义项目的缩小比例，取值为0/1，主要用于:制作移动端横向滚动区域



## flex案例分析

==margin:auto 对实现原理==

```
justify-content：center
align-items：center
```

