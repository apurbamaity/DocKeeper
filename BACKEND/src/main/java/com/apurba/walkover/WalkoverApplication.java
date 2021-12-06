package com.apurba.walkover;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class WalkoverApplication {

	public static void main(String[] args) {
		SpringApplication.run(WalkoverApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		CorsConfiguration config = new CorsConfiguration();
	    return new WebMvcConfigurer() {
	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            registry.addMapping("/**")
	                    .allowedOrigins("*")
	                    .allowedMethods("GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS");
	            
	            config.setAllowCredentials(false);
	        }
	    };
	}

}
