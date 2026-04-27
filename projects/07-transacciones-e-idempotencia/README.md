# Proyecto 07: Transacciones e idempotencia

**Nivel:** Backend profundo

## Enunciado
Implementar un flujo de pagos simulados con ledger, reintentos y proteccion contra doble cobro.

El proyecto introduce fallos reales: race conditions, reintentos, estados intermedios y consistencia de datos.

## Objetivos
- Usar transacciones SQL para proteger invariantes.
- Disenar idempotency keys para operaciones criticas.
- Modelar ledger append-only.
- Manejar concurrencia y conflictos.
- Separar efectos externos simulados de commits internos.
- Probar reintentos y carreras.

## Requisitos de implementacion
- Endpoint para iniciar pagos con idempotency key.
- Ledger de movimientos no destructivo.
- Estados de pago claros y transiciones validas.
- Transacciones para actualizaciones relacionadas.
- Simulador de proveedor externo con fallos controlados.
- Tests de doble request, retry y fallo parcial.

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
- ACID, niveles de aislamiento y locks.
- Idempotency keys en APIs de pago.
- Ledger append-only.
- Outbox como alternativa para efectos externos.

## Criterios de aceptacion
- Dos requests equivalentes no generan doble cargo.
- El saldo o estado no puede quedar inconsistente ante errores simulados.
- Las transiciones invalidas son rechazadas.
- Los tests demuestran al menos un caso de concurrencia.

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
