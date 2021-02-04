package com.example.ourfirstserver.controller;

import com.example.ourfirstserver.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ourfirstserver.service.StudentService;
import com.example.ourfirstserver.model.Student;

@RestController
@RequestMapping("/students")
// without request mapping: http://localhost:8080/
// with request mapping: http://localhost:8080/students

public class StudentController {
    @Autowired
    StudentService studentService;
    // without autowire: StudentService studentService = new StudentService();
    // what allows the inversion of control from spring boot

    @GetMapping
    public Student getStudent() {
        return studentService.getStudent();
    }
}
