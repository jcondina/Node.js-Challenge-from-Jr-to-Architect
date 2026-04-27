# Proyecto 05: Testing backend profesional

**Nivel:** Fundamentos

## Enunciado
Construir una API de ordenes con suite de pruebas que permita refactorizar con confianza.

El foco no es cubrir lineas por cubrir, sino elegir niveles de test, fixtures y doubles con criterio.

## Objetivos
- Distinguir tests unitarios, integracion, contrato y e2e.
- Preparar fixtures repetibles y aisladas.
- Mockear dependencias externas sin ocultar bugs de integracion.
- Probar errores, bordes y regresiones.
- Disenar datos de prueba legibles.
- Ejecutar tests en CI local.

## Requisitos de implementacion
- API de ordenes con al menos una dependencia externa simulada.
- Tests unitarios para reglas de dominio.
- Tests de integracion con PostgreSQL.
- Tests de contrato para endpoints principales.
- Factories o builders para datos de prueba.
- Reporte documentado de estrategia de testing.

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
- Piramide de testing y tradeoffs.
- Test doubles: fake, stub, mock y spy.
- Aislamiento de base de datos en tests.
- Contratos HTTP y regresiones.

## Criterios de aceptacion
- Los tests se ejecutan de forma deterministica.
- No dependen del orden global ni de datos manuales.
- Cubren errores relevantes, no solo happy path.
- La estrategia explica que no se testea y por que.

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
