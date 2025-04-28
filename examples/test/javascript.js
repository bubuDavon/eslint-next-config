// test-eslint-rules.js
import a from "a"
// constructor-super
class A extends undefined {
  constructor() {
    super() // 错：super 在未继承任何类时被调用
  }
}

// for-direction
for (let i = 0; i < 5; i--) {
  console.log(i) // 错：死循环
}

// getter-return
const obj1 = {
  get name() {
    // 错：getter 没有返回值
  },
}

// no-async-promise-executor
const badPromise = new Promise(async (resolve, reject) => {
  await resolve() // 错：async executor
})

// no-constant-condition
if (true && false) {
  console.log("This is constant condition") // 错：常量条件
}

// no-empty
function emptyFn() {}

// no-undef
console.log(notDefinedVar) // 错：变量未定义

// no-unused-vars
const unusedVar = 123

// no-this-before-super
class B extends A {
  constructor() {
    console.log(this) // 错：super 之前不能用 this
    super()
  }
}

// no-fallthrough
switch (1) {
  case 1:
    console.log("one")
  case 2: // 错：没有 break
    console.log("two")
    break
}

// no-useless-catch
try {
  throw new Error("oops")
} catch (e) {
  throw e // 错：没做任何处理直接再抛
}
