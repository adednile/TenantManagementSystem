package com.tms.TenantManagementSystem.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tms.TenantManagementSystem.Models.Lease;
import com.tms.TenantManagementSystem.Services.LeaseService;

import java.util.List;

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
}