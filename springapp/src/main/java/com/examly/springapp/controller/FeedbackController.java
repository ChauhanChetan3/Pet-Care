package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackService;



@RestController 
@RequestMapping("/api/feedback")
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<?> addFeedback(@RequestBody Feedback feedback){
        try{
            return ResponseEntity.status(201).body(feedbackService.addFeedback(feedback));

        }catch(Exception e){
            return ResponseEntity.status(404).body("Not Found");

        }
        
    }

    @GetMapping
    public ResponseEntity<?> getAllFeedbacks(){
        try {
            return ResponseEntity.status(200).body(feedbackService.getAllFeedbacks());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Not Found");
        }

        
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getFeedbackByUserId(@PathVariable int userId){
        try {
            return ResponseEntity.status(200).body(feedbackService.getFeedbackByUserId(userId));
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Not found");
        }
       
    }

    @DeleteMapping("/{feedbackId}")
    public ResponseEntity<?> deleteById(@PathVariable int feedbackId){
        try {
            feedbackService.deleteById(feedbackId);
            return ResponseEntity.status(200).body(true);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(false);
        }
      
    }

    
}
