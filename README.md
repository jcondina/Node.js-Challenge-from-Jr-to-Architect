# Programa Backend Node.js: Jr a Senior/Architect

Este repositorio contiene 25 proyectos progresivos para formar criterio backend moderno con Node.js. Esta pensado para que un estudiante lo forkee, implemente cada proyecto, responda cuestionarios en su propio fork y defienda decisiones tecnicas durante la correccion.

No contiene respuestas ni soluciones canonicas.

## Stack base
- Node.js 24 LTS.
- TypeScript strict.
- Fastify o NestJS segun el proyecto y la justificacion.
- PostgreSQL, Redis y Docker Compose.
- Testing automatizado, CI y observabilidad.
- GitHub Models desde el proyecto 20.
- Arquitectura para modelo local desde el proyecto 23.

## Como usar este repo
1. Forkear el repositorio.
2. Elegir el proyecto actual y leer su README, cuestionario y rubrica.
3. Implementar en una carpeta propia dentro del fork, o dentro del `starter/` cuando exista.
4. Responder `questions.md` en el fork del estudiante.
5. Documentar decisiones en ADRs cuando el proyecto lo pida.
6. Abrir un pull request para revision.

## Reglas
- No subir respuestas al repo base.
- No subir secretos reales.
- No aceptar codigo que no pueda explicarse en defensa tecnica.
- No evaluar solo si "funciona"; evaluar tambien datos, errores, seguridad, tests, operacion y tradeoffs.
- Todo proyecto con infraestructura debe poder correrse localmente con Docker Compose.

