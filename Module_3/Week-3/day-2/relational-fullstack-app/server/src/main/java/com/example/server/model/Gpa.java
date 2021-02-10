package com.example.server.model;


import javax.persistence.*;
// gpa <--> student one to one relation
// student --> classes | one student has many classes, one class has many students | many-to-many relation

@Entity
@Table(name = "students_gpa")
public class Gpa {

    @Id
    @GeneratedValue
    @Column
    private Long id;

    @Column // 3.5 // 1.0 // x.x
}

