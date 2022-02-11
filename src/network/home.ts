import  request  from "./request";
export function getTipList() {
  return request({
    url: '/home/getTipList'
  })
}