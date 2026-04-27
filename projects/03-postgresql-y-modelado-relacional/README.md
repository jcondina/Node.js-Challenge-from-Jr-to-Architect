# Proyecto 03: PostgreSQL y modelado relacional

**Nivel:** Fundamentos

## Enunciado
Construir una API de biblioteca tecnica con usuarios, libros, prestamos y reservas.

El foco es modelar datos reales en PostgreSQL, usar migraciones reproducibles y justificar indices y constraints.

## Objetivos
- Modelar relaciones uno-a-muchos y muchos-a-muchos.
- Usar migraciones versionadas y reproducibles.
- Aplicar constraints para proteger invariantes.
- Disenar indices con una razon de consulta concreta.
- Separar acceso a datos de handlers HTTP.
- Explicar planes de consulta basicos.

## Requisitos de implementacion
- Docker Compose con PostgreSQL.
- Migraciones para usuarios, libros, prestamos y reservas.
- Constraints de unicidad, foreign keys y checks relevantes.
- Endpoints con joins y filtros documentados.
- Seeds minimos para desarrollo.
- Tests de integracion contra base aislada.

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
- Normalizacion y desnormalizacion pragmatica.
- Constraints en PostgreSQL.
- Indices B-tree y lectura de EXPLAIN basica.
- Pools de conexion en Node.js.

## Criterios de aceptacion
- La base se crea desde cero con migraciones.
- No hay reglas criticas solo en memoria cuando pueden vivir como constraint.
- Las queries principales tienen indices justificados.
- Los tests preparan y limpian datos de forma reproducible.

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
