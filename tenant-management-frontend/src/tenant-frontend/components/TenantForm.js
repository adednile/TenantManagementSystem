import React, { useState, useEffect } from "react";

function TenantForm({ onSubmit, editingTenant, setEditingTenant }) {
  const [tenant, setTenant] = useState({
    name: "",
    ID: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (editingTenant) {
      setTenant(editingTenant);
    } else {
      setTenant({
        name: "",
        ID: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
    }
  }, [editingTenant]);

  const handleChange = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tenant);
    setTenant({
      name: "",
      ID: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    if (editingTenant) setEditingTenant(null);
  };

  return (
    <form onSubmit={handleSubmit} className="tenant-form">
      <h2>{editingTenant ? "Edit Tenant" : "Add Tenant"}</h2>
      <input
        name="ID"
        type="number"
        placeholder="ID"
        value={tenant.ID}
        onChange={handleChange}
        required
        disabled={!!editingTenant}
      />
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={tenant.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={tenant.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={tenant.password}
        onChange={handleChange}
        required
      />
      <input
        name="phoneNumber"
        type="text"
        placeholder="Phone Number"
        value={tenant.phoneNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingTenant ? "Update" : "Add"}</button>
      {editingTenant && (
        <button type="button" onClick={() => setEditingTenant(null)}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TenantForm;