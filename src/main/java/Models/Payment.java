package Models;

import java.util.Date;

public class Payment {
    private static int count = 1;
    private int paymentID;
    private double amount;
    private Date date;

    public Payment(double amount) {
        this.paymentID = count++;
        this.amount = amount;
        this.date = new Date(); // current date
    }

    @Override
    public String toString() {
        return "PaymentID: " + paymentID + ", Amount: " + amount + ", Date: " + date;
    }
}

