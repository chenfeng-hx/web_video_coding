# 尚硅谷MongoDB入门基础教程



# 课程简介

【尚硅谷MongoDB入门基础教程（一天搞定mongodb）】 https://www.bilibili.com/video/BV18s411E78K/?share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304

【黑马程序员MongoDB基础入门到高级进阶，一套搞定mongodb】 https://www.bilibili.com/video/BV1bJ411x7mq/?share_source=copy_web

【45分钟快速入门MongoDB】 https://www.bilibili.com/video/BV1M3411L7Fi/?p=5&share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304



# MongoDB 介绍

## 类型

1. 非关系型数据库（No SQL：Not Only SQL）
2. 属于文档数据库



## 简介

- 是为快速开发互联网 Web 应用而设计的数据库系统
- 设计目标：极简、灵活、作为 Web 应用栈的一部分。
- MongoDB 的数据模型是面向文档的，所谓文档是一种类似于 JSON 的结构，简单理解： MongoDB 这个数据库中存的是各种各样的 JSON（还可以存BSON：二进制的 JSON）
- MongoDB是一个开源、高性能、无模式的文档型数据库，当初的设计就是用于简化开发和方便扩展，是NoSQL数据库产品中的一种。是最

	像关系型数据库（MySQL）的非关系型数据库。

	它支持的数据结构非常松散，是一种类似于 JSON 的 格式叫BSON，所以它既可以存储比较复杂的数据类型，又相当的灵活。

	MongoDB中的记录是一个文档，它是一个由字段和值对（fifield:value）组成的数据结构。MongoDB文档类似于JSON对象，即一个文档认

	为就是一个对象。字段的数据类型是字符型，它的值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。



## 体系结构

mysql  和 MongoDB 对比：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305133824911.png" alt="image-20230305133824911" style="zoom:60%;" />

| SQL术语/概念 | MongoDB术语/概念 |               解释/说明                |
| :----------: | :--------------: | :------------------------------------: |
|   database   |     database     |                 数据库                 |
|    table     |    collection    |             数据库表/集合              |
|     row      |     document     |            数据记录行/文档             |
|    column    |      field       |              数据字段/域               |
|    index     |      index       |                  索引                  |
| table joins  |                  |         表连接，MongoDB不支持          |
|              |     嵌入文档     |  MongoDB通过嵌入式文档来替代多表连接   |
| primary key  |   primary key    | 主键，MongoDB自动将 _id 字段设置为主键 |



## 数据类型

1. MongoDB的最小存储单位就是文档(document)对象。文档(document)对象对应于关系型数据库的行。数据在MongoDB中以 BSON（Binary-JSON）文档的格式存储在磁盘上。

2. BSON（Binary Serialized Document Format）是一种类json的一种二进制形式的存储格式，简称Binary JSON。BSON和JSON一样，支持内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。

3. BSON采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。

4. Bson中，除了基本的JSON类型：string,integer,boolean,double,null,array和object，mongo还使用了特殊的数据类型。这些类型包括 date,object id,binary data,regular expression 和code。

|   数据类型    |                             描述                             |                         举例                         |
| :-----------: | :----------------------------------------------------------: | :--------------------------------------------------: |
|    字符串     |            UTF-8字符串都可表示为字符串类型的数据             |                   {"x" : "foobar"}                   |
|    对象id     |                对象id是文档的12字节的唯一 ID                 |                  {"X" :ObjectId() }                  |
|    布尔值     |                   真或者假：true或者false                    |                     {"x":true}+                      |
|     数组      |                值的集合或者列表可以表示成数组                |               {"x" ： ["a", "b", "c"]}               |
|   32位整数    | 类型不可用。JavaScript仅支持64位浮点数，所以32位整数会被自动转换。 | shell是不支持该类型的，shell中默认会转换成64位浮点数 |
|   64位整数    | 不支持这个类型。shell会使用一个特殊的内嵌文档来显示64位整数  | shell是不支持该类型的，shell中默认会转换成64位浮点数 |
|  64位浮点数   |                 shell中的数字就是这一种类型                  |                {"x"：3.14159，"y"：3}                |
|     null      |                   表示空值或者未定义的对象                   |                      {"x":null}                      |
|   undefined   |                  文档中也可以使用未定义类型                  |                  {"x":undefifined}                   |
|     符号      | shell不支持，shell会将数据库中的符号类型的数据自动转换成字符串 |                                                      |
|  正则表达式   |   文档中可以包含正则表达式，采用JavaScript的正则表达式语法   |                  {"x" ： /foobar/i}                  |
|     代码      |                文档中还可以包含JavaScript代码                |           {"x" ： function() { /* …… */ }}           |
|  二进制数据   |    二进制数据可以由任意字节的串组成，不过shell中无法使用     |                                                      |
| 最大值/最小值 | BSON包括一个特殊类型，表示可能的最大值。shell中没有这个类型  |                                                      |

