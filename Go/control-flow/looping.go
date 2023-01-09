package main

import (
	"fmt"
	s "strings"
)

func main() {
	fmt.Println("Hello, Looping!")
	reverseString("Stinky")
}

func reverseString(word string) {
	fmt.Println(s.Split(word, ""))
}
