package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;


import com.examly.springapp.model.Appointment;


public interface AppointmentService {
    public List<Appointment>  getAllAppointements();
    public Appointment addAppointmnet(Appointment appointment);
    public Appointment getAppointmentById(int appointmentId);
    public Appointment updateAppointment(int appointmentId,Appointment appointment);
    public void deleteAppointment(int appointmentId);
    public List<Appointment> getAppointmentByUserId(int userId);
    public Appointment updateAppointmentStatus(int appointmentId, Appointment status);
}