>  shell默认使用64位浮点型数值。{“x”：3.14}或{“x”：3}。对于整型值，可以使用NumberInt（4字节符号整数）或NumberLong（8字节符
>
> 号整数），{“x”:NumberInt(“3”)}{“x”:NumberLong(“3”)}



## MongoDB的特点

1. **高性能**：

	- MongoDB提供高性能的数据持久性。特别是,对嵌入式数据模型的支持减少了数据库系统上的I/O活动。

	- 索引支持更快的查询，并且可以包含来自嵌入式文档和数组的键。（文本索引解决搜索的需求、TTL索引解决历史数据自动过期的需求、地理位置索引可用于构建各种 O2O 应用）

	- mmapv1、wiredtiger、mongorocks（rocksdb）、in-memory 等多引擎支持满足各种场景需求。

	- Gridfs解决文件存储的需求。

2. **高可用性：**
	- MongoDB的复制工具称为副本集（replica set），它可提供自动故障转移和数据冗余。

3. **高扩展性：**

	- MongoDB提供了水平可扩展性作为其核心功能的一部分。

	- 分片将数据分布在一组集群的机器上。（海量数据存储，服务能力水平扩展）

	- 从3.4开始，MongoDB支持基于片键创建数据区域。在一个平衡的集群中，MongoDB将一个区域所覆盖的读写只定向到该区域内的那些片。

4. **丰富的查询支持：**
	- MongoDB支持丰富的查询语言，支持读和写操作(CRUD)，比如数据聚合、文本搜索和地理空间查询等。

5. **其他特点：**
	- 如无模式（动态模式）、灵活的文档模型



## 安装

下载地址：https://www.mongodb.com/try/download/community（第一次看到 CSDN 中的 C知道，问下他的）

图形化界面下载地址：https://www.mongodb.com/try/download/compass

版本的选择：

- MongoDB的版本命名规范如：x.y.z；
- y为奇数时表示当前版本为开发版，如：1.5.2、4.1.13；
- y为偶数时表示当前版本为稳定版，如：1.6.3、4.0.10；
- z是修正版本号，数字越大越好。
- MongoDB 对于 32位系统支持不佳，所以 3.2 版本以后没有再对 32 位系统的支持
- 详情：http://docs.mongodb.org/manual/release-notes/#release-version-numbers



安装步骤：

1. 一路 next，accept
2. 选择 Custom 改路径，然后 next
3. 取消勾选 “install MongoDB compass”（MongoDB 的图形化界面）
4. 点击 install
5. 添加环境变量：将 bin 目录的路径加入到 Path 环境变量中
6. ~~创建 data 目录，并在内部创建一个 db 文件夹（不确定位置，所以可以在 ）~~（不需要了，现在新版（4.0以上）的 MongoDB 默认就配置了这个文件夹data）
7. 启动数据库服务器，`mongod`，可以看到开启了 27017 端口（默认端口）（版本太高不好，有问题，建议低一个版本）

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305102809246.png" alt="image-20230305102809246" style="zoom:67%;" />

8. 接着使用命令 `mongo` 开启数据库（客户端）

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305104335082.png" alt="image-20230305104335082" style="zoom:50%;" />

9. 在浏览器输入 `localhost:27017` ，可以访问到页面

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305104629767.png" alt="image-20230305104629767" style="zoom:50%;" />



可以使用命令 `mongod --dbpath 新路径 --port 新端口(可选)` :通过该命令可以更改防止数据库数据 (data\\db) 的位置和启用的端口号

