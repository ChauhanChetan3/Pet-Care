package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;

    @ManyToOne
    private User user;

    @ManyToOne
    private Appointment appointment;
    
    private String message;
    private int rating;

    


    public Feedback() {
    }




    public Feedback(int feedbackId, User user, Appointment appointment, String message, int rating) {
        this.feedbackId = feedbackId;
        this.user = user;
        this.appointment = appointment;
        this.message = message;
        this.rating = rating;
    }




    public int getFeedbackId() {
        return feedbackId;
    }




    public void setFeedbackId(int feedbackId) {
        this.feedbackId = feedbackId;
    }




    public User getUser() {
        return user;
    }




    public void setUser(User user) {
        this.user = user;
    }




    public Appointment getAppointment() {
        return appointment;
    }




    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }




    public String getMessage() {
        return message;
    }




    public void setMessage(String message) {
        this.message = message;
    }




    public int getRating() {
        return rating;
    }




    public void setRating(int rating) {
        this.rating = rating;
    }




    @Override
    public String toString() {
        return "Feedback [feedbackId=" + feedbackId + ", user=" + user + ", appointment=" + appointment + ", message="
                + message + ", rating=" + rating + "]";
    }
    


   
    
     
}
