function lengthOfLastWord(s: string) {
   const splitWords = s.split(' ')
   const withoutSpace = splitWords.filter((word) => word !== '')

   return withoutSpace[withoutSpace.length - 1].length
}

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))