数据库：

1. 数据库服务器：通过 mongod 启动，用来存储数据，必须先启动服务器
2. 数据库客户端：通过 mongo 启动，用来对数据进行操作



版本原因：

1. 自启动服务器：已经得到重启验证：至少 5.0 以上版本自带开机自启服务器服务

2. MongoDB javascript shell是一个基于javascript的解释器，故是支持js程序的。

3. 对于 MongoDB 6.0 以上的版本，需要搭配 mongosh 使用（同样需要配置环境变量，这应该就是之前下载 6.0 版本没开启 mongo 的原因）



## 三个概念

- 数据库（database）：数据库是一个仓库，在仓库中可以存放集合。
- 集合（collection）：集合类似于数组，在集合中可以存放文档。
- 文档（document）：文档数据库中的最小单位，我们存储和操作的内容都是文档。



# MongoDB 基本操作

## 了解常识

1. 在 MongoDB 中，数据库和集合都不需要手动创建，当我们创建文档时，如果文档所在的集合或数据库不存在就会自动创建数据库和集合。
2. 也就是说，使用 `use xxx` 切换数据库时，并不会报错，但是此时有可能该数据库是不存在的，在有文档的时候才会自动创建
3. 此时相当于数据库名称是保存在内存中的，只有在数据库中有内容后才会被持久化的保存在磁盘中
4. _id ：是 MongoDB 默认生成的主键，不用手动设置
5. MongoDB 中默认的数据库为 test，如果你没有选择数据库，集合将存放在 test 数据库中



## 基本操作

|                           常用操作                           |                         结果                         |
| :----------------------------------------------------------: | :--------------------------------------------------: |
|                   show dbs/ show databases                   |                 查看当前所有的数据库                 |
|                         use 数据库名                         |       切换数据库（数据库允许不存在，不会报错）       |
|                              db                              |                 显示当前所在的数据库                 |
|                       show collections                       |              显示当前数据库中的所有集合              |
|                      db.dropDatabase()                       |              用来删除已经持久化的数据库              |
|                  db.createCollection(name)                   |       显示创建一个集合，name：要创建的集合名称       |
|                 show tables/show collections                 |                   查看当前库中的表                   |
|                       db.集合名.drop()                       | 删除集合，成功删除drop()方法返回true，否则返回 false |
| mongoimport –(双)db \<db name> -c \<coll name> – type \<json/json array> \<file name> |                      导入数据库                      |
|  mongoexport -d \<db name> -c \<coll name> -o \<file name>   |                 导出数据库到某个文件                 |



## 一些注意点

🌵**关于数据库：**

1. 数据库名可以是满足以下条件的任意UTF-8字符串。

	- 不能是空字符串（"")。

	- 不得含有' '（空格)、.、$、/、\和\0 (空字符)。

	- 应全部小写。

	- 最多64字节。

2. 有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

	- **admin**： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。

	- **local:** 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合，可以在集群中使用

	- **confifig**: 当Mongo用于分片设置时，confifig数据库在内部使用，用于保存分片的相关信息。



**🌵关于集合**：

1. 集合，类似关系型数据库中的表。可以显示的创建，也可以隐式的创建（==也就是在插入文档的时候就会自动创建，一般使用隐式创建==）。
2. 集合的命名规范：
	- 集合名不能是空字符串""。
	- 集合名不能含有\0字符（空字符)，这个字符表示集合名的结尾。
	- 集合名不能以"system."开头，这是为系统集合保留的前缀。
	- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。



## 文档基本 CRUD 操作

文档（document）的数据结构和 JSON 基本一样，所有存储在集合中的数据都是 BSON 格式。



### 文档的插入

#### 单个文档的插入

使用insert() - 现在使用insertOne() 或 save() 方法向集合中插入文档：

```
db.collection.insertOne(
	<document or array of documents>,
	{
	writeConcern: <document>,
	ordered: <boolean>
	}
)
```

