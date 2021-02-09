package com.example.firstdbconnection.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @GetMapping
    public String getMovies() {
        return "this will eventually return all the movies";
    }

    @GetMapping("/{id}")

    @PostMapping("/{title}")
    //
    public String createMovie(@RequestParam String title) {
        return title;
    }
}
