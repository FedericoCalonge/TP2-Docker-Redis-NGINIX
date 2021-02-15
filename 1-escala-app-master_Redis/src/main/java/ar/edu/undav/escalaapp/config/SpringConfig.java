package ar.edu.undav.escalaapp.config;

import ar.edu.undav.escalaapp.controller.ResourceController;
import ar.edu.undav.escalaapp.RedisRepository.ResourceRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({
        ResourceController.class,
        RedisConfig.class,
        ResourceRepository.class
})
public class SpringConfig {
}
