// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    const result = await cloud.openapi.security.imgSecCheck({
      media: {
        contentType: 'image/png',
        value: Buffer.from(event.img)
      }
    })

    if (result && result.errCode.toString() === '87014') {
      return {
        code: 500,
        msg: '内容含有违法违规内容' ,
        data: result
      }
    } else {
      return { code: 200, msg: '内容ok', data: result }
    }
  } catch (err) {
    if (err.errCode.toString() === '87014') {
      return { code: 500, msg: '内容含有违法违规内容', data: err }
    }
    return { code: 502, msg: '调用imgSecCheck接口异常', data: err }
  }

}