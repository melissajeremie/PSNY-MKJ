package com.example.server.service;

import com.example.server.model.Mexican;

public interface MexicanService {
    Iterable<Mexican> getDishes();
    Mexican createDish(Mexican dish);
}
