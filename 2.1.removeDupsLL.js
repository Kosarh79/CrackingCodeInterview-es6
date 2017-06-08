function removeDupsLL(a){
  if(a.count < 2) return a
  var n = a.head
  //var tmp
  while(n.next !== null){
    let tmp = n
    while(tmp.next !== null){
      if(tmp.next.data === n.data){
        tmp.next = tmp.next.next
        a.count--
      }
      else{
      tmp = tmp.next
      }
  }
  n= n.next
}
return a
}

var a = {
  count:4,
  head:{
    data:'a',
    next:{
      data:'b',
      next:{
        data:'a',
        next:{
          data:'c',
          next:null
        }
      }
    }
  }
}
removeDupsLL(a)
