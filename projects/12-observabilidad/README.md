# Proyecto 12: Observabilidad

**Nivel:** Backend profundo

## Enunciado
Instrumentar una API y un worker para diagnosticar latencia, errores y saturacion en Docker Compose.

El proyecto debe producir senales utiles: logs estructurados, metricas, tracing basico y health checks.

## Objetivos
- Emitir logs estructurados con correlation ID.
- Exponer metricas HTTP y de negocio.
- Separar liveness, readiness y health funcional.
- Propagar contexto entre API y worker.
- Evitar datos sensibles en telemetria.
- Documentar diagnosticos operativos.

## Requisitos de implementacion
- Logger con niveles y request ID.
- Endpoint de metricas compatible con Prometheus o formato documentado.
- Trazas o spans basicos para DB y worker.
- Health/readiness con dependencias externas.
- Docker Compose con servicios necesarios para observar localmente.
- Runbook para investigar 3 fallos simulados.

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
- Logs vs metricas vs trazas.
- Metricas RED y USE.
- Cardinalidad de labels.
- OpenTelemetry en Node.js.

## Criterios de aceptacion
- Cada request puede correlacionarse con logs y metricas.
- Un fallo de DB se refleja en readiness.
- No se registran tokens, passwords ni payloads sensibles.
- El runbook permite reproducir y diagnosticar fallos.

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
