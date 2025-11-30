package com.examly.springapp.exception;

public class UserNameNotFound extends RuntimeException{

    public UserNameNotFound(){

    }

    public UserNameNotFound(String message){
        super(message);

    }


    
}