|  Parameter   |       Type        |                         Description                          |
| :----------: | :---------------: | :----------------------------------------------------------: |
|   document   | document or array |          要插入到集合中的文档或文档数组(json 格式)           |
| writeConcern |     document      | 可选的。表达写关注点的文档。忽略使用默认的写关注点。参见写关注。如果在事务中运行，则不要显式地为操作设置写关注点。要对事务使用写关注，请参见事务和写关注 |
|   ordered    |      boolean      | 可选。如果为真，则按顺序插入数组中的文档，如果其中一个文档出现错误，MongoDB将返回而 |

插入时注意：

1. 如果插入的集合不存在，则会隐式创建

2. mongo中的数字，默认情况下是double类型，如果要存整型，必须使用函数NumberInt(整型数字)，否则取出来就有问题了。

3. 插入当前日期使用 new Date()

4. 插入的数据没有指定 _id ，会自动生成主键值

5. 如果某字段没值，可以赋值为null，或不写该字段。



插入数据要求：

1. 文档中的键/值对是有序的。

2. 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。

3. MongoDB区分类型和大小写。

4. MongoDB的文档不能有重复的键。

5. 文档的键是字符串。除了少数例外情况，键可以使用任意UTF-8字符。



文档键命名规范：

1. 键不能含有\0（零） (空字符)。这个字符用来表示键的结尾。
2.  .和$有特别的意义，只有在特定环境下才能使用。
3. 以下划线"_"开头的键是保留的(不是严格要求的)。



#### 多个文档的插入

```
db.collection.insertMany(
	[ <document 1> , <document 2>, ... ],
	{
		writeConcern: <document>,
		ordered: <boolean>
	}
)
```

1. 插入时指定了 _id ，则主键就是该值。

2. 如果某条数据插入失败，将会终止插入，但已经插入成功的数据不会回滚掉。

3. 因为批量插入由于数据较多容易出现失败，因此，可以使用try catch进行异常捕捉处理，测试的时候可以不处理。如（了解）：

```js
db.comment.insertMany([{
    "item": "journal",
    "qty": 25,
    "size": {
        "h": 14,
        "w": 21,
        "uom": "cm"
    },
    "status": "A"
}, {
    "item": "notebook",
    "qty": 50,
    "size": {
        "h": 8.5,
        "w": 11,
        "uom": "in"
    },
    "status": "A"
}]);

// 捕捉错误
try {
    db.comment.insertMany([{
        "item": "journal",
        "qty": 25,
        "size": {
            "h": 14,
            "w": 21,
            "uom": "cm"
        },
        "status": "A"
    }, {
        "item": "notebook",
        "qty": 50,
        "size": {
            "h": 8.5,
            "w": 11,
            "uom": "in"
        },
        "status": "A"
    }]);    
} catch (error) {
    print(error)
}
```



### 文档的查询

```
db.collection.find(<query>, [projection])
```

| Parameter  |   Type   |                         Description                          |
| :--------: | :------: | :----------------------------------------------------------: |
|   query    | document | 可选。使用查询运算符指定选择筛选器。若要返回集合中的所有文档，请省略此参数或传递空文档( {} ) |
| projection | document | 可选。指定要在与查询筛选器匹配的文档中返回的字段（投影）。若要返回匹配文档中的所有字段，请省略此参数 |

#### 查询所有内容

1. 查询集合中所有的文档：`db.集合名称.find()` 或 `db.集合名称.find({})`
2. 按照一定的参数查询：向 find() 方法中写入参数，json格式，如 `db.集合名称.find({item:"text"})`



#### 投影查询

如果要查询结果返回部分字段，则需要使用投影查询（不显示所有字段，只显示指定的字段）。

1. 查询结果只显示某些字段：`db.集合名称.find({}, {nickname:1, age:1})`
2. 查询结果中不想显示 _id 字段：`db.集合名称.find({}, {nickname:1, age:1, _id:0})`



### 文档的更新

```
db.collection.update(query, update, options)
//或
db.collection.update(
	<query>,
	<update>,
	{
		upsert: <boolean>,
		multi: <boolean>,
		writeConcern: <document>,
		collation: <document>,
		arrayFilters: [ <filterdocument1>, ... ],
		hint: <document|string> // Available starting in MongoDB 4.2
	}
)
```

