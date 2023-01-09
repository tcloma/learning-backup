import 'dart:html';

String greet(String word) {
  return 'Hello, ${word}!';
}

String fizzBuzz(int number) {
  if (number % 3 == 0 && number % 5 == 0) return 'FizzBuzz';
  if (number % 3 == 0) return 'Fizz';
  if (number % 5 == 0) return 'Buzz';

  return '$number';
}

void main() {
  print(greet('World'));
  print(fizzBuzz(15));
}
