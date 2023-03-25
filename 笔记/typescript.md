# TypeScript

## 课程

【千锋教育前端TypeScript入门视频教程（陆神顶配版TS入门教程）】 https://www.bilibili.com/video/BV1H44y157gq/?p=8&share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304

【尚硅谷TypeScript教程（李立超老师TS新课）】 https://www.bilibili.com/video/BV1Xy4y1v7S2/?p=22&share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304



# TS入门篇

## 安装

`npm i typescript -g`



## 使用

控制台使用 `tsc xxx(TS文件名)` 后，会生成一个相应的同名JS文件，运行该JS文件后会得到相应的结果。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230316220603120.png" alt="image-20230316220603120" style="zoom: 33%;" />

## 相关插件（vs）

typescript locale





## 问题

1. 解决 TS 和 JS 冲突问题(报错：函数等重复调用等 ==在vscode 中有问题，ws中暂时没看到==)
	1. 解决方案：tsc –(双划线) init   # 生成配置文件 tsconfig.js
2. 自动编译（每次编写完 TS 文件之后都需要再重新执行 tsc 命令编译生成相应的 JS 才能执行得到结果）
	1. tsc –watch
3. 发出错误
	1. tsc -noEmitOnError xxx.ts
	2. 在出现错误时不再进行编译



## 类型定义

1. 显示类型定义

	```typescript
	// 明确的给出参数所对应的类型
	function greet(person: string, date: Date) {  // 在编译为 JS 文件后，不会出现类型的显示，即会在编译过程中删去一些代码内容
		console.log(`Hello ${person}, today is ${date.toString()}!`);
	}
	```

2. 隐式类型定义

	```typescript
	// js 会对变量的类型进行判断
	let msg = 'hello';
	msg = 100;    // 报错，msg应该是一个 String 类型的值
	```




## 对 tsconfig.js 的修改

1. 修改 target：改变编译后生成 JS 文件中代码的语法，如将 target:ES2016 修改为 ES5 (实现代码的优雅降级)（降级编译）
2. 严格模式：strict:true，改为 false 则不会进行严格的类型检查，而是退回为最宽松的 any



# 基本类型

1. string：字符串（基元类型）

2. number： 数字类型（基元类型）
3. Boolean：布尔值（基元类型）

```typescript
let str: string = 'hello typescript'
let num: number = 100
let bool: boolean = true
```



4. array：数组类型—— 1. type[]    2. Array\<type>

```typescript
let arr: number[] = [1, 2, 3]
// arr = ['a']   // 报错,因为将 string 类型的值给了 number 数组
let arr2: Array<number> = [1, 2, 3]
arr2 = ['a']     // 报错,因为将 string 类型的值给了 number 数组
```



5. any：不希望某个特定值导致类型检查错误，即将某个变量赋给 any 类型后，所有对其的操作都不会报错，但是不推荐，因为编译后的 JS 代码会报错

```typescript
let obj: any = {
  x: 0
}

obj.foo()   // ts不报错，js报错，因为不存在 foo()
obj()
obj.bar = 100
obj = 'hello'
const n: number = obj
```



## 变量上的类型注释

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317090006605.png" alt="image-20230317090006605" style="zoom:33%;" />



## 函数

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317090207711.png" alt="image-20230317090207711" style="zoom:33%;" />



## 对象

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317091247912.png" alt="image-20230317091247912" style="zoom:33%;" />

```typescript
function printName(obj: { first: string, last?: string }) {    // ?意味着可以不传该参数
   console.log(obj.last.toUpperCase())
   if (obj.last !== undefined) {
     console.log(obj.last.toLowerCase())
   }
  console.log(obj.last?.toUpperCase())   // ? 为JS语法，可选链的判断
}
printName({
  first: 'Felix'
})
printName({
  first: 'Felix',
  last: 'Lu'
}) 
```



## 联合类型

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317092052325.png" alt="image-20230317092052325" style="zoom:33%;" />

表示可以是其中的任意一个类型

```typescript
function getFirstThree(x: number[] | string): number[] | string {
  return x.slice(0, 3)
}
```



## 类型别名

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317172837172.png" alt="image-20230317172837172" style="zoom:33%;" />

