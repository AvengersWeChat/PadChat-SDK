'use strict'

// 将object中的属性名称转换为全驼峰格式


module.exports = {
  toCamelCase,
  toUnderLine,
  structureXml,
}

/**
 * 将object中的属性名称从下划线转换为驼峰格式
 * (包含子数据的属性名，会遍历转换)
 *
 * @param {any} obj 要转换的object
 * @param {boolean} [big=true] 是否转换为大驼峰格式
 * @returns {Object} 转换后的object
 */
function toCamelCase(obj, big = false) {
  if (obj instanceof Array) {
    return obj.map(item => toCamelCase(item))
  }
  if (!(obj instanceof Object)) {
    return obj
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = key.replace(/_(\w)/g, (match, val, offset) => { return val.toUpperCase() })
      if (big) {
        newKey = newKey.replace(/^(\w)/, (match, val, offset) => { return val.toUpperCase() })
      } else {
        // 将首字母转换为小写（部分字段名称开头两个为大写，比如`PYInitial`/`MMBizMenu`）
        // 跳过`X-WECHAT-KEY`和`X-WECHAT-UIN`这种字段
        newKey = newKey.replace(/^(\w{2})/, (match, val, offset) => { return val.toLowerCase() })
      }
      if ((obj[key] instanceof Array) || (obj[key] instanceof Object)) {
        obj[key] = toCamelCase(obj[key])
      }
      if (newKey !== key) {
        obj[newKey] = obj[key]
        delete obj[key]
      }
    }
  }
  return obj
}

/**
 * 将object中的属性名称从驼峰转换为下划线格式
 *
 * @param {any} obj 要转换的object
 * @returns {Object} 转换后的object
 */
function toUnderLine(obj) {
  const newObj = {}
  if (!(obj instanceof Object)) {
    return obj
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const  newKey  = key.replace(/([A-Z])/g, (match, val, offset) => { return (offset ? '_' : '') + val }).toLowerCase()
      newObj[newKey] = obj[key]
    }
  }
  return newObj
}

/**
 * 组装appmsg消息体
 *
 * @param {object} object 消息体参数
 * @param {object} [object.appid] - appid，忽略即可
 * @param {object} [object.sdkver] - sdk版本，忽略即可
 * @param {object} [object.title] - 标题
 * @param {object} [object.des] - 描述
 * @param {object} [object.url] - 链接url
 * @param {object} [object.thumburl] - 缩略图url
  * ```
  * {
  * appid    = '',   //appid，忽略即可
  * sdkver   = '',   //sdk版本，忽略即可
  * title    = '',   //标题
  * des      = '',   //描述
  * url      = '',   //链接url
  * thumburl = '',   //缩略图url
  * }
  * ```
 * @returns {String} 组装的消息体
 */
function structureXml(object) {
  const { appid = '', sdkver = '', title = '', des = '', url = '', thumburl = '' } = object
  return `<appmsg appid="${appid}" sdkver="${sdkver}">
<title>${title}</title>
<des>${des}</des>
<action>view</action>
<type>5</type>
<showtype>0</showtype>
<content></content>
<url>${url}</url>
<thumburl>${thumburl}</thumburl>
</appmsg>`.replace(/\n/g, '')
}
