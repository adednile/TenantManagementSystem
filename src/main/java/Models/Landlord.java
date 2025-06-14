package Models;

import java.util.List;

public class Landlord extends User {

    public Landlord(String name, int ID, String email, String password) {
        super(name, ID, email, password);
    }

    public void trackPayment(Tenant tenant) {
        System.out.println("Tracking payments for Tenant ID: " + tenant.ID);
        tenant.viewPaymentHistory();
    }

    public void registerUsers(User user) {
        System.out.println("Registering a new user: " + user.name);
    }

    public void viewTickets(List<Ticket> tickets) {
        for (Ticket t : tickets) {
            System.out.println(t);
        }
    }

    @Override
    public boolean login(String email, String password) {
        System.out.println("Landlord login...");
        return super.login(email, password);
    }
}

