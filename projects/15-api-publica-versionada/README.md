# Proyecto 15: API publica versionada

**Nivel:** Backend profundo

## Enunciado
Publicar una API para integradores externos con OpenAPI, versionado y compatibilidad hacia atras.

El foco es disenar contratos estables, evolucionarlos sin romper clientes y testear compatibilidad.

## Objetivos
- Definir OpenAPI como contrato publico.
- Versionar rutas o contratos con politica explicita.
- Estandarizar errores y codigos.
- Disenar cambios backward-compatible.
- Crear tests de contrato.
- Documentar deprecaciones.

## Requisitos de implementacion
- OpenAPI versionado en el repo.
- Al menos dos versiones o un cambio evolutivo documentado.
- Formato de error estable.
- Tests de contrato para consumidores simulados.
- Changelog de API.
- Politica de breaking changes y deprecacion.

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
- OpenAPI y contract testing.
- Versionado de APIs.
- Backward compatibility.
- Diseno de errores para clientes externos.

## Criterios de aceptacion
- Un consumidor puede integrarse leyendo el contrato.
- Los cambios compatibles no rompen tests anteriores.
- Los errores tienen estructura estable.
- El README explica como evolucionar la API.

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
