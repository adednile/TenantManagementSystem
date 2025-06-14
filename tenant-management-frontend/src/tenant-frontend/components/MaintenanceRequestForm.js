import React, { useState } from "react";
import { TextField, Button, Paper, Typography, MenuItem } from "@mui/material";

export default function MaintenanceRequestForm({ tenantId }) {
  const [form, setForm] = useState({
    description: "",
    urgency: "Normal",
    image: null,
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setForm({ ...form, image: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    // For demo, just send as JSON (backend does not support file upload)
    await fetch("http://localhost:8082/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: form.description,
        urgency: form.urgency,
        tenantId,
        // image: form.image, // Not supported by backend
      }),
    });
    alert("Maintenance request submitted!");
    setForm({ description: "", urgency: "Normal", image: null });
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h6" gutterBottom>Submit Maintenance Request</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Description" name="description" fullWidth margin="normal" value={form.description} onChange={handleChange} required />
        <TextField select label="Urgency" name="urgency" fullWidth margin="normal" value={form.urgency} onChange={handleChange}>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Image (not supported)
          <input type="file" hidden onChange={handleFile} disabled />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Paper>
  );
}