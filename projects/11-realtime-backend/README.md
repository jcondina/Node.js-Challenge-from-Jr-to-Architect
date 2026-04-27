# Proyecto 11: Realtime backend

**Nivel:** Backend profundo

## Enunciado
Implementar presencia y notificaciones en tiempo real para un tablero colaborativo.

El foco es manejar conexiones, reconexiones, eventos, permisos y consistencia entre HTTP y realtime.

## Objetivos
- Elegir WebSockets o SSE con justificacion.
- Autenticar conexiones realtime.
- Modelar eventos de dominio emitidos a clientes.
- Gestionar presencia y reconexion.
- Evitar fugas entre usuarios o tenants.
- Testear eventos sin depender de clicks manuales.

## Requisitos de implementacion
- API HTTP para crear y modificar items del tablero.
- Canal realtime para cambios y presencia.
- Autorizacion por sala o tablero.
- Heartbeat o mecanismo de desconexion.
- Replay o consulta de estado al reconectar.
- Tests de conexion autorizada, evento y desconexion.

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
- WebSockets vs Server-Sent Events.
- Heartbeats, reconexion y backoff cliente.
- Autorizacion en canales realtime.
- Escalado de conexiones y sticky sessions.

## Criterios de aceptacion
- Un usuario no recibe eventos de tableros no autorizados.
- La perdida de conexion no corrompe estado.
- Los eventos tienen contrato versionable.
- El README explica limites de escalado local.

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
