'use strict'

exports.wsEventType = [
  'log',
  'cmdRet',
  'userEvent',
  'sysEvent',
]

exports.userEvents = [
  'qrcode', // 登陆二维码
  'scan', // 扫码登陆状态
  'login', // 登陆完成
  'loaded', // 通讯录载入完毕
  'logout', // 注销登录（账户退出）
  'close', // 任务断线
  'warn', // 错误
  'sns', // 朋友圈事件（朋友圈小圆点）
  'notify', // 推送消息通知
  'autoLogin', // 自动重连成功通知
  'push', // 推送消息（系统、好友消息等）
]

exports.loginType = {
  auto   : 'auto',      // 断线重连
  request: 'request',   // 二次登陆
  qrcode : 'qrcode',    // 扫码登陆
  phone  : 'phone',     // 手机验证码登陆
  user   : 'user',      // 账号密码登陆
}

exports.blacklist = [
  'appbrandcustomerservicemsg',
  'blogapp',
  'cardpackage',
  'facebookapp',
  'feedsapp',
  'filehelper',
  'floatbottle',
  'floatbottle', // 漂流瓶
  'fmessage', // 朋友推荐
  'helper_entry',
  'lbsapp',
  'linkedinplugin',
  'masssendapp',
  'medianote',   // 语音记事本
  'mphelper', // 公众平台安全助手
  'newsapp', // 腾讯新闻
  'notification_messages',
  'notifymessage',
  'officialaccounts',
  'pc_share',
  'qmessage', // qq离线消息
  'qqfriend',
  'qqmail',
  'qqsync',
  'shakeapp',
  'tmessage',
  'voiceinputapp',
  'voicevoipapp',
  'voipapp',
  'weibo', // 微博-未知
  'weixin', // 腾讯团队
]
