package com.example.ourfirstserver.service;

import com.example.ourfirstserver.model.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Override
    public Student getStudent() {
        Student melissa = new Student("Melissa", "Jeremie", 35);
        return melissa;
    }
}
