function reverseString(str) {
   // convert the string to an array
   // use .reverse()
   // convert the array back into a string
   return str.split('').reverse().join('')
   // return the result
}

if (require.main === module) {
   // add your own tests in here
   console.log("Expecting: 'ih'");
   console.log("=>", reverseString("hi"));

   console.log("");

   console.log("Expecting: 'ybabtac'");
   console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
