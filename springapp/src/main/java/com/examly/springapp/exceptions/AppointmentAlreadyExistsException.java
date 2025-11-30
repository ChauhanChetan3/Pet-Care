package com.examly.springapp.exceptions;

public class AppointmentAlreadyExistsException extends RuntimeException{
    public AppointmentAlreadyExistsException(){

    }

    public AppointmentAlreadyExistsException(String message){
        super(message);
    }
}