```typescript
type Point = {
  x: number
  y: number
}
function printCoord(pt: Point) {

}
printCoord({
  x: 100,
  y: 200
})

type ID = number | string
function printId(id: ID) {

}
printId(100)
printId('hello')

type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2)
}
let userInput = sanitizedInput('hello')
userInput = 'new Input'
```



## 接口

<img src="http://rrnsabhfu.hb-bkt.clouddn.com/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230317175829295.png" style="zoom:33%;" >

```typescript
interface Point {
  x: number
  y: number
}
function printCoord(pt: Point) {

}
printCoord({
  x: 100,
  y: 200
})

扩展接口
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear: Bear = {
  name: 'winie',
  honey: true
}
console.log(bear.name)
console.log(bear.honey)

type Animal = {
  name: string
}
type Bear = Animal & {
  honey: boolean
}
const bear: Bear = {
  name: 'winnie',
  honey: true
}

向现有的类型添加字段
interface MyWindow {
  count: number
}
interface MyWindow {
  title: string
}
const w: MyWindow = {
  title: 'hello ts',
  count: 100
}

// 类型创建后是不能更改
type MyWindow = {
  title: string
}
type MyWindow = {
  count: number
}
```



## 类型断言

在 TS 无法推断出一个获取到的值的类型时，可以通过断言给定一个或多个类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318092558453.png" alt="image-20230318092558453" style="zoom: 33%;" />



## 文字类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318092652232.png" alt="image-20230318092652232" style="zoom:33%;" />

```typescript
let testString = 'Hello World'
testString = '千锋大前端'

const constantString = 'Hello World'
// constantString = ''

let x: 'hello' = 'hello'
// x = 'world'

function printText(s: string, alignment: 'left' | 'right' | 'center') {

}
printText('hello', 'left')
// printText('world', 'center2')

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}

interface Options {
  width: number
}
function configure(x: Options | 'auto') {

}
configure({
  width: 100
})
configure('auto')
// configure('automatic')

let b1: true = true
let b2: false = false


const obj = {
  count: 0
}
if (true) {
  obj.count = 1
}


function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {

}
const req = {
  url: 'https://example.com',
  method: 'GET'
} as const
handleRequest(req.url, req.method)
```



## null 和 undefined 类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318093422851.png" alt="image-20230318093422851" style="zoom:33%;" />

```typescript
let x: undefined = undefined
let y: null = null
// let z: string = undefined

function doSomething(x: string | null) {
  if (x === null) {
    // 做一些事情
  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed())    // 加！的目的是：断言 x 不是 null 或 undefined
}
```





## 枚举

是 TS 中的一种语法，编译为 JS 后会发生很大的变化

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318093845942.png" alt="image-20230318093845942" style="zoom:33%;" />

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up)
console.log(Direction.Down)
```

编译后的JS代码：

```js
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
```





## 不太常用的原语

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318094248803.png" alt="image-20230318094248803" style="zoom:33%;" />





# 类型缩小

## 什么是类型缩小

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318094755890.png" alt="image-20230318094755890" style="zoom:33%;" />



## typeof类型守卫

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318094850770.png" alt="image-20230318094850770" style="zoom:33%;" />

```typescript
function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {   // 还是会报错，因为 typeof null = “object”
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === 'string') {
    console.log(strs)
  } else {
    // ...
  }
}
```





## 真值缩小

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318095332295.png" alt="image-20230318095332295" style="zoom:33%;" />

```typescript
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    } else {
      // ...
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
) {
  if (!values) {
    return values
  } else {
    return values.map((x) => {
      return x * factor
    })
  }
}

console.log(multiplyAll(undefined, 2))
```



## 等值缩小

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318095929040.png" alt="image-20230318095929040" style="zoom:33%;" />

```typescript
 function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    } else {
      // ...
    }
  }
}

interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value)
    container.value *= factor
  }
}

multiplyValue({ value: 5 }, 6)
multiplyValue({ value: undefined }, 6)
multiplyValue({ value: null }, 6)
multiplyValue({ value: '5' }, 6)   // 报错
```



## in 操作符缩小

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318100355690.png" alt="image-20230318100355690" style="zoom:33%;" />

```typescript
type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim?: () => void; fly?: () => void }

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // animal: Fish | Human
    return (animal as Fish).swim()    // 需要加类型断言，不然报错
  }

  // animal: Bird | Human
  return (animal as Bird).fly()     // 需要加类型断言，不然报错
}
```



## instanceof操作符缩小

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318100937581.png" alt="image-20230318100937581" style="zoom:33%;" />

```typescript
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString())
  } else {
    console.log(x.toUpperCase())
  }
}

