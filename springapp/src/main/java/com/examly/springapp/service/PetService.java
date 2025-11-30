package com.examly.springapp.service;

import java.util.*;

import com.examly.springapp.model.Pet;

public interface PetService {
    
    public List<Pet> getAllPetByUserId(int userId);
    public Pet addPet(Pet pet);
    public Optional<Pet> getSpecificPet(int petId);
    public boolean deleteSpecificPet(int petId);
    public Pet updatedPet(int petId,Pet pet);    
}
