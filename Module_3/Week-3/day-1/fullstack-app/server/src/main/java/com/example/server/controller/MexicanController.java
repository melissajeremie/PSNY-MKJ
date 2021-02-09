package com.example.server.controller;
import com.example.server.model.Mexican;
import com.example.server.service.MexicanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/mexican")
// http://localhost:8080/mexican
public class MexicanController {
    @Autowired
    MexicanService mexicanService;
    @GetMapping
    public Iterable<Mexican> getDishes() {
        return mexicanService.getDishes();
    }
    @PostMapping
    public Mexican createDish(@RequestBody Mexican dish) {
        return mexicanService.createDish(dish);
    }
}