function mostFrequentEven(nums: number[]) {
   const freq = new Map()
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
         if (!freq.has(nums[i])) {
            freq.set(nums[i], 1)
         } else {
            freq.set(nums[i], freq.get(nums[i]) + 1)
         }
      }
   }
   const sortedValues = [...freq.entries()].sort(
      (valueA, valueB) => valueB[1] - valueA[1]
   )
   return sortedValues[0][0]
}
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]))
