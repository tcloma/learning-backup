/*
   Given 2 arrays, create a function that let's a user know (true/false)
   whether the 2 arrays have any common items
*/

const arr1 = ['a', 'b', 'c', 'x']
const arr2 = ['z', 'y', 'i']

const arr3 = ['a', 'b', 'c', 'x']
const arr4 = ['z', 'y', 'x']

/* 
   Assume that:
   string[]
   2 params (arr, arr)
   arr is an array of strings
   returns boolean
*/

// BRUTE FORCE SOLUTION
function commonItemForce(arrA: string[], arrB: string[]) {
   for (let i = 0; i < arrA.length; i++) {
      for (let j = 0; j < arrB.length; j++) {
         if (arrA[i] === arrB[j]) {
            return true
         }
      }
   }
   return false
}

// USING MAP
function commonItemMap(arrA: Array<string>, arrB: Array<string>) {
   const map = new Map()
   for (let i = 0; i < arrA.length; i++) {
      if (!map.has(arrA[i])) {
         map.set(arrA[i], true)
      }
   }
   for (let j = 0; j < arrB.length; j++) {
      if (map.has(arrB[j])) {
         return true
      }
   }

   return false
}

// USING SET
function commonItemSet(arrA: string[], arrB: string[]) {
   const arrSet = new Set(arrA)
   for (let i = 0; i < arrB.length; i++) {
      if (arrSet.has(arrB[i])) {
         return true
      }
   }
   return false
}

// USING ES6 FUNCTIONS
const commonItemFunctions = (arr1: string[], arr2: string[]) => {
   return arr1.some((item) => arr2.includes(item))
}
