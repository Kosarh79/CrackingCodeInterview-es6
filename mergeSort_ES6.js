  function mergeSort(a, low, high){
    if(!a || !a.length || a.length < 2) return a
    if(low === undefined) low = 0
    if(high === undefined) high = a.length -1
    if(low >=high) return a
    let mid = Math.floor((low + high)/2)
    mergeSort(a, low, mid)
    mergeSort(a, mid + 1, high)
    merge(a,low,high,mid)
    return a
  }

  function merge(a,low,high,mid){
    let helper = []
    let current = low
    let left = low
    let right = mid + 1
    for(let i=low; i<=high; i++){
      helper[i] = a[i]
    }

    while(left <=mid && right <=high){
      if(helper[left] <= helper[right]){
        a[current] = helper[left]
        left++
      }
      else{
        a[current] = helper[right]
        right++
      }
      current++
    }
    for(let j=left; j<mid; j++){
      a[current + j] = helper[j]
    }
  }

  var a = [1,4,5,2,8,9,3,0,56]
  console.log(mergeSort(a));
