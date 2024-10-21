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
    
    public User getUserByUsername(String username) {
    		return userRepository.findByUsername(username).orElse(null);
    }

    public User updateUserProfile(String username, User user) {
        User existingUser = getUserByUsername(username);
        existingUser.setEmail(user.getEmail());
        existingUser.setAddress(user.getAddress());
        
        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

