/*
   Create a function that accepts an array, and prints:
   the INDEX which the string 'nemo' is in the array
*/

const nemo = ['dory', 'stitch', 'nemo']

function findNemo(arr: Array<string>) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'nemo') {
         console.log(`Nemo is at index: ${i}`)
      }
   }
}

findNemo(nemo)
