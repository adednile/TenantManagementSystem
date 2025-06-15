import React, { useState } from "react";
import { TextField, Button, Paper, Typography, MenuItem } from "@mui/material";

export default function MaintenanceRequestForm({ tenantId }) {
  const [form, setForm] = useState({
    description: "",
    urgency: "Normal",
    category: "",
    image: null,
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setForm({ ...form, image: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", form.description);
    formData.append("urgency", form.urgency);
    formData.append("category", form.category);
    formData.append("image", form.image);

    await fetch("http://localhost:8082/api/tickets/upload", {
      method: "POST",
      body: formData,
    });
    alert("Maintenance request submitted!");
    setForm({ description: "", urgency: "Normal", category: "", image: null });
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
        <TextField select label="Category" name="category" fullWidth margin="normal" value={form.category} onChange={handleChange}>
          <MenuItem value="Plumbing">Plumbing</MenuItem>
          <MenuItem value="Electrical">Electrical</MenuItem>
          <MenuItem value="General">General</MenuItem>
        </TextField>
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Image
          <input type="file" hidden onChange={handleFile} />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Paper>
  );
}