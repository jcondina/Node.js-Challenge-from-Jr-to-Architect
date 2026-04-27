# Proyecto 22: AI tools y agentes simples

**Nivel:** IA aplicada

## Enunciado
Crear un asistente backend que puede llamar herramientas internas con permisos y auditoria.

El foco es tool calling seguro: el modelo propone acciones, el backend valida, ejecuta y audita.

## Objetivos
- Disenar herramientas con schemas estrictos.
- Separar decision del modelo y autorizacion del sistema.
- Implementar permisos por herramienta y usuario.
- Auditar llamadas y resultados.
- Limitar loops, costos y acciones peligrosas.
- Testear planes y ejecuciones con proveedor fake.

## Requisitos de implementacion
- Al menos tres tools internas con schemas.
- Policy engine o validacion de permisos antes de ejecutar.
- Tool calling con GitHub Models o mock compatible.
- Historial auditable de decisiones y ejecuciones.
- Limites de pasos, timeout y costo.
- Tests de herramienta permitida, denegada y argumentos invalidos.

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
- Function/tool calling.
- Least privilege en agentes.
- Human-in-the-loop para acciones riesgosas.
- Prompt injection contra herramientas.

## Criterios de aceptacion
- El modelo no puede ejecutar una tool sin autorizacion backend.
- Los argumentos generados se validan antes de ejecutar.
- Una accion riesgosa queda bloqueada o pendiente de aprobacion.
- La auditoria permite reconstruir quien pidio que accion.

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
