import React, { useState } from "react";

function TenantList({ tenants, onEdit, onDelete, onPayRent, onViewPayments, payments, selectedTenantId }) {
  const [payAmount, setPayAmount] = useState({});

  const handlePayChange = (id, value) => {
    setPayAmount({ ...payAmount, [id]: value });
  };

  return (
    <div>
      <h2>Tenants</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant) => (
            <tr key={tenant.ID}>
              <td>{tenant.ID}</td>
              <td>{tenant.name}</td>
              <td>{tenant.email}</td>
              <td>{tenant.phoneNumber}</td>
              <td>
                <button onClick={() => onEdit(tenant)}>Edit</button>
                <button onClick={() => onDelete(tenant.ID)}>Delete</button>
                <input
                  type="number"
                  placeholder="Amount"
                  value={payAmount[tenant.ID] || ""}
                  onChange={e => handlePayChange(tenant.ID, e.target.value)}
                  style={{ width: "80px", marginLeft: "5px" }}
                />
                <button
                  onClick={() => {
                    onPayRent(tenant.ID, payAmount[tenant.ID]);
                    setPayAmount({ ...payAmount, [tenant.ID]: "" });
                  }}
                  disabled={!payAmount[tenant.ID]}
                >
                  Pay Rent
                </button>
                <button onClick={() => onViewPayments(tenant.ID)}>
                  View Payments
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTenantId && payments && (
        <div style={{ marginTop: "20px" }}>
          <h3>Payments for Tenant ID: {selectedTenantId}</h3>
          {payments.length === 0 ? (
            <p>No payments found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.paymentID}</td>
                    <td>{p.amount}</td>
                    <td>{new Date(p.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default TenantList;