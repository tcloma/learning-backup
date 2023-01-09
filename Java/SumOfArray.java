public class SumOfArray {

    final static int[] nums = { 120, 32, 77 };

    public static void main(String[] args) {
        System.out.println(sumOfArray(nums));
    }

    static int sumOfArray(int[] arr) {
        int total = 0;
        for (int i : arr) {
            total += i;
        }
        return total;
    }
}
