package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.AppointmentAlreadyExistsException;
import com.examly.springapp.exceptions.AppointmentNotFoundException;
import com.examly.springapp.model.Appointment;
import com.examly.springapp.repository.AppointmentRepo;


@Service
public class AppointmentServiceImpl implements AppointmentService{

    @Autowired
    private AppointmentRepo appointmentRepo;


    public List<Appointment> getAllAppointements(){
        List<Appointment> appointementList=appointmentRepo.findAll();
        return appointementList;
    }

    public Appointment addAppointmnet(Appointment appointment){
        if(appointment.getAppointmentId() !=0 && appointmentRepo.existsById(appointment.getAppointmentId())){
            throw new AppointmentAlreadyExistsException("Appointment with appointment id"+appointment.getAppointmentId()+"already exists");
        }else{
            Appointment saveAppointment=appointmentRepo.save(appointment);
            return saveAppointment;
        }
    }

    public Appointment getAppointmentById(int appointmentId){
        Optional<Appointment> appointmentOpt=appointmentRepo.findById(appointmentId);
        if(appointmentOpt.isPresent()){
            return appointmentOpt.get();
        }else{
            throw new AppointmentNotFoundException("Appointment Not Found with Id"+appointmentId);
        }
    }

    public Appointment updateAppointment(int appointmentId,Appointment appointment){
            Appointment appointmentOpt=appointmentRepo.findById(appointmentId).orElse(null);
            if(appointmentOpt==null){
                throw new AppointmentNotFoundException("Appointment Not Found with Id"+appointmentId);
            }
            appointmentOpt.setAppointmentDate(appointment.getAppointmentDate());
            appointmentOpt.setReason(appointment.getReason());
            appointmentOpt.setStatus(appointment.getStatus());
            appointmentOpt.setPet(appointment.getPet());
            return appointmentRepo.save(appointmentOpt);
    }

    public void deleteAppointment(int appointmentId){
        if(appointmentRepo.existsById(appointmentId)){
            appointmentRepo.deleteById(appointmentId);
        }else{
            throw new AppointmentNotFoundException("Appointment Not Found with Id "+appointmentId);
        }
    }

    public List<Appointment> getAppointmentByUserId(int userId){
        return appointmentRepo.findByUserId(userId);
    }

    @Override
    public Appointment updateAppointmentStatus(int appointmentId, Appointment status) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAppointmentStatus'");
    }
    
}
