package com.example.server.model;
import javax.persistence.*;
// table in sql mexican_food
// record/entry
// id, dishName, spicy, vegetarian, protein
// { id: 12, dishName: "enchilada", spicy: true, vegetarian: false, protein: chicken }
// { id: 13, dishName: "enchilada", spicy: true, vegetarian: false, protein: chicken }
@Entity
@Table(name = "mexican_food")
public class Mexican {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String dishName;
    // can nullable = to an empty string ???
    @Column
    private Boolean spicy;
    @Column
    private Boolean vegetarian;
    @Column
    private String protein;
    public Mexican(){}
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getDishName() {
        return dishName;
    }
    public void setDishName(String dishName) {
        this.dishName = dishName;
    }
    public Boolean getSpicy() {
        return spicy;
    }
    public void setSpicy(Boolean spicy) {
        this.spicy = spicy;
    }
    public Boolean getVegetarian() {
        return vegetarian;
    }
    public void setVegetarian(Boolean vegetarian) {
        this.vegetarian = vegetarian;
    }
    public String getProtein() {
        return protein;
    }
    public void setProtein(String protein) {
        this.protein = protein;
    }
}