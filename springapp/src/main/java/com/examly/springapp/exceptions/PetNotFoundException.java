package com.examly.springapp.exceptions;

public class PetNotFoundException extends RuntimeException{

    public PetNotFoundException(){

    }

    public PetNotFoundException(String message){
        super(message);
    }
    
}
