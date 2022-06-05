var longestPalindrome = function(s) {
    res = ""
    resLen = 0
    
    for (let i=0; i<=s.length; i++) {
        let l = i
        let r = i
        checkSubstring(l,r,s)
        
 		l = i;
        r = i+1
        checkSubstring(l,r,s)
    }
    return res
};


var checkSubstring = function(l, r, s) {
   while (l >=0 && r < s.length && s[l] === s[r]) {
   	if (r-l+1 > resLen) {
    	resLen = r-l+1
      res = s.slice(l, r + 1)
    }
    l--
    r++
   }
}


console.log(longestPalindrome("babad"))
