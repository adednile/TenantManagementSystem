package Models;

import java.util.List;

public class paymentHistory {
    private int tenantID;
    private List<Payment> payments;

    public paymentHistory(int tenantID, List<Payment> payments) {
        this.tenantID = tenantID;
        this.payments = payments;
    }

    public void getPaymentHistory() {
        for (Payment p : payments) {
            System.out.println(p);
        }
    }
}