logValue(new Date())
logValue('hello ts')
```



## 分配缩小

表达式左侧的变量的类型会因为右侧可能返回的值而缩小类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318101200455.png" alt="image-20230318101200455" style="zoom:33%;" />

```typescript
 // let x : string | number
let x = Math.random() < 0.5 ? 10 : 'hello world'

// let x: number
x = 1
console.log(x)

// let x = string
x = 'goodbye!'
console.log(x)

// let x: boolean
x = true 
```



## 控制流分析

通过控制结构缩小数据的类型范围

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318102743701.png" alt="image-20230318102743701" style="zoom:33%;" />

```typescript
function example() {
  let x: string | number | boolean

  x = Math.random() < 0.5
  // let x: boolean
  console.log(x)

  if (Math.random() < 0.5) {
    x = 'hello'
    // x: string
    console.log(x)
  } else {
    x = 100
    // x: number
    console.log(x)
  }

  return x
}

let x = example()
x = 'hello'
x = 100
x = true
```



## 使用类型谓词

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318102936320.png" alt="image-20230318102936320" style="zoom:33%;" />

```typescript
type Fish = {
  name: string
  swim: () => void
}

type Bird = {
  name: string
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}


function getSmallPet(): Fish | Bird {
  let fish: Fish = {
    name: 'sharkey',
    swim: () => {

    }
  }

  let bird: Bird = {
    name: 'sparrow',
    fly: () => {

    }
  }

  return true ? bird : fish
}

let pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish)
const underWater2: Fish[] = zoo.filter(isFish) as Fish[]

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'frog') {
    return false
  }
  return isFish(pet)
})
```



## 受歧视的 unions

```typescript
 interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}

 interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square 

 function handleShape(shape: Shape) {
  if (shape.kind === 'rect') {

  }
} 

 function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  }
} 

 function getArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLength ** 2
  }
} 
```



## never 类型与穷尽性检查

可以将 never 类型分配给任何类型，但是不能将任何类型分配给 never 类型（定义的变量）

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318105047001.png" alt="image-20230318105047001" style="zoom: 33%;" />

```typescript
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

interface Triangle {
  kind: 'triangle'
  sideLength: number
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLength ** 2

    default:
      const _exhaustiveCheck: never = shape   // 不可以将任何类型的变量分配给 never
      return _exhaustiveCheck
  }
}
```





# 函数

## 函数类型表达式

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318110929563.png" alt="image-20230318110929563" style="zoom:33%;" />

```typescript
type GreetFunction = (a: string) => void

function greeter(fn: GreetFunction) {
  fn('Hello, World')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)
```



## 调用签名

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318111636591.png" alt="image-20230318111636591" style="zoom:33%;" />

```typescript
type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6))
}

function fn1(n: number) {
  console.log(n)
  return true
}
fn1.description = 'hello'

doSomething(fn1)
```



## 构造签名

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318131052254.png" alt="image-20230318131052254" style="zoom:33%;" />

```typescript
class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}

type SomeConstructor = {
  new (s: string): Ctor
}

function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}

const f = fn(Ctor)
console.log(f.s) */

