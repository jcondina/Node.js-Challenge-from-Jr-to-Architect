# Proyecto 18: Event-driven architecture

**Nivel:** Arquitectura

## Enunciado
Implementar un flujo de ecommerce con outbox, consumidores idempotentes y consistencia eventual.

El estudiante debe coordinar efectos secundarios sin depender de transacciones distribuidas.

## Objetivos
- Distinguir eventos de dominio e integracion.
- Implementar outbox pattern.
- Disenar consumidores idempotentes.
- Manejar duplicados, orden y replay.
- Modelar una saga simple.
- Observar eventos y fallos parciales.

## Requisitos de implementacion
- Tabla outbox transaccional.
- Publisher o relay separado.
- Al menos dos consumidores con efectos diferentes.
- Deduplicacion por event id.
- Saga simple para reserva, pago simulado y notificacion.
- Tests de replay, duplicado y fallo parcial.

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
- Outbox pattern.
- Sagas y consistencia eventual.
- Event schema evolution.
- Idempotencia en consumidores.

## Criterios de aceptacion
- Un evento persistido no se pierde si el proceso cae antes de publicarlo.
- Reprocesar un evento no duplica efectos.
- La consistencia eventual esta explicada al consumidor.
- Los fallos parciales quedan trazables.

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
