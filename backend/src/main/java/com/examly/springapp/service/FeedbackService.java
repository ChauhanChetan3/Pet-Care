package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Feedback;

public interface FeedbackService {
    public Feedback addFeedback(Feedback feedback);
    public List<Feedback> getAllFeedbacks();
    public List<Feedback> getFeedbackByUserId(int userId);    
    public boolean deleteById(int feedbackId);
    
}
