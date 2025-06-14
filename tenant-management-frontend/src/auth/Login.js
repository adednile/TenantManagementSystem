import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { TextField, Button, Paper, Typography } from "@mui/material";

export default function Login({ onLogin }) {
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // Simulate login: fetch all users and match email/password
    const res = await fetch("http://localhost:8082/api/tenants");
    const tenants = await res.json();
    const user = tenants.find(u => u.email === form.email && u.password === form.password);
    if (user) {
      setUser({ ...user, role: "tenant" });
      onLogin();
    } else {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" value={form.password} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
      </form>
    </Paper>
  );
}