package com.tms.TenantManagementSystem.Models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "landlords")
public class Landlord extends User {

    //private String email;
    //private String password;

    public Landlord(String name, int ID, String email, String password) {
        super(name, ID, email, password);
    }

    public Landlord() {
        super("", 0, "", "");
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

