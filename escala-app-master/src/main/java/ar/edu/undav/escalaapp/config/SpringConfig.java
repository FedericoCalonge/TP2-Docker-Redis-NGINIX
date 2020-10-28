package ar.edu.undav.escalaapp.config;

import ar.edu.undav.escalaapp.controller.ResourceController;
import ar.edu.undav.escalaapp.service.ResourceService;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({
        ResourceController.class,
        ResourceService.class
})
public class SpringConfig {
}
