public class OOP {
    public static void main(String[] args) {
        User lex = new User(true, "Nothing");
        User niya = new User(false, "Simping");
        print(lex.isAuth);
        System.out.println(lex.status);
        System.out.println(niya.status);
    }

    static void print(Object args) {
        System.out.println(args);
    }

}

class User {
    boolean isAuth;
    String status;

    public User(boolean b, String string) {
        this.isAuth = b;
        this.status = string;
    }
}