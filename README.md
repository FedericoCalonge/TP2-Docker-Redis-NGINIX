# TP2-Docker-Redis-NGINIX

>Trabajo Práctico 2 -Docker & Redis & NGINX- para la materia Programación Distribuida 2 (PD2), de la Universidad Nacional de Avellaneda.  
>Profesor: Juan Lagostena. 
>Autor: Federico Calonge.

### About
Nos proveen una pequeña REST API realizada en Spring Boot, que lo único que hace es demorarse en responder y ocupar recursos del contenedor en donde vive (NO es escalable). 
Esta REST API se ubica en la carpeta "0-no-escalapp-master", y el objetivo es hacerla escalable.

Las demás carpetas del repo son versiones posteriores de la app implementando distintas soluciones para escalar nuestra app:
* 1-escala-app-master_Redis: Se implementó Redis con cliente Lettuce para almacenar nuestros datos.
* 2-escala-app-master_Sentinel: Se añadió Redis Sentinel para estructura sólida tolerante a fallos. De esta manera, generamos 3 sentinelas y 4 slaves/replicas, los cuales estan definidos en nuestro docker-compose.yml.
* 3-escala-app-master_Sentinel_NGINIX: Añadimos NGINX como balanceador de carga y proxy reverso para obtener un mejor manejo de los requests.

Para entender la teoría de escalabilidad, virtualización, la teoría de las herramientas utilizadas en este Trabajo Práctico y visualizar gráficamente cómo fue escalando la app, mirar: "Informe Teoria.pdf".

### Requirements
* Al tener la app en un container en Docker, para ejecutarla únicamente se necesita tener instalado Docker. 
* Lo demás (Java 11, Maven, Redis, Redis Sentinel y NGINIX) se encuentra dentro del container.

### ¿Cómo sabemos que la app no es escalable?
Cada nuevo request a esta app genera una nueva carga en el CPU por un random de segundos. Al llegar al 100% de CPU, la app empezará a responder con un error HTTP 500. Para testear la escalabilidad de la app utilizamos un Script en Gatling (escrito en lenguaje Scala) ubicado en:
> 0-no-escalapp-master/src/test/scala/performance/BasicScript.scala.
> 
Este script...
>
Los resultados de esta prueba están en el archivo index.html ubicado en:
>Pruebas_Gatling/1_Prueba_2_Escenarios_NO_escala_app/index.html.

### Testeando la app con Gatling:
Como primera instancia, para testear la app con Gatling, debemos ubicarnos en ......... y levantar el contenedor con el flag compatibility activado:

    > docker-compose --compatibility up

Verificamos si el container se levantó correctamente:

    > docker-compose ps: para ver solo los activos.
 
    > docker-compose ps -a: para ver todos (Activos e inactivos). 
    
Luego, ejecutamos el script de Gatling que ya está configurado en el pom.xml de la siguiente manera:

    > ./mvnw gatling:test

Al finalizar, nos indicará el archivo donde se generó el reporte HTML con la información detallada de todos los requests realizados y el colapso de nuestra app.

### ¿Cómo ejecutar cada una de las versiones?

Para ejecutar Main a ejecutar: en /TP2....  
Estando parados en /TP2/TP2... utilizar el siguiente comando de Maven para que compile el proyecto y luego lo ejecute:   

    > mvn compile exec:java -Dexec.mainClass="DOMmain"

Como mencionamos previamente, tenemos en total 4 versiones de nuestra app:
* 0-no-escalapp-master
* 1-escala-app-master_Redis.
* 2-escala-app-master_Sentinel.
* 3-escala-app-master_Sentinel_NGINIX.

Cada una de estas versiones se ejecuta de la misma manera: Nos ubicamos en la carpeta root del proyecto y ejecutamos:

    > docker-compose --compatibility up

### Entry points: ¿Cómo hacer un GET y un POST en cada una de las versiones?
Se recomienda utilizar Postman o CURL para esto.
>
Los puertos de acceso para las versiones son:
* Puerto 8082: para las primeras 3 versiones (0-no-escalapp-master,1-escala-app-master_Redis, 2-escala-app-master_Sentinel).
* Puerto 80: para la última version con NGINX como balanceador (3-escala-app-master_Sentinel_NGINIX).

De esta manera podemos realizar GETs y POSTs cambiando los PUERTOACCESO por los mencionados para cada app de la siguiente forma:
> GET user con ID "1": http://localhost:PUERTOACCESO/only-resource/1
> GET all users:  http://localhost:PUERTOACCESO/only-resource
> POST usuario con nombre "Fede": http://localhost:PUERTOACCESO/only-resource/Federicoli

### ¿Cómo verificar que Redis Sentinel funciona correctamente? (últimas 2 versiones de la app)
Para verificar esto, teniendo la app corriendo, tenemos que pararnos en....

### Resultados de los tests con Gatling:

### Mejoras
  -Utilizar Swagger para documentar la API.
  -Realizar pruebas más exhaustivas con Gatling generando KO en las apps.
