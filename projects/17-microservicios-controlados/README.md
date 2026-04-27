# Proyecto 17: Microservicios controlados

**Nivel:** Arquitectura

## Enunciado
Separar un flujo de ordenes en servicios de catalogo, ordenes y notificaciones sin perder contratos.

El objetivo no es multiplicar servicios, sino entender costos, fallos y resiliencia de la comunicacion distribuida.

## Objetivos
- Definir ownership de datos por servicio.
- Comunicar servicios por HTTP y/o eventos con contratos claros.
- Manejar timeouts, retries y errores remotos.
- Evitar transacciones distribuidas ingenuas.
- Documentar topologia local con Docker Compose.
- Testear contratos entre servicios.

## Requisitos de implementacion
- Al menos dos procesos backend independientes.
- Base de datos o schema separado por ownership.
- Contrato HTTP o evento versionado.
- Timeouts y fallbacks documentados.
- Docker Compose para correr todo local.
- Tests de contrato y smoke test del flujo completo.

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
- Data ownership en microservicios.
- Synchronous vs asynchronous communication.
- Service discovery local y configuracion.
- Distributed systems fallacies.

## Criterios de aceptacion
- Un servicio no escribe directamente datos de otro.
- Los fallos remotos tienen timeouts y comportamiento definido.
- El contrato entre servicios se puede verificar.
- El README explica por que esta separacion vale el costo.

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
