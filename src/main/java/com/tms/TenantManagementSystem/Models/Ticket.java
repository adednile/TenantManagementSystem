package com.tms.TenantManagementSystem.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tickets")
public class Ticket {
    private static int count = 1;
    @Id
    private int ticketID;
    private String description;
    private String status;

    public Ticket(String description) {
        this.ticketID = count++;
        this.description = description;
        this.status = "Open";
    }
    public Ticket() {}

    @Override
    public String toString() {
        return "TicketID: " + ticketID + ", Description: " + description + ", Status: " + status;
    }
}

