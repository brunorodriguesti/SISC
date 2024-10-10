package com.ltd.sisc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class SiscApplication {

	public static void main(String[] args) {
		SpringApplication.run(SiscApplication.class, args);
	}

}