## Mapa de proyectos
| # | Proyecto | Etapa | Foco |
|---|---|---|---|
| 01 | [HTTP API desde cero](projects/01-http-api-desde-cero/README.md) | Fundamentos | El foco es entender HTTP, contratos, validacion, errores y paginacion sin esconder complejidad detras de frameworks pesados. |
| 02 | [TypeScript backend serio](projects/02-typescript-backend-serio/README.md) | Fundamentos | El objetivo es dejar de usar TypeScript como decoracion y usarlo para expresar contratos, invariantes y errores. |
| 03 | [PostgreSQL y modelado relacional](projects/03-postgresql-y-modelado-relacional/README.md) | Fundamentos | El foco es modelar datos reales en PostgreSQL, usar migraciones reproducibles y justificar indices y constraints. |
| 04 | [Autenticacion y autorizacion](projects/04-autenticacion-y-autorizacion/README.md) | Fundamentos | El proyecto obliga a distinguir autenticacion, autorizacion, sesiones, tokens y errores seguros. |
| 05 | [Testing backend profesional](projects/05-testing-backend-profesional/README.md) | Fundamentos | El foco no es cubrir lineas por cubrir, sino elegir niveles de test, fixtures y doubles con criterio. |
| 06 | [Arquitectura modular](projects/06-arquitectura-modular/README.md) | Fundamentos | El objetivo es reconocer boundaries, evitar controllers gordos y aislar casos de uso de infraestructura. |
| 07 | [Transacciones e idempotencia](projects/07-transacciones-e-idempotencia/README.md) | Backend profundo | El proyecto introduce fallos reales: race conditions, reintentos, estados intermedios y consistencia de datos. |
| 08 | [Caching con Redis](projects/08-caching-con-redis/README.md) | Backend profundo | El estudiante debe demostrar que entiende cuando cachear, como invalidar y como medir el impacto. |
| 09 | [Jobs y colas](projects/09-jobs-y-colas/README.md) | Backend profundo | El foco es separar trabajo sincrono y asincrono sin perder trazabilidad ni confiabilidad. |
| 10 | [Archivos y streaming](projects/10-archivos-y-streaming/README.md) | Backend profundo | El proyecto evita cargar todo en memoria y obliga a validar archivos, metadatos y limites. |
| 11 | [Realtime backend](projects/11-realtime-backend/README.md) | Backend profundo | El foco es manejar conexiones, reconexiones, eventos, permisos y consistencia entre HTTP y realtime. |
| 12 | [Observabilidad](projects/12-observabilidad/README.md) | Backend profundo | El proyecto debe producir senales utiles: logs estructurados, metricas, tracing basico y health checks. |
| 13 | [Performance y profiling](projects/13-performance-y-profiling/README.md) | Backend profundo | El estudiante debe demostrar mejoras con evidencia, no con intuicion. |
| 14 | [Seguridad API](projects/14-seguridad-api/README.md) | Backend profundo | El proyecto combina amenazas, controles, tests negativos y documentacion de riesgos residuales. |
| 15 | [API publica versionada](projects/15-api-publica-versionada/README.md) | Backend profundo | El foco es disenar contratos estables, evolucionarlos sin romper clientes y testear compatibilidad. |
| 16 | [Modular monolith avanzado](projects/16-modular-monolith-avanzado/README.md) | Arquitectura | El desafio es mantener deployment simple pero boundaries fuertes, eventos internos y decisiones de extraccion documentadas. |
| 17 | [Microservicios controlados](projects/17-microservicios-controlados/README.md) | Arquitectura | El objetivo no es multiplicar servicios, sino entender costos, fallos y resiliencia de la comunicacion distribuida. |
| 18 | [Event-driven architecture](projects/18-event-driven-architecture/README.md) | Arquitectura | El estudiante debe coordinar efectos secundarios sin depender de transacciones distribuidas. |
| 19 | [SaaS multi-tenant](projects/19-saas-multi-tenant/README.md) | Arquitectura | El proyecto prueba aislamiento de datos, autorizacion por tenant y operacion de un SaaS realista. |
| 20 | [GitHub Models integration](projects/20-github-models-integration/README.md) | IA aplicada | El foco es integrar IA desde backend con contratos, prompts versionados, streaming, costos y evaluacion. |
| 21 | [RAG backend](projects/21-rag-backend/README.md) | IA aplicada | El estudiante debe entender ingestion, chunking, retrieval, contexto, evaluacion y limites de confianza. |
| 22 | [AI tools y agentes simples](projects/22-ai-tools-y-agentes-simples/README.md) | IA aplicada | El foco es tool calling seguro: el modelo propone acciones, el backend valida, ejecuta y audita. |
| 23 | [Arquitectura para modelo local](projects/23-arquitectura-para-modelo-local/README.md) | IA aplicada | El proyecto evalua abstraccion de proveedores, privacidad, latencia, fallback y operacion en una PC local. |
| 24 | [Resiliencia y escala](projects/24-resiliencia-y-escala/README.md) | Arquitectura | El foco es disenar comportamiento bajo presion: circuit breakers, bulkheads, rate limiting distribuido y degradacion controlada. |
| 25 | [Capstone Architect](projects/25-capstone-architect/README.md) | Capstone | Proyecto final para defender decisiones de nivel senior/architect con evidencia de implementacion y operacion. |

## Evaluacion
Cada proyecto incluye:
- Enunciado y criterios de aceptacion.
- Investigacion obligatoria.
- Cuestionario sin respuestas.
- Rubrica de 100 puntos.
- Defensa tecnica esperada.

El criterio de seniority es que el estudiante pueda explicar que problema resolvio, por que eligio su arquitectura, como fallaria en produccion, como lo observaria y como lo haria evolucionar.

## IA y GitHub Models
Los proyectos de IA usan GitHub Models como proveedor remoto. Consultar:
- [GitHub Models inference](https://docs.github.com/en/rest/models/inference)
- [GitHub Models catalog](https://docs.github.com/en/rest/models/catalog)
- [GitHub Models quickstart](https://docs.github.com/en/enterprise-cloud%40latest/github-models/quickstart)

El token debe tener permiso `models: read` y nunca debe subirse al repo.

## Version de Node.js
El programa usa una version LTS activa. Al 26 de abril de 2026, Node.js 24 esta en LTS segun el calendario oficial:
- [Node.js Release Working Group](https://github.com/nodejs/Release)
