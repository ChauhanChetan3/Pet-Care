package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exceptions.AppointmentNotFoundException;
import com.examly.springapp.exceptions.PetNotFoundException;
import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetServiceImpl;

import java.util.*;

@RestController
public class PetController {

    @Autowired
    private PetServiceImpl petServiceImpl;


    @GetMapping("/api/pet/user/{userId}")
    public ResponseEntity<?> getAllPetByUserId(@PathVariable int userId){
        try{
            List<Pet> petList=petServiceImpl.getAllPetByUserId(userId);
            return ResponseEntity.status(200).body(petList);
        }catch(PetNotFoundException e){
            return ResponseEntity.status(200).body(e.getMessage());
        }
    }


    @PostMapping("/api/pet")
    public ResponseEntity<?> addPet(@RequestBody Pet pet){
        Pet savedPet=petServiceImpl.addPet(pet);
        System.out.print(savedPet);
        return ResponseEntity.status(201).body(savedPet);
    }


    @GetMapping("/api/pet/{petId}")
    public ResponseEntity<?> getSpecificPet(@PathVariable int petId){
        Optional<Pet> optPet=petServiceImpl.getSpecificPet(petId);
        return ResponseEntity.status(200).body(optPet);
    }


    @PutMapping("/api/pet/{petId}")
    public ResponseEntity<?> updatePet(@PathVariable int petId,@RequestBody Pet pet){
        Pet updatedPet=petServiceImpl.updatedPet(petId, pet);
        return ResponseEntity.status(200).body(updatedPet);
    }


    @DeleteMapping("/api/pet/{petId}")
    public ResponseEntity<?> deleteSpecificPet(@PathVariable int petId){
        petServiceImpl.deleteSpecificPet(petId);
        return ResponseEntity.status(200).body(true);
    }


     @PutMapping("/api/pet/status/{petId}")
    public ResponseEntity<?> updateAppointmentStatus(@PathVariable int petId, @RequestBody Pet status) {
        try {
            Pet updatedPetStatus = petServiceImpl.updateAppointmentStatus(petId, status);
            return ResponseEntity.status(200).body(updatedPetStatus);
        } catch (AppointmentNotFoundException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }
    
}
