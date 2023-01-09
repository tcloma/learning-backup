function fizzBuzz(n: number): string[] {
   const tracker: string[] = []

   for (let i = 0; i <= n; i++) {
      if (i === 0) continue
      if (i % 5 === 0 && i % 3 === 0) {
         tracker.push('FizzBuzz')
      } else if (i % 3 === 0) {
         tracker.push('Fizz')
      } else if (i % 5 === 0) {
         tracker.push('Buzz')
      } else {
         tracker.push(`${i}`)
      }
   }

   return tracker
}

console.log(fizzBuzz(15))
