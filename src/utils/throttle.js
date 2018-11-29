export default function (func, wait) {
  let timeout

  return  (...args) => {
    let context = this
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}