/* interface CallOrConstructor {
  new (s: string): Date
  (n?: number): number
}

function fn(date: CallOrConstructor) {
  let d = new date('2021-12-20')
  let n = date(100)
```



## 泛型函数

保证输入数据的类型和输出类型的数据相同，即：==根据我们输入的数据类型推断出函数应该输出的数据类型==

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318131315029.png" alt="image-20230318131315029" style="zoom:33%;" />



## 限制条件

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318132017212.png" alt="image-20230318132017212" style="zoom:33%;" />

```typescript
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}

const longerArray = longest([1, 2], [2, 3, 4])
const longerString = longest('felix', 'lu')
const notOk = longest(10, 100)
```



## 使用受限值

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318132414849.png" alt="image-20230318132414849" style="zoom:33%;" />

```typescript
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj
  } else {
    return { length: minimum }
  }
}

const arr = minimumLength([1, 2, 3], 6)
console.log(arr.slice(0))
```



## 指定类型参数

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318132729663.png" alt="image-20230318132729663" style="zoom:33%;" />



## 编写优秀通用函数的准则

1. 可能的情况下，使用类型参数本身，而不是对其进行约束（类型参数下推）
2. 总是尽可能少地使用类型参数
3. 如果一个类型的参数只出现在一个地方，请重新考虑你是否真的需要它

```typescript
function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(  // 不推荐
  arr: Type[],
  func: Func
) {
  return arr.filter(func)
}


function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s)
}

greet('World')

function greet2(s: string) {
  console.log('Hello, ' + s)
}
```



## 函数的可选参数

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318135214196.png" alt="image-20230318135214196" style="zoom:33%;" />

```typescript
function f(n: number = 100) {
  console.log(n.toFixed())
  console.log(n.toFixed(3))
}

f(123.45)
f()
```



## 回调中的可选参数

当为回调写一个函数类型时，永远不要写一个可选参数，除非你打算在不传递参数的情况下调用函数。

```typescript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
    callback(arr[i])
  }
}

myForEach([1, 2, 3], (a) => console.log(a))
myForEach([1, 3, 4], (a, i) => console.log(a, i))

myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed())
})
```



## 函数重载

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318141351767.png" alt="image-20230318141351767" style="zoom:33%;" />

```typescript
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}

const d1 = makeDate(12345678)
const d2 = makeDate(5, 6, 7)
const d3 = makeDate(5, 9)
```



## 重载签名和实现签名的细节

```typescript
function fn(x: string): void
function fn() {

}

fn('hello')


function fn(x: boolean): void
function fn(x: string): void
function fn(x: boolean | string) {

}

function fn(x: string): string
function fn(x: boolean): boolean
function fn(x: string | boolean): string | boolean {
  return 'hello'
}
```



## 如何编写好的重载函数

在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数

```typescript
/* function len(s: string): number
function len(arr: any[]): number
function len(x: any) {
  return x.length
} */

function len(x: any[] | string) {
  return x.length
}

len('hello')
len([1, 2, 3])
len(Math.random() > 0.5 ? 'hello' : [4, 5, 6]) 
```



## 函数内的 this 声明

在 TS 中允许传入一个叫做 this 的参数，同时支持给这个叫 this 的参数指明类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143156788.png" alt="image-20230318143156788" style="zoom:33%;" />

```typescript
interface User {
  admin: boolean
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[]
}

const db:DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    let user1: User = {
      admin: true
    }

    let user2: User = {
      admin: false
    }

    return [ user1, user2 ]
  }
}

// const admins = db.filterUsers(function(this: User) {
//   return this.admin
// })

const admins = db.filterUsers((this: User) => {
  return this.admin
})

console.log(admins)
```



## 需要了解的其他类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143652442.png" alt="image-20230318143652442" style="zoom:33%;" />

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143737780.png" alt="image-20230318143737780" style="zoom:33%;" />

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143818745.png" alt="image-20230318143818745" style="zoom:33%;" />

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143859221.png" alt="image-20230318143859221" style="zoom:33%;" />

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318143943694.png" alt="image-20230318143943694" style="zoom:33%;" />



## 参数展开运算符—形参展开

```typescript
function multiply(n: number, ...m: number[]) {
  return m.map( x => n * x )
}

const a = multiply(10, 1, 2, 3, 4, 60, 100)

console.log(a)
```



## 参数展开运算符—实参展开

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318145043421.png" alt="image-20230318145043421" style="zoom:33%;" />

```typescript
/* const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
arr1.push(...arr2)

console.log(arr1)


// const args = [8, 5]  
// const angle = Math.atan2(...args)


const args = [8, 5] as const   // 将 args 定义为 const 常量类型传递下去
const angle = Math.atan2(...args) */
```



## 参数结构

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318145344814.png" alt="image-20230318145344814" style="zoom:33%;" />

```typescript
type ABC = { a: number, b: number, c: number }

function sum({ a, b, c }: ABC) {
  console.log(a + b + c)
}

sum({
  a: 10,
  b: 3,
  c: 9
})
```



## 函数返回 void 类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230318145607679.png" alt="image-20230318145607679" style="zoom:33%;" />

```typescript
type voidFunc = () => void

