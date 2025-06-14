package com.tms.TenantManagementSystem.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tms.TenantManagementSystem.Models.Landlord;
import com.tms.TenantManagementSystem.Repositories.LandlordRepository;

import java.util.List;

@Service
public class LandlordService {

    @Autowired
    private LandlordRepository landlordRepository;

    public List<Landlord> getAllLandlords() {
        return landlordRepository.findAll();
    }

    public Landlord getLandlordById(int id) {
        return landlordRepository.findById(id).orElse(null);
    }

    public Landlord createLandlord(Landlord landlord) {
        return landlordRepository.save(landlord);
    }

    public Landlord updateLandlord(int id, Landlord landlord) {
        landlord.ID = id;
        return landlordRepository.save(landlord);
    }

    public void deleteLandlord(int id) {
        landlordRepository.deleteById(id);
    }
}
