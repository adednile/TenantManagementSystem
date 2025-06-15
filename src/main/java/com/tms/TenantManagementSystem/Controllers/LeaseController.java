package com.tms.TenantManagementSystem.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tms.TenantManagementSystem.Models.Lease;
import com.tms.TenantManagementSystem.Services.LeaseService;

@RestController
@RequestMapping("/api/leases")
public class LeaseController {

    @Autowired
    private LeaseService leaseService;

    @GetMapping
    public List<Lease> getAllLeases() {
        return leaseService.getAllLeases();
    }

    @GetMapping("/{id}")
    public Lease getLeaseById(@PathVariable String id) {
        return leaseService.getLeaseById(id);
    }

    @PostMapping
    public Lease createLease(@RequestBody Lease lease) {
        return leaseService.createLease(lease);
    }

    @PutMapping("/{id}")
    public Lease updateLease(@PathVariable String id, @RequestBody Lease lease) {
        // Example: Replace currentUser with actual authentication logic as needed
        // if (!currentUser.getRole().equals("admin")) {
        //     throw new AccessDeniedException("Only admin can update lease/property info.");
        // }
        return leaseService.updateLease(id, lease);
        
    }

    @DeleteMapping("/{id}")
    public void deleteLease(@PathVariable String id) {
        leaseService.deleteLease(id);
    }

    @PostMapping("/{id}/renew")
    public Lease renewLease(@PathVariable String id) {
        return leaseService.renewLease(id);
    }

    @PostMapping("/screen")
    public String screenTenant(@RequestBody Map<String, String> data) {
        // Implement screening logic (e.g., check credit score, etc.)
        return "Screening result: Approved";
    }

    @GetMapping("/analytics/leases")
    public Map<String, Object> leaseAnalytics() {
        // Return stats, e.g., total leases, active leases, etc.
        return Map.of("totalLeases", 0, "activeLeases", 0);
    }

    @GetMapping("/analytics/payments")
    public Map<String, Object> paymentAnalytics() {
        // Return stats, e.g., total rent collected, unpaid tenants, etc.
        return Map.of("totalRentCollected", 0, "unpaidTenants", 0);
    }
}