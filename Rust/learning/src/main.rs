const WORD: &str = "Hello";

fn main() {
    println!("{} is {} characters long", WORD, string_length(WORD));
    println!("{}", string_reverse(WORD));
}

fn string_length(word: &str) -> usize {
    return word.len();
}

fn string_reverse(word: &str) -> String {
    let mut reverse = String::new();
    for letter in word.chars() {
        reverse.insert(0, letter);
    }
    return reverse;
}
