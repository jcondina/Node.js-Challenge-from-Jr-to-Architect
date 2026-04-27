# Proyecto 14: Seguridad API

**Nivel:** Backend profundo

## Enunciado
Auditar y endurecer una API con riesgos inspirados en OWASP API Top 10.

El proyecto combina amenazas, controles, tests negativos y documentacion de riesgos residuales.

## Objetivos
- Modelar amenazas de una API realista.
- Aplicar rate limits, CORS y headers seguros.
- Proteger secretos y configuracion.
- Validar autorizacion objeto por objeto.
- Evitar inyecciones y filtrado de datos sensibles.
- Crear pruebas negativas de seguridad.

## Requisitos de implementacion
- Threat model documentado.
- Controles para autenticacion, autorizacion y abuso.
- Rate limiting en endpoints sensibles.
- Politica CORS explicita.
- Headers de seguridad relevantes.
- Tests para BOLA, payloads invalidos y abuso basico.

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
- OWASP API Top 10.
- Broken Object Level Authorization.
- CORS y CSRF segun tipo de cliente.
- Gestion de secretos en desarrollo local.

## Criterios de aceptacion
- Un usuario no puede acceder a objetos ajenos por cambiar IDs.
- La configuracion no contiene secretos reales.
- Los errores no exponen detalles internos.
- La entrega declara riesgos mitigados y residuales.

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
