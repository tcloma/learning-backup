import java.util.*;

class Series {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int i = 0; i < t; i++) {
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int seriesCounter = 1;
            int currentValue = a;
            String series = "";

            for (int j = 0; j < n; j++) {
                currentValue += seriesCounter * b;
                seriesCounter = seriesCounter * 2;
                series += " " + currentValue;
            }
            System.out.println(series.substring(1));
        }
        in.close();
    }
}