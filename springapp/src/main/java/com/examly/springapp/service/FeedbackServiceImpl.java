package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    @Autowired
    private UserRepo userRepo;



    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    @Override
    public List<Feedback> getFeedbackByUserId(int userId){
        if(userRepo.existsById(userId)){
            return feedbackRepo.findByUserId(userId);
        }

        return null;
         
    }

    @Override
    public boolean deleteById(int feedbackId) {
      if(feedbackRepo.existsById(feedbackId)){
        feedbackRepo.deleteById(feedbackId);
        return true;
      }
     return false;
    }

    @Override
    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }
    
}
