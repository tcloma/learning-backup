import java.util.LinkedList;

class JavaList {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<Integer>();
        list.add(0);
        list.add(5);
        list.add(10);
        list.add(20);

        System.out.println(list);
    }
}