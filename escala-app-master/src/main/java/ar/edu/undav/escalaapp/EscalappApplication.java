package ar.edu.undav.escalaapp;

import ar.edu.undav.escalaapp.config.SpringConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SpringConfig.class)
public class EscalappApplication {

	public static void main(String[] args) {
		SpringApplication.run(EscalappApplication.class, args);
	}

}
