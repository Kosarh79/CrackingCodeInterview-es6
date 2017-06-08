class ThreeStacks{
  // this is an static stack
  constructor(n){
    if(n % 3 !== 0) throw new Error('n must be a factor of 3')
    this.length = n
    this.ar = []
    this.s1 = {
      capacity:n/3,
      top:null,
      sIndex:0,
      count:0
    }
   this.s2 = {
      capacity:n/3,
      top:null,
      sIndex:n/3,
      count:0
    }
    this.s3 = {
      capacity:n/3,
      top:null,
      sIndex:2*n/3,
      count:0
    }
  }

  /*
  @data data to be added to stack
  @s targetted stack 's1', 's2', 's3'
  */
  push(data, s){
    if(this[s]['count'] === this[s]['capacity']) throw new Error('Stack Overflow')
    var index = this[s]['sIndex'] + this[s]['count']
    this.ar[index] = data
    this[s]['top'] = index
    this[s]['count']++
  }
  /*
  @s targetted stack 's1', 's2', 's3'
  */
  pop(s){
    if(this[s]['count'] === 0) throw new Error('Stack Empty')
    var index  = this[s][index] + this[s]['count'] - 1
    var tmp = ar[this[s]['top']]
    this[s]['top']--
    this[s]['count']--
    return tmp
  }
}

var t = new ThreeStacks(9)
t.push(10, 's1')
//t.pop('s2')
t.push(17,'s3')
