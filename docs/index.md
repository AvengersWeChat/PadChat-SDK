# Padchat Sdk v0.6.1 Documentation

<a name="Padchat"></a>

## Padchat ⇐ <code>EventEmitter</code>
**Kind**: global class  
**Extends**: <code>EventEmitter</code>  

* [Padchat](#Padchat) ⇐ <code>EventEmitter</code>
    * [new Padchat()](#new_Padchat_new)
    * _instance_
        * [.start()](#Padchat+start)
        * [.init()](#Padchat+init) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.close()](#Padchat+close) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.login(type, data)](#Padchat+login) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getWxData()](#Padchat+getWxData) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getLoginToken()](#Padchat+getLoginToken) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getMyInfo()](#Padchat+getMyInfo) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setSyncContact()](#Padchat+setSyncContact)
        * [.setSyncMsg()](#Padchat+setSyncMsg)
        * [.syncMsg()](#Padchat+syncMsg) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.syncContact([reset])](#Padchat+syncContact) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.logout()](#Padchat+logout) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.sendMsg(toUserName, content, [atList])](#Padchat+sendMsg) ⇒ <code>Promise.&lt;object&gt;</code>
        * ~~[.massMsg([userList], content)](#Padchat+massMsg) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * [.sendAppMsg(toUserName, content, object)](#Padchat+sendAppMsg) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.shareCard(toUserName, content, userId)](#Padchat+shareCard) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.sendImage(toUserName, file)](#Padchat+sendImage) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.sendVoice(toUserName, file, time)](#Padchat+sendVoice) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getMsgImage(rawMsgData)](#Padchat+getMsgImage) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getMsgVideo(rawMsgData)](#Padchat+getMsgVideo) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getMsgVoice(rawMsgData)](#Padchat+getMsgVoice) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.createRoom(userList)](#Padchat+createRoom) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getRoomMembers(groupId)](#Padchat+getRoomMembers) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.addRoomMember(groupId, userId)](#Padchat+addRoomMember) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.inviteRoomMember(groupId, userId)](#Padchat+inviteRoomMember) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.deleteRoomMember(groupId, userId)](#Padchat+deleteRoomMember) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.quitRoom(groupId)](#Padchat+quitRoom) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setRoomAnnouncement(groupId, content)](#Padchat+setRoomAnnouncement) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setRoomName(groupId, content)](#Padchat+setRoomName) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getRoomQrcode(groupId)](#Padchat+getRoomQrcode) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getContact(userId)](#Padchat+getContact) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.searchContact(userId)](#Padchat+searchContact) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.deleteContact(userId)](#Padchat+deleteContact) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getContactQrcode(userId, style)](#Padchat+getContactQrcode) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.acceptUser(stranger, ticket)](#Padchat+acceptUser) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.addContact(stranger, ticket, type, [content])](#Padchat+addContact) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.sayHello(stranger, ticket, content)](#Padchat+sayHello) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setRemark(userId, remark)](#Padchat+setRemark) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setHeadImg(file)](#Padchat+setHeadImg) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsUpload(file)](#Padchat+snsUpload) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsobjectOp(momentId, type, commentId, commentType)](#Padchat+snsobjectOp) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsSendMoment(content)](#Padchat+snsSendMoment) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsUserPage(userId, [momentId])](#Padchat+snsUserPage) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsTimeline([momentId])](#Padchat+snsTimeline) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsGetObject(momentId)](#Padchat+snsGetObject) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsComment(userId, momentId, content)](#Padchat+snsComment) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.snsLike(userId, momentId)](#Padchat+snsLike) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.syncFav([favKey])](#Padchat+syncFav) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.addFav(content)](#Padchat+addFav) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getFav(favId)](#Padchat+getFav) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.deleteFav(favId)](#Padchat+deleteFav) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getLabelList()](#Padchat+getLabelList) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.addLabel(label)](#Padchat+addLabel) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.deleteLabel(labelId)](#Padchat+deleteLabel) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.setLabel(userId, labelId)](#Padchat+setLabel) ⇒ <code>Promise.&lt;object&gt;</code>
        * ~~[.queryTransfer(rawMsgData)](#Padchat+queryTransfer) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * ~~[.acceptTransfer(rawMsgData)](#Padchat+acceptTransfer) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * ~~[.receiveRedPacket(rawMsgData)](#Padchat+receiveRedPacket) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * ~~[.queryRedPacket(rawMsgData, [index])](#Padchat+queryRedPacket) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * ~~[.openRedPacket(rawMsgData, key)](#Padchat+openRedPacket) ⇒ <code>Promise.&lt;object&gt;</code>~~
        * [.searchMp(content)](#Padchat+searchMp) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getSubscriptionInfo(ghName)](#Padchat+getSubscriptionInfo) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.operateSubscription(ghName, menuId, menuKey)](#Padchat+operateSubscription) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.getRequestToken(ghName, url)](#Padchat+getRequestToken) ⇒ <code>Promise.&lt;object&gt;</code>
        * [.requestUrl(url, xKey, xUin)](#Padchat+requestUrl) ⇒ <code>Promise.&lt;object&gt;</code>
        * ["open"](#Padchat+event_open)
        * ["close"](#Padchat+event_close)
        * ["error"](#Padchat+event_error)
        * ["warn"](#Padchat+event_warn)
        * ["qrcode"](#Padchat+event_qrcode)
        * ["scan"](#Padchat+event_scan)
        * ["login"](#Padchat+event_login)
        * ["autoLogin"](#Padchat+event_autoLogin)
        * ["loaded"](#Padchat+event_loaded)
        * ["logout"](#Padchat+event_logout)
        * ["over"](#Padchat+event_over)
        * ["sns"](#Padchat+event_sns)
        * ["push"](#Padchat+event_push)
        * ["contact"](#Padchat+event_contact)
    * _static_
        * [.Padchat](#Padchat.Padchat)
            * [new Padchat([url])](#new_Padchat.Padchat_new)

<a name="new_Padchat_new"></a>

### new Padchat()
Padchat模块

使用websocket与服务器进行通讯，拥有以下事件

Event | 说明
---- | ----
qrcode | 推送的二维码
scan | 扫码状态
push | 新信息事件
login | 登录
loaded | 通讯录载入完毕
logout | 注销登录
over | 实例注销（账号不退出）（要再登录需要重新调用init）
warn | 错误信息
sns | 朋友圈更新事件

**接口返回数据结构：** 所有接口均返回以下结构数据：
```
 {
   success: true,   // 执行是否成功
   err    : '',     // 错误提示
   msg    : '',     // 附加信息
   data   : {}      // 返回结果
 }
```

TODO: 补充各监听事件返回的数据定义

<a name="Padchat+start"></a>

### padchat.start()
启动websocket连接

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
<a name="Padchat+init"></a>

### padchat.init() ⇒ <code>Promise.&lt;object&gt;</code>
初始化

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error  : '',
    success: true
  }
```  
<a name="Padchat+close"></a>

### padchat.close() ⇒ <code>Promise.&lt;object&gt;</code>
关闭微信实例（不退出登陆）

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  
<a name="Padchat+login"></a>

### padchat.login(type, data) ⇒ <code>Promise.&lt;object&gt;</code>
登录账号
首次登录不需要传入`wxData`，登陆成功后本地保存`wxData`和`token`，以后使用断线重连或二次登陆，可降低封号概率。
任何登陆方式，使用成功登陆过的`wxData`都可降低封号概率。

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error  : '',
    msg    : '请使用手机微信扫码登陆！',
    success: true
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;qrcode&quot;</code> | 登录类型，默认为扫码登录 <br> `auto` **断线重连**，用于短时间使用`wxData`和`token`再次登录。`token`有效期很短，如果登陆失败，建议使用二次登陆方式 <br> `request` **二次登陆**。需要提供`wxData`和`token`数据，手机端会弹出确认框，点击后登陆。不容易封号 <br> `qrcode` **扫码登录**（现在此模式已经可以返回二维码内容的url了） <br> `phone` **手机验证码登录**，建议配合`wxData`使用 <br> `user` **账号密码登录**，建议配合`wxData`使用 |
| data | <code>object</code> |  | 附加数据 |
| [data.wxData] | <code>string</code> |  | 设备信息数据，登录后使用 `getDeviceInfo` 接口获得。<br>使用此数据可免设备安全验证，不容易封号 |
| [data.token] | <code>string</code> |  | 使用用任意方式登录成功后，使用 `getAutoLoginData` 接口获得。 <br>此token有过期时间，断开登录状态一段时间后会过期。 |
| [data.phone] | <code>string</code> |  | 手机号 |
| [data.code] | <code>string</code> |  | 手机验证码 |
| [data.username] | <code>string</code> |  | 用户名/qq号/手机号 |
| [data.password] | <code>string</code> |  | 密码 |

**Example** *(扫码登陆)*  
```js
const wx = new Padchat()
wx.on('open',()=>{
  await wx.init()
  await wx.login('qrcode',{wxData:'xxx'})
})
```
**Example** *(账号密码登陆)*  
```js
const wx = new Padchat()
wx.on('open',()=>{
  await wx.init()
  await wx.login('user',{wxData:'xxx',username:'name',password:'123456'})
})
```
**Example** *(手机验证码)*  
```js
const wx = new Padchat()
wx.on('open',()=>{
  await wx.init()
  await wx.login('phone',{wxData:'xxx',phone:'13512345678',code:'123456'})
})
```
**Example** *(断线重连)*  
```js
const wx = new Padchat()
wx.on('open',()=>{
  await wx.init()
  await wx.login('auto',{wxData:'xxx',token:'xxxxx'})
})
```
**Example** *(二次登陆)*  
```js
const wx = new Padchat()
wx.on('open',()=>{
  await wx.init()
  await wx.login('request',{wxData:'xxx',token:'xxxxx'})
})
```
<a name="Padchat+getWxData"></a>

### padchat.getWxData() ⇒ <code>Promise.&lt;object&gt;</code>
获取设备62数据

事实上，只要你有一次登陆成功，以后一直用这个62数据，不需要更换。

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data :
      {
        wxData: 'xxxxx'  //设备62数据
      }
  }
```  
<a name="Padchat+getLoginToken"></a>

### padchat.getLoginToken() ⇒ <code>Promise.&lt;object&gt;</code>
获取二次登陆数据

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error  : '',
    success: true,
    data   :
      {
        message: '',
        status : 0,
        token  : 'xxxx',   //二次登陆token
        uin    : 14900000  //微信号uin，唯一值
      }
  }
```  
<a name="Padchat+getMyInfo"></a>

### padchat.getMyInfo() ⇒ <code>Promise.&lt;object&gt;</code>
获取微信号信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error  : '',
    success: true,
    data:
      {
        userName: 'wxid_xxxx',   //微信号id，注意不一定是微信号，全局唯一
        uin     : 101234567      //微信号uin，全局唯一
      }
  }
```  
<a name="Padchat+setSyncContact"></a>

### padchat.setSyncContact()
设置是否同步联系人

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
<a name="Padchat+setSyncMsg"></a>

### padchat.setSyncMsg()
设置是否同步消息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
<a name="Padchat+syncMsg"></a>

### padchat.syncMsg() ⇒ <code>Promise.&lt;object&gt;</code>
同步消息

使用此接口手动触发同步消息，一般用于刚登陆后调用，可立即开始同步消息。
否则会在有新消息时才开始同步消息。

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  
<a name="Padchat+syncContact"></a>

### padchat.syncContact([reset]) ⇒ <code>Promise.&lt;object&gt;</code>
同步通讯录

使用此接口可以触发同步通讯录，如果设置`reset`为`true`，则在通讯录同步完毕后触发`loaded`事件

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reset] | <code>boolean</code> | <code>false</code> | 是否重置通讯录加载完毕状态 |

<a name="Padchat+logout"></a>

### padchat.logout() ⇒ <code>Promise.&lt;object&gt;</code>
退出登录

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  
<a name="Padchat+sendMsg"></a>

### padchat.sendMsg(toUserName, content, [atList]) ⇒ <code>Promise.&lt;object&gt;</code>
发送文字信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data : {
      message: '',
      msgId  : '5172746684759824075',
      status : 0
    }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| toUserName | <code>string</code> |  | 接收者的wxid |
| content | <code>string</code> |  | 内容文本 |
| [atList] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | 向群内发信息时，要@的用户wxid数组。 内容文本中要有@同样数量的用户昵称，不足时，将自动前缀空白的@符号及换行符 |

**Example** *(at群成员示例 - content内@了群成员昵称)*  
```js
wx.sendMsg('123456@chatroom','@nickname1 @nickname2 message body',['wxid1','wxid2'])
// 显示内容:
// `@nickname1 @nickname2 message body`
```
**Example** *(at群成员示例 - content内遗漏@群成员: )*  
```js
wx.sendMsg('123456@chatroom','@nickname1 message body',['wxid1','wxid2','wxid3'])
// 显示内容:
// `@@
// @nickname1 message body`
```
<a name="Padchat+massMsg"></a>

### ~~padchat.massMsg([userList], content) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

群发文字信息

FIXME: 此接口有问题，暂停使用

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [userList] | <code>Array.&lt;string&gt;</code> | <code>[]</code> | 接收者wxid数组 |
| content | <code>string</code> |  | 内容文本 |

<a name="Padchat+sendAppMsg"></a>

### padchat.sendAppMsg(toUserName, content, object) ⇒ <code>Promise.&lt;object&gt;</code>
发送App消息(含小程序)

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data : {
      message: '',
      msgId  : '2195811529497100215',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| toUserName | <code>string</code> | 接收者的wxid |
| content | <code>object</code> \| <code>string</code> | app消息体文本(appmsg xml结构) |
| object | <code>object</code> | app消息体对象(消息体文本和对象二选一) |
| [object.appid] | <code>string</code> | appid，忽略即可 |
| [object.sdkver] | <code>string</code> | sdk版本，忽略即可 |
| [object.title] | <code>string</code> | 标题 |
| [object.des] | <code>string</code> | 描述 |
| [object.url] | <code>string</code> | 链接url |
| [object.thumburl] | <code>string</code> | 缩略图url |

**Example** *(发送app消息对象)*  
```js
// 直接在第二个参数中传入消息体对象
await wx.sendAppMsg('filehelper',{
      appid    = '',   //appid，忽略即可
      sdkver   = '',   //sdk版本，忽略即可
      title    = '',   //标题
      des      = '',   //描述
      url      = '',   //链接url
      thumburl = '',   //缩略图url
    })
```
**Example** *(发送app消息体文本)*  
```js
// 如第二个参数传入非空文本，则忽略第三个参数
await wx.sendAppMsg('filehelper','<appmsg><title>标题</title><des>描述</des><action>view</action><type>5</type><showtype>0</showtype><content></content><url>http://wx.qq.com</url><thumburl>http://wx.qq.com/logo.png</thumburl></appmsg>')
```
<a name="Padchat+shareCard"></a>

### padchat.shareCard(toUserName, content, userId) ⇒ <code>Promise.&lt;object&gt;</code>
分享名片

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data : {
      message: '',
      msgId  : '1797099903789182796',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| toUserName | <code>string</code> | 接收者的wxid |
| content | <code>string</code> | 内容文本 |
| userId | <code>string</code> | 被分享人wxid |

<a name="Padchat+sendImage"></a>

### padchat.sendImage(toUserName, file) ⇒ <code>Promise.&lt;object&gt;</code>
发送图片消息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data : {
      message: '',
      msgId  : '1797099903789182796',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| toUserName | <code>string</code> | 接收者的wxid |
| file | <code>Buffer</code> \| <code>string</code> | 图片Buffer数据或base64 |

<a name="Padchat+sendVoice"></a>

### padchat.sendVoice(toUserName, file, time) ⇒ <code>Promise.&lt;object&gt;</code>
发送语音消息
注意：只能发送silk格式的语音文件

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    error: '', success: true,
    data : {
      data   : 2490,                   //语音文件尺寸
      message: '',
      msgId  : '136722815749654341',
      size   : 0,
      status : 0
    }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| toUserName | <code>string</code> |  | 接收者的wxid |
| file | <code>Buffer</code> \| <code>string</code> |  | 语音Buffer数据或base64 |
| time | <code>number</code> | <code>0</code> | 语音时间，单位为毫秒 |

<a name="Padchat+getMsgImage"></a>

### padchat.getMsgImage(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>
获取消息原始图片

在push事件中收到的data数据是缩略图图片数据，使用本接口获取原图数据

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        image  : 'base64_xxxx',   //base64编码的原图数据
        message: '',
        size   : 8139,            //图片数据尺寸
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+getMsgVideo"></a>

### padchat.getMsgVideo(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>
获取消息原始视频

在push事件中只获得推送通知，不包含视频数据，需要使用本接口获取视频文件数据

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        message: '',
        size   : 160036,        //视频数据尺寸
        status : 0,
        video  : 'base64_xxxx'  //base64编码的视频数据
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+getMsgVoice"></a>

### padchat.getMsgVoice(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>
获取消息语音数据

这个接口获取到的与push事件中接收到的数据一致，是base64编码的silk格式语音数据

BUG: 超过60Kb的语音数据，只能拉取到60Kb，也就是说大约36~40秒以上的语音会丢失后边部分语音内容

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        message: '',
        size   : 2490,          //语音数据尺寸
        status : 0,
        voice  : 'base64_xxxx'  //base64编码的语音数据
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+createRoom"></a>

### padchat.createRoom(userList) ⇒ <code>Promise.&lt;object&gt;</code>
创建群

注意：如果有用户存在问题不能进群，则会建群失败。
但判断是否成功应以`userName`字段

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        message : 'Everything is OK',    //操作结果提示，失败为`MemberList are wrong`
        status  : 0,
        userName: '5658541000@chatroom'  //如果建群成功，则返回群id
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userList | <code>Array.&lt;string&gt;</code> | 用户wxid数组 |

<a name="Padchat+getRoomMembers"></a>

### padchat.getRoomMembers(groupId) ⇒ <code>Promise.&lt;object&gt;</code>
获取群成员信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        chatroomId: 700000001,
        count     : 3,           //群成员数量
        member    :              //群成员列表
         [{
            bigHead         : 'http://wx.qlogo.cn/xxx/0',     //大头像url
            chatroomNickName: '',                             //群内昵称
            invitedBy       : 'binsee',                       //进群邀请人
            nickName        : '复仇者联盟',                          //昵称
            smallHead       : 'http://wx.qlogo.cn/xxx/132',   //小头像url
            userName        : 'wxid_xxxx'                     //wxid
          }],
        message : '',
        status  : 0,
        userName: '5658541000@chatroom'  //群id
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |

<a name="Padchat+addRoomMember"></a>

### padchat.addRoomMember(groupId, userId) ⇒ <code>Promise.&lt;object&gt;</code>
添加群成员

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: 'Everything is OK',   //失败为`MemberList are wrong`
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |
| userId | <code>string</code> | 用户wxid |

<a name="Padchat+inviteRoomMember"></a>

### padchat.inviteRoomMember(groupId, userId) ⇒ <code>Promise.&lt;object&gt;</code>
邀请群成员
会给对方发送一条邀请消息，无法判断对方是否真的接收到

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |
| userId | <code>string</code> | 用户wxid |

<a name="Padchat+deleteRoomMember"></a>

### padchat.deleteRoomMember(groupId, userId) ⇒ <code>Promise.&lt;object&gt;</code>
删除群成员

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |
| userId | <code>string</code> | 用户wxid |

<a name="Padchat+quitRoom"></a>

### padchat.quitRoom(groupId) ⇒ <code>Promise.&lt;object&gt;</code>
退出群

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |

<a name="Padchat+setRoomAnnouncement"></a>

### padchat.setRoomAnnouncement(groupId, content) ⇒ <code>Promise.&lt;object&gt;</code>
设置群公告

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |
| content | <code>string</code> | 群公告内容 |

<a name="Padchat+setRoomName"></a>

### padchat.setRoomName(groupId, content) ⇒ <code>Promise.&lt;object&gt;</code>
设置群名称

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |
| content | <code>string</code> | 群名称 |

<a name="Padchat+getRoomQrcode"></a>

### padchat.getRoomQrcode(groupId) ⇒ <code>Promise.&lt;object&gt;</code>
获取微信群二维码

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        footer : '该二维码7天内(4月13日前)有效，重新进入将更新',
        message: '',
        qrCode : '',                            //进群二维码图片base64
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>string</code> | 群id |

<a name="Padchat+getContact"></a>

### padchat.getContact(userId) ⇒ <code>Promise.&lt;object&gt;</code>
获取用户/群信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch

微信用户/公众号返回：

```
  {
    success: true,
    data   :
      {
        bigHead        : 'http://wx.qlogo.cn/xxx/0',     //大头像url
        city           : 'mesa',                         //城市
        country        : 'CN',                           //国家
        intro          : '',                             //简介（公众号主体）
        label          : '',                             //（标签）
        message        : '',
        nickName       : '复仇者联盟',                           //昵称
        provincia      : 'Henan',                        //省份
        pyInitial      : 'SM',                           //昵称拼音简写
        quanPin        : 'shamu',                        //昵称拼音
        remark         : '',                             //备注
        remarkPyInitial: '',                             //备注拼音简写
        remarkQuanPin  : '',                             //备注拼音
        sex            : 1,                              //性别：1男2女
        signature      : '签名',                           //个性签名
        smallHead      : 'http://wx.qlogo.cn/xxx/132',   //小头像url
        status         : 0,
        stranger       : 'v1_xxx@stranger',              //用户v1码，从未加过好友则为空
        ticket         : 'v2_xxx@stranger',              //用户v2码，如果非空则为单向好友(非对方好友)
        userName       : 'binxxx'                        //用户wxid
      }
  }
```

微信群返回:

```
  {
    success: true,
    data   : {
      city           : '',
      country        : '',
      intro          : '',
      label          : '',
      member         : [],                            //群成员wxid数组
      message        : '',
      provincia      : '',
      remark         : '',
      sex            : 0,
      signature      : '',
      status         : 0,
      stranger       : 'v1_xxx@stranger',
      ticket         : '',
      bigHead        : '',
      chatroomId     : 700001234,
      chatroomOwner  : 'wxid_xxx',
      maxMemberCount : 500,                           //群最大人数
      memberCount    : 377,                           //群当前人数
      nickName       : 'Wechaty Developers\' Home',   //群名称
      pyInitial      : 'WECHATYDEVELOPERSHOME',
      quanPin        : 'WechatyDevelopersHome',
      remarkPyInitial: '',
      remarkQuanPin  : '',
      smallHead      : 'http://wx.qlogo.cn/xxx/0',    //群头像url
      userName       : '1234567890@chatroom'
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid/群id |

<a name="Padchat+searchContact"></a>

### padchat.searchContact(userId) ⇒ <code>Promise.&lt;object&gt;</code>
搜索用户
可用此接口来判断是否已经加对方为好友

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        bigHead  : 'http://wx.qlogo.cn/xxx/0',     //大头像url
        city     : 'mesa',                         //城市
        country  : 'CN',                           //国家
        message  : '',
        nickName : '复仇者联盟',                           //昵称
        provincia: 'Henan',                        //省份
        pyInitial: 'SM',                           //昵称拼音简写
        quanPin  : 'shamu',                        //昵称拼音
        sex      : 1,                              //性别：1男2女
        signature: '签名',                           //个性签名
        smallHead: 'http://wx.qlogo.cn/xxx/132',   //小头像url
        status   : 0,
        stranger : 'v1_xxx@stranger',              //好友为空，非好友显示v2码
        userName : 'binxxx'                        //是自己好友显示wxid，非好友为v1码
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |

<a name="Padchat+deleteContact"></a>

### padchat.deleteContact(userId) ⇒ <code>Promise.&lt;object&gt;</code>
删除好友

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |

<a name="Padchat+getContactQrcode"></a>

### padchat.getContactQrcode(userId, style) ⇒ <code>Promise.&lt;object&gt;</code>
获取用户二维码
仅限获取自己的二维码，无法获取其他人的二维码

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        footer : '',
        message: '',
        qrCode : '',   //二维码图片base64
        status : 0
      }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| userId | <code>string</code> |  | 用户wxid |
| style | <code>Number</code> | <code>0</code> | 二维码风格。可用范围0-3 |

<a name="Padchat+acceptUser"></a>

### padchat.acceptUser(stranger, ticket) ⇒ <code>Promise.&lt;object&gt;</code>
通过好友验证

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| stranger | <code>string</code> | 用户stranger数据 |
| ticket | <code>string</code> | 用户ticket数据 |

<a name="Padchat+addContact"></a>

### padchat.addContact(stranger, ticket, type, [content]) ⇒ <code>Promise.&lt;object&gt;</code>
添加好友

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0    //如果对方设置了验证，会返回-44
    }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stranger | <code>string</code> |  | 用户stranger数据 |
| ticket | <code>string</code> |  | 用户ticket数据 |
| type | <code>Number</code> | <code>3</code> | 添加好友途径   <br> `0` : 通过微信号搜索   <br> `1` : 搜索QQ号   <br> `3` : 通过微信号搜索   <br> `4` : 通过QQ好友添加   <br> `8` : 通过群聊   <br> `12`: 来自QQ好友   <br> `14`: 通过群聊   <br> `15`: 通过搜索手机号   <br> `17`: 通过名片分享      //未验证   <br> `22`: 通过摇一摇打招呼方式  //未验证   <br> `25`: 通过漂流瓶       //未验证   <br> `30`: 通过二维码方式     //未验证 |
| [content] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 验证信息 |

<a name="Padchat+sayHello"></a>

### padchat.sayHello(stranger, ticket, content) ⇒ <code>Promise.&lt;object&gt;</code>
打招呼
如果已经是好友，会收到由系统自动发送，来自对方的一条文本信息
“xx已通过你的朋友验证请求，现在可以开始聊天了”

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| stranger | <code>string</code> | 用户stranger数据 |
| ticket | <code>string</code> | 用户ticket数据 |
| content | <code>string</code> | 打招呼内容 |

<a name="Padchat+setRemark"></a>

### padchat.setRemark(userId, remark) ⇒ <code>Promise.&lt;object&gt;</code>
设置备注

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |
| remark | <code>string</code> | 备注名称 |

<a name="Padchat+setHeadImg"></a>

### padchat.setHeadImg(file) ⇒ <code>Promise.&lt;object&gt;</code>
设置头像

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
    {
      success: true,
      data   :
        {
          bigHead  : 'http://wx.qlogo.cn/mmhead/ver_1/xxx/0',
          data     : 1527,                                        //图片文件尺寸
          message  : '',
          size     : 1527,                                        //图片文件尺寸
          smallHead: 'http://wx.qlogo.cn/mmhead/ver_1/xxx/132',
          status   : 0
        }
    }
```  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | 图片Buffer数据或base64 |

<a name="Padchat+snsUpload"></a>

### padchat.snsUpload(file) ⇒ <code>Promise.&lt;object&gt;</code>
上传图片到朋友圈
NOTE: 此接口只能上传图片，并不会将图片发到朋友圈中

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
    {
      success: true,
      data   :
        {
          bigHead  : 'http://mmsns.qpic.cn/mmsns/xxx/0',
          data     : 1527,                                   //图片文件尺寸
          message  : '',
          size     : 1527,                                   //图片文件尺寸
          smallHead: 'http://mmsns.qpic.cn/mmsns/xxx/150',
          status   : 0
        }
    }
```  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Buffer</code> \| <code>string</code> | 图片Buffer数据或base64 |

<a name="Padchat+snsobjectOp"></a>

### padchat.snsobjectOp(momentId, type, commentId, commentType) ⇒ <code>Promise.&lt;object&gt;</code>
操作朋友圈

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| momentId | <code>string</code> |  | 朋友圈信息id |
| type | <code>Number</code> |  | 操作类型，1为删除朋友圈，4为删除评论，5为取消赞 |
| commentId | <code>Number</code> |  | 操作类型，当type为4时，对应删除评论的id，其他状态为0 |
| commentType | <code>Number</code> | <code>2</code> | 操作类型，当删除评论时可用，需与评论type字段一致 |

<a name="Padchat+snsSendMoment"></a>

### padchat.snsSendMoment(content) ⇒ <code>Promise.&lt;object&gt;</code>
发朋友圈

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        data:
          {
            create_time: 1523015689,
            description:              //朋友圈信息xml结构体文本
            '<Timelineobject><id>12775981595019653292</id><username>wxid_xxx</username><createTime>1523015689</createTime><contentDesc>来自代码发的朋友圈</contentDesc><contentDescShowType>0</contentDescShowType><contentDescScene>3</contentDescScene><private>0</private><sightFolded>0</sightFolded><appInfo><id></id><version></version><appName></appName><installUrl></installUrl><fromUrl></fromUrl><isForceUpdate>0</isForceUpdate></appInfo><sourceUserName></sourceUserName><sourceNickName></sourceNickName><statisticsData></statisticsData><statExtStr></statExtStr><Contentobject><contentStyle>2</contentStyle><title></title><description></description><mediaList></mediaList><contentUrl></contentUrl></Contentobject><actionInfo><appMsg><messageAction></messageAction></appMsg></actionInfo><location poiClassifyId="" poiName="" poiAddress="" poiClassifyType="0" city=""></location><publicUserName></publicUserName><streamvideo><streamvideourl></streamvideourl><streamvideothumburl></streamvideothumburl><streamvideoweburl></streamvideoweburl></streamvideo></Timelineobject>',
            id       : '12775981595019653292',   //朋友圈信息id
            nick_name: '复仇者联盟',
            user_name: 'wxid_xxxx'
          },
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 文本内容或`Timelineobject`结构体文本 |

<a name="Padchat+snsUserPage"></a>

### padchat.snsUserPage(userId, [momentId]) ⇒ <code>Promise.&lt;object&gt;</code>
查看用户朋友圈

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        count: 1,
        data :     //朋友圈信息结构数组（无评论和点赞数据）
          [{
            create_time: 1523015689,
            description: '<Timelineobject><id>12775981595019653292</id><username>wxid_xxx</username><createTime>1523015689</createTime><contentDesc>来自代码发的朋友圈</contentDesc><contentDescShowType>0</contentDescShowType><contentDescScene>3</contentDescScene><private>0</private> <sightFolded>0</sightFolded> <appInfo><id></id><version></version><appName></appName><installUrl></installUrl><fromUrl></fromUrl><isForceUpdate>0</isForceUpdate></appInfo> <sourceUserName></sourceUserName> <sourceNickName></sourceNickName> <statisticsData></statisticsData> <statExtStr></statExtStr> <Contentobject><contentStyle>2</contentStyle><title></title><description></description><mediaList></mediaList><contentUrl></contentUrl></Contentobject> <actionInfo><appMsg><messageAction></messageAction></appMsg></actionInfo> <location poiClassifyId="" poiName="" poiAddress="" poiClassifyType="0" city=""></location> <publicUserName></publicUserName> <streamvideo><streamvideourl></streamvideourl><streamvideothumburl></streamvideothumburl><streamvideoweburl></streamvideoweburl></streamvideo></Timelineobject> ',
            id         : '12775981595019653292',
            nick_name  : '复仇者联盟',
            user_name  : 'wxid_xxx'
          }],
        message: '',
        page   : '81cb2ad01ebc219f',
        status : 0
      }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| userId | <code>string</code> |  | 用户wxid |
| [momentId] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 朋友圈信息id 首次传入空即获取第一页，以后传入上次拉取的最后一条信息id |

<a name="Padchat+snsTimeline"></a>

### padchat.snsTimeline([momentId]) ⇒ <code>Promise.&lt;object&gt;</code>
查看朋友圈动态

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        count: 1,
        data :     //朋友圈信息结构数组（无评论和点赞数据）
          [{
            create_time: 1523015689,
            description: '<Timelineobject><id>12775981595019653292</id><username>wxid_xxx</username><createTime>1523015689</createTime><contentDesc>来自代码发的朋友圈</contentDesc><contentDescShowType>0</contentDescShowType><contentDescScene>3</contentDescScene><private>0</private> <sightFolded>0</sightFolded> <appInfo><id></id><version></version><appName></appName><installUrl></installUrl><fromUrl></fromUrl><isForceUpdate>0</isForceUpdate></appInfo> <sourceUserName></sourceUserName> <sourceNickName></sourceNickName> <statisticsData></statisticsData> <statExtStr></statExtStr> <Contentobject><contentStyle>2</contentStyle><title></title><description></description><mediaList></mediaList><contentUrl></contentUrl></Contentobject> <actionInfo><appMsg><messageAction></messageAction></appMsg></actionInfo> <location poiClassifyId="" poiName="" poiAddress="" poiClassifyType="0" city=""></location> <publicUserName></publicUserName> <streamvideo><streamvideourl></streamvideourl><streamvideothumburl></streamvideothumburl><streamvideoweburl></streamvideoweburl></streamvideo></Timelineobject> ',
            id         : '12775981595019653292',
            nick_name  : '复仇者联盟',
            user_name  : 'wxid_xxx'
          }],
        message: '',
        page   : '81cb2ad01ebc219f',
        status : 0
      }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [momentId] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 朋友圈信息id 首次传入空即获取第一页，以后传入上次拉取的最后一条信息id |

<a name="Padchat+snsGetObject"></a>

### padchat.snsGetObject(momentId) ⇒ <code>Promise.&lt;object&gt;</code>
获取朋友圈信息详情

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      data   : {},   //朋友圈信息结构
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| momentId | <code>string</code> | 朋友圈信息id |

<a name="Padchat+snsComment"></a>

### padchat.snsComment(userId, momentId, content) ⇒ <code>Promise.&lt;object&gt;</code>
评论朋友圈

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      data   : {},   //朋友圈信息结构
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |
| momentId | <code>string</code> | 朋友圈信息id |
| content | <code>string</code> | 内容文本 |

<a name="Padchat+snsLike"></a>

### padchat.snsLike(userId, momentId) ⇒ <code>Promise.&lt;object&gt;</code>
朋友圈点赞

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      data   : {},   //朋友圈信息结构
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |
| momentId | <code>string</code> | 朋友圈信息id |

<a name="Padchat+syncFav"></a>

### padchat.syncFav([favKey]) ⇒ <code>Promise.&lt;object&gt;</code>
同步收藏消息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        continue: 0,
        data    :     //收藏消息列表，如果没有则为null
          [
            {
              flag: 0,            //首次标志，0为有效，1为已取消收藏
              id  : 3,            //收藏id
              seq : 652265243,    //收藏随机值
              time: 1515042008,   //收藏时间
              type: 5             //收藏类型：1文本;2图片;3语音;4视频;5图文消息
            }
          ],
        key    : 'kzTKsdjD6PM0bbQv+oP7vQ==',   //下次的同步key，类似分页
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [favKey] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 同步key，首次不用传入 |

<a name="Padchat+addFav"></a>

### padchat.addFav(content) ⇒ <code>Promise.&lt;object&gt;</code>
添加收藏

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 内容文本 |

<a name="Padchat+getFav"></a>

### padchat.getFav(favId) ⇒ <code>Promise.&lt;object&gt;</code>
获取收藏消息详情

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        data:
          [
            , {
              flag  : 0,   //收藏状态：0为有效，1为无效(已删除)
              id    : 3,   //收藏id，如果为0则为无效收藏
              object:      //收藏对象结构体文本
                '<favitem type="5"><desc>DaoCloud 首席架构师王天青：下一代应用转型之道、术、器</desc><source sourcetype="1" sourceid="5353367357590009973"><fromusr>gh_4b6a20bcdd8b</fromusr><tousr>wxid_xxx</tousr><msgid>5353367357590009973</msgid><link>http://mp.weixin.qq.com/s?__biz=MzA5MzA2Njk5OA==&amp;mid=2650096972&amp;idx=1&amp;sn=8707378d0c0bdc0d14d1ac93972c5862&amp;chksm=886266d5bf15efc386050508a2cafb1adb806196f40f4f1bde8e944926c7fb6c6e54a14875c7&amp;scene=0#rd</link><brandid>gh_4b6a20bcdd8b</brandid></source><datalist count="1"><dataitem datatype="5" dataid="1e241bc540e4d5da8f0e580fbb2f7c1a" dataillegaltype="0" datasourceid="5353367357590009973"><datatitle>DaoCloud 首席架构师王天青：下一代应用转型之道、术、器</datatitle><datadesc>DaoCloud 受邀出席第13届信息化领袖峰会，立足于 DaoCloud 为传统企业数字化转型旅途中的丰富实践，与大家共话《下一代应用转型之道、术、器》，探讨如何“用新技术原力现代化你的企业应用”。</datadesc><dataext>http://mmbiz.qpic.cn/mmbiz_jpg/icGWTH9VkFq315HbKuKtWeWlcVDNPAswdhYA0kIskz0GcEQp6nJetC2aSBNfpibp1wKNHf8kYjUibkCF6SgbMIocw/640?wxtype=jpeg&amp;wxfrom=0</dataext></dataitem></datalist><weburlitem><pagethumb_url>http://mmbiz.qpic.cn/mmbiz_jpg/icGWTH9VkFq315HbKuKtWeWlcVDNPAswdhYA0kIskz0GcEQp6nJetC2aSBNfpibp1wKNHf8kYjUibkCF6SgbMIocw/640?wxtype=jpeg&amp;wxfrom=0</pagethumb_url></weburlitem><recommendtaglist></recommendtaglist></favitem>',
              //文本消息收藏结构
              // '<favitem type="1"><desc>接收到你发送的内容了!&#x0A;&#x0A;原内容：sync</desc><source sourcetype="1" sourceid="5451059336571949850"><fromusr>wxid_xxx</fromusr><tousr>binsee</tousr><msgid>5451059336571949850</msgid></source><taglist><tag>ted</tag><tag>hj</tag></taglist></favitem>'
              // 视频
              // '<favitem type="2"><source sourcetype="1" sourceid="786100356842168336"><fromusr>wxid_xxx</fromusr><tousr>4674258153@chatroom</tousr><realchatname>wxid_xxx</realchatname><msgid>786100356842168336</msgid></source><datalist count="1"><dataitem datatype="2" dataid="2b4d63555959bd7ffb62722e8c186030" dataillegaltype="0" datasourceid="786100356842168336"><cdn_thumburl>304c02010004453043020100020408eddd7c02030f4fed020419a0360a02045ac9271704206162313437386338616237383833333266336564343335666166363435646331020227110201000400</cdn_thumburl><cdn_dataurl>304c02010004453043020100020408eddd7c02030f4fed0204b94c716402045ac9271704203865383031656465633132333661303939346365663837643165316539363663020227110201000400</cdn_dataurl><cdn_thumbkey>ab1478c8ab788332f3ed435faf645dc1</cdn_thumbkey><cdn_datakey>8e801edec1236a0994cef87d1e1e966c</cdn_datakey><fullmd5>8e801edec1236a0994cef87d1e1e966c</fullmd5><head256md5>324b6cffbba04142bfabf5cdd0621b40</head256md5><fullsize>92377</fullsize><thumbfullmd5>ab1478c8ab788332f3ed435faf645dc1</thumbfullmd5><thumbhead256md5>4fcedfae8fcaa571504c5fd9f2abfa0a</thumbhead256md5><thumbfullsize>5658</thumbfullsize><datadesc></datadesc><datatitle></datatitle></dataitem></datalist><recommendtaglist></recommendtaglist></favitem>'
              // 语音
              // '<favitem type=\'3\'><source sourcetype=\'1\' sourceid=\'3687245278820959898\'><fromusr>wxid_xxx</fromusr><tousr>4674258153@chatroom</tousr><realchatname>wxid_xxx</realchatname><msgid>3687245278820959898</msgid></source><datalist count=\'1\'><dataitem datatype=\'3\' dataid=\'b1b222bcf285270772bf8698b2933bc7\' dataillegaltype=\'0\' datasourceid=\'3687245278820959898\'><datafmt>silk</datafmt><cdn_dataurl>304c02010004453043020100020408eddd7c02030f4fed020419a2360a02045ac9271104203064643962326231623464663936626433383831313136646235333831343537020227110201000400</cdn_dataurl><cdn_datakey>0dd9b2b1b4df96bd3881116db5381457</cdn_datakey><duration>2465</duration><fullmd5>0dd9b2b1b4df96bd3881116db5381457</fullmd5><head256md5>d348a2942af6d188100855d48dc75373</head256md5><fullsize>4186</fullsize></dataitem></datalist></favitem>'
              seq   : 652265243,
              status: 0,           //0为有效收藏，1为无效收藏
              time  : 1515042008
            }
          ],
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| favId | <code>Number</code> | 收藏id |

<a name="Padchat+deleteFav"></a>

### padchat.deleteFav(favId) ⇒ <code>Promise.&lt;object&gt;</code>
删除收藏

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        data:
          [
            {
              flag  : 0,
              id    : 0,
              object: '',
              seq   : 0,
              status: 1,    //返回删除的收藏id
              time  : 0
            },
          ],
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| favId | <code>Number</code> | 收藏id |

<a name="Padchat+getLabelList"></a>

### padchat.getLabelList() ⇒ <code>Promise.&lt;object&gt;</code>
获取所有标签

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        label:   //标签列表
          [{
            id  : 1,      //标签id
            name: '测试标签'  //标签名称
          }],
        message: '',
        status : 0
      }
  }
```  
<a name="Padchat+addLabel"></a>

### padchat.addLabel(label) ⇒ <code>Promise.&lt;object&gt;</code>
添加标签

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | 标签名称 |

<a name="Padchat+deleteLabel"></a>

### padchat.deleteLabel(labelId) ⇒ <code>Promise.&lt;object&gt;</code>
删除标签

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| labelId | <code>string</code> | 标签id，注意是id是string类型 |

<a name="Padchat+setLabel"></a>

### padchat.setLabel(userId, labelId) ⇒ <code>Promise.&lt;object&gt;</code>
设置用户标签

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | 用户wxid |
| labelId | <code>string</code> | 标签id |

<a name="Padchat+queryTransfer"></a>

### ~~padchat.queryTransfer(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

查看转账消息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        external:
          {
            retcode       : '0',
            retmsg        : 'ok',
            fee           : 20,                      //转账金额(单位为分)
            transStatus   : 2000,                    //状态:2000未收款;2001已收款
            feeType       : '1',
            payTime       : 1523176700,
            modifyTime    : 0,
            refundBankType: 'BANK',
            payerName     : 'binsee',
            receiverName  : 'wxid_8z66rux8lysr22',
            statusDesc    : '待确认收款',                 //收款描述
            // '已收钱'       //已收款
            // '待%s确认收款' //等待对方收款
            // '%s已收钱'     //对方已收款
            statusSupplementary: '',   //状态补充信息
            // 未领取：
            // '1天内未确认，将退还给对方。<_wc_custom_link_ href="weixin://wcpay/transfer/rebacksendmsg">立即退还</_wc_custom_link_>',
            delayConfirmFlag: 0,
            //
            // 已领取：
            // '<_wc_custom_link_ href="weixin://wcpay/transfer/watchbalance">查看零钱</_wc_custom_link_>'
            //
            // 等待对方收款:
            // '1天内朋友未确认，将退还给你。<_wc_custom_link_ href="weixin://wcpay/transfer/retrysendmsg">重发转账消息</_wc_custom_link_>'
            isPayer: false
            //
            // 对方已收款为空
          },
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+acceptTransfer"></a>

### ~~padchat.acceptTransfer(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

接受转账

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        external:
          {
            fee     : 20,          //转账金额(单位为分)
            payer   : '085exxx',   //付款id
            receiver: '085exxx',   //接收id
            retcode : '0',
            retmsg  : 'ok',
            feeType : '1'
          },
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+receiveRedPacket"></a>

### ~~padchat.receiveRedPacket(rawMsgData) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

接收红包

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        external:   //扩展数据结构
          {
            retcode         : 0,
            retmsg          : 'ok',
            sendId          : '10000xxx',      //发送id
            wishing         : '发3个红包',         //红包祝语
            isSender        : 0,               //是否自己发送
            receiveStatus   : 0,               //接收状态:0未接收;2已领取
            hbStatus        : 3,               //红包状态：3未领取完;4已领取完毕
            statusMess      : '发了一个红包，金额随机',   //
            hbType          : 1,               //红包类型
            watermark       : '',
            sendUserName    : 'binsee',        //发送者wxid
            timingIdentifier: 'C6E370xxx',
            agreeDuty       :                  //未知含义，非必然
              {
                title                 : '',
                serviceProtocolWording: '',
                serviceProtocolUrl    : '',
                buttonWording         : '',
                delayExpiredTime      : 0,
                agreedFlag            : 1
              }
          },
        key    : 'C6E370xxx',   //红包key，用于领取红包
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |

<a name="Padchat+queryRedPacket"></a>

### ~~padchat.queryRedPacket(rawMsgData, [index]) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

查看红包信息
NOTE: 如果是别人发的红包，未领取且未领取完毕时，无法取到红包信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
未先接收红包返回结果：
```
  {
    success: true,
    data   :
      {
        external:   //扩展数据
          {
            retcode        : 0,
            retmsg         : 'ok',
            operationHeader: [0],
            record         : [0]
          },
        message: '',
        status : 0
      }
  }
```

接收红包后查询结果：
```
  {
    success: true,
    data   :
      {
        external:
          {
            retcode        : 0,
            retmsg         : 'ok',
            recNum         : 2,            //已领取数
            totalNum       : 2,            //红包个数
            totalAmount    : 100,          //红包总金额(单位为分)
            sendId         : '10000xxx',   //发送id
            amount         : 85,           //领取到金额(单位为分)
            wishing        : 'Hello!',     //红包祝语
            isSender       : 1,            //是否是自己发送的
            receiveId      : '10000xxx',   //接收id
            hasWriteAnswer : 1,            //是否已写回复
            operationHeader: [],           //未知
            hbType         : 1,            //红包类型
            isContinue     : 0,            //是否已领取完
            hbStatus       : 3,            //红包状态：2未领取;3未领取完;4已领取完毕
            // 普通红包或单发红包是2，随机红包是3或4
            receiveStatus: 2,        //接收状态:0未接收;2已领取
            statusMess   : '成功领到',   //状态提示，未领取为空
            headTitle    : '',       //红包头部标题
            // '已领取1/2个，共0.01/0.02元'   //自己发的红包未领取完时
            // '2个红包共1.00元，15秒被抢光'   //自己发的红包未领取完时
            // '领取2/3个'                   //别人发的红包未领取完时
            // '2个红包，42秒被抢光'          //别人发的红包未领取完时
            canShare : 0,     //是否可分享
            hbKind   : 1,     //红包种类
            recAmount: 100,   //已领取金额(单位为分)
            record   :
              [
                {
                  receiveAmount: 85,             //领取金额(单位为分)
                  receiveTime  : '1523169782',   //领取时间戳字符串
                  answer       : '',             //领取者留言，仅查询接口有效
                  receiveId    : '10000xxx',
                  state        : 1,
                  gameTips     : '手气最佳',         //仅红包领取完毕时，手气最佳者有此字段
                  receiveOpenId: '10000xxx',
                  userName     : 'wxid_xxx'      //领取者wxid
                },
                {
                  receiveAmount: 15,
                  receiveTime  : '1523174612',
                  answer       : '谢谢红包',
                  receiveId    : '1000039501001804086017706218338',
                  state        : 1,
                  receiveOpenId: '1000039501001804086017706218338',
                  userName     : 'binsee'
                },
              ],
            operationTail:   //操作提示：仅自己发的红包有效
              {
                name   : '未领取的红包，将于24小时后发起退款',
                type   : 'Text',
                content: '',
                enable : 1,
                iconUrl: '',
                ossKey : 4294967295
              },
            atomicFunc   : { enable: 0 },
            jumpChange   : 1,
            changeWording: '已存入零钱，可直接提现',   //查询接口返回'已存入零钱，可直接转账'
            sendUserName : 'wxid_xxx'       //发送者wxid
          },
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| rawMsgData | <code>object</code> |  | 推送的消息结构体，即`push`事件中收到的Object |
| [index] | <code>Number</code> | <code>0</code> | 列表索引。 每页11个，查看第二页11，查看第三页22，以此类推 |

<a name="Padchat+openRedPacket"></a>

### ~~padchat.openRedPacket(rawMsgData, key) ⇒ <code>Promise.&lt;object&gt;</code>~~
***Deprecated***

领取红包

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
已领取过红包：
```
  {
    success: true,
    data   :
      {
        external: {
          retcode: 268502336,
          retmsg : '你已领取过该红包'
        },
        message: '',
        status : 0
      }
  }
```

未领取过的红包：
```
  {
    success: true,
    data   :
      {
        external:
          {
            retcode        : 0,
            retmsg         : 'ok',
            sendId         : '1000039501201804087013251181768',
            amount         : 1,
            recNum         : 2,
            recAmount      : 2,
            totalNum       : 3,
            totalAmount    : 4,
            hasWriteAnswer : 0,
            hbType         : 1,
            isSender       : 0,
            isContinue     : 0,
            receiveStatus  : 2,
            hbStatus       : 3,
            statusMess     : '',
            wishing        : '发3个红包',
            receiveId      : '1000039501001804087013251181768',
            headTitle      : '领取2/3个',
            canShare       : 0,
            operationHeader: [],
            record         :
              [
                {
                  receiveAmount: 1,
                  receiveTime  : '1523171198',
                  answer       : '',
                  receiveId    : '1000039501001804087013251181768',
                  state        : 1,
                  receiveOpenId: '1000039501001804087013251181768',
                  userName     : 'wxid_xxx'
                },
                {
                  receiveAmount: 1,
                  receiveTime  : '1523170992',
                  answer       : '',
                  receiveId    : '1000039501000804087013251181768',
                  state        : 1,
                  receiveOpenId: '1000039501000804087013251181768',
                  userName     : 'binsee'
                }
              ],
            watermark       : '',
            jumpChange      : 1,
            changeWording   : '已存入零钱，可直接提现',
            sendUserName    : 'binsee',
            SystemMsgContext:                 //系统消息内容
            '<img src="SystemMessages_HongbaoIcon.png"/>  你领取了$binsee$的<_wc_custom_link_ color="#FD9931" href="weixin://weixinhongbao/opendetail?sendid=1000039501201804087013251181768&sign=68b9858edbc9ff8a88fb8c8fa987edaad88078b31daf6e7af4dba06e78849e50b29a3c1d10bad4893aff116a0db80c7d8a3aa96a5247e1ed095d88e66983fc6fd9f6f6dc8243411ef97727cf0bc698c3&ver=6">红包</_wc_custom_link_>',
            sessionUserName: '4674258153@chatroom',   //会话wxid/chatroom
            realNameInfo   : { guideFlag: 0 }
          },
        message: '',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| rawMsgData | <code>object</code> | 推送的消息结构体，即`push`事件中收到的Object |
| key | <code>string</code> | 红包的验证key，通过调用 receiveRedPacket 获得 |

<a name="Padchat+searchMp"></a>

### padchat.searchMp(content) ⇒ <code>Promise.&lt;object&gt;</code>
搜索公众号

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        code: 0,
        info:
          {
            continueFlag: 1,   //仍有数据标志
            cookies     :      //cookie数据
              {
                businessType: 1,
                isHomepage  : 1,
                query       : '"腾讯"',
                scene       : 2
              },
            data:   //返回的搜索相关数据
              [{
                count: 20,
                items:      //搜索结果列表
                  [{
                    aliasName: 'tencent',
                    brandFlag: 2,
                    brandInfo:
                      {
                        urls:
                          [{
                            title: '查看历史消息',
                            url  :
                              'http://mp.weixin.qq.com/mp/getmasssendmsg?__biz=MzA3NDEyMDgzMw==#wechat_webview_type=1&wechat_redirect',
                            titleKey: '__mp_wording__brandinfo_history_massmsg'
                          }]
                      },
                    docID: '3074120833',
                    externalInfo:
                      {
                        Appid: 'wx06441a33a2a67de4',
                        BindWxaInfo:
                          {
                            wxaEntryInfo:
                              [{
                                title   : '腾讯+',
                                username: 'gh_3a5568e1268b@app',
                                iconUrl : 'http://mmbiz.qpic.cn/mmbiz_png/xxx/0?wx_fmt=png'
                              }]
                          },
                        FunctionFlag           : 1,
                        InteractiveMode        : '2',
                        IsAgreeProtocol        : '1',
                        IsHideInputToolbarInMsg: '0',
                        IsShowHeadImgInMsg     : '1',
                        RegisterSource         :
                          {
                            IntroUrl:
                              'http://mp.weixin.qq.com/mp/getverifyinfo?__biz=MzA3NDEyMDgzMw==&type=reg_info#wechat_redirect',
                            RegisterBody: '深圳市腾讯计算机系统有限公司'
                          },
                        RoleId        : '1',
                        ScanQRCodeType: 1,
                        ServiceType   : 0,
                        VerifySource  :
                          {
                            Description: '深圳市腾讯计算机系统有限公司',
                            IntroUrl   :
                              'http://mp.weixin.qq.com/mp/getverifyinfo?__biz=MzA3NDEyMDgzMw==#wechat_webview_type=1&wechat_redirect',
                            Type         : 0,
                            VerifyBizType: 1
                          }
                      },
                    friendsFollowCount: 0,
                    headHDImgUrl      : 'http://wx.qlogo.cn/mmhead/xxx/0',
                    headImgUrl        : 'http://wx.qlogo.cn/mmhead/xxx/132',
                    iconUrl           : 'http://mmbiz.qpic.cn/mmbiz_png/xxx/0?wx_fmt=png',
                    nickName          : '腾讯',
                    nickNameHighlight : '<em class="highlight">腾讯</em>',
                    segQuery          : ' 腾讯',
                    signature         : '腾讯公司唯一官方帐号。',
                    signatureHighlight: '<em class="highlight">腾讯</em>公司唯一官方帐号。',
                    userName          : 'gh_88b080670a71',
                    verifyFlag        : 24
                  }],
                keywordList: ['腾讯'],
                resultType : 0,
                title      : '公众号',
                totalCount : 1900,
                type       : 1
              }],
            direction : 2,
            exposeMs  : 500,
            isDivide  : 0,
            isExpose  : 1,
            isHomePage: 1,
            lang      : 'zh_CN',
            monitorMs : 100,
            offset    : 20,
            query     : '"腾讯"',
            resultType: 0,
            ret       : 0,
            searchID  : '18232918846508425807'
          },
        message: '',
        offset : 20,
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 公众号名称等关键字 |

<a name="Padchat+getSubscriptionInfo"></a>

### padchat.getSubscriptionInfo(ghName) ⇒ <code>Promise.&lt;object&gt;</code>
获取公众号信息

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        info:
          {
            alias        : 'tencent',
            appid        : 'wx06441a33a2a67de4',
            bigHeadImgUrl: 'http://wx.qlogo.cn/mmhead/xxx/0',
            bindKFUin    : '0',
            bindWxaInfo  :
              {
                wxaEntryInfo:
                  [{
                    username: 'gh_3a5568e1268b@app',
                    title   : '腾讯+',
                    iconUrl : 'http://mmbiz.qpic.cn/mmbiz_png/xxx/0?wx_fmt=png'
                  }],
                bizEntryInfo: []
              },
            bitMask     : '4294967295',
            brandIconURL: 'http://mmbiz.qpic.cn/mmbiz_png/xxx/0?wx_fmt=png',
            brandInfo   :
              {
                urls:
                  [{
                    title   : '查看历史消息',
                    url     : 'http://mp.weixin.qq.com/mp/getmasssendmsg?xxxx',
                    titleKey: '__mp_wording__brandinfo_history_massmsg'
                  }]
              },
            functionFlag           : '1',
            interactiveMode        : '2',
            isAgreeProtocol        : '1',
            isHideInputToolbarInMsg: '0',
            isShowHeadImgInMsg     : '1',
            mmBizMenu              :
              {
                uin            : 3074120833,
                version        : 425306837,
                interactiveMode: 2,
                updateTime     : 1518401098,
                buttonList     :
                  [
                    {
                      id   : 425306837,
                      type : 0,
                      name : '产品体验',
                      key  : 'rselfmenu_2',
                      value: '',
                      subButtonList:
                        [{
                          id           : 425306837,
                          type         : 2,
                          name         : '往期内测',
                          key          : 'rselfmenu_2_1',
                          value        : 'http://mp.weixin.qq.com/mp/xxxxx',
                          subButtonList: [],
                          nativeUrl    : ''
                        }],
                      nativeUrl: ''
                    }]
              },
            nickName : '腾讯',
            pyInitial: 'TX',
            quanPin  : 'tengxun',
            registerSource:
              {
                registerBody: '深圳市腾讯计算机系统有限公司',
                introUrl    : 'http://mp.weixin.qq.com/mp/getverifyinfo?xxxx'
              },
            roleId         : '1',
            scanQRCodeType : '1',
            serviceType    : '0',
            signature      : '腾讯公司唯一官方帐号。',
            smallHeadImgUrl: 'http://wx.qlogo.cn/mmhead/xxx/132',
            userName       : 'gh_88b080670a71',
            verifyFlag     : '24',
            verifyInfo     : '深圳市腾讯计算机系统有限公司',
            verifySource   :
              {
                description  : '深圳市腾讯计算机系统有限公司',
                introUrl     : 'http://mp.weixin.qq.com/mp/getverifyinfo?xxx',
                type         : 0,
                verifyBizType: 1
              }
          },
        message: ' ',
        status : 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| ghName | <code>string</code> | 公众号gh名称，即`gh_`格式的id |

<a name="Padchat+operateSubscription"></a>

### padchat.operateSubscription(ghName, menuId, menuKey) ⇒ <code>Promise.&lt;object&gt;</code>
操作公众号菜单

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   : {
      message: '',
      status : 0
    }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| ghName | <code>string</code> | 公众号gh名称，即`gh_`格式的id |
| menuId | <code>Number</code> | 菜单id |
| menuKey | <code>string</code> | 菜单key |

<a name="Padchat+getRequestToken"></a>

### padchat.getRequestToken(ghName, url) ⇒ <code>Promise.&lt;object&gt;</code>
获取网页访问授权

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        info:
          {
            'X-WECHAT-KEY': 'xxxxxxxxxxxx',   //授权key
            'X-WECHAT-UIN': 'MTQ5ODA2NDYw'    //授权uin
          },
        message: '',
        status : 0,
        fullUrl:      //完整授权访问url
        'https://mp.weixin.qq.com/s?__biz=MzA5MDAwOTExMw==&mid=200126214&idx=1&sn=a1e7410ec56de5b6c4810dd7f7db8a47&chksm=1e0b3470297cbd666198666278421aed0a131d775561c08f52db0c82ce0e6a9546aac072a20e&mpshare=1&scene=1&srcid=0408bN3ACxqAH6jyq4vCBP9e&ascene=7&devicetype=iPad+iPhone+OS9.0.2&version=16060125&nettype=WIFI&lang=zh_CN&fontScale=100&pass_ticket=ZQW8EHr9vk%2BPGoWzmON4ev8I0MmliT4mp1ERTPEl8lc%3D&wx_header=1',
        shareUrl:   //分享url
        'http://mp.weixin.qq.com/s/QiB3FPE6fJmV6asvvxIkvA'
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| ghName | <code>string</code> | 公众号gh名称，即`gh_`格式的id |
| url | <code>string</code> | 网页url |

<a name="Padchat+requestUrl"></a>

### padchat.requestUrl(url, xKey, xUin) ⇒ <code>Promise.&lt;object&gt;</code>
访问网页

**Kind**: instance method of [<code>Padchat</code>](#Padchat)  
**Returns**: <code>Promise.&lt;object&gt;</code> - 返回Promise<object>，注意捕捉catch
```
  {
    success: true,
    data   :
      {
        message : '',
        response:      //完整的访问结果原始数据文本（包含http头数据）
          'HTTP/1.1 200 OK\r\nContent-Security-Policy: script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' http://*.qq.com https://*.qq.com http://*.weishi.com https://*.weishi.com xxxxxxxxxxxxxxxxxxxxxxxxxxx',
        status: 0
      }
  }
```  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 网页url地址 |
| xKey | <code>string</code> | 访问Key，用`getRequestToken`获取 |
| xUin | <code>string</code> | 访问uin，用`getRequestToken`获取 |

<a name="Padchat+event_open"></a>

### "open"
Open event
websocket连接打开事件

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Example**  
```js
const wx = new Padchat()
wx.on('open',()=>{
  console.log(`连接成功！`)
})
```
<a name="Padchat+event_close"></a>

### "close"
Close event
websocket连接关闭事件。可在此事件中调用`Padchat.start()`发起重连

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| code | <code>number</code> | 关闭代码 <br> `3201`: 你的Token是无效的，请联系我们获取有效的Token，以连接padchat-sdk <br> `3202`: 你的Token已经登录了一个机器人，请不要用同一个Token登录多个机器人 <br> `3203`: 你的Token已经过期了，请联系我们进行续费 |
| [msg] | <code>string</code> | 关闭说明 |

**Example**  
```js
const wx = new Padchat()
wx.on('close',(code,msg)=>{
  console.log(`Websocket 已关闭！code: ${code} - ${msg}`)
  wx.start()
})
```
<a name="Padchat+event_error"></a>

### "error"
Error event
错误事件

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>error</code> | 报错信息 |

**Example**  
```js
const wx = new Padchat()
wx.on('error',e=>{
  console.log('Websocket 错误:', e.message)
})
```
<a name="Padchat+event_warn"></a>

### "warn"
Warn event
实例错误提示

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>error</code> | 报错信息 |

**Example**  
```js
const wx = new Padchat()
wx.on('warn',e=>{
  console.log('任务出现错误:', e.message)
})
```
<a name="Padchat+event_qrcode"></a>

### "qrcode"
Qrcode event
登陆二维码推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | 二维码信息 |
| [data.url] | <code>string</code> | 登陆二维码解析后的内容url，可使用此url作为内容生成二维码图片后，使用手机扫码登陆 |
| msg | <code>string</code> \| <code>null</code> | 附加提示信息 |

**Example**  
```js
const wx = new Padchat()
wx.on('qrcode',data=>{
  console.log(`登陆二维码内容为: "${data.url}"`)
  // 可使用`qrcode-terminal`库在终端生成二维码
})
```
<a name="Padchat+event_scan"></a>

### "scan"
Scan event
扫码状态推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | 扫码状态 |
| data.status | <code>number</code> | 扫码状态: <br> `0` 等待扫码 <br> `1` 扫码完成，等待手机端确认登陆 <br> `2` 手机端已确认，等待登陆 <br> `3` 二维码过期 <br> `4` 手机端取消登陆 <br> 其他状态未知 |
| [data.subStatus] | <code>number</code> | 扫码子状态，仅`status`为`2`时有效 <br> `0` 登陆成功 <br> `1` 登陆失败 <br> 其他状态未知 |
| [data.headUrl] | <code>string</code> | 头像url **（扫码后存在）** |
| [data.deviceType] | <code>string</code> | 主设备类型 **（扫码后存在）** |
| [data.userName] | <code>string</code> | 账号wxid，全局唯一 **（扫码后存在）** |
| [data.uin] | <code>number</code> | 账号uin，全局唯一 **（扫码后存在）** |
| [data.email] | <code>string</code> | 账号绑定的邮箱 **（确认登陆后存在）** |
| [data.phoneNumber] | <code>string</code> | 账号绑定的手机号 **（确认登陆后存在）** |
| [data.qq] | <code>number</code> | 账号绑定的QQ号 **（确认登陆后存在）** |
| [data.nickName] | <code>string</code> | 账号昵称 **（确认登陆后存在）** |
| [data.external] | <code>number</code> | 是否为扩展设备登陆 <br> `0` 主设备登陆 <br> `1` 扩展设备登录 |
| msg | <code>string</code> \| <code>null</code> | 附加提示信息 |

**Example**  
```js
const wx = new Padchat()
wx.on('scan',data=>{
 switch (data.status) {
   case 0:
   case 1:
   case 2:
   case 3:
   case 4:
   default:
     break
 }
})
```
<a name="Padchat+event_login"></a>

### "login"
Login event
登陆成功推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Example**  
```js
const wx = new Padchat()
wx.on('login',()=>{
 console.log('微信账号登陆成功!')
})
```
<a name="Padchat+event_autoLogin"></a>

### "autoLogin"
AutoLogin event
自动重连成功推送

自动重连后token会变化，可在此时获取新的token，否则使用旧token将不能断线重连，但可以二次登陆(需手机端确认登陆)

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Example**  
```js
const wx = new Padchat()
wx.on('autoLogin',()=>{
 wx.getLoginToken()
 console.log('自动重连成功!')
})
```
<a name="Padchat+event_loaded"></a>

### "loaded"
Loaded event
通讯录同步完毕推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Example**  
```js
const wx = new Padchat()
wx.on('loaded',()=>{
 console.log('通讯录同步完毕!')
})
```
<a name="Padchat+event_logout"></a>

### "logout"
Logout event
微信账号退出推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [data.error] | <code>string</code> \| <code>null</code> | 错误提示信息 |
| [data.msg] | <code>string</code> \| <code>null</code> | 附加提示信息 |
| [msg] | <code>string</code> \| <code>null</code> | 附加提示信息(同`data.msg`) |

**Example**  
```js
const wx = new Padchat()
wx.on('logout',({error,msg})=>{
 console.log('微信账号已退出! ',error,msg)
})
```
<a name="Padchat+event_over"></a>

### "over"
Over event
实例关闭推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [data.msg] | <code>string</code> \| <code>null</code> | 附加提示信息 |
| [msg] | <code>string</code> \| <code>null</code> | 附加提示信息(同`data.msg`) |

**Example**  
```js
const wx = new Padchat()
wx.on('over',({msg})=>{
 console.log('任务实例已关闭！',msg)
})
```
<a name="Padchat+event_sns"></a>

### "sns"
Sns event
朋友圈通知

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Example**  
```js
const wx = new Padchat()
wx.on('sns',()=>{
 console.log('收到朋友圈事件！')
})
```
<a name="Padchat+event_push"></a>

### "push"
Push event
联系人/消息推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data.mType | <code>number</code> | 推送类型               <br> `1`    : 文字消息               <br> `2`    : 好友信息推送，包含好友，群，公众号信息               <br> `3`    : 收到图片消息               <br> `34`   : 语音消息               <br> `35`   : 用户头像buf               <br> `37`   : 收到好友请求消息               <br> `42`   : 名片消息               <br> `43`   : 视频消息               <br> `47`   : 表情消息               <br> `48`   : 定位消息               <br> `49`   : APP消息(文件 或者 链接 H5)               <br> `50`   : 语音通话               <br> `51`   : 状态通知（如打开与好友/群的聊天界面）               <br> `52`   : 语音通话通知               <br> `53`   : 语音通话邀请               <br> `62`   : 小视频               <br> `2000` : 转账消息               <br> `2001` : 收到红包消息               <br> `3000` : 群邀请               <br> `9999` : 系统通知               <br> `10000`: 微信通知信息。微信群信息变更，多为群名修改、进群、离群信息，不包含群内聊天信息               <br> `10002`: 撤回消息 |
| [data.fromUser] | <code>string</code> | (`mType`非2) 发件人 |
| [data.toUser] | <code>string</code> | (`mType`非2) 收件人 |
| [data.content] | <code>string</code> | (`mType`非2) 消息内容。非文本型消息时，此字段可能为xml结构文本 |
| [data.msgSource] | <code>string</code> | (`mType`非2) |
| [data.data] | <code>string</code> | 图片、语音、视频等媒体文件base64文本 |
| [data.description] | <code>string</code> | (部分`mType`非2) 消息描述 |
| [data.msgId] | <code>string</code> | (`mType`非2) 消息id |
| [data.timestamp] | <code>string</code> | (`mType`非2) 消息时间戳 |
| [data.uin] | <code>number</code> | 当前账号uin |
| [data.*] | <code>string</code> | 其他字段请自行输出查看 |

**Example**  
```js
const util = require('util')
const wx   = new Padchat()
wx.on('push',data=>{
 console.log('push:',util.inspect(data, { depth: 10 }))
})
```
<a name="Padchat+event_contact"></a>

### "contact"
Contact event
联系人/消息推送

**Kind**: event emitted by [<code>Padchat</code>](#Padchat)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data.mType | <code>number</code> | 推送类型               <br> `2`: 好友信息推送，包含好友，群，公众号信息 |
| data.city | <code>string</code> | 城市 |
| data.country | <code>string</code> | 国家 |
| data.provincia | <code>string</code> | 省份 |
| data.intro | <code>string</code> | 公众号主体 |
| data.stranger | <code>string</code> | 个性签名 |
| data.label | <code>string</code> |  |
| data.level | <code>number</code> |  |
| data.sex | <code>number</code> | 性别: 1男 2女 0未知 |
| data.signature | <code>string</code> | v1值 |
| data.source | <code>number</code> | 联系人添加渠道 |
| data.uin | <code>number</code> | 当前账号uin (自己微信号的,不是好友的) |
| data.bigHead | <code>string</code> | 高清头像 |
| data.smallHead | <code>string</code> | 头像缩略图 |
| data.bitValue | <code>number</code> |  |
| data.chatroomId | <code>number</code> | 群版本号 |
| data.chatroomOwner | <code>string</code> | 群主wxid |
| data.imgFlag | <code>number</code> |  |
| data.maxMemberCount | <code>number</code> | 群成员上限 |
| data.memberCount | <code>number</code> | 群成员数量 |
| data.msgType | <code>number</code> |  |
| data.nickName | <code>string</code> | 联系人昵称 |
| data.pyInitial | <code>string</code> | 昵称拼音简写 |
| data.quanPin | <code>string</code> | 昵称拼音全拼 |
| data.remark | <code>string</code> | 备注 |
| data.remarkPyInitial | <code>string</code> | 备注拼音简写 |
| data.remarkQuanPin | <code>string</code> | 备注拼音全拼 |
| data.userName | <code>string</code> | 联系人微信号/wxid |

**Example**  
```js
const util = require('util')
const wx   = new Padchat()
wx.on('push',data=>{
 console.log('push:',util.inspect(data, { depth: 10 }))
})
```
<a name="Padchat.Padchat"></a>

### Padchat.Padchat
**Kind**: static class of [<code>Padchat</code>](#Padchat)  
<a name="new_Padchat.Padchat_new"></a>

#### new Padchat([url])
Creates an instance of Padchat.


| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> | 服务器url，后缀你的token：`ws://47.99.211.34:8181/` 有问题联系QQ群:935214596 |

