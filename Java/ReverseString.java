import java.util.Scanner;

public class ReverseString {

    final static String greeting = "Hello";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.next();
        scanner.close();

        System.out.println(reverseString(userInput));
    }

    static String reverseString(String word) {
        String[] wordArr = word.split("", 0);
        String[] reversedWord = new String[wordArr.length];
        for (int i = 0; i < wordArr.length; i++) {
            reversedWord[wordArr.length - (i + 1)] = wordArr[i];
        }
        return String.join("", reversedWord);
    }

}