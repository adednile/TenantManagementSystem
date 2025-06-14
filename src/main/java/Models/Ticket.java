package Models;

public class Ticket {
    private static int count = 1;
    private int ticketID;
    private String description;
    private String status;

    public Ticket(String description) {
        this.ticketID = count++;
        this.description = description;
        this.status = "Open";
    }

    @Override
    public String toString() {
        return "TicketID: " + ticketID + ", Description: " + description + ", Status: " + status;
    }
}

