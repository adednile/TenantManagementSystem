// In Signup.js
<div>
  <select name="role" value={form.role} onChange={handleChange} required>
    <option value="tenant">Tenant</option>
    <option value="landlord">Landlord</option>
    <option value="agent">Agent</option>
  </select>
  <input
    name="email"
    type="email"
    value={form.email}
    onChange={handleChange}
    required
    pattern=".+@gmail\.com"
  />
</div>