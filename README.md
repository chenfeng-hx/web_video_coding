# 尚硅谷Git入门到精通全套教程(github-Gitee-gitlib)



# 课程地址

【尚硅谷Git入门到精通全套教程（涵盖GitHub\Gitee码云\GitLab）】 https://www.bilibili.com/video/BV1vy4y1s7k6/?p=2&share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304



# 课程目标

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304103856601.png" alt="image-20230304103856601" style="zoom:50%;" />

- github：国外服务器，登录慢，有限制，使用人多
- Gitee：国内版 github
- GitLib：多使用于公司内部，如不是开源的公司，相当于是私有仓库，公司内部创建 GitLib 服务器使用，不开源，私有



# Git 概述

### Git 简介：

- Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。
- 百度百科：https://baike.baidu.com/item/GIT/12647237?fr=aladdin
- 官网：https://git-scm.com/
- 相比于集中式版本控制，Git 将每个用户机都可以当做一个本地服务器，保存着所有的项目内容，历史记录等……



### Git 历史：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304110058533.png" alt="image-20230304110058533" style="zoom:50%;" />

### Git 工作机制：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304110444448.png" alt="image-20230304110444448" style="zoom:67%;" />

- 工作区：本地存储的代码内容，磁盘分配的工作区
- 暂存区：存在历史记录，依旧在本地（未上传），依旧可以删除！
- 本地库：存在版本控制，不可以轻易删除，在上传代码到本地库之前需要==慎重==！！！
- 远程库：在本地库之上，通过 push 命令将本地库推送到远程库！



### 代码托管中心：

代码托管中心：基于网络服务器的远程代码仓库，一般我们简称为 ==远程库==！

1. 局域网：GitLib
2. 互联网：GitHub（外网）、Gitee（国内网站）





# Git 安装

下载地址看官网！

安装步骤：改路径、选 Components 最后俩默认不选、后面的默认即可

git -- version ：查看版本

打开 Git bash 后可以按住 <kbd>Ctrl</kbd> + 鼠标滚轮 调节字体大小



# Git 常用命令

|              命令名称               |      作用      |
| :---------------------------------: | :------------: |
| git config –global user.name 用户名 |  设置用户签名  |
| git config –global user.email 邮箱  |  设置用户签名  |
|              git init               |  初始化本地库  |
|             git status              | 查看本地库状态 |
|           git add 文件名            |  添加到暂存区  |
|   git commit -m “日志信息 文件名”   |  提交到本地库  |
|             git reflog              |  查看历史记录  |
|       git reset –hard 版本号        |    版本穿梭    |

1. 设置签名：
  1. 签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够查看到，以此确认本次提交是谁做的。
  2. ==Git 首次安装必须设置用户签名，否则无法提交代码！==
  3. 注意：这里设置的用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。
  4. 签名完成后可以在用户目录中查看到签名文件：C:\\Users\\尘封\\.gitconfig
2. 初始化仓库：
  1. 新建文件夹
  2. git init：初始化本地仓库

3. 添加文件到暂存区：
  1. git add .：添加所有的文件到暂存区
  2. git add \<file name> ：添加某个文件到暂存区
  3. 删除暂存区中的文件：使用 git status 后在绿色文件名称上方会有提示

4. 将暂存区的文件提交到本地库：
  1. git commit -m “日志信息” 文件名
  2. `git commit -m "my first commit" README.md`
  3. <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304133536533.png" alt="image-20230304133536533" style="zoom:50%;" />

5. 查看提交的版本信息：
  1. git reflog：可以查看到历史提交的版本号及版本信息（精简版，版本号的前7位）
  2. git log：查看完整详细版的提交记录，完整的版本号以及提交的用户名和邮箱
  3. <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304133834453.png" alt="image-20230304133834453" style="zoom:50%;" />

6. 版本穿梭（跳转到以前提交过的版本）：
  1. git reset –hard 版本号
  2. <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304135641490.png" alt="image-20230304135641490" style="zoom:50%;" />
  3. 可以在 \.git 文件夹中的 HEAD 文件中看到当前指针指向的分支，其次在 refs\\heads\\xxx 文件中可以看到当前指向的版本信息
  4. 版本控制底层原理其实是 head 指针的不断变化
  5. <img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304140219229.png" alt="image-20230304140219229" style="zoom:50%;" />





# Git 分支操作

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304142105608.png" alt="image-20230304142105608" style="zoom:67%;" />

## 什么是分支？

  在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独的分支。使用分支就意味着程序员可以把自己的工作从开发主线上分离开，开发自己分支的时候，不会影响主线分支的运行。分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也就是指针的引用）

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304142532511.png" alt="image-20230304142532511" style="zoom:50%;" />

