package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exceptions.AppointmentAlreadyExistsException;
import com.examly.springapp.exceptions.AppointmentNotFoundException;
import com.examly.springapp.model.Appointment;
import com.examly.springapp.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public ResponseEntity<?> getAllAppointments(){
        try {
            List<Appointment> appointmentList=appointmentService.getAllAppointements();
            return ResponseEntity.status(200).body(appointmentList); 
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }


    @PostMapping
    public ResponseEntity<?> addAppointment(@RequestBody Appointment appointment){
        try {
            Appointment saveAppointment=appointmentService.addAppointmnet(appointment);
            System.out.println(saveAppointment);
            return ResponseEntity.status(201).body(saveAppointment);
        } catch(AppointmentAlreadyExistsException e){
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }
    
    @GetMapping("/{appointmentId}")
    public ResponseEntity<?> getAppointment(@PathVariable int appointmentId){
        try {
            Appointment appointment=appointmentService.getAppointmentById(appointmentId);
            return ResponseEntity.status(200).body(appointment); 
        } catch(AppointmentNotFoundException e){
            return ResponseEntity.status(500).body(e.getMessage());
        } 
        catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAppointment(@RequestBody Appointment appointment,@PathVariable int id){
        try {
            Appointment updatedAppointment=appointmentService.updateAppointment(id,appointment);
            return ResponseEntity.status(200).body(updatedAppointment); 
        } catch(AppointmentNotFoundException e){
            return ResponseEntity.status(500).body(e.getMessage());
        }  catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointmnet(@PathVariable int id){
        try {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.status(200).body(true); 
            // return true;
        } catch(AppointmentNotFoundException e){
            return ResponseEntity.status(500).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAppointmentByUserId(@PathVariable int userId){
        try {
            List<Appointment> appointment=appointmentService.getAppointmentByUserId(userId);
            return ResponseEntity.status(200).body(appointment); 
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }

    @PutMapping("/status/{appointmentId}")
    public ResponseEntity<?> updateAppointmentStatus(@PathVariable int appointmentId, @RequestBody Appointment status) {
        try {
            Appointment updatedAppointment = appointmentService.updateAppointmentStatus(appointmentId, status);
            return ResponseEntity.status(200).body(updatedAppointment);
        } catch (AppointmentNotFoundException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
}
    
    




    
}
