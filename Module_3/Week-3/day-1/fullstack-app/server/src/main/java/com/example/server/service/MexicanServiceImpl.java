package com.example.server.service;
import com.example.server.model.Mexican;
import com.example.server.repository.MexicanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MexicanServiceImpl implements MexicanService {
    @Autowired
    MexicanRepository mexicanRepository;
    @Override
    public Iterable<Mexican> getDishes() {
        return mexicanRepository.findAll();
    }
    @Override
    public Mexican createDish(Mexican dish) {
        return mexicanRepository.save(dish);
    }
}