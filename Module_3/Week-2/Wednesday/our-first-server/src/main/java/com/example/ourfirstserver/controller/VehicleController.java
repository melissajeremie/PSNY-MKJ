package com.example.ourfirstserver.controller;

import com.example.ourfirstserver.model.Vehicle;
import com.example.ourfirstserver.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vehicles")

public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @GetMapping
    public Vehicle getVehicle() {
        return vehicleService.getVehicle();
    }

}
