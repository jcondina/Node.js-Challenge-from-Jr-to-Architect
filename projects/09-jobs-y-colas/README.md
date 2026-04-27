# Proyecto 09: Jobs y colas

**Nivel:** Backend profundo

## Enunciado
Crear un sistema de procesamiento de reportes con API, worker, reintentos y dead-letter flow.

El foco es separar trabajo sincrono y asincrono sin perder trazabilidad ni confiabilidad.

## Objetivos
- Disenar productores y consumidores.
- Procesar jobs fuera del proceso HTTP.
- Manejar reintentos, backoff y fallos permanentes.
- Modelar estados consultables.
- Hacer workers idempotentes.
- Observar errores y throughput.

## Requisitos de implementacion
- Endpoint que encola generacion de reportes.
- Worker separado con shutdown ordenado.
- Estados persistidos en PostgreSQL.
- Redis como broker o backend de cola.
- Dead-letter o almacenamiento de fallos permanentes.
- Tests de encolado, procesamiento, retry y duplicado.

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
- Queue, job, worker y broker.
- Backoff exponencial y jitter.
- Dead-letter queue.
- Graceful shutdown en workers.

## Criterios de aceptacion
- La API no espera el procesamiento completo.
- Un job duplicado no produce efectos duplicados.
- Un fallo permanente queda visible para operacion.
- El worker puede detenerse sin perder jobs aceptados.

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
