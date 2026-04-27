# Proyecto 25: Capstone Architect

**Nivel:** Capstone

## Enunciado
Construir una plataforma backend multi-tenant con IA, workers, observabilidad, seguridad y plan de escala.

Proyecto final para defender decisiones de nivel senior/architect con evidencia de implementacion y operacion.

## Objetivos
- Integrar API, datos, cache, workers e IA.
- Disenar arquitectura modular defendible.
- Aplicar seguridad, observabilidad y resiliencia.
- Mantener CI, tests y documentacion profesional.
- Definir plan de escala y riesgos.
- Presentar una defensa tecnica completa.

## Requisitos de implementacion
- Backend TypeScript con Fastify o NestJS y Node.js 24.
- PostgreSQL, Redis y Docker Compose.
- Modulo AI configurable con GitHub Models y proveedor local/fake.
- Workers asincronos e idempotentes.
- Logs, metricas, trazas y health checks.
- ADRs, threat model, runbook, plan de escala y postmortem simulado.

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
- Arquitectura evolutiva y tradeoffs.
- Operabilidad minima de produccion.
- Seguridad de SaaS con IA.
- Estrategia de testing por riesgo.

## Criterios de aceptacion
- La plataforma corre localmente con Docker Compose.
- Los modulos criticos tienen tests y contratos.
- La IA no puede saltar permisos ni escribir estado critico sin control.
- La defensa tecnica explica decisiones, riesgos y alternativas.

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
