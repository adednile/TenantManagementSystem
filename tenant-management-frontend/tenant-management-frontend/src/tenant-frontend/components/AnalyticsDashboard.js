import React, { useEffect, useState } from "react";

export default function AnalyticsDashboard() {
  const [leaseStats, setLeaseStats] = useState(null);
  const [paymentStats, setPaymentStats] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/api/leases/analytics")
      .then(res => res.json())
      .then(setLeaseStats);
    fetch("http://localhost:8082/api/payments/analytics")
      .then(res => res.json())
      .then(setPaymentStats);
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <div>
        <h3>Lease Analytics</h3>
        {leaseStats ? (
          <pre>{JSON.stringify(leaseStats, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
      <div>
        <h3>Payment Analytics</h3>
        {paymentStats ? (
          <pre>{JSON.stringify(paymentStats, null, 2)}</pre>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}