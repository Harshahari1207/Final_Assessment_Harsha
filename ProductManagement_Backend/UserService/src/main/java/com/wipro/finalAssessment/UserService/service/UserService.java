package com.wipro.finalAssessment.UserService.service;

import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.finalAssessment.UserService.models.User;
import com.wipro.finalAssessment.UserService.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }

    public User updateUserProfile(Long id, User user) {
        User existingUser = getUserById(id);
        existingUser.setEmail(user.getEmail());
        existingUser.setAddress(user.getAddress());
        
        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

