import React, { useEffect, useState } from "react";
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function OwnerDashboard() {
  const [tenants, setTenants] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/tenants").then(res => res.json()).then(setTenants);
    fetch("http://localhost:8082/api/tickets").then(res => res.json()).then(setTickets);
  }, []);

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>Rent Tracking</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tenant</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map(t => (
            <TableRow key={t.ID}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.payments && t.payments.length > 0 ? "Paid" : "Not Paid"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Tickets</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket #</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map(ticket => (
            <TableRow key={ticket.ticketID}>
              <TableCell>{ticket.ticketID}</TableCell>
              <TableCell>{ticket.description}</TableCell>
              <TableCell>{ticket.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}