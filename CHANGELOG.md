# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.1"></a>
## [0.6.1](https://github.com/binsee/padchat-sdk/compare/v0.5.11...v0.6.1) (2018-11-01)


### Bug Fixes

* **demo:** 更新demo中断线重连代码 ([fe5b2a6](https://github.com/binsee/padchat-sdk/commit/fe5b2a6))
* 修复断线重连判断错误 ([3abc799](https://github.com/binsee/padchat-sdk/commit/3abc799))


### Features

* 增加自动重连通知事件 ([cc29f3d](https://github.com/binsee/padchat-sdk/commit/cc29f3d))
* 将推送联系人从push事件中独立出来 ([81d9206](https://github.com/binsee/padchat-sdk/commit/81d9206))
* 更改cmdId为计数器，减少通讯中cmdId的占用尺寸 ([fd83bfd](https://github.com/binsee/padchat-sdk/commit/fd83bfd))
* 更改ws通讯中荷载字段名称为payload ([1635b14](https://github.com/binsee/padchat-sdk/commit/1635b14)), closes [#28](https://github.com/binsee/padchat-sdk/issues/28)
* 更改推送机制方案，以优化性能 ([fe22ae0](https://github.com/binsee/padchat-sdk/commit/fe22ae0))
* 登陆模式的断线重连名称改为 'auto' ([e2461e3](https://github.com/binsee/padchat-sdk/commit/e2461e3)), closes [#29](https://github.com/binsee/padchat-sdk/issues/29)
* **demo:** 可独立开关同步通讯录及消息 ([7d3f0e0](https://github.com/binsee/padchat-sdk/commit/7d3f0e0))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/binsee/padchat-sdk/compare/v0.5.11...v0.6.0) (2018-11-01)


### Bug Fixes

* **demo:** 更新demo中断线重连代码 ([fe5b2a6](https://github.com/binsee/padchat-sdk/commit/fe5b2a6))
* 修复断线重连判断错误 ([3abc799](https://github.com/binsee/padchat-sdk/commit/3abc799))


### Features

* 增加自动重连通知事件 ([cc29f3d](https://github.com/binsee/padchat-sdk/commit/cc29f3d))
* 将推送联系人从push事件中独立出来 ([81d9206](https://github.com/binsee/padchat-sdk/commit/81d9206))
* 更改cmdId为计数器，减少通讯中cmdId的占用尺寸 ([fd83bfd](https://github.com/binsee/padchat-sdk/commit/fd83bfd))
* 更改ws通讯中荷载字段名称为payload ([1635b14](https://github.com/binsee/padchat-sdk/commit/1635b14)), closes [#28](https://github.com/binsee/padchat-sdk/issues/28)
* 更改推送机制方案，以优化性能 ([fe22ae0](https://github.com/binsee/padchat-sdk/commit/fe22ae0))
* 登陆模式的断线重连名称改为 'auto' ([e2461e3](https://github.com/binsee/padchat-sdk/commit/e2461e3)), closes [#29](https://github.com/binsee/padchat-sdk/issues/29)
* **demo:** 可独立开关同步通讯录及消息 ([7d3f0e0](https://github.com/binsee/padchat-sdk/commit/7d3f0e0))



<a name="0.5.13"></a>
## [0.5.13](https://github.com/binsee/padchat-sdk/compare/v0.5.11...v0.5.13) (2018-09-05)



<a name="0.5.12"></a>
## [0.5.12](https://github.com/binsee/padchat-sdk/compare/v0.5.11...v0.5.12) (2018-08-23)



<a name="0.5.11"></a>
## [0.5.11](https://github.com/binsee/padchat-sdk/compare/v0.5.10...v0.5.11) (2018-08-23)


### Bug Fixes

* 修复使用设备数据登陆后再获取设备数据会无效的问题 ([042eaf1](https://github.com/binsee/padchat-sdk/commit/042eaf1))



<a name="0.5.10"></a>
## [0.5.10](https://github.com/binsee/padchat-sdk/compare/v0.5.9...v0.5.10) (2018-07-31)


### Bug Fixes

* 修复群内发送文本消息at成员无效的bug ([27ac206](https://github.com/binsee/padchat-sdk/commit/27ac206))



<a name="0.5.9"></a>
## [0.5.9](https://github.com/binsee/padchat-sdk/compare/v0.5.8...v0.5.9) (2018-07-20)



<a name="0.5.8"></a>
## [0.5.8](https://github.com/binsee/padchat-sdk/compare/v0.5.7...v0.5.8) (2018-07-20)


### Features

* 增加支持发送小程序 ([95668ad](https://github.com/binsee/padchat-sdk/commit/95668ad))



<a name="0.5.7"></a>
## [0.5.7](https://github.com/binsee/padchat-sdk/compare/v0.5.6...v0.5.7) (2018-07-16)


### Features

* 增加websocket关闭原因参数 ([ac7b14d](https://github.com/binsee/padchat-sdk/commit/ac7b14d))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/binsee/padchat-sdk/compare/v0.5.5...v0.5.6) (2018-06-13)


### Bug Fixes

* 修复重连机制可能引发新的异常问题 ([591cb66](https://github.com/binsee/padchat-sdk/commit/591cb66))



<a name="0.5.5"></a>
## [0.5.5](https://github.com/binsee/padchat-sdk/compare/v0.5.4...v0.5.5) (2018-06-13)


### Bug Fixes

* 修复warn事件没有正确获得服务器提示信息 ([66f1d7d](https://github.com/binsee/padchat-sdk/commit/66f1d7d))


### Features

* 增加start方法来实现更容易的重连 ([231b476](https://github.com/binsee/padchat-sdk/commit/231b476)), closes [#30](https://github.com/binsee/padchat-sdk/issues/30)



<a name="0.5.4"></a>
## [0.5.4](https://github.com/binsee/padchat-sdk/compare/v0.5.3...v0.5.4) (2018-06-09)


### Bug Fixes

* 断线重连登陆失败后，不需要重新初始化实例！ ([099e54f](https://github.com/binsee/padchat-sdk/commit/099e54f))



<a name="0.5.3"></a>
## [0.5.3](https://github.com/binsee/padchat-sdk/compare/v0.5.2...v0.5.3) (2018-06-08)


### Bug Fixes

* 修复发送语音显示时间为1秒问题 ([dbb9b24](https://github.com/binsee/padchat-sdk/commit/dbb9b24))



<a name="0.5.2"></a>
## [0.5.2](https://github.com/binsee/padchat-sdk/compare/v0.5.1...v0.5.2) (2018-06-04)


### Features

* 增加syncMsg接口，用于手动触发同步消息 ([2c0d488](https://github.com/binsee/padchat-sdk/commit/2c0d488))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/binsee/padchat-sdk/compare/v0.5.0...v0.5.1) (2018-06-03)


### Features

* 增加getMyInfo接口，用于获取当前微信号的wxid和uin ([e67fa16](https://github.com/binsee/padchat-sdk/commit/e67fa16))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/binsee/padchat-sdk/compare/v0.4.4...v0.5.0) (2018-05-25)


### Features

* syncContact增加参数`reset`，明确是否强制同步 ([b298327](https://github.com/binsee/padchat-sdk/commit/b298327))
* **demo:** 登陆成功后不再自动同步通讯录，根据需要调用syncContact来同步通讯录 ([a28f684](https://github.com/binsee/padchat-sdk/commit/a28f684))



<a name="0.4.4"></a>
## [0.4.4](https://github.com/binsee/padchat-sdk/compare/v0.4.3...v0.4.4) (2018-05-24)



<a name="0.4.3"></a>
## [0.4.3](https://github.com/binsee/padchat-sdk/compare/v0.4.2...v0.4.3) (2018-05-08)


### Bug Fixes

* 修复接口名称错误 ([98245fa](https://github.com/binsee/padchat-sdk/commit/98245fa))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/binsee/padchat-sdk/compare/v0.4.0...v0.4.2) (2018-04-28)


### Bug Fixes

* 增加解析push联系人事件中的群成员列表 ([8547c97](https://github.com/binsee/padchat-sdk/commit/8547c97))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/binsee/padchat-sdk/compare/v0.3.0...v0.4.0) (2018-04-11)


### Features

* **demo:** 增加终端中直接生成二维码的示例 ([1681760](https://github.com/binsee/padchat-sdk/commit/1681760)), closes [#6](https://github.com/binsee/padchat-sdk/issues/6)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/binsee/padchat-sdk/compare/v0.2.0...v0.3.0) (2018-04-08)


### Bug Fixes

* 修复demo中输出服务器地址 ([536fe6c](https://github.com/binsee/padchat-sdk/commit/536fe6c))
* **修复部分需要传递rawMsgData的接口调用失败问题；修复demo中保存设备参数错误:** 1. 增加部分接口返回数据样例 | 2.demo中增加接收转账及红包的示例 ([8d894b9](https://github.com/binsee/padchat-sdk/commit/8d894b9))


### Features

* **demo:** 增加通过文本指令执行指定接口的功能 ([45dafd4](https://github.com/binsee/padchat-sdk/commit/45dafd4))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/binsee/padchat-sdk/compare/v0.1.2...v0.2.0) (2018-04-03)


### Features

* 新增多个接口（配合协议服务v1.4及以上版本）；修复部分bug ([602d88b](https://github.com/binsee/padchat-sdk/commit/602d88b))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/binsee/padchat-sdk/compare/v0.1.1...v0.1.2) (2018-03-27)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/binsee/padchat-sdk/compare/v0.1.0...v0.1.1) (2018-03-26)


### Bug Fixes

* 修复demo保存设备参数名称错误 ([64f5604](https://github.com/binsee/padchat-sdk/commit/64f5604))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/binsee/padchat-sdk/compare/613b2ae...v0.1.0) (2018-03-20)


### Features

* v0.1.0 ([613b2ae](https://github.com/binsee/padchat-sdk/commit/613b2ae))
