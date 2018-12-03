export default function curry(fn, ...outerArgs) {
  return function (...args) {
    var newArgs = outerArgs.concat(args)
    return fn.apply(this, newArgs)
  }
}