package com.wipro.finalAssessment.ProdutService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProdutServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProdutServiceApplication.class, args);
	}
	 @Bean
	    public WebMvcConfigurer configure() {
	        return new WebMvcConfigurer() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/") 
	                        .allowedOrigins("*")
	                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
	                        .allowedHeaders("*")
	                        .allowCredentials(true);
	            }
	        };
	    }
}
