package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import com.examly.springapp.exceptions.AppointmentNotFoundException;
import com.examly.springapp.exceptions.PetNotFoundException;
import com.examly.springapp.model.Appointment;
import com.examly.springapp.model.Pet;
import com.examly.springapp.repository.PetRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class PetServiceImpl implements PetService{

    @Autowired
    private PetRepo petRepo;

    @Autowired
    private UserRepo userRepo;

    public List<Pet> getAllPetByUserId(int userId){
        List<Pet> petList=petRepo.getAllPetByUserId(userId);
        if(petList.isEmpty()){
            throw new PetNotFoundException("There are no pets in the list with userId "+userId);
        }else{
            return petList;
        }
    }


    public Pet addPet(Pet pet){
        return petRepo.save(pet);
    }


    public Optional<Pet> getSpecificPet(int petId){
        return petRepo.findById(petId);
    }


    public boolean deleteSpecificPet(int petId){
        if(petRepo.existsById(petId)){
            petRepo.deleteById(petId);
            return true;
        }
        return false;
    }


    public Pet updatedPet(int petId,Pet pet){
    Pet petOpt=petRepo.findById(petId).orElse(null);
    if(petOpt==null){
        throw new PetNotFoundException("Pet Not Found");
    }
    petOpt.setBreed(pet.getBreed());
    petOpt.setDateOfBirth(pet.getDateOfBirth());
    petOpt.setName(pet.getName());
    petOpt.setSpecies(pet.getSpecies());
    
    return petRepo.save(petOpt);
   }
    


    public Pet updateAppointmentStatus(int petId, Pet status) {
        Optional<Pet> petOpt = petRepo.findById(petId);
        if (petOpt.isPresent()) {
            Pet pet = petOpt.get();
            pet.setStatus(status.getStatus());
            return petRepo.save(pet);
        } else {
            throw new AppointmentNotFoundException("Pet Not Found with Id " +  petId);
        }
    }

}
