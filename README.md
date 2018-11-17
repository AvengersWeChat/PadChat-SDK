# Padchat-SDK

<!-- TOC depthFrom:2 -->

- [说明](#说明)
- [接口功能列表](#接口功能列表)
- [通讯约定](#通讯约定)
  - [通信协议](#通信协议)
    - [连接授权](#连接授权)
    - [API请求操作结果（识别异步请求）](#api请求操作结果识别异步请求)
    - [数据规则约定](#数据规则约定)
  - [API请求结构](#api请求结构)
    - [data字段总述](#data字段总述)
- [DEMO](#demo)
- [API文档](#api文档)

<!-- /TOC -->

## 说明

Padchat开发包。通过websocket协议与运行在windows平台上的微信ipad协议服务程序通讯，来登陆与操作微信。

## 接口功能列表

| **接口**           | **code**            | **备注**                              |
| ------------------ | :-----------------: | ------------------------------------- |
| **登陆管理**       |                     |
| 初始化实例         | init                | 初始化任务实例                        |
| 登陆               | login               | 登陆账号                              |
| 注销登录           | logout              | 会退出账号登陆                        |
| 关闭实例           | close               | 关闭任务实例，不退出账号登陆          |
| 获取设备登陆数据   | getWxData           | 固定设备登陆数据                      |
| 获取二次登陆数据   | getLoginToken       | 可使用二次登陆数据免扫码或免密码登陆  |
| **用户管理**       |
| 获取用户信息       | getContact          | 获取用户详细信息                      |
| 搜索用户           | searchContact       |
| 通过好友请求       | acceptUser          |
| 添加好友           | addContact          |
| 打招呼             | sayHello            |                                       |
| 删除好友           | deleteContact       |
| 设置好友备注       | setRemark           |
| 设置头像           | setHeadImg          |
| 主动触发同步消息   | syncMsg             |                                       |
| 主动同步通讯录     | syncContact         |                                       |
| 获取用户二维码     | getContactQrcode    | 用于获取自己的二维码图片              |
| 获取当前用户信息   | getMyInfo           | 用于获取当前微信号的wxid和uin         |
| **群管理**         |
| 创建群             | createRoom          |
| 获取群成员         | getRoomMembers      |
| 添加群成员         | addRoomMember       |
| 邀请好友进群       | inviteRoomMember    |
| 删除群成员         | deleteRoomMember    |
| 退出群             | quitRoom            |
| 设置群公告         | setRoomAnnouncement | 设置群公告会自动@通知群内所有成员     |
| 设置群名称         | setRoomName         | 修改微信群名称                        |
| 获取进群二维码     | getRoomQrcode       | 获取到的进群二维码有效期为7天         |
| **发送消息**       |
| 发送文本消息       | sendMsg             |
| 发送App消息        | sendAppMsg          | 发送图文链接消息                      |
| 发送图片消息       | sendImage           |
| 发送语音消息       | sendVoice           | 语音文件必须是silk格式                |
| 发送名片           | shareCard           |
| **获取图片、文件** |
| 获取消息图片原图   | getMsgImage         | 获取图片消息的原始图片数据            |
| 获取消息视频数据   | getMsgVideo         | 获取小视频消息的视频数据              |
| 获取消息语音数据   | getMsgVoice         | 获取语音消息的语音数据                |
| **朋友圈操作**     |
| 发朋友圈           | snsSendMoment       | 发表文字朋友圈信息                    |
| 朋友圈上传图片     | snsUpload           | 上传后仅能得到url，而非真正的发朋友圈 |
| 查看用户朋友圈     | snsUserPage         | 查看指定用户朋友圈信息                |
| 获取朋友圈动态     | snsTimeline         | 查看朋友圈时间轴信息                  |
| 获取朋友圈消息详情 | snsGetObject        |
| 操作朋友圈         | snsObjectOp         |                                       |
| 发表评论           | snsComment          |
| 点赞               | snsLike             |
| **收藏操作**       |
| 同步收藏消息       | syncFav             |
| 添加收藏           | addFav              |
| 获取收藏消息详情   | getFav              |
| 删除收藏           | deleteFav           |
| **标签管理**       |
| 添加标签           | addLabel            |
| 删除标签           | deleteLabel         |
| 获取所有标签       | getLabelList        |
| 设置用户标签       | setLabel            |
| **公众号操作**     |
| 搜索公众号         | searchMp            | 根据关键字搜索公众号                  |
| 获取公众号信息     | getSubscriptionInfo |
| 操作公众号菜单     | operateSubscription |
| 获取公众号网页授权 | getRequestToken     | 需要授权才能访问的网页需要先授权      |
| 访问授权页面       | requestUrl          | 以授权过的身份访问页面                |
| **小程序相关操作** |                     | 支持转发分享                          |

完整接口见**API文档**

## 通讯约定

### 通信协议

WebSocket 通信协议

- [websockets 官方github](https://github.com/websockets)
- [NodeJs 参考](https://github.com/websockets/ws)

#### 连接授权

后续更新。

#### API请求操作结果（识别异步请求）

由于websocket自身是异步操作，未原生支持识别请求返回的结果（即向服务端发送一个请求，服务端返回执行结果，客户端却无法确认是自己这个主动请求的结果，或者是另一个请求的返回结果，或者是服务端主动推送）。因此本服务增加了一个字段`cmdId`，用于标识请求，并在返回操作结果时一块返回。

如果希望发送api请求后，能识别服务端执行本次请求后的返回结果，可提供`cmdId`字段，请一定提供随机值，建议使用`uuid`模块随机生成。当收到服务端推送过来的数据中包含`cmdId`字段时，即可确认为之前请求对应的执行结果。
建议结合使用`Promise`+`Event.once(cmdId)`来实现。

#### 数据规则约定

> 在sdk内统一字段命名，统一转换为`小驼峰`写法。

微信协议原生接口返回的所有数据字段名称下划线写法（如`user_name`），部分接口（公众号相关接口）返回的混合有大驼峰命名。在sdk内已经全部格式化为`小驼峰`写法。

目前仅残留有部分xml结构文本内没有格式化，需自行解析提取与转换。

如果遇到接口返回的某个字段是json文本，请发issues告知接口名称、返回数据样本，以便增加对其的解析。

### API请求结构

API请求是以websocket协议发送的json数据，以下为json数据的字段

| **名称** | **类型** | **描述**                                                      | **必选** |
| :------: | :------: | ------------------------------------------------------------- | :------: |
| type     | String   | 请求类型：`sys`/`user`                                        | 是       |
| cmd      | String   | API命令                                                       | 是       |
| cmdId    | String   | 指令id。用于识别API异步操作结果，操作结果会增加此属性推送回来 | 否       |
| data     | Object   | 取决于是不同的API要求                                         | 否       |

#### data字段总述

此部分为请求API指令时，需要附加的data数据。根据使用的API不同，需要提供不同的字段及对应数据。

| 字段名称         | 说明                       | 备注                                               |
| :--------------: | -------------------------- | -------------------------------------------------- |
| **登陆**         |
| loginType        | 登陆类型                   | 支持扫码、帐号密码、手机验证码、二次登陆、断线重连 |
| wxData           | 登陆设备数据               | 使用已登陆过的设备数据登录,可避免封号              |
| token            | 二次登陆token              | 结合`wxData`使用可免扫码、帐号登陆                 |
| **发送消息**     |                            |
| toUserName       | 目标用户/群id              | 群id包含@chatroom部分                              |
| content          | 文本内容                   | 文本消息内容、xml结构体文本、名片自定义标题        |
|                  |                            | 添加好友时，为验证信息                             |
| file             | 文件buffer的base64编码     | 发送图片/语音消息、上传头像、朋友圈上传图片        |
| time             | 语音的时间长度(单位为毫秒) | 发送语音消息                                       |
| atList           | `Array`,要at的用户用户     | `["wxid1","wxid2"]` 文本消息时有效                 |
| **群及好友管理** |                            |
| roomName         | 群名称                     |
| userIds          | `Array`,用户id列表数组     | `["wxid1","wxid2"]` 创建群                         |
| chatroom         | 要操作的群id               |
| remark           | 备注名称                   |
| userId           | 用户wxid                   | 主动添加好友、好友验证、添加/邀请用户进入群        |
| stranger         | V1码，相对加密的userId     | 接受好友请求(仅限stranger字段)                     |
|                  |                            | 主动添加好友(也可使用`userId`字段)                 |
| ticket           | V2码，好友请求中的ticket   | 添加单向好友、接受好友请求                         |
| type             | `Number`,操作类型          | 添加好友来源、朋友圈操作类型                       |
| **朋友圈**       |
| momentId         | 朋友圈消息id               |
| commentId        | `Number`,朋友圈评论id      |
| commentType      | `Number`,朋友圈评论类型    |
| **收藏**         |
| favKey           | 收藏分页key                | 通过分页key来分页拉取收藏                          |
| favId            | `Number`,收藏id            |
| **标签**         |
| label            | 标签名称                   |
| labelId          | 标签id                     |
| **公众号**       |
| ghName           | 公众号id,`gh_`开头         |
| menuId           | `Number`,公众号菜单id      |
| menuKey          | 公众号菜单key              |
| url              | 网页url                    |
| xKey             | 网页授权key                | 以公众号授权方式访问网页需要提供授权key            |
| xUin             | 网页授权uin                | 以公众号授权方式访问网页需要提供授权uin            |
| **其他**         |                            |
| rawMsgData       | `Object`,push事件中的data  | 用于接收红包、接收转账、获取原始图片               |

## DEMO

使用`npm i padchat-sdk`安装sdk包

使用DEMO见 [demo.js](./demo.js)

## API文档

SDK完整API文档见：[SDK Api文档](docs/index.md)
