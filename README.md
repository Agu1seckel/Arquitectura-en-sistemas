# Web Institucional

Beta funcional de un sistema web institucional para una institución de educación superior, basada en el patrón arquitectónico **Cliente-Servidor**.

## Arquitectura

**Usuario → Sistema Cliente → Servidor de Aplicaciones → Servidor de Base de Datos**

- **Cliente:** HTML, CSS y JavaScript.
- **Servidor de aplicaciones:** Java + Spring Boot.
- **Base de datos:** MySQL.

## Beta disponible

La beta incluye:

- Inicio de sesión simulado.
- Panel principal.
- Vista de información académica para estudiantes.
- Módulo docente con calificaciones y asistencia de demostración.
- Módulo administrativo.
- Diseño responsive para computador y celular.
- Sesión de usuario mediante `localStorage`.
- Endpoint de prueba del backend: `GET /api/health`.
- Esquema inicial de MySQL.

> La autenticación, las operaciones académicas y la conexión real con MySQL quedan preparadas para la siguiente etapa. La beta del frontend funciona de forma independiente para poder probar la interfaz inmediatamente.

## Estructura

```
Arquitectura-en-sistemas/
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── estudiantes.html
│   ├── docentes.html
│   ├── administrativo.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── backend/
│   └── spring-boot/
│       ├── pom.xml
│       └── src/
└── database/
    └── schema.sql
```

## Probar el frontend

Desde la carpeta `frontend`, se puede levantar un servidor local. Por ejemplo:

```bash
python -m http.server 5500
```

Luego abrir:

```
http://localhost:5500
```

También se puede abrir `frontend/index.html` directamente en el navegador, aunque un servidor local es recomendable.

## Probar el backend

Requiere **Java 17** y **Maven**:

```bash
cd backend/spring-boot
mvn spring-boot:run
```

Endpoint de prueba:

```
http://localhost:8080/api/health
```

## Base de datos

El script `database/schema.sql` crea la base de datos `web_institucional` y las tablas principales de usuarios, asignaturas, inscripciones, calificaciones y asistencia.

Este proyecto corresponde a una beta académica y se irá ampliando por etapas.
