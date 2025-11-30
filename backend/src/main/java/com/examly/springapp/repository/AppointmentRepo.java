package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Appointment;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment,Integer> {
    @Query("SELECT a from Appointment a where a.user.userId = :userId ")
    List<Appointment> findByUserId(int userId);
}
