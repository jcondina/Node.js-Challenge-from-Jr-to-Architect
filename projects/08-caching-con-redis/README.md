# Proyecto 08: Caching con Redis

**Nivel:** Backend profundo

## Enunciado
Optimizar una API de catalogo con cache Redis medible y correctamente invalidada.

El estudiante debe demostrar que entiende cuando cachear, como invalidar y como medir el impacto.

## Objetivos
- Integrar Redis en Docker Compose.
- Aplicar cache-aside en lecturas costosas.
- Disenar claves, TTL e invalidacion.
- Evitar cachear datos sensibles o demasiado volatiles.
- Medir hit/miss y latencia.
- Manejar caidas de Redis sin tumbar la API.

## Requisitos de implementacion
- Cache para endpoints de catalogo y detalle.
- Invalidacion ante escrituras relevantes.
- TTL configurable por entorno.
- Logs o metricas de hit/miss.
- Fallback si Redis no responde.
- Tests de lectura cacheada e invalidacion.

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
- Cache-aside, write-through y write-behind.
- Cache stampede y estrategias de proteccion.
- Consistencia eventual por cache.
- Metricas de cache utiles.

## Criterios de aceptacion
- El cache mejora una lectura medible o documentada.
- Una actualizacion no deja datos viejos indefinidamente.
- Redis caido degrada la performance, no la disponibilidad basica.
- La documentacion explica que no se cachea.

## Checklist de entrega
- [ ] El proyecto corre localmente con instrucciones claras.
- [ ] TypeScript strict esta activo y el typecheck pasa.
- [ ] Los tests relevantes estan documentados y pasan.
- [ ] Docker Compose levanta los servicios necesarios cuando aplica.
- [ ] El README tecnico explica decisiones, tradeoffs y riesgos.
- [ ] El cuestionario fue respondido por el estudiante en su fork.
- [ ] No hay secretos reales ni respuestas publicadas.

## Defensa tecnica
Durante la revision, el estudiante debe poder explicar:
- Que problema real resuelve el proyecto.
- Que decisiones tecnicas tomo y que alternativas descarto.
- Como fallaria el sistema en produccion.
- Como detectaria, mitigaria y corregiria esos fallos.
- Que cambiaria si el trafico, los datos o el equipo crecieran 10x.
