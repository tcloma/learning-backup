/*
   Create a function that takes in a word as a string and returns,
   TRUE if the word is equal to the inverse of itself, and returns
   FALSE if the word does not equal its inverse

*/

// create fn(string) => boolean

function isPalindrome(word: string) {
   // Reverse the word
   const reversedWord = word.split('').reverse().join('')
   // Compare the word to the reversed word
   console.log([word, word.toLowerCase() === reversedWord.toLowerCase()])
}

isPalindrome('Hannah')
isPalindrome('cat')
isPalindrome('dog')
isPalindrome('truck')
isPalindrome('eve')
isPalindrome('dATad')
isPalindrome('palindrome')
