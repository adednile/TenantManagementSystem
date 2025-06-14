import React from "react";
import { Paper, Typography } from "@mui/material";

export default function LeaseManagement() {
  // You would fetch and display lease data here
  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>Lease Management</Typography>
      <Typography>
        Lease management features: tenant screening, lease creation, rent collection, maintenance management, and renewals.<br/>
        (Integrate with backend endpoints as needed.)
      </Typography>
    </Paper>
  );
}