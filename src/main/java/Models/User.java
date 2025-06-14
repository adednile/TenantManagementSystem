package Models;

public class User {
    protected String name;
    protected int ID;
    protected String email;
    protected String password;

    public User(String name, int ID, String email, String password) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.password = password;
    }

    public boolean login(String email, String password) {
        return this.email.equals(email) && this.password.equals(password);
    }

    public void registerUser() {
        System.out.println("Registering user: " + name);
    }
}

