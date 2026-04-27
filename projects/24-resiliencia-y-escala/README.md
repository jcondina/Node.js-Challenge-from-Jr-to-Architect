# Proyecto 24: Resiliencia y escala

**Nivel:** Arquitectura

## Enunciado
Endurecer una plataforma ante fallos, picos de carga y degradacion de dependencias.

El foco es disenar comportamiento bajo presion: circuit breakers, bulkheads, rate limiting distribuido y degradacion controlada.

## Objetivos
- Aplicar timeouts y circuit breakers.
- Separar recursos criticos con bulkheads.
- Implementar rate limiting distribuido.
- Disenar degradacion controlada.
- Medir saturacion y recovery.
- Crear runbooks de incidentes.

## Requisitos de implementacion
- Dependencia externa simulada con fallos y latencia.
- Circuit breaker con estados observables.
- Rate limit distribuido con Redis.
- Bulkhead o aislamiento de pools/colas.
- Modo degradado documentado.
- Pruebas de carga y fallos con reporte.

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
- Circuit breaker pattern.
- Bulkheads y aislamiento de recursos.
- Rate limiting distribuido.
- SLOs, error budgets y graceful degradation.

## Criterios de aceptacion
- Una dependencia lenta no agota todos los recursos de la API.
- El circuito abre y se recupera segun condiciones medibles.
- El rate limit funciona entre multiples instancias simuladas.
- El modo degradado comunica limites al consumidor.

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
