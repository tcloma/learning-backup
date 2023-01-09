function majorityElement(nums: number[]) {
   let tracker = new Map()
   for (let i = 0; i < nums.length; i++) {
      if (!tracker.has(nums[i])) {
         tracker.set(nums[i], 1)
      } else {
         tracker.set(nums[i], tracker.get(nums[i]) + 1)
      }
      if (tracker.get(nums[i]) > nums.length / 2) return nums[i]
   }
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
