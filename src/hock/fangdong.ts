export default function debouce(fn:Function, delayTime:number) {
  let timer:any = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
       fn()
    }, delayTime)
  }
} 