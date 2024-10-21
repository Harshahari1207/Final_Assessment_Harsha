package com.wipro.finalAssessment.ProdutService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.finalAssessment.ProdutService.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
}
