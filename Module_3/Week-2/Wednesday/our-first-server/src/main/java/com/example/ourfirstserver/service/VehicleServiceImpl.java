package com.example.ourfirstserver.service;

import com.example.ourfirstserver.model.Vehicle;
import org.springframework.stereotype.Service;

@Service
public class VehicleServiceImpl implements VehicleService{
    @Override
    public Vehicle getVehicle() {
        return new Vehicle("car", "Toyota", "silver", "Camry", 2019);
    }
}