const f1:voidFunc = () => {
  return true
}

const f2:voidFunc = () => true

const f3:voidFunc = function() {
  return true
}

const v1: void = f1()
const v2 = f2()
const v3 = f3()


function f4(): void {
  return true
}

const f5 = function(): void {
  return true
}
```





# 对象类型

## 认识对象类型

匿名对象、接口命名、类型别名

```typescript
// 匿名命名
function greet(person: { name: string, age: number }) {
  return 'Hello ' + person.name
}

// 接口命名
interface Person {
  name: string
  age: number
}

function greet(person: Person) {
  return 'Hello ' + person.name
}

// 类型别名
type Person = {
  name: string
  age: number
}

function greet(person: Person) {
  return 'Hello ' + person.name
}
```



## 属性修改器—可选属性

可选属性

```typescript
type Shape = {}

interface PaintOptions {
  shape: Shape,
  xPos?: number,
  yPos?: number
}

// function paintShape(opts: PaintOptions) {
//   let xPos = opts.xPos
//   let yPos = opts.yPos
//   console.log(xPos)
// }

// function paintShape(opts: PaintOptions) {
//   let xPos = opts.xPos === undefined ? 0 : opts.xPos
//   let yPos = opts.yPos === undefined ? 0 : opts.yPos
//   console.log(xPos)
// }

// 下面这种方法不是类型限定，而是 es6 语法中对象解构赋值的别名
function paintShape({ shape: Shape, xPos: number = 0, yPos = 0 }: PaintOptions) {
  console.log(Shape)
  console.log(number)
}

const shape: Shape = {}
paintShape({ shape })
// paintShape({ shape, xPos: 100})
// paintShape({ shape, yPos: 100})
// paintShape({ shape, xPos: 100, yPos: 100})
```



只读属性：用 readonly 标记，不会被写入其他的值

索引签名：





## 扩展类型

```typescript
interface BasicAddress {
  name?: string
  street: string
  city: string
  country: string
  postalCode: string
}

// interface AddressWithUnit {
//   name?: string
//   street: string
//   city: string
//   country: string
//   postalCode: string
//   unit: string
// }

interface AddressWithUnit extends BasicAddress {
  unit: string
}

let awu: AddressWithUnit = {
  unit: '3单元',
  street: '清河街道',
  city: '北京',
  postalCode: '100000',
  country: '中国',
  name: ''
}


interface Colorful {
  color: string
}
interface Circle {
  radius: number
}

interface ColorCircle extends Colorful, Circle {

}

const cc: ColorCircle = {
  color: 'red',
  radius: 100
}
```



## 交叉类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230319084324826.png" alt="image-20230319084324826" style="zoom:33%;" />

```typescript
interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

type ColorfulCircle = Colorful & Circle

const cc: ColorfulCircle = {
  color: 'red',
  radius: 100
}


function draw(circle: Colorful & Circle) {
  console.log(circle.color)
  console.log(circle.radius)
}
draw({
  color: 'red',
  radius: 100
})
draw({
  color: 'green',
  rdaius: 100
})
```



## 处理冲突

当有重名接口时，自动合并内部的字段属性，可以用于 interface， 但是不能用于类型别名 type

```typescript
interface Sister {
  name: string
}

interface Sister {
  age: number
}

const sister1: Sister = {
  name: 'sisterAn',
  age: 20
} 

/* type Sister = {
  name: string
}
type Sister = {
  // 报错
} */
```



## 泛型对象类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230319085001528.png" alt="image-20230319085001528" style="zoom:33%;" />





# 类型操纵

## 从类型中创建类型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230319085822878.png" alt="image-20230319085822878" style="zoom:33%;" />





## 泛型

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230319090106282.png" alt="image-20230319090106282" style="zoom:33%;" />



### 使用通用类型变量

<img src="http://xiaohai-hx.cn/%E5%8D%83%E9%94%8B%E6%95%99%E8%82%B2TypeScript/image-20230319090202904.png" alt="image-20230319090202904" style="zoom:33%;" />

```typescript
function loggingIdentity<Type>(arg: Array<Type>): Type[] {
  console.log(arg.length)
  return arg
}

loggingIdentity([100, 200])
```





