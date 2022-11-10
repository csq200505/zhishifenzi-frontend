# 前端开发流程

前端是基于vue3的uni-app框架，注意vue3的语法与vue2有较大差异。

### 1. 如何运行项目？



首先，从github先将项目克隆到本地ide中：

操作方式:


(1) intelij 系列ide，如 idea，pycharm等

* 文件-->新建-->来自版本控制的项目-->

(2) 其他ide

* 自行研究吧



在克隆成功代码之后，在项目文件夹下进入控制台（cmd)，执行

或者直接在ide打开终端执行

```shell
npm install
```

如果下载速度太慢，请更换源地址

```shell
# 1.执行
npm config set registry https://registry.npmmirror.com
# 2.验证换源是否成功
npm config get registry
# 如果返回https://registry.npmmirror.com，说明成功。
```



**如果ide右下角跳出提示安装相应依赖，点 ’install ‘**

依赖下载完成后，我们的项目就可以运行并观察执行效果了，所以接下来，让我们测试一下效果

```shell
# 编译为微信小程序
npm run dev:mp-weixin 
```

编译成功了之后，打开微信开发者工具（没有就去下一个）

按照以下路径打开文件:

```javascript
zhishifenzi > dist > dev > mp-weixin
```

如果不按照这个路径打开，微信小程序将无法调试。

开发者工具上方  普通编译  点击编译



### 2. 开发规范

#### (1)项目结构如下：

```javascript
-src
	|_ pages // 页面
	|_ static //静态文件
	|_ store //状态管理
```

所有页面的开发都要放在pages下，按照这样的格式 （以默认页为例）：

```js
-pages
	|_ default
		|_ index.vue //主页面文件
		|_ index.js //如果需要分离js脚本
		|_ index.css //如果需要分离css样式；如果有能力的话也可以使用scss
```

比如我们的小程序有20个页面，那么pages文件夹下就有20个页面文件夹，如default页面文件夹，每个页面文件夹下包含一个到三个文件		! ! ! 新建文件后需要确定加到版本控制中

#### (2)git 操作，

对于git操作，提交推送时请按以下格式备注：

```text
[新增/修改/删除]你本次提交的具体内容
```

千万不要回滚git操作，可能会把别人提交的文件弄丢，git操作只需要拉取、提交、推送

还要注意两个人不要提交

