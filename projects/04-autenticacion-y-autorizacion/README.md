# Proyecto 04: Autenticacion y autorizacion

**Nivel:** Fundamentos

## Enunciado
Crear un backend de cuentas y proyectos privados con registro, login, roles y ownership.

El proyecto obliga a distinguir autenticacion, autorizacion, sesiones, tokens y errores seguros.

## Objetivos
- Implementar registro, login, logout y perfil autenticado.
- Almacenar credenciales con hashing seguro.
- Disenar autorizacion por rol y propiedad del recurso.
- Gestionar expiracion y revocacion.
- Proteger endpoints sensibles con rate limiting.
- Testear flujos positivos y negativos de seguridad.

## Requisitos de implementacion
- Usuarios con credenciales hasheadas.
- Sesion o JWT con decision documentada.
- Refresh o revocacion segun estrategia elegida.
- RBAC minimo para admin/member/viewer.
- Ownership para recursos privados.
- Tests de acceso permitido, denegado, expirado y malformado.

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
- Hashing de password y parametros de costo.
- Sesion stateful vs JWT stateless.
- RBAC, ownership y principio de minimo privilegio.
- Riesgos de enumeracion de usuarios.

## Criterios de aceptacion
- Una credencial filtrada en logs o respuestas invalida la entrega.
- Un usuario no puede leer ni modificar recursos ajenos.
- Los tokens o sesiones vencen o pueden revocarse.
- Los errores de auth no revelan informacion innecesaria.

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
