package com.examly.springapp.model;
 


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appointmentId;
    private String appointmentDate;
    private String reason;
    
    @ManyToOne
    private User user;

    @ManyToOne
    private Pet pet;

    private String status;

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Appointment(int appointmentId, String appointmentDate, String reason, User user, Pet pet,
            String status) {
        this.appointmentId = appointmentId;
        this.appointmentDate = appointmentDate;
        this.reason = reason;
        this.user = user;
        this.pet = pet;
        this.status = status;
    }

    public Appointment() {
    }

    @Override
    public String toString() {
        return "Appointment [appointmentId=" + appointmentId + ", appointmentDate=" + appointmentDate + ", reason="
                + reason + ", user=" + user + ", pet=" + pet + ", status=" + status + "]";
    }
    
}
