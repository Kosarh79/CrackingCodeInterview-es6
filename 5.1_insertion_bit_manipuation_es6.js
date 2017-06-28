      function insertion(n,m,i,j){
        if((m>>>0).toString(2).length > j-i) throw new Error('WRONG j i INPUT')
        //insert m in n from bit i to j assume i m fits in j-i
        let leftMask = ~0 << (j + 1)
        let rightMask = (1 << i) - 1
        let mask = leftMask | rightMask
        console.log(mask)
        let cleared_n = n & mask
        let shifted_m = m << i
        return cleared_n | shifted_m
      }

      var n = 133
      var m = 15
      n= insertion(n,m,2,6)
