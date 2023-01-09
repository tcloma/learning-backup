fn main() {
    println!("Hello, world!");
}

fn fizz_buzz(num: u32) -> (&str, u32) {
    if num % 5 == 0 {
        return "Fizz";
    } else {
        return num;
    }
}