|  Parameter   |         Type         |                         Description                          |
| :----------: | :------------------: | :----------------------------------------------------------: |
|    query     |       document       | 更新的选择条件。可以使用与fifind（）方法中相同的查询选择器，类似sql update查询内where后面的。 |
|    udate     | document or pipeline | 要应用的修改。该值可以是：包含更新运算符表达式的文档，或仅包含：对的替换文档，或在MongoDB 4.2中启动聚合管道。 |
|    upsert    |       boolean        | 可选。如果设置为true，则在没有与查询条件匹配的文档时创建新文档。默认值为false，如果找不到匹配项，则不会插入新文档。 |
|    multi     |       boolean        | 可选。如果设置为true，则更新符合查询条件的多个文档。如果设置为false，则更新一个文档。默认值为false。 |
| writeConcern |       document       |           可选。表示写问题的文档。抛出异常的级别。           |
|  cbllation   |       document       |               可选。指定要用于操作的校对规则。               |
| arrayFilters |        array         | 可选。一个筛选文档数组，用于确定要为数组字段上的更新操作修改哪些数组元素。 |
|     hint     |  document or string  | 可选。指定用于支持查询谓词的索引的文档或字符串。该选项可以采用索引规范文档或索引名称字符串。如果指定的索引不存在，则说明操作错误。例如，请参阅版本4中的“为更新操作指定提示。 |

> 主要关注前四个参数即可！



1. **覆盖修改(其他字段内容均会被覆盖)**：修改_id为1的记录，点赞量为1001 : `db.comment.update({_id:"1"},{likenum:NumberInt(1001)})`
2. **局部修改**：修改_id为2的记录，浏览量为889：`db.comment.update({_id:"2"},{$set:{likenum:NumberInt(889)}})`
3. **批量修改**：更新所有用户为 1003 的用户的昵称为 凯撒大帝 
	1. 默认只修改第一条数据：`db.comment.update({userid:"1003"},{$set:{nickname:"凯撒2"}})`
	2. 修改所有符合条件的数据：`db.comment.update({userid:"1003"},{$set:{nickname:"凯撒大帝"}},{multi:true})`。==如果不加后面的参数，则只更新符合条件的第一条记录==。
4. **列值增长的修改**：实现对某列值在原有值的基础上进行增加或减少，可以使用 $inc 运算符来实现。
	1. 对3号数据的点赞数，每次递增1：`db.comment.update({_id:"3"},{$inc:{likenum:NumberInt(1)}})`



### 文档的删除

1. 语法结构：`db.集合名称.remove(条件)`
2. 删除全部数据：`db.集合名称.remove({})`
3. 删除 _id 为1 的数据：`db.集合名称.remove({_id:"1"})`



## 文档的分页查询

### 统计查询

统计查询使用count()方法：`db.集合名称.count(query, options)`。默认情况下 count() 方法返回符合条件的全部记录条数。

| Parameter |   Type   |         Description          |
| :-------: | :------: | :--------------------------: |
|   query   | document |         查询选择条件         |
|  options  | document | 可选。用于修改计数的额外选项 |

1. 统计所有记录数
	1. 统计 comment 集合的所有的记录数：`db.comment.count()`
2. 按条件统计记录数
	1. 统计 userid 为 1003 的记录数：`db.comment.count({userid:"1003"})`



### 分页列表查询

可以使用limit()方法来读取指定数量的数据，使用skip()方法来跳过指定数量的数据。

基本语法：`db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)`

示例：

1. 想返回指定条数的记录，可以在find方法后调用limit来返回结果(TopN)，默认值20，`db.comment.find().limit(3)`
2. skip方法同样接受一个数字参数作为跳过的记录条数。（前N个不要）,默认值是0，`db.comment.find().skip(3)`

```shell
# 分页查询：需求：每页2个，第二页开始：跳过前两条数据，接着只显示3和4条数据
# 第一页
db.comment.find().skip(0).limit(2)
# 第二页
db.comment.find().skip(2).limit(2)
# 第三页
db.comment.find().skip(4).limit(2)
```



### 排序查询

sort() 方法对数据进行排序，sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而 -1 是用

于降序排列。

==语法==：`db.COLLECTION_NAME.find().sort({KEY(字段):1})`或`db.集合名称.find().sort(排序方式)`

示例：

