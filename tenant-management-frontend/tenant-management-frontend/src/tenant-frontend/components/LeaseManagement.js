import React, { useEffect, useState } from "react";
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

export default function LeaseManagement() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/leases")
      .then(res => res.json())
      .then(setLeases);
  }, []);

  const renewLease = async (leaseId) => {
    await fetch(`http://localhost:8082/api/leases/${leaseId}/renew`, { method: "POST" });
    // Refresh leases
    fetch("http://localhost:8082/api/leases")
      .then(res => res.json())
      .then(setLeases);
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>Lease Management</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lease ID</TableCell>
            <TableCell>Tenant ID</TableCell>
            <TableCell>Landlord ID</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Rent Amount</TableCell>
            <TableCell>Renewed</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leases.map(lease => (
            <TableRow key={lease.leaseId}>
              <TableCell>{lease.leaseId}</TableCell>
              <TableCell>{lease.tenantId}</TableCell>
              <TableCell>{lease.landlordId}</TableCell>
              <TableCell>{lease.startDate && new Date(lease.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{lease.endDate && new Date(lease.endDate).toLocaleDateString()}</TableCell>
              <TableCell>{lease.rentAmount}</TableCell>
              <TableCell>{lease.renewed ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button onClick={() => renewLease(lease.leaseId)} disabled={lease.renewed}>Renew</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}