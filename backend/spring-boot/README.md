# Backend - Web Institucional

Servidor de aplicaciones desarrollado con Java y Spring Boot.

## Ejecutar

Requiere Java 17 y Maven.

```bash
mvn spring-boot:run
```

Prueba de funcionamiento:

```
GET http://localhost:8080/api/health
```

La integración con MySQL se encuentra preparada mediante la dependencia JDBC y el esquema ubicado en `database/schema.sql`.
