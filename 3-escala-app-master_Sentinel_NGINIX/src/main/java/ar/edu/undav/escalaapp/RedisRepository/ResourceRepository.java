package ar.edu.undav.escalaapp.RedisRepository;
import javax.annotation.PostConstruct;
import ar.edu.undav.escalaapp.domain.Resource;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ResourceRepository {

    private HashOperations hashOperations;
    private RedisTemplate redisTemplate;

    public ResourceRepository(RedisTemplate redisTemplate) {
        hashOperations = redisTemplate.opsForHash();
        this.redisTemplate = redisTemplate;
    }

    public void saveResource(String name){
        //Saco el numero de registros entonces al proximo en guardar le pongo ese numero.
        Integer numberRecords = (int) (long) hashOperations.size("RESOURCE"); //SI me dice que tiene 6 registros es porque tenemos del ID 0-5 cargados.
        Resource resource = new Resource(numberRecords, name);
        hashOperations.put("RESOURCE",resource.getId(),resource.getName()); //void put(H key, HK hashKey, HV value)  --> Set the value of a hash hashKey.
    }

    public String getByID(Integer id){
        if (hashOperations.get("RESOURCE",id) == null) {
            throw new IllegalArgumentException("Recurso no existente");
        }
        return (String) hashOperations.get("RESOURCE",id); //get(H key, Object hashKey) --> Get value for given hashKey from hash at key.
    }

    public List<Resource> getAllByID(){
        return hashOperations.values("RESOURCE"); //values(H key) --> Get entry set (values) of hash at key.
    }

    public Integer getNumberRecordsLoaded(){
        Integer numberRecords = (int) (long) hashOperations.size("RESOURCE"); // Conversion long a int.
        return numberRecords;
    }

    //Lo hago unicamente para el Test de stress y que hayan 2 datos cargados al iniciar la app en la posicion 0 y 1:
    @PostConstruct
    public void initialize() {
        //this.saveResource("Fede");
        //this.saveResource("Juan");
        hashOperations.put("RESOURCE",0,"federicio");
        hashOperations.put("RESOURCE",1,"juan");
    }

}
