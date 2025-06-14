import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

export default function Signup({ onSignup }) {
  const [form, setForm] = useState({
    name: "",
    ID: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("http://localhost:8082/api/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Signup successful! Please login.");
    onSignup();
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} required />
        <TextField label="ID" name="ID" type="number" fullWidth margin="normal" value={form.ID} onChange={handleChange} required />
        <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={form.password} onChange={handleChange} required />
        <TextField label="Phone Number" name="phoneNumber" fullWidth margin="normal" value={form.phoneNumber} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
      </form>
    </Paper>
  );
}