## 分支的好处：

1. 同时并行推进多个功能的开发，提高开发效率
2. 各大分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。



## 分支的操作

|      命令名称       |             作用             |
| :-----------------: | :--------------------------: |
|  git branch 分支名  |           创建分支           |
|    git branch -v    |           查看分支           |
| git checkout 分支名 |           切换分支           |
|  git merge 分支名   | 把指定的分支合并到当前分支上 |

1. 分支合并问题

	1. 先切换到当前需要修改的分支上，如修改 master 分支，就先切换为 master 分支，然后 使用命令 `git merge xxx(已经写好的要修改的内容的修改版的分支)`(如 hot-fix 分支)，将写好的内容合并到当前分支上(master)，当前 master 分支上和 hot-fix 分支上不同的内容会被替换为 hot-fix 中的内容！

	2. 合并冲突问题：

		1. 原因：合并分支时，两个分支在==同一个文件的同一个位置==有两套完全不同的修改。Git 无法替我们决定使用哪个，必须==人为决定==新代码的内容。
		2. 解决：

		```shell
		# 1.手动删除不需要的代码
		# 2.添加文件到暂存区
		git add "xxx"
		# 3.将文件提交到本地库(不需要带文件名，否则会报错)
		git commit -m "commit"
		```





# Git 团队协作机制

**团队内协作**：将成员加入团队后才能进行 修改后再 push 的操作，不是团队成员不能修改代码并上传

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304150147941.png" alt="image-20230304150147941" style="zoom: 33%;" />

**跨团队协作**：

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304150546814.png" alt="image-20230304150546814" style="zoom:33%;" />







# github 操作

|              命令              |           作用           |
| :----------------------------: | :----------------------: |
|         git remote -v          | 查看当前所有远程地址别名 |
|  git remote add 别名 远程地址  |         远程地址         |
| git push 本地库别名 本地库分支 |   将本地库推送到远程库   |
| git pull 远程库别名 远程库分支 | 将远程库代码拉取到本地库 |
|       git clone 远程地址       |    将远程库克隆到本地    |



## 创建远程库&创建别名

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304161751211.png" alt="image-20230304161751211" style="zoom: 67%;" />



## 远程仓库操作

### 将本地库推送到远程库

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304162507308.png" alt="image-20230304162507308" style="zoom: 67%;" />



### 将远程库拉取到本地库

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304162606869.png" alt="image-20230304162606869" style="zoom:67%;" />



### 将远程库克隆到本地

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304162918598.png" alt="image-20230304162918598" style="zoom: 67%;" />

1. 拉取代码
2. 创建本地库
3. 创建别名（别名自动创建为 origin）



## 团队协作

### 团队内协作：邀请成员加入

1. 在某个仓库的 settings 中，进入 Collaborators
2. 点击 Add people，进行搜索，搜索到后发送邀请
3. 对方接收到邀请后（可能需要在浏览器中输入发送过去的连接），点击同意即可加入项目



### 跨团队协作

1. 收到某个仓库的地址后浏览器打开，然后点击右上角的 <kbd>fork</kbd> 进行复制
2. 然后在自己的仓库中就可以看到这个代码库
3. 然后拉取到本地库中进行修改，然后进行上传
4. 上传结束后点击 “pull request”，点击“new pull request”，创建一个新的拉取请求
5. 发送完请求后，该仓库的原作者就会收到一个请求，然后可以点击“merge pull request”，“confirm request” ，即可合并代码。



## SSH 免密登录

1. 在 git bash 中使用命令 `ssh-keugen -t rsa -C "xxx"(标识符信息，可以填写自己的邮箱地址)` 生成公私钥文件
2. 在\\用户\\.ssh 文件夹中，打开 pub 共要文件，复制内容
3. 在 github 个人中心中，打开 settings，进入 SSH and GPG keys
4. 点击 “New SSH key”，输入 title（标识符），key（复制的公钥），即可完成 SSH 免密登陆，可以使用 ssh 进行 push 和 pull，不用再和本地计算机绑定凭证



# VScode 使用 Git









# IDEA 集成 Git



# IDEA 集成 Github



# 国内代码托管中心——码云

当 github 仓库发生更改时，点击仓库名后面的刷新按钮进行仓库更新

<img src="https://gitee.com/chenfenghx/typora-images/raw/master/%E5%B0%9A%E7%A1%85%E8%B0%B7Git%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A%E5%85%A8%E5%A5%97%E6%95%99%E7%A8%8B(github-Gitee-gitlib)/image-20230304172902052.png" alt="image-20230304172902052" style="zoom:50%;" />



# 自建代码托管平台——GitLab