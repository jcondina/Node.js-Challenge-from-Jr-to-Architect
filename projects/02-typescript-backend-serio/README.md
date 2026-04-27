# Proyecto 02: TypeScript backend serio

**Nivel:** Fundamentos

## Enunciado
Refactorizar una API de inventario para que el dominio, los DTOs y la configuracion sean seguros y mantenibles.

El objetivo es dejar de usar TypeScript como decoracion y usarlo para expresar contratos, invariantes y errores.

## Objetivos
- Definir modelos de dominio sin mezclar DTOs ni entidades de persistencia.
- Usar schemas para validar datos externos.
- Centralizar configuracion tipada desde variables de entorno.
- Representar errores esperados como tipos o clases explicitas.
- Evitar `any`, casts innecesarios y nullability accidental.
- Disenar tests orientados a contratos de datos.

## Requisitos de implementacion
- API de inventario con productos, stock y movimientos.
- DTOs separados para entrada, salida y dominio.
- Schemas de validacion compartidos con handlers.
- Config tipada con fallos claros si falta una variable requerida.
- Errores de dominio diferenciados de errores inesperados.
- Typecheck obligatorio en CI local o script documentado.

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
- TypeScript strict y opciones relevantes para backend.
- DTO vs entidad de dominio vs entidad de persistencia.
- Validacion runtime con schemas.
- Manejo de errores esperado vs inesperado.

## Criterios de aceptacion
- El proyecto compila sin `any` injustificado.
- Los datos externos no entran al dominio sin validacion.
- La configuracion falla rapido y con mensajes accionables.
- Los errores esperados tienen tratamiento HTTP consistente.

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