1. 对userid降序排列，并对访问量进行升序排列：`db.comment.find().sort({userid:-1,likenum:1})`



> skip(), limilt(), sort()三个放在一起执行的时候，执行的顺序是先 sort(), 然后是 skip()，最后是显示的 limit()，和命令编写顺序无关。



## 文档的更多查询

### 正则的复杂条件查询

MongoDB的模糊查询是通过==正则表达式==的方式实现的。

格式为：`db.collection.find({field:/正则表达式/})` 或 `db.集合.find({字段:/正则表达式/})`

其中：正则表达式是js的语法，直接量的写法。

示例：

1. 要查询评论内容包含“开水”的所有文档：`db.comment.find({content:/开水/})`
2. 要查询评论的内容中以“专家”开头的：`db.comment.find({content:/^专家/})`



### 比较查询

<, <=, >, >= 这个操作符也是很常用的，格式如下：

|                      语法                      |           含义           |
| :--------------------------------------------: | :----------------------: |
| db.集合名称.find({ "field" : { $gt: value }})  |   大于: field > value    |
| db.集合名称.find({ "field" : { $lt: value }})  |   小于: field < value    |
| db.集合名称.find({ "field" : { $gte: value }}) | 大于等于: field >= value |
| db.集合名称.find({ "field" : { $lte: value }}) | 小于等于: field <= value |
| db.集合名称.find({ "field" : { $ne: value }})  |  不等于: field != value  |

示例：查询评论点赞数量大于700的记录：`db.comment.find({likenum:{$gt:NumberInt(700)}})`



### 包含查询

1. ==包含使用$in操作符==

​	示例：查询评论的集合中userid字段包含1003或1004的文档：`db.comment.find({userid:{$in:["1003","1004"]}})`

2. ==不包含使用$nin操作符==

	示例：查询评论集合中userid字段不包含1003和1004的文档：`db.comment.find({userid:{$nin:["1003","1004"]}})`



### 条件连接查询

==如果需要查询同时满足两个以上条件，需要使用$and操作符将条件进行关联，相当于SQL的and）==

格式为：`$and:[ { },{ },{ } ]`

示例：查询评论集合中likenum大于等于700 并且小于2000的文档：

​		`db.comment.find({$and:[{likenum:{$gte:NumberInt(700)}},{likenum:{$lt:NumberInt(2000)}}]})`



==如果两个以上条件之间是或者的关系，我们使用 操作符进行关联，与前面 and的使用方式相同==

格式为：`$or:[ { },{ },{ } ]`

示例：查询评论集合中userid为1003，或者点赞数小于1000的文档记录：

​		`db.comment.find({$or:[ {userid:"1003"} ,{likenum:{$lt:1000} }]})`



## 常用命令小结

![image-20230305163050811](https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305163050811.png)

$all：所有的条件都需要满足（查找）

$inc：增加字段

#unset：删除字段





# 索引-index

## 概述

1. 索引支持在MongoDB中高效地执行查询。如果没有索引，MongoDB必须执行全集合扫描，即扫描集合中的每个文档，以选择与查询语句匹配的文档。这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。
2. 如果查询存在适当的索引，MongoDB可以使用该索引限制必须检查的文档数。
3. 索引是特殊的数据结构，它以易于遍历的形式存储集合数据集的一小部分。索引存储特定字段或一组字段的值，按字段值排序。
4. 索引项的排序支持有效的相等匹配和基于范围的查询操作。此外，MongoDB还可以使用索引中的排序返回排序结果。
5. MongoDB索引使用B树数据结构（确切的说是B-Tree，MySQL是B+Tree）



## 索引的类型

### 单字段索引

MongoDB支持在文档的单个字段上创建用户定义的升序/降序索引，称为单字段索引（Single Field Index）。

对于单个字段索引和排序操作，索引键的排序顺序（即升序或降序）并不重要，因为MongoDB可以在任何方向上遍历索引。



### 复合索引

MongoDB还支持多个字段的用户定义索引，即复合索引（Compound Index）。

复合索引中列出的字段顺序具有重要意义。例如，如果复合索引由 { userid: 1, score: -1 } 组成，则索引首先按userid正序排序，然后

