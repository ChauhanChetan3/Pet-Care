package com.examly.springapp.exceptions;

public class UserAlreadyExistingException extends RuntimeException{
    public UserAlreadyExistingException(){

    }
    public UserAlreadyExistingException(String message){
        super(message);
    }
}
