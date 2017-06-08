class Stack{
  constructor(n){
    this.capacity = n
    this.storage = [n]
    this.top = null
    this.count = 0
  }

  push(data){
    if(this.count === this.capacity) throw new Error('Stack Overflow')
    this.storage[this.count] = data
    this.count++
    this.top  = this.count -1
  }

  pop(){
    if(this.count === 0) throw new Error('Stack Empty')
    var tmp = this.top
    this.top--
    this.count--
    return this.storage[tmp]
  }

  peek(){
    if(this.count === 0) return null
    return this.storage[this.top]
  }
}

class StackMin extends Stack{
  constructor(n){
    super(n)
    this.tmpStack = new Stack(n)
  }
  push(data){
    super.push(data)
    var tmp = this.tmpStack.peek()
    if(!tmp || data < tmp) this.tmpStack.push(data)
  }
  pop(){
    var data = super.peek()
    super.pop()
    var tmp = this.tmpStack.peek()
    if(data === tmp) this.tmpStack.pop()
  }
  min(){
    return this.tmpStack.peek()
  }
}
var s = new StackMin(9)
s.push(4)
