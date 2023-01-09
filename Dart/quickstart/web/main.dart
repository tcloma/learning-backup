import 'dart:html';

void main() {
  final root = querySelector('#output');

  var counter = 0;

  void increment() {
    counter++;
    print(counter);
  }

  var counterBtn = ButtonElement();
  counterBtn.innerText = 'Count is $counter';
  counterBtn.addEventListener('click', (event) => print(1));
  increment();

  root!.children.add(counterBtn);
}
