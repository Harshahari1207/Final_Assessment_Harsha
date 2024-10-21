package com.wipro.finalAssessment.UserService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.finalAssessment.UserService.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
}

