function frequencySort(s: string) {
   const chars = new Map()
   const stringArr = s.split('')
   const sortedString: any[] = []
   for (let i = 0; i < stringArr.length; i++) {
      if (!chars.has(stringArr[i])) {
         chars.set(stringArr[i], 1)
      } else {
         chars.set(stringArr[i], chars.get(stringArr[i]) + 1)
      }
   }
   const sortedValues = [...chars.entries()].sort(
      (valueA, valueB) => valueB[1] - valueA[1]
   )
   for (let i = 0; i < sortedValues.length; i++) {
      for (let j = 0; j < sortedValues[i][1]; j++) {
         sortedString.push(sortedValues[i][0])
      }
   }
   return sortedString.join('')
}
