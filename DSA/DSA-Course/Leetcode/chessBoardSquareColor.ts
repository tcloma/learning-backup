function squareIsWhite(coordinates: string) {
   const letterRef = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }
   const firstCoord = letterRef[coordinates[0]]
   const secondCoord = parseInt(coordinates[1])

   switch ((firstCoord + secondCoord) % 2) {
      case
   }
   console.log([firstCoord, secondCoord])
}

squareIsWhite('a1')
