function partitionLL(a, d){
  var n = a.head
  if(!n || n.next === null) return
    let c, s,b,tmp,b2
  while(n !== null){
    c = n
    if(c.data < d){
      if(b){

      b2 = s.next
        s.next = c
      // b2 = tmp
      b.next = c.next
        c.next = b2
      }
      s = c
    }
    else{
      b = c
    }
    n = n.next
  }
  return a
}
var a = {
  head:{
    data:6,
    next:{
      data:9,
      next:{
        data:3,
        next:{
          data:8,
          next:{
            data:2,
            next:{
              data:7,
              next:{
                data:1,
                next:{
                  data:5,
                  next:null
                }
              }
            }
          }
        }
      }
    }
  }
}
a = partitionLL(a,5)
