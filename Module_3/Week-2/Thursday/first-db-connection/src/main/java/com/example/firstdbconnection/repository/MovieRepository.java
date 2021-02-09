package com.example.firstdbconnection.repository;

import com.example.firstdbconnection.model.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long> {

}
