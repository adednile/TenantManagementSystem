import React, { useState } from "react";

export default function TenantScreening() {
  const [form, setForm] = useState({ name: "", email: "", idNumber: "" });
  const [result, setResult] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("http://localhost:8082/api/tenants/screen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.text();
    setResult(data);
  };

  return (
    <div>
      <h2>Tenant Screening</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="idNumber" placeholder="ID Number" value={form.idNumber} onChange={handleChange} required />
        <button type="submit">Screen Tenant</button>
      </form>
      {result && <div><strong>Result:</strong> {result}</div>}
    </div>
  );
}