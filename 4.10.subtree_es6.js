function checkSubtree (t1, t2){
  if(!t2) return true
  if(!t1 && !t2) return true
  else if(!t1 && t2) return false

  if(t1.data === t2.data){
    return checkSubtree(t1.left, t2.left) && checkSubtree(t1.right, t2.right)
  }
  else{
    return checkSubtree(t1.left, t2) || checkSubtree(t1.right, t2)
  }
}


var t1 = {
    data:1,
    left:{
      data:2,
      left:{
        data:4,
        left:{
          data:8
        }
      },
      right:{
        data:5
      }
    },
    right:{
      data:3,
      left:{
        data:7,
        left:{
          data:11
      },
      right:{
        data:6
      }
    }
  }
}
var t2 = {
    data:3,
    left:{
      data:7
    }
}
var t3 = {
    data:1,
    left:{
      data:2,
      left:{
        data:4,
        left:{
          data:8
        }
      },
      right:{
        data:5
      }
    },
    right:{
      data:3,
      left:{
        data:7,
        left:{
          data:11
      }
    }
  }
}
var t4 = {
    data:1,
    left:{
      data:2,
      left:{
        data:4,
        left:{
          data:8
        }
      },
      right:{
        data:5
      }
    },
    right:{
      data:3555555,
      left:{
        data:7,
        left:{
          data:11
      }
    }
  }
}
console.log(checkSubtree(t1,t2) === true)
console.log(checkSubtree(t1,t1) === true)
console.log(checkSubtree(t2,t1) === false)
console.log(checkSubtree(t1) === true)
console.log(checkSubtree(t1,t3) === true)
console.log(checkSubtree(t1,t4) === false)
