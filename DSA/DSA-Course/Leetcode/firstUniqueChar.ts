function firstUniqChar(s: string) {
   const chars = new Map()
   const stringArr = s.split('')
   for (let i = 0; i < stringArr.length; i++) {
      if (!chars.has(stringArr[i])) {
         chars.set(stringArr[i], 1)
      } else {
         chars.set(stringArr[i], chars.get(stringArr[i]) + 1)
      }
   }
   for (let entry of chars) {
      if (entry[1] === 1) {
         return stringArr.indexOf(entry[0])
      }
   }
   return -1
}

console.log(firstUniqChar('leetcode'))
