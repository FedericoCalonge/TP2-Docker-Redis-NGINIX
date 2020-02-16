# TP2-Docker-Redis-NGINIX-RabbitMQ-Scaling

>Trabajo Práctico 2 -Docker & Redis & NGINIX & RabbitMQ & Scaling- para la materia Programación Distribuida 2 (PD2), de la Universidad Nacional de Avellaneda.  
>Profesor: Juan Lagostena.  
>Autor: Federico Calonge.  

### About
Nos dan la aplicacion Aplicación NO escalable (ver carpeta "no-escalapp-master") y debemos hacerla escalable (osea........). La solución está en la carpeta "escala-app".  
Lo que hace la aplicación es simplemente........
Para esto además tuvimos que cumplir una serie de requisitos (dichos requerimientos estan en el archivo "Consigna.pdf".)  
-------PONER EL USO DE JMETER Y POSTMAN--------  
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

