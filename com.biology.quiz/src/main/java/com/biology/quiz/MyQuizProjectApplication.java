package com.biology.quiz;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class MyQuizProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyQuizProjectApplication.class, args);
		System.out.println("SuccessFully Run Project...");
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
}
