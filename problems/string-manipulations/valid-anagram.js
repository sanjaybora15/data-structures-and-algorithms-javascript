var isAnagram = function(s1, s2) {
    if (s1.length !== s2.length) return false
   let s1Obj = new Map()
   let s2Obj = new Map()

   for(let i = 0; i < s1.length; i++) {
     s1Obj[s1[i]] = (s1Obj[s1[i]] || 0) + 1
     s2Obj[s2[i]] = (s2Obj[s2[i]] || 0) + 1
   }
  for (let val in s1Obj) {
    if (s1Obj[val] !== s2Obj[val]) {
      return false
    }
  }
  return true
};
