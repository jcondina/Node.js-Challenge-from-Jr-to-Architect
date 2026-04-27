# Proyecto 16: Modular monolith avanzado

**Nivel:** Arquitectura

## Enunciado
Construir un monolito modular para una plataforma de suscripciones con billing simulado.

El desafio es mantener deployment simple pero boundaries fuertes, eventos internos y decisiones de extraccion documentadas.

## Objetivos
- Definir modulos por capacidad de negocio.
- Establecer contratos entre modulos.
- Usar eventos internos sin crear distribucion accidental.
- Evitar acceso directo a datos de otros modulos.
- Documentar criterios para extraer servicios.
- Probar reglas sin depender del framework.

## Requisitos de implementacion
- Modulos de cuentas, planes, suscripciones y facturacion simulada.
- Contratos publicos por modulo.
- Eventos internos para cambios relevantes.
- Reglas de importacion documentadas o verificables.
- ADRs sobre boundaries y extraccion.
- Tests de dominio y de integracion entre modulos.

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
- Modular monolith vs microservicios.
- Bounded contexts.
- Eventos internos y contratos.
- Criterios de extraccion de servicios.

## Criterios de aceptacion
- Un modulo no consulta tablas internas de otro sin contrato.
- Los eventos internos tienen esquema y version.
- La decision de no usar microservicios esta defendida.
- Los tests validan al menos un flujo multi-modulo.

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
