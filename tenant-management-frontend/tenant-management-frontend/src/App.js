import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthProvider, AuthContext } from "./auth/AuthContext";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import MaintenanceRequestForm from "./tenant-frontend/components/MaintenanceRequestForm";
import LeaseManagement from "./tenant-frontend/components/LeaseManagement";
import TenantProfile from "./tenant-frontend/components/TenantProfile";
import OwnerDashboard from "./tenant-frontend/components/OwnerDashboard";
import TenantList from "./tenant-frontend/components/TenantList";
import TenantForm from "./tenant-frontend/components/TenantForm";
import "./App.css";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [tenants, setTenants] = useState([]);
  const [editingTenant, setEditingTenant] = useState(null);
  const [payments, setPayments] = useState([]);
  const [selectedTenantId, setSelectedTenantId] = useState(null);

  // Fetch tenants from backend
  useEffect(() => {
    fetchTenants();
  }, []);

  const fetchTenants = async () => {
    const res = await fetch("http://localhost:8082/api/tenants");
    const data = await res.json();
    setTenants(data);
  };

  const addTenant = async (tenant) => {
    await fetch("http://localhost:8082/api/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tenant),
    });
    fetchTenants();
  };

  const updateTenant = async (id, tenant) => {
    await fetch(`http://localhost:8082/api/tenants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tenant),
    });
    setEditingTenant(null);
    fetchTenants();
  };

  const deleteTenant = async (id) => {
    await fetch(`http://localhost:8082/api/tenants/${id}`, {
      method: "DELETE",
    });
    fetchTenants();
  };

  const payRent = async (id, amount) => {
    if (!amount) return;
    await fetch(`http://localhost:8082/api/tenants/${id}/pay?amount=${amount}`, {
      method: "POST",
    });
    // Optionally refresh payments if viewing
    if (selectedTenantId === id) {
      viewPayments(id);
    }
  };

  const viewPayments = async (id) => {
    const res = await fetch(`http://localhost:8082/api/tenants/${id}/payments`);
    const data = await res.json();
    setPayments(data);
    setSelectedTenantId(id);
  };

  return (
    <AuthProvider>
      <Router>
        <nav style={{ padding: 16, background: "#1976d2", color: "#fff" }}>
          <Link to="/" style={{ color: "#fff", marginRight: 16 }}>Dashboard</Link>
          <Link to="/maintenance" style={{ color: "#fff", marginRight: 16 }}>Maintenance</Link>
          <Link to="/leases" style={{ color: "#fff", marginRight: 16 }}>Leases</Link>
          <Link to="/profile" style={{ color: "#fff", marginRight: 16 }}>Profile</Link>
          <Link to="/owner" style={{ color: "#fff" }}>Owner</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => window.location = "/"} />} />
          <Route path="/signup" element={<Signup onSignup={() => window.location = "/login"} />} />
          <Route path="/" element={
            <PrivateRoute>
              <div style={{ padding: 24 }}><h2>Welcome to the Tenant Management System</h2></div>
            </PrivateRoute>
          } />
          <Route path="/maintenance" element={
            <PrivateRoute>
              <MaintenanceRequestForm />
            </PrivateRoute>
          } />
          <Route path="/leases" element={
            <PrivateRoute>
              <LeaseManagement />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <TenantProfile />
            </PrivateRoute>
          } />
          <Route path="/owner" element={
            <PrivateRoute>
              <OwnerDashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;