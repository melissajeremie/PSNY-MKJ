package com.example.ourfirstserver.controller;

import com.example.ourfirstserver.model.Dog;
import com.example.ourfirstserver.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dogs")

public class DogController {

    @Autowired
    DogService dogService;

    @GetMapping
    public Dog getDog() {
        return dogService.getDog();
    }
}
