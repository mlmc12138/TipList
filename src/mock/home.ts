import { isTemplateNode } from "@vue/compiler-core"
import { toRaw } from "vue"
const Mock = require('mockjs')
let tipList = [
  {
    id: 0,
    title: "冬奥运",
    content: "农历正月初五,北京冬奥会开幕次日,国家主席习近平和夫人彭丽媛在北京人民大会堂金色大厅举行宴会"
  },
  {
    id: 1,
    title: "每日计划",
    content: "是对抗拖延症。如果我不把当天需要或者希望做的任务先做一次纸上谈兵的安排，而只是存在我的脑海里"
  },
  {
    id: 2,
    title: "明日安排",
    content: "是对抗拖的脑海里，靠我的自觉意识去提醒和推动的话，简直是没有一日不拖延，结果总是一样的悲剧：早晨7点整坐在书桌"
  },
  {
    id: 3,
    title: "会议总结",
    content: "会议议题。出现了什么问题;信息分享。问题的现状和资源情况;方案讨论。问题的解决提按以及意见;形成决议。做出方案决策"
  },
  {
    id: 4,
    title: "电影清单",
    content: "出埃及记 十诫 西部开拓史 日落大道 关山飞渡 大独裁者 非洲皇后 欲望号街车 红磨坊 华迪兹先生进城 杀死一只知更鸟 歌剧魅影 弹血金沙 战地军魂 沙漠之鼠"
  },
  {
    id: 5,
    title: "歌曲收藏",
    content: "乱世佳人 罗马假日 魂断蓝桥 战地钟声 埃及艳后 彗星美人 费城故事铁巽雄风 绿野仙踪 煤气灯下"
  },
  {
    id: 6,
    title: "路程",
    content: "出埃及记 十诫 西部开拓史 日落大道 关山飞渡 大独裁者 非洲皇后 欲望号街车 红磨坊 华迪兹先生进城"
  }, {
    id: 7,
    title: "联系电话",
    content: "出埃及记 十诫 西部开拓史 日落大道 关山飞渡 大独裁者 非洲皇后 欲望号街车 红磨坊 华迪兹先生进城 杀死一只知更鸟 歌剧魅影 弹血金沙 战地军魂 沙漠之鼠"
  },
]
let test = [1, 2, 3, 4, 5]
const baseUrl = "/api"
// 获取所有便签
Mock.mock(baseUrl + "/home/getTipList", () => {
  test.pop()
  return tipList
})
// 获取便签详情s
Mock.mock(baseUrl + "/getDetail", (ops: any) => {
  let obj = eval("(" + ops.body + ")")
  for (let i = 0; i < tipList.length; i++) {
    if (tipList[i].id == obj.data) {
      return tipList[i]
    }
  }
})
// 添加便签
Mock.mock(baseUrl + "/addTip", (ops: any) => {
  let obj = eval("(" + ops.body + ")")
  obj.data.id = tipList.length
  tipList.push(obj.data)
})
// 更改便签内容
Mock.mock(baseUrl + "/updateTip", (ops: any) => {
  let obj = eval("(" + ops.body + ")")
  tipList[obj.data._value.id].title = obj.data._value.title
  tipList[obj.data._value.id].content = obj.data._value.content
})
// 删除便签
Mock.mock(baseUrl + "/deleteTip", (ops: any) => {
  let obj = eval("(" + ops.body + ")")
  for (let i = 0; i < tipList.length; i++) {
    if (tipList[i].id == obj.data) {
      tipList.splice(i, 1)
    }
  }
})