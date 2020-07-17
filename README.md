# TP2-Docker-Redis-NGINIX-RabbitMQ-Scaling - NOT YET FINISHED

>Trabajo Práctico 2 -Docker & Redis & NGINIX & RabbitMQ & Scaling- para la materia Programación Distribuida 2 (PD2), de la Universidad Nacional de Avellaneda.  
>Profesor: Juan Lagostena.  
>Autor: Federico Calonge.  

### About
Nos proveen una aplicacion Aplicación NO escalable (carpeta "no-escalapp-master") y debemos hacerla escalable.
Para esto además tuvimos que cumplir una serie de requisitos (dichos requerimientos estan en el archivo "Consigna.pdf".)  
Test hechos con JUnit y uso de TRAVIS CI.  

### Requirements
-JAVA 11  
-Maven  
-Docker  
-Redis Sentinel  
-Rabbit MQ  

### Consigna
Leer el archivo "Consigna.pdf".  

### Uso
Main a ejecutar: en /TP2....  
Estando parados en /TP2/TP2... utilizar el siguiente comando de Maven para que compile el proyecto y luego lo ejecute:   
>mvn compile exec:java -Dexec.mainClass="DOMmain"

