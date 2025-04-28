// 触发 @typescript-eslint/no-explicit-any
function logMessage(message: any) {
    console.log(message);
  }
  
  // 触发 @typescript-eslint/no-unused-vars
  const unusedVar = 123;
  
  // 触发 @typescript-eslint/explicit-function-return-type
  function add(x: number, y: number) {
    return x + y;
  }
  
  // 触发 @typescript-eslint/no-magic-numbers
  const maxRetries = 5;
  
  // 触发 @typescript-eslint/no-empty-function
  function emptyFunction(): void {}
  
  // 触发 @typescript-eslint/ban-types
  type Something = Object;
  
  // 触发 @typescript-eslint/consistent-type-assertions
  const someValue = "hello" as any;
  
  // 触发 @typescript-eslint/await-thenable
  async function badAwait() {
    const result = await 123;
    console.log(result);
  }
  
  // 触发 @typescript-eslint/explicit-member-accessibility
  class Greeter {
    message: string;
  
    constructor(message: string) {
      this.message = message;
    }
  
    greet() {
      return "Hello, " + this.message;
    }
  }
  