在每个userid的值内，再在按score倒序排序。



### 其他索引

1. 地理空间索引（Geospatial Index）
	- 为了支持对地理空间坐标数据的有效查询，MongoDB提供了两种特殊的索引：返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引。

2. 文本索引（Text Indexes）
	- MongoDB提供了一种文本索引类型，支持在集合中搜索字符串内容。这些文本索引不存储特定于语言的停止词（例如“the”、“a”、“or”），而将集合中的词作为词干，只存储根词。

3. 哈希索引（Hashed Indexes）
	- 为了支持基于散列的分片，MongoDB提供了散列索引类型，它对字段值的散列进行索引。这些索引在其范围内的值分布更加随机，但只支持相等匹配，不支持基于范围的查询。



## 索引的管理操作

### 索引的查看

返回一个集合中的所有索引的数组，语法结构：`db.collection.getIndexes()`、该语法命令运行要求是MongoDB 3.0+

```sh
# 示例：查看comment集合中所有的索引情况
> db.comment.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
		},
		"name" : "_id_",
		"ns" : "articledb.comment"
	}
]
#
结果中显示的是默认 _id 索引。
默认_id索引：
MongoDB在创建集合的过程中，在 _id 字段上创建一个唯一的索引，默认名字为 _id_ ，该索引可防止客户端插入两个具有相同值的文
档，您不能在_id字段上删除此索引。
注意：该索引是唯一索引，因此值不能重复，即 _id 值不能重复的。在分片集群中，通常使用 _id 作为片键
#
```



### 索引的创建

在集合上创建索引。

语法结构：`db.collection.createIndex(keys, options)`

|        Parameter        |     Type      | Description                                                  |
| :---------------------: | :-----------: | :----------------------------------------------------------- |
|          keys           |   document    | 包含字段和值对的文档，其中字段是索引键，值描述该字段的索引类型。==对于字段上的升序索引，请指定值1；对于降序索引，请指定值-1==。比如： {字段:1或-1} ，其中1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。另外，MongoDB支持几种不同的索引类型，包括文本、地理空间和哈希引。 |
|         options         |   document    | 可选。包含一组控制索引创建的选项的文档。有关详细信息，请参见选项详情列表。 |
| options的更多选项列表： |               |                                                              |
|       background        |    Boolean    | 建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加"background" 可选参数。 "background" 默认值为false。 |
|         unique          |    Boolean    | 建立的索引是否唯一。指定为true创建唯一索引。默认值为false.   |
|          name           |    string     | 索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称。 |
|        dropDups         |    Boolean    | 3.0+版本已废弃。在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为false. |
|         sparse          |    Boolean    | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 false. |
|   expireAfterSeconds    |    integer    | 指定一个以秒为单位的数值，完成 TTL设定，设定集合的生存时间。 |
|            v            | index version | 索引的版本号。默认的索引版本取决于mongod创建索引时运行的版本。 |
|         weights         |   document    | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。 |
|    default_language     |    string     | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语 |
|    language_override    |    string     | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的language，默认值为 language |

> 注意在 3.0.0 版本前创建索引方法为 db.collection.ensureIndex() ，之后的版本使用了 db.collection.createIndex() 方法，
>
> ensureIndex() 还能用，但只是 createIndex() 的别名。



单字段索引示例：

```
# 单字段索引示例：对 userid 字段建立索引：
> db.comment.createIndex({userid:1})
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,
	"numIndexesAfter" : 2,
	"ok" : 1
}
# 查看索引
> db.comment.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1   // 存在索引的键名：key
	},
	"name" : "_id_",    // 该 key 对应的索引名 index
	"ns" : "articledb.comment"
	},
	{
		"v" : 2,
		"key" : {
			"userid" : 1
	},
	"name" : "userid_1",
	"ns" : "articledb.comment"
	}
]
```



复合索引创建示例：

```
# 对 userid 和 nickname 同时建立复合（Compound）索引：
> db.comment.createIndex({userid:1,nickname:-1})
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 2,
	"numIndexesAfter" : 3,
	"ok" : 1
}

> db.comment.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
	},
	"name" : "_id_",
	"ns" : "articledb.comment"
	},
	{
		"v" : 2,
		"key" : {
			"userid" : 1
	},
	"name" : "userid_1",
	"ns" : "articledb.comment"
	},
	{
		"v" : 2,
		"key" : {
			"userid" : 1,
			"nickname" : -1
	},
	"name" : "userid_1_nickname_-1",
	"ns" : "articledb.comment"
	}
]
```



