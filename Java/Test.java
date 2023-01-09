import java.util.LinkedList;

public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("Foo");
        list.add("Bar");
        list.add("Baz");
        list.add("Bing");
        list.add("Bong");
        print(list);
    }

    static LinkedList<String> reverseList(LinkedList<String> list) {
        String current = list.peekFirst();
        print(current);
        return list;
    }

    static void print(Object param) {
        System.out.println(param);
    }
}