function toHex(n){
  let r = n%16
  let result
  const alpha = "0123456789ABCDEF";
  if(n - r === 0)
    result =alpha.charAt(r)
  else
    result = toHex((n - r)/16) + alpha.charAt(r)
  return result
}

toHex(32)
toHex