### 索引的移除

可以移除指定的索引，或移除所有索引。

1. 指定索引的移除：`db.collection.dropIndex(index)`

| Parameter |        Type        |                         Description                          |
| :-------: | :----------------: | :----------------------------------------------------------: |
|   index   | string or document | 指定要删除的索引。可以通过索引名称或索引规范文档指定索引。若要删除文本索引，请指定索引名称。 |

示例：

- 删除 comment 集合中 userid 字段上的升序索引：`db.comment.dropIndex({userid:1})`



2. 所有索引的移除： `db.collection.dropIndexes()`

示例：

- 删除 spit 集合中所有索引：`db.spit.dropIndexes()`

 

## 索引的使用

### 执行计划

分析查询性能（Analyze Query Performance）通常使用执行计划（解释计划、Explain Plan）来查看查询的情况，如查询耗费的时间、是

否基于索引查询等。

那么，通常，我们想知道，建立的索引是否有效，效果如何，都需要通过执行计划查看。

语法：`db.collection.find(query,options).explain(options)`

【示例】查看根据userid查询数据的情况：

```
> db.comment.find({ userid: "1003" }).explain()
{
    "queryPlanner" : {
        "plannerVersion" : 1,
            "namespace" : "articledb.comment",
                "indexFilterSet" : false,
                    "parsedQuery" : {
            "userid" : {
                "$eq" : "1003"
            }
        },
        "winningPlan" : {
            "stage" : "COLLSCAN",
                "filter" : {
                "userid" : {
                    "$eq" : "1003"
                }
            },
            "direction" : "forward"
        },
        "rejectedPlans" : []
    },
    "serverInfo" : {
        "host" : "9ef3740277ad",
            "port" : 27017,
                "version" : "4.0.10",
                    "gitVersion" : "c389e7f69f637f7a1ac3cc9fae843b635f20b766"
    },
    "ok" : 1
}
```

> 关键点看： "stage" : "COLLSCAN", 表示全集合扫描
>
> 关键点看： "stage" : "IXSCAN" ,基于索引的扫描



### 涵盖的查询

当查询条件和查询的投影仅包含索引字段时，MongoDB直接从索引返回结果，而不扫描任何文档或将文档带入内存。 这些覆盖的查询可以

非常有效。

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7MongoDB%E5%85%A5%E9%97%A8%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/image-20230305201748336.png" alt="image-20230305201748336" style="zoom:67%;" />

```
> db.comment.find({userid:"1003"},{userid:1,_id:0})
	{ "userid" : "1003" }
	{ "userid" : "1003" }
	
> db.comment.find({userid:"1003"},{userid:1,_id:0}).explain()
{
	"queryPlanner" : {
		"plannerVersion" : 1,
		"namespace" : "articledb.comment",
		"indexFilterSet" : false,
		"parsedQuery" : {
			"userid" : {
				"$eq" : "1003"
			}
		},
		"winningPlan" : {
			"stage" : "PROJECTION",
			"transformBy" : {
				"userid" : 1,
				"_id" : 0
			},
			"inputStage" : {
				"stage" : "IXSCAN",
				"keyPattern" : {
					"userid" : 1
				},
				"indexName" : "userid_1",
				"isMultiKey" : false,
				"multiKeyPaths" : {
					"userid" : [ ]
				},
				"isUnique" : false,
				"isSparse" : false,
				"isPartial" : false,
				"indexVersion" : 2,
				"direction" : "forward",
				"indexBounds" : {
					"userid" : [
						"[\"1003\", \"1003\"]"
					]
				}
			}
	},
	"rejectedPlans" : [ ]
},
"serverInfo" : {
	"host" : "bobohost.localdomain",
	"port" : 27017,
	"version" : "4.0.10",
	"gitVersion" : "c389e7f69f637f7a1ac3cc9fae843b635f20b766"
},
"ok" : 1
}
```

