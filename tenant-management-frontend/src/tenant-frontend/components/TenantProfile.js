import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Paper, Typography, TextField } from "@mui/material";

export default function TenantProfile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:8082/api/tenants/${user.ID}`)
        .then(res => res.json())
        .then(setProfile);
    }
  }, [user]);

  if (!profile) return <div>Loading...</div>;

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>Tenant Profile</Typography>
      <TextField label="Name" value={profile.name} fullWidth margin="normal" disabled />
      <TextField label="Email" value={profile.email} fullWidth margin="normal" disabled />
      <TextField label="Phone" value={profile.phoneNumber} fullWidth margin="normal" disabled />
      <TextField label="ID" value={profile.ID} fullWidth margin="normal" disabled />
      {/* Only admin can edit lease/property info */}
    </Paper>
  );
}