# Proyecto 06: Arquitectura modular

**Nivel:** Fundamentos

## Enunciado
Disenar una API de gestion de cursos con modulos separados para alumnos, cursos, inscripciones y pagos simulados.

El objetivo es reconocer boundaries, evitar controllers gordos y aislar casos de uso de infraestructura.

## Objetivos
- Separar controladores, casos de uso, repositorios y dominio.
- Definir boundaries por modulo.
- Usar dependency injection sin sobreingenieria.
- Evitar dependencias circulares.
- Documentar decisiones de arquitectura.
- Preparar el codigo para pruebas por capa.

## Requisitos de implementacion
- Al menos tres modulos con responsabilidades claras.
- Casos de uso invocados desde handlers delgados.
- Repositorios con interfaces o contratos explicitos.
- Errores de dominio transformados en errores HTTP afuera del dominio.
- Tests de dominio sin servidor HTTP.
- ADR que justifique la estructura elegida.

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
- Layered architecture, modular monolith y clean architecture.
- Dependency injection en Node.js.
- Boundaries y dependencias permitidas.
- Costo de abstracciones prematuras.

## Criterios de aceptacion
- Un caso de uso puede probarse sin levantar HTTP ni base real.
- Los modulos no importan detalles internos entre si.
- La estructura permite encontrar responsabilidades rapidamente.
- Las decisiones estan justificadas, no copiadas de una plantilla.

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
