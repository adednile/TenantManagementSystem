package Models;

import java.util.ArrayList;
import java.util.List;

public class Tenant extends User {
    private List<Payment> payments = new ArrayList<>();
    private List<Ticket> tickets = new ArrayList<>();

    public Tenant(String name, int ID, String email, String password) {
        super(name, ID, email, password);
    }

    public void viewPaymentHistory() {
        for (Payment p : payments) {
            System.out.println(p);
        }
    }

    public void raiseTickets(String description) {
        Ticket ticket = new Ticket(description);
        tickets.add(ticket);
        System.out.println("Ticket raised: " + description);
    }

    public void payRent(double amount) {
        Payment payment = new Payment(amount);
        payments.add(payment);
        System.out.println("Rent paid: " + amount);
    }

    public void uploadDocuments() {
        System.out.println("Uploading documents...");
    }

    @Override
    public boolean login(String email, String password) {
        System.out.println("Tenant login...");
        return super.login(email, password);
    }

    public List<Payment> getPayments() {
        return payments;
    }
}

