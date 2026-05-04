# Proyecto 01: HTTP API desde cero

**Nivel:** Fundamentos

## Enunciado
Construir una API REST para administrar tareas tecnicas de un equipo pequeno.

El foco es entender HTTP, contratos, validacion, errores y paginacion sin esconder complejidad detras de frameworks pesados.

## Objetivos
- Configurar un backend Node.js 24 con TypeScript strict.
- Disenar endpoints REST con metodos, rutas y codigos HTTP correctos.
- Validar body, params y query en runtime.
- Modelar respuestas de error consistentes.
- Implementar paginacion y filtros simples.
- Separar rutas, servicios y tipos de dominio.

## Requisitos de implementacion
- API CRUD para tareas con titulo, descripcion, estado y prioridad.
- Endpoint de listado con paginacion, filtros por estado y ordenamiento permitido.
- Validacion explicita de entradas y errores de contrato.
- Manejo de 400, 404, 409 y 500 con formato estable.
- Tests para casos felices, entradas invalidas y recursos inexistentes.
- Coleccion de requests o ejemplos curl documentados.

## Restricciones
- No subir respuestas, soluciones completas ni claves reales al repositorio publico.
- No desactivar TypeScript strict para resolver errores.
- No acoplar controladores a detalles de infraestructura si el proyecto exige capas.
- No ocultar errores operativos con respuestas genericas que impidan depurar.

## Entregables
- Codigo fuente del backend con TypeScript strict.
- README tecnico con instalacion, comandos, arquitectura y decisiones.
- Docker Compose cuando el proyecto use servicios externos.
- .env.example sin secretos reales.
- Tests relevantes al riesgo del proyecto.
- ADRs para decisiones importantes.
- Respuestas del cuestionario en el fork del estudiante, no en este repo.

## Investigacion obligatoria
- Semantica de metodos HTTP y status codes.
- Diferencia entre validacion de tipos TypeScript y validacion runtime.
- Paginacion offset/limit y limites maximos.
- Formato de errores en APIs publicas.

## Criterios de aceptacion
- La API puede ejecutarse localmente con un solo comando documentado.
- Las respuestas invalidas no filtran stack traces.
- El contrato de listado es estable y documentado.
- Los tests cubren al menos un caso negativo por endpoint principal.

## Checklist de entrega
- [x] El proyecto corre localmente con instrucciones claras.
- [x] TypeScript strict esta activo y el typecheck pasa.
- [x] Los tests relevantes estan documentados y pasan.
- [x] Docker Compose levanta los servicios necesarios cuando aplica.
- [x] El README tecnico explica decisiones, tradeoffs y riesgos.
- [x] El cuestionario fue respondido por el estudiante en su fork.
- [x] No hay secretos reales ni respuestas publicadas.

## Defensa tecnica
Durante la revision, el estudiante debe poder explicar:
- Que problema real resuelve el proyecto.
- Que decisiones tecnicas tomo y que alternativas descarto.
- Como fallaria el sistema en produccion.
- Como detectaria, mitigaria y corregiria esos fallos.
- Que cambiaria si el trafico, los datos o el equipo crecieran 10x.
