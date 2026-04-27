# Proyecto 19: SaaS multi-tenant

**Nivel:** Arquitectura

## Enunciado
Crear una plataforma B2B con workspaces, miembros, roles, billing simulado y auditoria.

El proyecto prueba aislamiento de datos, autorizacion por tenant y operacion de un SaaS realista.

## Objetivos
- Modelar tenants, usuarios, memberships y roles.
- Resolver tenant context por request.
- Aislar datos en cada query.
- Auditar acciones sensibles.
- Simular planes y limites de uso.
- Testear acceso cruzado entre tenants.

## Requisitos de implementacion
- Workspaces con miembros y roles por workspace.
- Recursos protegidos por tenant y ownership.
- Billing simulado con planes y quotas.
- Audit log para acciones criticas.
- Tests negativos de fuga entre tenants.
- ADRs sobre estrategia multi-tenant.

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
- Estrategias shared schema, schema per tenant y database per tenant.
- Tenant context y autorizacion por organizacion.
- Auditoria y soporte operativo.
- Quotas y limites en SaaS.

## Criterios de aceptacion
- Cambiar un ID no permite acceder a otro tenant.
- Un usuario con multiples workspaces tiene permisos correctos por contexto.
- Los limites de plan se aplican de forma verificable.
- El audit log permite reconstruir acciones sensibles.

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
