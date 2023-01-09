/*
   Create a function that accepts a number, and returns:
   'FIZZ' if the number is divisble by 3,
   'BUZZ' if the number is divisble by 5,
   'FIZBUZZ' if the number is divisble by 3 and 5, and
   the number itself if the number is divisble by neither
*/

function fizzBuzz(num: number) {
   if (num % 3 == 0 && num % 5 == 0) return 'FIZZBUZZ'
   if (num % 3 == 0) return 'FIZZ'
   if (num % 5 == 0) return 'BUZZ'
   return num
}
