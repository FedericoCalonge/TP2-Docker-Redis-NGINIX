package ar.edu.undav.escalaapp.controller;

import ar.edu.undav.escalaapp.domain.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ar.edu.undav.escalaapp.RedisRepository.ResourceRepository;
import java.util.List;

@RestController
@RequestMapping(value = "only-resource")
public class ResourceController {

    //Ahora con Redis:
    private ResourceRepository rr;

    public ResourceController(ResourceRepository rr) {
        this.rr = rr;
    }

    @PostMapping("/{name}")
    public ResponseEntity<Integer> saveResource(@PathVariable String name) {
        rr.saveResource(name);
        //Devolvemos en el body el numero de registros cargados ya que el recurso guardado se guardò con ese ID:
        return ResponseEntity.status(HttpStatus.CREATED).body(rr.getNumberRecordsLoaded());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getResource(@PathVariable Integer id) {
        try { return ResponseEntity.ok(rr.getByID(id));
        } catch (IllegalArgumentException exception) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, String.format("Resource de id %d no encontrado", id), exception);
        } catch (IllegalStateException loadProblemsException) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Mucha carga en el sistema", loadProblemsException);
        }
    }

    @GetMapping
    public ResponseEntity<List<Resource>> getAllResources() {
        return ResponseEntity.ok(rr.getAllByID());
    }

    @GetMapping("/Number_Records")
    public ResponseEntity<Integer> getNumberRecords() {
        return ResponseEntity.status(HttpStatus.CREATED).body(rr.getNumberRecordsLoaded());
        //SI me dice que tiene 6 registros es porque tenemos del ID 0-5 cargados.
    }




}
