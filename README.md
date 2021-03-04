# TP2-Docker-Redis-NGINIX

>Trabajo Práctico 2 -Docker & Redis & NGINX- para la materia Programación Distribuida 2 (PD2), de la Universidad Nacional de Avellaneda.  
>Profesor: Juan Lagostena. 
>Autor: Federico Calonge.
>

### About
Nos proveen una pequeña REST API realizada en Spring Boot, que lo único que hace es demorarse en responder y ocupar recursos del contenedor en donde vive (NO es escalable). 
Esta REST API se ubica en la carpeta "0-no-escalapp-master", y el objetivo es hacerla escalable.

Las demás carpetas del repo son versiones posteriores de la app implementando distintas soluciones para escalar la misma:
* 1-escala-app-master_Redis: Se implementó Redis con cliente Lettuce para almacenar nuestros datos.
* 2-escala-app-master_Sentinel: Se añadió Redis Sentinel para obtener una estructura sólida tolerante a fallos. De esta manera, generamos 3 sentinelas y 4 slaves/replicas, los cuales estan definidos en nuestro docker-compose.yml.
* 3-escala-app-master_Sentinel_NGINIX: Añadimos NGINX como balanceador de carga y proxy reverso para actuar en los servidores Apache Tomcat presentes en 2 aplicaciones "clones", las cuales estan conectadas a Redis-Sentinel. Esto lo hacemos para obtener un mejor manejo de los requests y una mejor performance.

Para entender la teoría de escalabilidad, virtualización, la teoría de las herramientas utilizadas en este Trabajo Práctico y visualizar gráficamente cómo fue escalando la app, mirar: 
>Informe Teoria.pdf
>

### Requirements
* Como tenemos la app en un container en Docker, entonces únicamente para ejecutarla necesitamos tener instalado Docker. 
* Lo demás (Java 11, Maven, Redis, Redis Sentinel y NGINIX) se encuentra dentro del container.
>

### ¿Cómo sabemos que la app no es escalable?
Cada nuevo request a esta app genera una nueva carga en el CPU por un random de segundos. Al llegar al 100% de CPU, la app empezará a responder con un error HTTP 500. Para testear la escalabilidad de la app utilizamos un Script en Gatling (escrito en lenguaje Scala) ubicado en:
> 0-no-escalapp-master/src/test/scala/performance/BasicScript.scala.
> 
Este script realiza múltiples GET para obtener los usuarios con ID "0" y con ID "1". Se realizan 2 tipos de tests:
* Escenario cerrado: donde tenemos el número de usuarios y número de gets "controlados". Total de 305 requests. 
* Escenario abierto: usuarios que realizan un pico de solicitudes en un tiempo determinado. Total de 305 requests.
>
Los resultados de esta prueba están en el archivo HTML ubicado en:
>Pruebas_Gatling/1_Prueba_2_Escenarios_NO_escala_app/index.html.
>

### Testeando la app con Gatling:
Como primera instancia, para testear la app con Gatling, debemos ubicarnos en la carpeta root de nuestra app no escalable y levantar el contenedor con el flag compatibility activado:

    > docker-compose --compatibility up

Verificamos si el container se levantó correctamente:

    > docker-compose ps: para ver solo los activos.
 
    > docker-compose ps -a: para ver todos (Activos e inactivos). 
    
Luego, ejecutamos el script de Gatling que ya está configurado en el pom.xml de la siguiente manera:

    > ./mvnw gatling:test

Al finalizar, nos indicará el archivo donde se generó el reporte HTML con la información detallada de todos los requests realizados y el colapso de nuestra app.
Este archivo como mencionamos previamente lo encontramos en:
>Pruebas_Gatling/1_Prueba_2_Escenarios_NO_escala_app/index.html.
>

### ¿Cómo ejecutar cada una de las versiones?

Como mencionamos previamente, tenemos un total de 4 versiones de nuestra app:
* 0-no-escalapp-master
* 1-escala-app-master_Redis.
* 2-escala-app-master_Sentinel.
* 3-escala-app-master_Sentinel_NGINIX.

Cada una de estas versiones se ejecuta de la misma manera... nos ubicamos en cada una de las carpetas root de cada proyecto/versión de la app y ejecutamos:

    > docker-compose --compatibility up

No hace falta ejecutar ningún comando más.
>

### Entry points: ¿Cómo hacer un GET y un POST en cada una de las versiones?

Se recomienda utilizar Postman o CURL para esto.
>
Los puertos de acceso para las versiones son:
* Puerto 8082: para las primeras 3 versiones (0-no-escalapp-master, 1-escala-app-master_Redis, 2-escala-app-master_Sentinel).
* Puerto 80: para la última version con NGINX como balanceador (3-escala-app-master_Sentinel_NGINIX).

De esta manera podemos realizar GETs y POSTs cambiando los PUERTOACCESO por los mencionados anteriormente para cada app de la siguiente forma:
> GET user con ID "1": http://localhost:PUERTOACCESO/only-resource/1
> GET all users:  http://localhost:PUERTOACCESO/only-resource
> POST usuario con nombre "Fede": http://localhost:PUERTOACCESO/only-resource/Federicoli
>

### ¿Cómo verificar que Redis Sentinel funciona correctamente? (para las últimas 2 versiones de la app)

Para verificar esto, teniendo la app corriendo, tenemos que abrir otra terminal en la misma ubicación root de la versión de la app que deseemos, y entrar dentro del contenedor redis-master y de los contenedores redis-slave. Esto se puede hacer utilizando una herramienta como Portainer o simplemente con el comando:

    >docker exec -i -t IDCONTAINER /bin/bash 

Luego abrimos la consola de Redis con:

    >redis-cli 

Y ejecutamos este comando para obtener información del "rol" de cada nodo:
    
    >INFO replication.

De esta manera para el nodo master nos dirá que su rol es "master" y para los nodo replicas/slave nos dirá que su rol es "slave". Luego bajamos el master ejecutando en otra ventana el siguiente comando:

    >docker stop ID/NOMBRE_DEL_CONTAINER

Y nuevamente nos fijamos los roles de cada instancia con '>INFO replication': notaremos que una replica pasó de tener el rol slave a tener el rol master. De esta manera comprobamos el correcto funcionamiento de Redis-Sentinel, pudiendo seguir bajando de esta manera sucesivamente los slaves con rol "master" y observar cómo los demás slaves van tomando el lugar de master. Esto será posible hasta quedarse sin slaves disponibles.

>
Además, para asegurarnos que se hayan guardado los datos correctamente en cada uno de los nodos, podemos correr estos comandos de Redis:
>KEYS *
>HGETALL*  
>

### Resultados finales:

Observando los resultados de los test realizados con Gatling para cada versión de nuestra app, observamos que a medida que realizamos más mejoras, los tiempos de respuesta mejoraron.
>
Los HTML de cada uno de estos tests para cada versión de la app están ubicados en:
>Pruebas_Gatling
>

### Mejoras
  -Utilizar Swagger para documentar la API.
  -Realizar pruebas más exhaustivas con Gatling generando KO en las apps y evaluar nuevamente los resultados.
