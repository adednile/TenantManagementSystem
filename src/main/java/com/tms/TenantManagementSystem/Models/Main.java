package com.tms.TenantManagementSystem.Models;

public class Main {
    public static void main(String[] args) {
        Tenant tenant = new Tenant("John Doe", 101, "john@example.com", "pass123","+254123456789");
        Landlord landlord = new Landlord("Mr. Smith", 201, "smith@example.com", "admin123");

        tenant.registerUser();
        tenant.login("john@example.com", "pass123");

        tenant.payRent(1000.0);
        tenant.raiseTickets("Leaking sink in bathroom.");

        landlord.trackPayment(tenant);
        landlord.login("smith@example.com", "admin123");
    }
}

