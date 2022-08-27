export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx1ff42fd001ba01d1",
    // 公众号appSecret
    appSecret: "c18195fd8f46c502fadedc7c0b5a2b52",
    // 模板消息id
    templateId: "2o7isaWPTnaVHsm0DBq717xpvLt1pyqi66UwgjKwkm4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["Hiphone"],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "中山",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "笨儿", "year": "1986", "date": "09-08", "type": 'r'},
      {"name": "胖儿", "year": "1988", "date": "06-07", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-07-10",
    // 分开纪念日
    marryDate: "2022-08-20"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们分开的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
