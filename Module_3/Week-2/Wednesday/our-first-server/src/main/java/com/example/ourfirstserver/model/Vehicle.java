package com.example.ourfirstserver.model;

public class Vehicle {
    public String type;
    public String brand;
    public String color;
    public String model;
    public int year;

    public Vehicle(String type, String brand, String color, String model, int year) {
        this.type = type;
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.year = year;
    }
}
