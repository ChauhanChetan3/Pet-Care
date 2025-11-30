package com.examly.springapp.model;
 
import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
 
@Entity

public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int petId;

    private String name;

    private String species;

    private String breed;
    private String dateOfBirth;

    @ManyToOne

    private User user;
 
    private String status;
 
    public Pet() {

    }
 
    public Pet(int petId, String name, String species, String breed, String dateOfBirth, String status,User user) {
        this.petId = petId;

        this.name = name;

        this.species = species;

        this.breed = breed;

        this.dateOfBirth = dateOfBirth;
        this.status = status;
        this.user=user;
    }
 
    public int getPetId() {

        return petId;
    }
 
    public void setPetId(int petId) {

        this.petId = petId;
    }
 
    public String getName() {

        return name;
    }
 
    public void setName(String name) {

        this.name = name;
    }
 
    public String getSpecies() {

        return species;
    }
 
    public void setSpecies(String species) {

        this.species = species;
    }
 
    public String getBreed() {

        return breed;
    }
 
    public void setBreed(String breed) {

        this.breed = breed;
    }
 
    public String getDateOfBirth() {

        return dateOfBirth;
    }
 
    public void setDateOfBirth(String dateOfBirth) {

        this.dateOfBirth = dateOfBirth;
    }
 
    public String getStatus() {

        return status;
    }
 
    public void setStatus(String status) {

        this.status = status;
    }
 
    public User getUser() {

        return user;
    }
 
    public void setUser(User user) {

        this.user = user;

    }
 
    

    @Override

    public String toString() {

        return "Pet [petId=" + petId + ", name=" + name + ", species=" + species + ", breed=" + breed + ", dateOfBirth="

                + dateOfBirth + ", status=" + status + "]";

    }

 
}
