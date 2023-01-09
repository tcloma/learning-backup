import java.util.*;

public class HelperMethods {

    final static String[] testArr = { "Foo", "Bar", "Baz" };

    public static void main(String[] args) {
        System.out.println(Arrays.toString(shift(testArr, "Hello")));
        System.out.println(Arrays.toString(push(testArr, "Hello")));
    }

    static String[] shift(String[] arr, String element) {
        String[] newArr = new String[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i + 1] = arr[i];
        }
        newArr[0] = element;
        return newArr;
    }

    static String[] push(String[] arr, String element) {
        String[] newArr = Arrays.copyOf(arr, arr.length + 1);
        newArr[arr.length] = element;
        return newArr;
    }

    static int sumOfArray(int[] arr) {
        int total = 0;
        for (int i : arr) {
            total += i;
        }
        return total;
    }
}
