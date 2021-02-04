package com.example.ourfirstserver.service;

import com.example.ourfirstserver.model.Dog;
import org.springframework.stereotype.Service;

@Service
public class DogServiceImpl implements DogService{

    @Override
    public Dog getDog() {
        Dog rocky = new Dog("Rocky", "Boxer", "white/black", 4);
        return rocky;
    }
}
