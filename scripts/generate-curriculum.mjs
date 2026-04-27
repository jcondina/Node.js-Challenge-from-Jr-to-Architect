import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();

const commonDeliverables = [
  "Codigo fuente del backend con TypeScript strict.",
  "README tecnico con instalacion, comandos, arquitectura y decisiones.",
  "Docker Compose cuando el proyecto use servicios externos.",
  ".env.example sin secretos reales.",
  "Tests relevantes al riesgo del proyecto.",
  "ADRs para decisiones importantes.",
  "Respuestas del cuestionario en el fork del estudiante, no en este repo.",
];

const commonRestrictions = [
  "No subir respuestas, soluciones completas ni claves reales al repositorio publico.",
  "No desactivar TypeScript strict para resolver errores.",
  "No acoplar controladores a detalles de infraestructura si el proyecto exige capas.",
  "No ocultar errores operativos con respuestas genericas que impidan depurar.",
];

const projects = [
  {
    id: 1,
    title: "HTTP API desde cero",
    slug: "http-api-desde-cero",
    level: "Fundamentos",
    product: "Construir una API REST para administrar tareas tecnicas de un equipo pequeno.",
    summary: "El foco es entender HTTP, contratos, validacion, errores y paginacion sin esconder complejidad detras de frameworks pesados.",
    objectives: [
      "Configurar un backend Node.js 24 con TypeScript strict.",
      "Disenar endpoints REST con metodos, rutas y codigos HTTP correctos.",
      "Validar body, params y query en runtime.",
      "Modelar respuestas de error consistentes.",
      "Implementar paginacion y filtros simples.",
      "Separar rutas, servicios y tipos de dominio.",
    ],
    requirements: [
      "API CRUD para tareas con titulo, descripcion, estado y prioridad.",
      "Endpoint de listado con paginacion, filtros por estado y ordenamiento permitido.",
      "Validacion explicita de entradas y errores de contrato.",
      "Manejo de 400, 404, 409 y 500 con formato estable.",
      "Tests para casos felices, entradas invalidas y recursos inexistentes.",
      "Coleccion de requests o ejemplos curl documentados.",
    ],
    research: [
      "Semantica de metodos HTTP y status codes.",
      "Diferencia entre validacion de tipos TypeScript y validacion runtime.",
      "Paginacion offset/limit y limites maximos.",
      "Formato de errores en APIs publicas.",
    ],
    acceptance: [
      "La API puede ejecutarse localmente con un solo comando documentado.",
      "Las respuestas invalidas no filtran stack traces.",
      "El contrato de listado es estable y documentado.",
      "Los tests cubren al menos un caso negativo por endpoint principal.",
    ],
    concepts: ["REST", "status codes", "validacion runtime", "errores de contrato", "paginacion", "filtros", "idempotencia", "capas", "tests de integracion", "contratos HTTP"],
    rubric: [
      ["API y comportamiento funcional", 30],
      ["Validacion y errores", 20],
      ["TypeScript strict y diseno de tipos", 15],
      ["Paginacion, filtros y contratos", 15],
      ["Tests y documentacion tecnica", 20],
    ],
  },
  {
    id: 2,
    title: "TypeScript backend serio",
    slug: "typescript-backend-serio",
    level: "Fundamentos",
    product: "Refactorizar una API de inventario para que el dominio, los DTOs y la configuracion sean seguros y mantenibles.",
    summary: "El objetivo es dejar de usar TypeScript como decoracion y usarlo para expresar contratos, invariantes y errores.",
    objectives: [
      "Definir modelos de dominio sin mezclar DTOs ni entidades de persistencia.",
      "Usar schemas para validar datos externos.",
      "Centralizar configuracion tipada desde variables de entorno.",
      "Representar errores esperados como tipos o clases explicitas.",
      "Evitar `any`, casts innecesarios y nullability accidental.",
      "Disenar tests orientados a contratos de datos.",
    ],
    requirements: [
      "API de inventario con productos, stock y movimientos.",
      "DTOs separados para entrada, salida y dominio.",
      "Schemas de validacion compartidos con handlers.",
      "Config tipada con fallos claros si falta una variable requerida.",
      "Errores de dominio diferenciados de errores inesperados.",
      "Typecheck obligatorio en CI local o script documentado.",
    ],
    research: [
      "TypeScript strict y opciones relevantes para backend.",
      "DTO vs entidad de dominio vs entidad de persistencia.",
      "Validacion runtime con schemas.",
      "Manejo de errores esperado vs inesperado.",
    ],
    acceptance: [
      "El proyecto compila sin `any` injustificado.",
      "Los datos externos no entran al dominio sin validacion.",
      "La configuracion falla rapido y con mensajes accionables.",
      "Los errores esperados tienen tratamiento HTTP consistente.",
    ],
    concepts: ["TypeScript strict", "DTO", "dominio", "schema", "configuracion tipada", "errores tipados", "unknown", "narrowing", "contratos", "tests de tipos"],
    rubric: [
      ["Diseno de tipos y dominio", 25],
      ["Validacion runtime", 20],
      ["Configuracion y errores", 20],
      ["Calidad de API", 15],
      ["Tests, typecheck y documentacion", 20],
    ],
  },
  {
    id: 3,
    title: "PostgreSQL y modelado relacional",
    slug: "postgresql-y-modelado-relacional",
    level: "Fundamentos",
    product: "Construir una API de biblioteca tecnica con usuarios, libros, prestamos y reservas.",
    summary: "El foco es modelar datos reales en PostgreSQL, usar migraciones reproducibles y justificar indices y constraints.",
    objectives: [
      "Modelar relaciones uno-a-muchos y muchos-a-muchos.",
      "Usar migraciones versionadas y reproducibles.",
      "Aplicar constraints para proteger invariantes.",
      "Disenar indices con una razon de consulta concreta.",
      "Separar acceso a datos de handlers HTTP.",
      "Explicar planes de consulta basicos.",
    ],
    requirements: [
      "Docker Compose con PostgreSQL.",
      "Migraciones para usuarios, libros, prestamos y reservas.",
      "Constraints de unicidad, foreign keys y checks relevantes.",
      "Endpoints con joins y filtros documentados.",
      "Seeds minimos para desarrollo.",
      "Tests de integracion contra base aislada.",
    ],
    research: [
      "Normalizacion y desnormalizacion pragmatica.",
      "Constraints en PostgreSQL.",
      "Indices B-tree y lectura de EXPLAIN basica.",
      "Pools de conexion en Node.js.",
    ],
    acceptance: [
      "La base se crea desde cero con migraciones.",
      "No hay reglas criticas solo en memoria cuando pueden vivir como constraint.",
      "Las queries principales tienen indices justificados.",
      "Los tests preparan y limpian datos de forma reproducible.",
    ],
    concepts: ["migraciones", "foreign keys", "constraints", "indices", "joins", "EXPLAIN", "pool de conexiones", "transacciones", "repositorios", "seeds"],
    rubric: [
      ["Modelo relacional y constraints", 30],
      ["Migraciones y reproducibilidad", 20],
      ["Queries, indices y performance basica", 20],
      ["Capa de datos y API", 15],
      ["Tests y documentacion", 15],
    ],
  },
  {
    id: 4,
    title: "Autenticacion y autorizacion",
    slug: "autenticacion-y-autorizacion",
    level: "Fundamentos",
    product: "Crear un backend de cuentas y proyectos privados con registro, login, roles y ownership.",
    summary: "El proyecto obliga a distinguir autenticacion, autorizacion, sesiones, tokens y errores seguros.",
    objectives: [
      "Implementar registro, login, logout y perfil autenticado.",
      "Almacenar credenciales con hashing seguro.",
      "Disenar autorizacion por rol y propiedad del recurso.",
      "Gestionar expiracion y revocacion.",
      "Proteger endpoints sensibles con rate limiting.",
      "Testear flujos positivos y negativos de seguridad.",
    ],
    requirements: [
      "Usuarios con credenciales hasheadas.",
      "Sesion o JWT con decision documentada.",
      "Refresh o revocacion segun estrategia elegida.",
      "RBAC minimo para admin/member/viewer.",
      "Ownership para recursos privados.",
      "Tests de acceso permitido, denegado, expirado y malformado.",
    ],
    research: [
      "Hashing de password y parametros de costo.",
      "Sesion stateful vs JWT stateless.",
      "RBAC, ownership y principio de minimo privilegio.",
      "Riesgos de enumeracion de usuarios.",
    ],
    acceptance: [
      "Una credencial filtrada en logs o respuestas invalida la entrega.",
      "Un usuario no puede leer ni modificar recursos ajenos.",
      "Los tokens o sesiones vencen o pueden revocarse.",
      "Los errores de auth no revelan informacion innecesaria.",
    ],
    concepts: ["hashing", "sesiones", "JWT", "refresh token", "RBAC", "ownership", "rate limiting", "enumeracion", "secrets", "auditoria"],
    rubric: [
      ["Flujos de autenticacion", 25],
      ["Modelo de autorizacion", 25],
      ["Seguridad de credenciales y tokens", 20],
      ["Tests de seguridad", 20],
      ["Documentacion de amenazas", 10],
    ],
  },
  {
    id: 5,
    title: "Testing backend profesional",
    slug: "testing-backend-profesional",
    level: "Fundamentos",
    product: "Construir una API de ordenes con suite de pruebas que permita refactorizar con confianza.",
    summary: "El foco no es cubrir lineas por cubrir, sino elegir niveles de test, fixtures y doubles con criterio.",
    objectives: [
      "Distinguir tests unitarios, integracion, contrato y e2e.",
      "Preparar fixtures repetibles y aisladas.",
      "Mockear dependencias externas sin ocultar bugs de integracion.",
      "Probar errores, bordes y regresiones.",
      "Disenar datos de prueba legibles.",
      "Ejecutar tests en CI local.",
    ],
    requirements: [
      "API de ordenes con al menos una dependencia externa simulada.",
      "Tests unitarios para reglas de dominio.",
      "Tests de integracion con PostgreSQL.",
      "Tests de contrato para endpoints principales.",
      "Factories o builders para datos de prueba.",
      "Reporte documentado de estrategia de testing.",
    ],
    research: [
      "Piramide de testing y tradeoffs.",
      "Test doubles: fake, stub, mock y spy.",
      "Aislamiento de base de datos en tests.",
      "Contratos HTTP y regresiones.",
    ],
    acceptance: [
      "Los tests se ejecutan de forma deterministica.",
      "No dependen del orden global ni de datos manuales.",
      "Cubren errores relevantes, no solo happy path.",
      "La estrategia explica que no se testea y por que.",
    ],
    concepts: ["unit tests", "integration tests", "contract tests", "fixtures", "factories", "mocks", "fakes", "determinismo", "CI", "regresiones"],
    rubric: [
      ["Estrategia de testing", 25],
      ["Tests unitarios e integracion", 25],
      ["Contratos y casos negativos", 20],
      ["Fixtures y determinismo", 15],
      ["Documentacion y CI", 15],
    ],
  },
  {
    id: 6,
    title: "Arquitectura modular",
    slug: "arquitectura-modular",
    level: "Fundamentos",
    product: "Disenar una API de gestion de cursos con modulos separados para alumnos, cursos, inscripciones y pagos simulados.",
    summary: "El objetivo es reconocer boundaries, evitar controllers gordos y aislar casos de uso de infraestructura.",
    objectives: [
      "Separar controladores, casos de uso, repositorios y dominio.",
      "Definir boundaries por modulo.",
      "Usar dependency injection sin sobreingenieria.",
      "Evitar dependencias circulares.",
      "Documentar decisiones de arquitectura.",
      "Preparar el codigo para pruebas por capa.",
    ],
    requirements: [
      "Al menos tres modulos con responsabilidades claras.",
      "Casos de uso invocados desde handlers delgados.",
      "Repositorios con interfaces o contratos explicitos.",
      "Errores de dominio transformados en errores HTTP afuera del dominio.",
      "Tests de dominio sin servidor HTTP.",
      "ADR que justifique la estructura elegida.",
    ],
    research: [
      "Layered architecture, modular monolith y clean architecture.",
      "Dependency injection en Node.js.",
      "Boundaries y dependencias permitidas.",
      "Costo de abstracciones prematuras.",
    ],
    acceptance: [
      "Un caso de uso puede probarse sin levantar HTTP ni base real.",
      "Los modulos no importan detalles internos entre si.",
      "La estructura permite encontrar responsabilidades rapidamente.",
      "Las decisiones estan justificadas, no copiadas de una plantilla.",
    ],
    concepts: ["boundaries", "casos de uso", "repositorios", "dependency injection", "modular monolith", "dominio", "infraestructura", "ADRs", "tests por capa", "acoplamiento"],
    rubric: [
      ["Separacion de responsabilidades", 30],
      ["Boundaries y dependencias", 25],
      ["Testabilidad", 15],
      ["Calidad de implementacion", 15],
      ["ADRs y documentacion", 15],
    ],
  },
  {
    id: 7,
    title: "Transacciones e idempotencia",
    slug: "transacciones-e-idempotencia",
    level: "Backend profundo",
    product: "Implementar un flujo de pagos simulados con ledger, reintentos y proteccion contra doble cobro.",
    summary: "El proyecto introduce fallos reales: race conditions, reintentos, estados intermedios y consistencia de datos.",
    objectives: [
      "Usar transacciones SQL para proteger invariantes.",
      "Disenar idempotency keys para operaciones criticas.",
      "Modelar ledger append-only.",
      "Manejar concurrencia y conflictos.",
      "Separar efectos externos simulados de commits internos.",
      "Probar reintentos y carreras.",
    ],
    requirements: [
      "Endpoint para iniciar pagos con idempotency key.",
      "Ledger de movimientos no destructivo.",
      "Estados de pago claros y transiciones validas.",
      "Transacciones para actualizaciones relacionadas.",
      "Simulador de proveedor externo con fallos controlados.",
      "Tests de doble request, retry y fallo parcial.",
    ],
    research: [
      "ACID, niveles de aislamiento y locks.",
      "Idempotency keys en APIs de pago.",
      "Ledger append-only.",
      "Outbox como alternativa para efectos externos.",
    ],
    acceptance: [
      "Dos requests equivalentes no generan doble cargo.",
      "El saldo o estado no puede quedar inconsistente ante errores simulados.",
      "Las transiciones invalidas son rechazadas.",
      "Los tests demuestran al menos un caso de concurrencia.",
    ],
    concepts: ["transacciones", "idempotency key", "ledger", "race conditions", "locks", "niveles de aislamiento", "retries", "fallos parciales", "invariantes", "proveedor externo"],
    rubric: [
      ["Modelo transaccional", 25],
      ["Idempotencia y concurrencia", 30],
      ["Ledger y estados", 20],
      ["Tests de fallos", 15],
      ["Documentacion de riesgos", 10],
    ],
  },
  {
    id: 8,
    title: "Caching con Redis",
    slug: "caching-con-redis",
    level: "Backend profundo",
    product: "Optimizar una API de catalogo con cache Redis medible y correctamente invalidada.",
    summary: "El estudiante debe demostrar que entiende cuando cachear, como invalidar y como medir el impacto.",
    objectives: [
      "Integrar Redis en Docker Compose.",
      "Aplicar cache-aside en lecturas costosas.",
      "Disenar claves, TTL e invalidacion.",
      "Evitar cachear datos sensibles o demasiado volatiles.",
      "Medir hit/miss y latencia.",
      "Manejar caidas de Redis sin tumbar la API.",
    ],
    requirements: [
      "Cache para endpoints de catalogo y detalle.",
      "Invalidacion ante escrituras relevantes.",
      "TTL configurable por entorno.",
      "Logs o metricas de hit/miss.",
      "Fallback si Redis no responde.",
      "Tests de lectura cacheada e invalidacion.",
    ],
    research: [
      "Cache-aside, write-through y write-behind.",
      "Cache stampede y estrategias de proteccion.",
      "Consistencia eventual por cache.",
      "Metricas de cache utiles.",
    ],
    acceptance: [
      "El cache mejora una lectura medible o documentada.",
      "Una actualizacion no deja datos viejos indefinidamente.",
      "Redis caido degrada la performance, no la disponibilidad basica.",
      "La documentacion explica que no se cachea.",
    ],
    concepts: ["Redis", "cache-aside", "TTL", "invalidacion", "stampede", "hit miss", "latencia", "fallback", "consistencia eventual", "datos sensibles"],
    rubric: [
      ["Estrategia de cache", 25],
      ["Integracion Redis", 15],
      ["Invalidacion y consistencia", 25],
      ["Resiliencia y observabilidad", 20],
      ["Tests y documentacion", 15],
    ],
  },
  {
    id: 9,
    title: "Jobs y colas",
    slug: "jobs-y-colas",
    level: "Backend profundo",
    product: "Crear un sistema de procesamiento de reportes con API, worker, reintentos y dead-letter flow.",
    summary: "El foco es separar trabajo sincrono y asincrono sin perder trazabilidad ni confiabilidad.",
    objectives: [
      "Disenar productores y consumidores.",
      "Procesar jobs fuera del proceso HTTP.",
      "Manejar reintentos, backoff y fallos permanentes.",
      "Modelar estados consultables.",
      "Hacer workers idempotentes.",
      "Observar errores y throughput.",
    ],
    requirements: [
      "Endpoint que encola generacion de reportes.",
      "Worker separado con shutdown ordenado.",
      "Estados persistidos en PostgreSQL.",
      "Redis como broker o backend de cola.",
      "Dead-letter o almacenamiento de fallos permanentes.",
      "Tests de encolado, procesamiento, retry y duplicado.",
    ],
    research: [
      "Queue, job, worker y broker.",
      "Backoff exponencial y jitter.",
      "Dead-letter queue.",
      "Graceful shutdown en workers.",
    ],
    acceptance: [
      "La API no espera el procesamiento completo.",
      "Un job duplicado no produce efectos duplicados.",
      "Un fallo permanente queda visible para operacion.",
      "El worker puede detenerse sin perder jobs aceptados.",
    ],
    concepts: ["colas", "workers", "backoff", "dead-letter", "idempotencia", "estado de job", "graceful shutdown", "throughput", "errores permanentes", "procesamiento asincrono"],
    rubric: [
      ["Diseno de cola y worker", 25],
      ["Estados, retries e idempotencia", 30],
      ["Persistencia y API de consulta", 15],
      ["Tests asincronos", 20],
      ["Observabilidad y documentacion", 10],
    ],
  },
  {
    id: 10,
    title: "Archivos y streaming",
    slug: "archivos-y-streaming",
    level: "Backend profundo",
    product: "Construir un servicio de carga, descarga y procesamiento de archivos grandes.",
    summary: "El proyecto evita cargar todo en memoria y obliga a validar archivos, metadatos y limites.",
    objectives: [
      "Usar streams de Node.js para uploads y downloads.",
      "Validar tipo, tamano y metadatos.",
      "Disenar almacenamiento local compatible conceptualmente con S3.",
      "Procesar archivos asincronicamente.",
      "Proteger endpoints de abuso.",
      "Testear errores de IO y limites.",
    ],
    requirements: [
      "Upload multipart con limite de tamano.",
      "Download por streaming con headers correctos.",
      "Metadatos persistidos en PostgreSQL.",
      "Almacenamiento local aislado por entorno.",
      "Job de procesamiento o validacion posterior.",
      "Tests de archivo invalido, grande y inexistente.",
    ],
    research: [
      "Streams, backpressure y memoria.",
      "Multipart upload y content type.",
      "ETag, Content-Disposition y rangos HTTP.",
      "Riesgos de path traversal.",
    ],
    acceptance: [
      "Subir un archivo grande no dispara uso de memoria descontrolado.",
      "Los paths del usuario no se usan directamente en disco.",
      "La descarga conserva metadatos HTTP relevantes.",
      "Los archivos invalidos no quedan como validos en base.",
    ],
    concepts: ["streams", "backpressure", "multipart", "content type", "storage", "path traversal", "headers HTTP", "ETag", "procesamiento asincrono", "limites"],
    rubric: [
      ["Streaming y uso de memoria", 25],
      ["Validacion y seguridad de archivos", 25],
      ["Persistencia y almacenamiento", 20],
      ["Procesamiento y errores", 15],
      ["Tests y documentacion", 15],
    ],
  },
  {
    id: 11,
    title: "Realtime backend",
    slug: "realtime-backend",
    level: "Backend profundo",
    product: "Implementar presencia y notificaciones en tiempo real para un tablero colaborativo.",
    summary: "El foco es manejar conexiones, reconexiones, eventos, permisos y consistencia entre HTTP y realtime.",
    objectives: [
      "Elegir WebSockets o SSE con justificacion.",
      "Autenticar conexiones realtime.",
      "Modelar eventos de dominio emitidos a clientes.",
      "Gestionar presencia y reconexion.",
      "Evitar fugas entre usuarios o tenants.",
      "Testear eventos sin depender de clicks manuales.",
    ],
    requirements: [
      "API HTTP para crear y modificar items del tablero.",
      "Canal realtime para cambios y presencia.",
      "Autorizacion por sala o tablero.",
      "Heartbeat o mecanismo de desconexion.",
      "Replay o consulta de estado al reconectar.",
      "Tests de conexion autorizada, evento y desconexion.",
    ],
    research: [
      "WebSockets vs Server-Sent Events.",
      "Heartbeats, reconexion y backoff cliente.",
      "Autorizacion en canales realtime.",
      "Escalado de conexiones y sticky sessions.",
    ],
    acceptance: [
      "Un usuario no recibe eventos de tableros no autorizados.",
      "La perdida de conexion no corrompe estado.",
      "Los eventos tienen contrato versionable.",
      "El README explica limites de escalado local.",
    ],
    concepts: ["WebSockets", "SSE", "presencia", "heartbeat", "reconexion", "eventos", "canales", "autorizacion", "sticky sessions", "contratos realtime"],
    rubric: [
      ["Diseno realtime", 25],
      ["Autenticacion y autorizacion", 20],
      ["Eventos, presencia y reconexion", 25],
      ["Tests y simulacion", 15],
      ["Documentacion de escalado", 15],
    ],
  },
  {
    id: 12,
    title: "Observabilidad",
    slug: "observabilidad",
    level: "Backend profundo",
    product: "Instrumentar una API y un worker para diagnosticar latencia, errores y saturacion en Docker Compose.",
    summary: "El proyecto debe producir senales utiles: logs estructurados, metricas, tracing basico y health checks.",
    objectives: [
      "Emitir logs estructurados con correlation ID.",
      "Exponer metricas HTTP y de negocio.",
      "Separar liveness, readiness y health funcional.",
      "Propagar contexto entre API y worker.",
      "Evitar datos sensibles en telemetria.",
      "Documentar diagnosticos operativos.",
    ],
    requirements: [
      "Logger con niveles y request ID.",
      "Endpoint de metricas compatible con Prometheus o formato documentado.",
      "Trazas o spans basicos para DB y worker.",
      "Health/readiness con dependencias externas.",
      "Docker Compose con servicios necesarios para observar localmente.",
      "Runbook para investigar 3 fallos simulados.",
    ],
    research: [
      "Logs vs metricas vs trazas.",
      "Metricas RED y USE.",
      "Cardinalidad de labels.",
      "OpenTelemetry en Node.js.",
    ],
    acceptance: [
      "Cada request puede correlacionarse con logs y metricas.",
      "Un fallo de DB se refleja en readiness.",
      "No se registran tokens, passwords ni payloads sensibles.",
      "El runbook permite reproducir y diagnosticar fallos.",
    ],
    concepts: ["logs estructurados", "correlation ID", "metricas RED", "tracing", "health checks", "readiness", "cardinalidad", "OpenTelemetry", "runbook", "datos sensibles"],
    rubric: [
      ["Logging y correlacion", 20],
      ["Metricas y health checks", 25],
      ["Tracing y propagacion", 20],
      ["Seguridad de telemetria", 15],
      ["Runbook, tests y documentacion", 20],
    ],
  },
  {
    id: 13,
    title: "Performance y profiling",
    slug: "performance-y-profiling",
    level: "Backend profundo",
    product: "Medir y optimizar una API de busqueda y ranking bajo carga controlada.",
    summary: "El estudiante debe demostrar mejoras con evidencia, no con intuicion.",
    objectives: [
      "Disenar benchmarks reproducibles.",
      "Medir latencia, throughput y errores.",
      "Perfilar CPU, memoria y queries.",
      "Optimizar pool de conexiones y consultas.",
      "Comparar antes y despues con criterios claros.",
      "Evitar optimizaciones que rompan contratos.",
    ],
    requirements: [
      "Script de carga local documentado.",
      "Baseline antes de optimizar.",
      "Perfil de al menos un cuello de botella.",
      "Optimizacion de query, cache o algoritmo justificada.",
      "Reporte con metricas p50, p95, p99 y error rate.",
      "Tests de regresion funcional.",
    ],
    research: [
      "Latency percentiles y throughput.",
      "Flamegraphs y profiling de Node.js.",
      "Pool de conexiones PostgreSQL.",
      "N+1 queries y optimizacion de indices.",
    ],
    acceptance: [
      "El reporte muestra evidencia antes/despues.",
      "La mejora no depende de datos irreales o cache precalentado sin declararlo.",
      "Los cambios conservan el contrato API.",
      "El README enumera limites del benchmark local.",
    ],
    concepts: ["benchmark", "p95", "p99", "throughput", "flamegraph", "CPU profiling", "pool tuning", "N+1", "indices", "regresion"],
    rubric: [
      ["Medicion y baseline", 25],
      ["Profiling y diagnostico", 25],
      ["Optimizacion justificada", 20],
      ["Regresion y contratos", 15],
      ["Reporte tecnico", 15],
    ],
  },
  {
    id: 14,
    title: "Seguridad API",
    slug: "seguridad-api",
    level: "Backend profundo",
    product: "Auditar y endurecer una API con riesgos inspirados en OWASP API Top 10.",
    summary: "El proyecto combina amenazas, controles, tests negativos y documentacion de riesgos residuales.",
    objectives: [
      "Modelar amenazas de una API realista.",
      "Aplicar rate limits, CORS y headers seguros.",
      "Proteger secretos y configuracion.",
      "Validar autorizacion objeto por objeto.",
      "Evitar inyecciones y filtrado de datos sensibles.",
      "Crear pruebas negativas de seguridad.",
    ],
    requirements: [
      "Threat model documentado.",
      "Controles para autenticacion, autorizacion y abuso.",
      "Rate limiting en endpoints sensibles.",
      "Politica CORS explicita.",
      "Headers de seguridad relevantes.",
      "Tests para BOLA, payloads invalidos y abuso basico.",
    ],
    research: [
      "OWASP API Top 10.",
      "Broken Object Level Authorization.",
      "CORS y CSRF segun tipo de cliente.",
      "Gestion de secretos en desarrollo local.",
    ],
    acceptance: [
      "Un usuario no puede acceder a objetos ajenos por cambiar IDs.",
      "La configuracion no contiene secretos reales.",
      "Los errores no exponen detalles internos.",
      "La entrega declara riesgos mitigados y residuales.",
    ],
    concepts: ["OWASP API Top 10", "BOLA", "rate limiting", "CORS", "headers", "secrets", "input validation", "inyeccion", "threat model", "riesgo residual"],
    rubric: [
      ["Threat model", 20],
      ["Autorizacion y proteccion de datos", 25],
      ["Controles anti-abuso y headers", 20],
      ["Tests negativos de seguridad", 20],
      ["Documentacion de riesgos", 15],
    ],
  },
  {
    id: 15,
    title: "API publica versionada",
    slug: "api-publica-versionada",
    level: "Backend profundo",
    product: "Publicar una API para integradores externos con OpenAPI, versionado y compatibilidad hacia atras.",
    summary: "El foco es disenar contratos estables, evolucionarlos sin romper clientes y testear compatibilidad.",
    objectives: [
      "Definir OpenAPI como contrato publico.",
      "Versionar rutas o contratos con politica explicita.",
      "Estandarizar errores y codigos.",
      "Disenar cambios backward-compatible.",
      "Crear tests de contrato.",
      "Documentar deprecaciones.",
    ],
    requirements: [
      "OpenAPI versionado en el repo.",
      "Al menos dos versiones o un cambio evolutivo documentado.",
      "Formato de error estable.",
      "Tests de contrato para consumidores simulados.",
      "Changelog de API.",
      "Politica de breaking changes y deprecacion.",
    ],
    research: [
      "OpenAPI y contract testing.",
      "Versionado de APIs.",
      "Backward compatibility.",
      "Diseno de errores para clientes externos.",
    ],
    acceptance: [
      "Un consumidor puede integrarse leyendo el contrato.",
      "Los cambios compatibles no rompen tests anteriores.",
      "Los errores tienen estructura estable.",
      "El README explica como evolucionar la API.",
    ],
    concepts: ["OpenAPI", "versionado", "backward compatibility", "contract testing", "errores estables", "deprecacion", "changelog", "consumidores externos", "breaking changes", "DX"],
    rubric: [
      ["Contrato OpenAPI", 25],
      ["Versionado y compatibilidad", 25],
      ["Errores y DX", 15],
      ["Tests de contrato", 20],
      ["Changelog y documentacion", 15],
    ],
  },
  {
    id: 16,
    title: "Modular monolith avanzado",
    slug: "modular-monolith-avanzado",
    level: "Arquitectura",
    product: "Construir un monolito modular para una plataforma de suscripciones con billing simulado.",
    summary: "El desafio es mantener deployment simple pero boundaries fuertes, eventos internos y decisiones de extraccion documentadas.",
    objectives: [
      "Definir modulos por capacidad de negocio.",
      "Establecer contratos entre modulos.",
      "Usar eventos internos sin crear distribucion accidental.",
      "Evitar acceso directo a datos de otros modulos.",
      "Documentar criterios para extraer servicios.",
      "Probar reglas sin depender del framework.",
    ],
    requirements: [
      "Modulos de cuentas, planes, suscripciones y facturacion simulada.",
      "Contratos publicos por modulo.",
      "Eventos internos para cambios relevantes.",
      "Reglas de importacion documentadas o verificables.",
      "ADRs sobre boundaries y extraccion.",
      "Tests de dominio y de integracion entre modulos.",
    ],
    research: [
      "Modular monolith vs microservicios.",
      "Bounded contexts.",
      "Eventos internos y contratos.",
      "Criterios de extraccion de servicios.",
    ],
    acceptance: [
      "Un modulo no consulta tablas internas de otro sin contrato.",
      "Los eventos internos tienen esquema y version.",
      "La decision de no usar microservicios esta defendida.",
      "Los tests validan al menos un flujo multi-modulo.",
    ],
    concepts: ["modular monolith", "bounded context", "contratos internos", "eventos internos", "billing", "extraccion", "dependencias", "versionado", "ADRs", "testabilidad"],
    rubric: [
      ["Boundaries y modularidad", 30],
      ["Contratos y eventos internos", 25],
      ["Dominio y datos", 15],
      ["Tests multi-modulo", 15],
      ["ADRs y criterio arquitectonico", 15],
    ],
  },
  {
    id: 17,
    title: "Microservicios controlados",
    slug: "microservicios-controlados",
    level: "Arquitectura",
    product: "Separar un flujo de ordenes en servicios de catalogo, ordenes y notificaciones sin perder contratos.",
    summary: "El objetivo no es multiplicar servicios, sino entender costos, fallos y resiliencia de la comunicacion distribuida.",
    objectives: [
      "Definir ownership de datos por servicio.",
      "Comunicar servicios por HTTP y/o eventos con contratos claros.",
      "Manejar timeouts, retries y errores remotos.",
      "Evitar transacciones distribuidas ingenuas.",
      "Documentar topologia local con Docker Compose.",
      "Testear contratos entre servicios.",
    ],
    requirements: [
      "Al menos dos procesos backend independientes.",
      "Base de datos o schema separado por ownership.",
      "Contrato HTTP o evento versionado.",
      "Timeouts y fallbacks documentados.",
      "Docker Compose para correr todo local.",
      "Tests de contrato y smoke test del flujo completo.",
    ],
    research: [
      "Data ownership en microservicios.",
      "Synchronous vs asynchronous communication.",
      "Service discovery local y configuracion.",
      "Distributed systems fallacies.",
    ],
    acceptance: [
      "Un servicio no escribe directamente datos de otro.",
      "Los fallos remotos tienen timeouts y comportamiento definido.",
      "El contrato entre servicios se puede verificar.",
      "El README explica por que esta separacion vale el costo.",
    ],
    concepts: ["microservicios", "data ownership", "contratos", "timeouts", "retries", "fallos remotos", "Docker Compose", "service discovery", "tests de contrato", "transacciones distribuidas"],
    rubric: [
      ["Separacion de servicios y datos", 25],
      ["Comunicacion y contratos", 25],
      ["Resiliencia ante fallos", 20],
      ["Testing distribuido", 15],
      ["Documentacion de tradeoffs", 15],
    ],
  },
  {
    id: 18,
    title: "Event-driven architecture",
    slug: "event-driven-architecture",
    level: "Arquitectura",
    product: "Implementar un flujo de ecommerce con outbox, consumidores idempotentes y consistencia eventual.",
    summary: "El estudiante debe coordinar efectos secundarios sin depender de transacciones distribuidas.",
    objectives: [
      "Distinguir eventos de dominio e integracion.",
      "Implementar outbox pattern.",
      "Disenar consumidores idempotentes.",
      "Manejar duplicados, orden y replay.",
      "Modelar una saga simple.",
      "Observar eventos y fallos parciales.",
    ],
    requirements: [
      "Tabla outbox transaccional.",
      "Publisher o relay separado.",
      "Al menos dos consumidores con efectos diferentes.",
      "Deduplicacion por event id.",
      "Saga simple para reserva, pago simulado y notificacion.",
      "Tests de replay, duplicado y fallo parcial.",
    ],
    research: [
      "Outbox pattern.",
      "Sagas y consistencia eventual.",
      "Event schema evolution.",
      "Idempotencia en consumidores.",
    ],
    acceptance: [
      "Un evento persistido no se pierde si el proceso cae antes de publicarlo.",
      "Reprocesar un evento no duplica efectos.",
      "La consistencia eventual esta explicada al consumidor.",
      "Los fallos parciales quedan trazables.",
    ],
    concepts: ["eventos de dominio", "eventos de integracion", "outbox", "sagas", "consistencia eventual", "idempotencia", "deduplicacion", "replay", "schema evolution", "fallos parciales"],
    rubric: [
      ["Outbox y publicacion confiable", 25],
      ["Consumidores idempotentes", 25],
      ["Saga y consistencia eventual", 20],
      ["Testing de duplicados y replay", 20],
      ["Documentacion operativa", 10],
    ],
  },
  {
    id: 19,
    title: "SaaS multi-tenant",
    slug: "saas-multi-tenant",
    level: "Arquitectura",
    product: "Crear una plataforma B2B con workspaces, miembros, roles, billing simulado y auditoria.",
    summary: "El proyecto prueba aislamiento de datos, autorizacion por tenant y operacion de un SaaS realista.",
    objectives: [
      "Modelar tenants, usuarios, memberships y roles.",
      "Resolver tenant context por request.",
      "Aislar datos en cada query.",
      "Auditar acciones sensibles.",
      "Simular planes y limites de uso.",
      "Testear acceso cruzado entre tenants.",
    ],
    requirements: [
      "Workspaces con miembros y roles por workspace.",
      "Recursos protegidos por tenant y ownership.",
      "Billing simulado con planes y quotas.",
      "Audit log para acciones criticas.",
      "Tests negativos de fuga entre tenants.",
      "ADRs sobre estrategia multi-tenant.",
    ],
    research: [
      "Estrategias shared schema, schema per tenant y database per tenant.",
      "Tenant context y autorizacion por organizacion.",
      "Auditoria y soporte operativo.",
      "Quotas y limites en SaaS.",
    ],
    acceptance: [
      "Cambiar un ID no permite acceder a otro tenant.",
      "Un usuario con multiples workspaces tiene permisos correctos por contexto.",
      "Los limites de plan se aplican de forma verificable.",
      "El audit log permite reconstruir acciones sensibles.",
    ],
    concepts: ["multi-tenancy", "workspace", "membership", "tenant context", "aislamiento", "RBAC por tenant", "billing simulado", "quotas", "audit log", "fugas de datos"],
    rubric: [
      ["Modelo multi-tenant", 25],
      ["Aislamiento y autorizacion", 30],
      ["Billing, quotas y auditoria", 20],
      ["Tests de fugas", 15],
      ["ADRs y documentacion", 10],
    ],
  },
  {
    id: 20,
    title: "GitHub Models integration",
    slug: "github-models-integration",
    level: "IA aplicada",
    product: "Agregar asistencia controlada a una API usando GitHub Models sin convertir al modelo en fuente de verdad.",
    summary: "El foco es integrar IA desde backend con contratos, prompts versionados, streaming, costos y evaluacion.",
    objectives: [
      "Invocar GitHub Models desde Node.js con credenciales seguras.",
      "Versionar prompts como parte del codigo.",
      "Definir contratos de entrada y salida.",
      "Implementar streaming o respuesta progresiva cuando aplique.",
      "Manejar timeouts, rate limits y costos.",
      "Evaluar calidad con casos de prueba.",
    ],
    requirements: [
      "Cliente AI aislado detras de una interfaz.",
      "Uso de GitHub Models con `models: read` documentado.",
      "Prompts en archivos versionados.",
      "Validacion de respuesta antes de usarla.",
      "Mocks para tests sin llamadas reales.",
      "Registro de latencia y errores sin filtrar secretos.",
    ],
    research: [
      "GitHub Models inference API y catalogo.",
      "Prompting como contrato versionado.",
      "Structured output y validacion.",
      "Evaluacion basica de respuestas generadas.",
    ],
    acceptance: [
      "La app funciona en modo mock sin token real.",
      "El modelo no decide permisos ni estado critico.",
      "Los prompts tienen version y proposito documentado.",
      "Los errores del proveedor tienen fallback o respuesta clara.",
    ],
    concepts: ["GitHub Models", "models read", "prompt versionado", "streaming", "structured output", "rate limits", "costos", "mocks", "evaluacion", "seguridad de tokens"],
    rubric: [
      ["Integracion GitHub Models", 20],
      ["Contratos, prompts y validacion", 25],
      ["Resiliencia, costos y observabilidad", 20],
      ["Testing con mocks", 20],
      ["Documentacion y seguridad", 15],
    ],
  },
  {
    id: 21,
    title: "RAG backend",
    slug: "rag-backend",
    level: "IA aplicada",
    product: "Construir una API de preguntas sobre documentos internos usando embeddings, busqueda vectorial y grounding.",
    summary: "El estudiante debe entender ingestion, chunking, retrieval, contexto, evaluacion y limites de confianza.",
    objectives: [
      "Ingerir documentos y dividirlos en chunks.",
      "Generar y almacenar embeddings.",
      "Recuperar contexto relevante para una pregunta.",
      "Construir prompts grounded con citas o referencias.",
      "Evaluar precision y alucinaciones.",
      "Proteger documentos por permisos.",
    ],
    requirements: [
      "Pipeline de ingestion con estados.",
      "Persistencia de documentos, chunks y embeddings.",
      "Busqueda vectorial con opcion local documentada.",
      "Endpoint de pregunta con contexto recuperado.",
      "Respuesta con referencias a chunks usados.",
      "Set de evaluacion con preguntas esperadas sin respuestas publicas completas.",
    ],
    research: [
      "Embeddings y similitud vectorial.",
      "Chunking strategies.",
      "Retrieval augmentation y grounding.",
      "Evaluacion de RAG.",
    ],
    acceptance: [
      "Una pregunta sin contexto suficiente no inventa respuesta confiable.",
      "Los documentos no autorizados no se recuperan.",
      "El pipeline puede reintentar ingestion fallida.",
      "La evaluacion mide recuperacion y respuesta por separado.",
    ],
    concepts: ["RAG", "embeddings", "chunking", "vector search", "grounding", "citas", "ingestion", "retrieval", "alucinacion", "evaluacion"],
    rubric: [
      ["Pipeline de ingestion y embeddings", 25],
      ["Retrieval y grounding", 25],
      ["Seguridad y permisos", 15],
      ["Evaluacion de calidad", 20],
      ["Observabilidad y documentacion", 15],
    ],
  },
  {
    id: 22,
    title: "AI tools y agentes simples",
    slug: "ai-tools-y-agentes-simples",
    level: "IA aplicada",
    product: "Crear un asistente backend que puede llamar herramientas internas con permisos y auditoria.",
    summary: "El foco es tool calling seguro: el modelo propone acciones, el backend valida, ejecuta y audita.",
    objectives: [
      "Disenar herramientas con schemas estrictos.",
      "Separar decision del modelo y autorizacion del sistema.",
      "Implementar permisos por herramienta y usuario.",
      "Auditar llamadas y resultados.",
      "Limitar loops, costos y acciones peligrosas.",
      "Testear planes y ejecuciones con proveedor fake.",
    ],
    requirements: [
      "Al menos tres tools internas con schemas.",
      "Policy engine o validacion de permisos antes de ejecutar.",
      "Tool calling con GitHub Models o mock compatible.",
      "Historial auditable de decisiones y ejecuciones.",
      "Limites de pasos, timeout y costo.",
      "Tests de herramienta permitida, denegada y argumentos invalidos.",
    ],
    research: [
      "Function/tool calling.",
      "Least privilege en agentes.",
      "Human-in-the-loop para acciones riesgosas.",
      "Prompt injection contra herramientas.",
    ],
    acceptance: [
      "El modelo no puede ejecutar una tool sin autorizacion backend.",
      "Los argumentos generados se validan antes de ejecutar.",
      "Una accion riesgosa queda bloqueada o pendiente de aprobacion.",
      "La auditoria permite reconstruir quien pidio que accion.",
    ],
    concepts: ["tool calling", "schemas", "policy engine", "least privilege", "auditoria", "prompt injection", "human in the loop", "limite de pasos", "proveedor fake", "acciones peligrosas"],
    rubric: [
      ["Diseno de tools y contratos", 25],
      ["Permisos y seguridad", 30],
      ["Ejecucion, limites y auditoria", 20],
      ["Testing con fakes", 15],
      ["Documentacion de riesgos", 10],
    ],
  },
  {
    id: 23,
    title: "Arquitectura para modelo local",
    slug: "arquitectura-para-modelo-local",
    level: "IA aplicada",
    product: "Disenar una capa AI que pueda alternar entre GitHub Models y un modelo local via Ollama o servidor compatible.",
    summary: "El proyecto evalua abstraccion de proveedores, privacidad, latencia, fallback y operacion en una PC local.",
    objectives: [
      "Definir una interfaz comun de proveedor AI.",
      "Implementar proveedor remoto GitHub Models y proveedor local compatible.",
      "Configurar Ollama o endpoint OpenAI-like local.",
      "Manejar limites de tokens, memoria y latencia.",
      "Comparar calidad y costo operativo.",
      "Testear contratos sin depender del modelo real.",
    ],
    requirements: [
      "Provider interface para chat y embeddings si aplica.",
      "Seleccion de proveedor por configuracion.",
      "Timeouts, retries y fallback documentados.",
      "Modo local con `OLLAMA_BASE_URL` o endpoint compatible.",
      "Tests contractuales con proveedor fake.",
      "Documento de arquitectura para correr en PC local.",
    ],
    research: [
      "Ollama y servidores compatibles con OpenAI API.",
      "Tradeoffs modelo local vs remoto.",
      "Privacidad y residencia de datos.",
      "Benchmark basico de latencia/calidad.",
    ],
    acceptance: [
      "Cambiar proveedor no modifica casos de uso.",
      "El sistema funciona con fake provider en CI.",
      "El modo local falla de manera clara si el modelo no esta disponible.",
      "El documento explica requisitos de hardware y limites.",
    ],
    concepts: ["provider interface", "GitHub Models", "Ollama", "OpenAI compatible", "fallback", "privacidad", "latencia", "tokens", "hardware local", "contract tests"],
    rubric: [
      ["Abstraccion de proveedor", 25],
      ["Integracion local y remota", 25],
      ["Fallbacks, limites y configuracion", 20],
      ["Tests contractuales", 15],
      ["Documento de arquitectura local", 15],
    ],
  },
  {
    id: 24,
    title: "Resiliencia y escala",
    slug: "resiliencia-y-escala",
    level: "Arquitectura",
    product: "Endurecer una plataforma ante fallos, picos de carga y degradacion de dependencias.",
    summary: "El foco es disenar comportamiento bajo presion: circuit breakers, bulkheads, rate limiting distribuido y degradacion controlada.",
    objectives: [
      "Aplicar timeouts y circuit breakers.",
      "Separar recursos criticos con bulkheads.",
      "Implementar rate limiting distribuido.",
      "Disenar degradacion controlada.",
      "Medir saturacion y recovery.",
      "Crear runbooks de incidentes.",
    ],
    requirements: [
      "Dependencia externa simulada con fallos y latencia.",
      "Circuit breaker con estados observables.",
      "Rate limit distribuido con Redis.",
      "Bulkhead o aislamiento de pools/colas.",
      "Modo degradado documentado.",
      "Pruebas de carga y fallos con reporte.",
    ],
    research: [
      "Circuit breaker pattern.",
      "Bulkheads y aislamiento de recursos.",
      "Rate limiting distribuido.",
      "SLOs, error budgets y graceful degradation.",
    ],
    acceptance: [
      "Una dependencia lenta no agota todos los recursos de la API.",
      "El circuito abre y se recupera segun condiciones medibles.",
      "El rate limit funciona entre multiples instancias simuladas.",
      "El modo degradado comunica limites al consumidor.",
    ],
    concepts: ["circuit breaker", "bulkhead", "rate limiting distribuido", "timeouts", "degradacion", "saturacion", "SLO", "error budget", "recovery", "runbook"],
    rubric: [
      ["Patrones de resiliencia", 30],
      ["Rate limiting y aislamiento", 20],
      ["Observabilidad bajo fallos", 20],
      ["Pruebas de carga/fallo", 15],
      ["Runbooks y documentacion", 15],
    ],
  },
  {
    id: 25,
    title: "Capstone Architect",
    slug: "capstone-architect",
    level: "Capstone",
    product: "Construir una plataforma backend multi-tenant con IA, workers, observabilidad, seguridad y plan de escala.",
    summary: "Proyecto final para defender decisiones de nivel senior/architect con evidencia de implementacion y operacion.",
    objectives: [
      "Integrar API, datos, cache, workers e IA.",
      "Disenar arquitectura modular defendible.",
      "Aplicar seguridad, observabilidad y resiliencia.",
      "Mantener CI, tests y documentacion profesional.",
      "Definir plan de escala y riesgos.",
      "Presentar una defensa tecnica completa.",
    ],
    requirements: [
      "Backend TypeScript con Fastify o NestJS y Node.js 24.",
      "PostgreSQL, Redis y Docker Compose.",
      "Modulo AI configurable con GitHub Models y proveedor local/fake.",
      "Workers asincronos e idempotentes.",
      "Logs, metricas, trazas y health checks.",
      "ADRs, threat model, runbook, plan de escala y postmortem simulado.",
    ],
    research: [
      "Arquitectura evolutiva y tradeoffs.",
      "Operabilidad minima de produccion.",
      "Seguridad de SaaS con IA.",
      "Estrategia de testing por riesgo.",
    ],
    acceptance: [
      "La plataforma corre localmente con Docker Compose.",
      "Los modulos criticos tienen tests y contratos.",
      "La IA no puede saltar permisos ni escribir estado critico sin control.",
      "La defensa tecnica explica decisiones, riesgos y alternativas.",
    ],
    concepts: ["arquitectura", "multi-tenant", "IA", "workers", "observabilidad", "seguridad", "resiliencia", "CI", "plan de escala", "defensa tecnica"],
    rubric: [
      ["Arquitectura integral", 20],
      ["Funcionalidad backend y datos", 20],
      ["IA, providers y seguridad", 15],
      ["Workers, cache y resiliencia", 15],
      ["Testing, CI y observabilidad", 20],
      ["Documentacion y defensa", 10],
    ],
  },
];

function ensureFile(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${content.trimEnd()}\n`, "utf8");
}

function bullets(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function numbered(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function projectDir(project) {
  return join(root, "projects", `${String(project.id).padStart(2, "0")}-${project.slug}`);
}

function starterPackage(project) {
  const name = `starter-${String(project.id).padStart(2, "0")}-${project.slug}`;
  return JSON.stringify(
    {
      name,
      version: "0.1.0",
      private: true,
      type: "module",
      scripts: {
        dev: "tsx watch src/main.ts",
        build: "tsc -p tsconfig.json",
        typecheck: "tsc --noEmit",
        test: "vitest run",
        "test:watch": "vitest",
      },
      engines: {
        node: ">=24",
      },
      dependencies: {
        "@fastify/env": "^5.0.2",
        fastify: "^5.0.0",
        pg: "^8.13.0",
        redis: "^4.7.0",
        zod: "^3.24.0",
      },
      devDependencies: {
        "@types/node": "^24.0.0",
        tsx: "^4.19.0",
        typescript: "^5.7.0",
        vitest: "^2.1.0",
      },
    },
    null,
    2,
  );
}

function starterDocker(project) {
  const offset = project.id;
  return `services:
  postgres:
    image: postgres:17-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
      POSTGRES_DB: project_${String(project.id).padStart(2, "0")}
    ports:
      - "${5400 + offset}:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app -d project_${String(project.id).padStart(2, "0")}"]
      interval: 5s
      timeout: 3s
      retries: 10

  redis:
    image: redis:7-alpine
    ports:
      - "${6300 + offset}:6379"`;
}

function starterEnv(project) {
  const lines = [
    "NODE_ENV=development",
    "PORT=3000",
    `DATABASE_URL=postgres://app:app@localhost:${5400 + project.id}/project_${String(project.id).padStart(2, "0")}`,
    `REDIS_URL=redis://localhost:${6300 + project.id}`,
    "LOG_LEVEL=debug",
  ];

  if (project.id >= 20) {
    lines.push("GITHUB_TOKEN=");
    lines.push("GITHUB_MODELS_MODEL=openai/gpt-4.1");
  }

  if (project.id === 23 || project.id === 25) {
    lines.push("AI_PROVIDER=fake");
    lines.push("OLLAMA_BASE_URL=http://localhost:11434");
    lines.push("OLLAMA_MODEL=llama3.2");
  }

  return lines.join("\n");
}

function starterReadme(project) {
  return `# Starter - Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}

Este starter es intencionalmente incompleto. Define una base de trabajo, contratos esperados y servicios locales, pero no contiene la solucion.

## Uso esperado
- Completar la arquitectura y el codigo segun el enunciado del proyecto.
- Mantener TypeScript strict.
- Agregar migraciones, tests y documentacion segun la rubrica.
- No subir secretos reales.

## Comandos sugeridos
\`\`\`bash
npm install
npm run typecheck
npm test
docker compose up -d
\`\`\`

## Puntos que debes decidir
- Framework y estructura final si el proyecto permite Fastify o NestJS.
- Estrategia de datos, errores y tests.
- Tradeoffs documentados en ADRs.
`;
}

function tsconfig() {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2024",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        noUncheckedIndexedAccess: true,
        exactOptionalPropertyTypes: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        skipLibCheck: true,
        outDir: "dist",
      },
      include: ["src", "tests"],
    },
    null,
    2,
  );
}

function starterMain(project) {
  return `// Starter placeholder for Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}.
// Implementa el servidor, casos de uso y adaptadores segun el README del proyecto.

export function describeProject(): string {
  return "Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}";
}
`;
}

function starterContract(project) {
  return `# Contratos iniciales

Completa este archivo con los contratos reales antes de implementar endpoints o eventos.

## HTTP
- Metodo y ruta:
- Request:
- Response exitosa:
- Errores esperados:

## Datos
- Entidades:
- Invariantes:
- Indices o constraints:

## Operacion
- Logs:
- Metricas:
- Health checks:
`;
}

function projectReadme(project) {
  return `# Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}

**Nivel:** ${project.level}

## Enunciado
${project.product}

${project.summary}

## Objetivos
${bullets(project.objectives)}

## Requisitos de implementacion
${bullets(project.requirements)}

## Restricciones
${bullets([...commonRestrictions, ...(project.restrictions ?? [])])}

## Entregables
${bullets(commonDeliverables)}

## Investigacion obligatoria
${bullets(project.research)}

## Criterios de aceptacion
${bullets(project.acceptance)}

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
`;
}

function projectQuestions(project) {
  const [a, b, c, d, e, f, g, h, i, j] = project.concepts;
  const fundamentals = [
    `Que responsabilidad cumple ${a} en este proyecto y que problema evita?`,
    `Que diferencia practica hay entre ${b} y ${c} en este contexto?`,
    `Que invariantes del dominio no deberian depender solo de la capa HTTP?`,
  ];
  const design = [
    `Donde ubicarias la logica relacionada con ${d} y por que?`,
    `Que contrato publico deberia quedar estable aunque cambie la implementacion interna?`,
    `Que decision de arquitectura seria dificil de revertir mas adelante?`,
  ];
  const debugging = [
    `Como investigarias un bug donde ${e} produce resultados inconsistentes?`,
    `Que logs, metricas o trazas necesitarias para diagnosticar problemas relacionados con ${f}?`,
    `Como reproducirias localmente un caso borde sin depender de datos manuales?`,
  ];
  const tradeoffs = [
    `Que ganas y que pierdes al priorizar ${g} sobre simplicidad inicial?`,
    `Que parte del proyecto no optimizarias todavia y por que?`,
    `Que riesgo introduce ${h} si el sistema crece en trafico o datos?`,
  ];
  const defense = [
    `Explica una decision tecnica que tomaste y una alternativa razonable que descartaste.`,
    `Si aparece un incidente relacionado con ${i} en produccion, cual seria tu primer paso de diagnostico?`,
    `Que evidencia mostrarias para demostrar que dominas ${j}?`,
  ];

  return `# Cuestionario - Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}

Este cuestionario no incluye respuestas. El estudiante debe responderlo en su fork y estar preparado para defenderlo oralmente.

## Fundamentos
${numbered(fundamentals)}

## Diseno
${numbered(design)}

## Debugging
${numbered(debugging)}

## Tradeoffs
${numbered(tradeoffs)}

## Defensa oral
${numbered(defense)}
`;
}

function projectRubric(project) {
  const total = project.rubric.reduce((sum, [, points]) => sum + points, 0);
  if (total !== 100) {
    throw new Error(`Rubric for project ${project.id} sums ${total}, expected 100`);
  }

  return `# Rubrica - Proyecto ${String(project.id).padStart(2, "0")}: ${project.title}

La rubrica suma 100 puntos. No hay solucion canonica publica; se evalua comportamiento, criterio tecnico y defensa.

## Criterios
${project.rubric.map(([name, points]) => `- **${name}: ${points} pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.`).join("\n")}

## Penalizaciones fuertes
- Secretos reales, tokens o credenciales publicados.
- Respuestas del cuestionario copiadas al repo base.
- Desactivar TypeScript strict para evitar resolver errores.
- Tests que solo verifican mocks sin cubrir comportamiento relevante.
- Documentacion que describe lo que deberia existir pero no coincide con el codigo.

## Evidencia para aprobar
- El proyecto corre en una maquina limpia siguiendo el README.
- La defensa oral demuestra comprension de fundamentos y tradeoffs.
- Los errores, datos y dependencias externas tienen comportamiento definido.
- La entrega contiene suficientes tests para detectar regresiones criticas.
`;
}

function rootReadme() {
  const mapRows = projects
    .map((project) => {
      const folder = `projects/${String(project.id).padStart(2, "0")}-${project.slug}`;
      return `| ${String(project.id).padStart(2, "0")} | [${project.title}](${folder}/README.md) | ${project.level} | ${project.summary} |`;
    })
    .join("\n");

  return `# Programa Backend Node.js: Jr a Senior/Architect

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
3. Implementar en una carpeta propia dentro del fork, o dentro del \`starter/\` cuando exista.
4. Responder \`questions.md\` en el fork del estudiante.
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
${mapRows}

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

El token debe tener permiso \`models: read\` y nunca debe subirse al repo.

## Version de Node.js
El programa usa una version LTS activa. Al 26 de abril de 2026, Node.js 24 esta en LTS segun el calendario oficial:
- [Node.js Release Working Group](https://github.com/nodejs/Release)
`;
}

function contributing() {
  return `# Guia de entrega y correccion

## Para el estudiante
- Trabaja en tu fork.
- No modifiques la rubrica para subir tu puntaje.
- Responde el cuestionario en tu fork, no en el repo base.
- Incluye instrucciones reproducibles para correr la entrega.
- Declara decisiones, tradeoffs y limitaciones.

## Para quien corrige
- Revisa primero seguridad basica y secretos.
- Ejecuta los tests y el flujo local documentado.
- Lee ADRs y compara la documentacion con el codigo.
- Usa la rubrica del proyecto.
- Haz defensa oral con preguntas del cuestionario y escenarios de fallo.
`;
}

function evaluationGuide() {
  return `# Guia de evaluacion general

## Senales de progreso senior
- Explica tradeoffs sin repetir frases de documentacion.
- Disena errores, logs y metricas antes de necesitarlos.
- Escribe tests segun riesgo, no segun porcentaje de cobertura.
- Usa abstracciones para proteger boundaries reales.
- Reconoce fallos parciales, concurrencia y operacion.

## Preguntas recurrentes de defensa
- Que decision cambiarias si el trafico creciera 10x?
- Que parte del sistema es mas riesgosa y como la detectarias?
- Que asumiste del dominio y como lo validarias?
- Que datos no deberian loguearse?
- Que test agregarias despues del primer incidente?
`;
}

function templates() {
  return {
    "project-template.md": `# Proyecto NN: Titulo

## Enunciado
Describe el producto o problema real.

## Objetivos
- Objetivo tecnico.

## Requisitos de implementacion
- Requisito verificable.

## Restricciones
- Restriccion importante.

## Entregables
- Codigo.
- README tecnico.
- Tests.
- ADRs.

## Investigacion obligatoria
- Tema a investigar.

## Criterios de aceptacion
- Criterio verificable.
`,
    "questions-template.md": `# Cuestionario - Proyecto NN

## Fundamentos
1. Pregunta de fundamentos.

## Diseno
1. Pregunta de diseno.

## Debugging
1. Pregunta de debugging.

## Tradeoffs
1. Pregunta de tradeoffs.

## Defensa oral
1. Pregunta de defensa.
`,
    "rubric-template.md": `# Rubrica - Proyecto NN

## Criterios
- **Funcionalidad: 20 pts.**
- **Diseno tecnico: 20 pts.**
- **Datos y errores: 20 pts.**
- **Tests: 20 pts.**
- **Documentacion y defensa: 20 pts.**
`,
    "adr-template.md": `# ADR-0001: Titulo

## Estado
Propuesto | Aceptado | Reemplazado

## Contexto
Que problema o decision motiva este ADR.

## Decision
Que se decidio.

## Alternativas consideradas
- Alternativa A.
- Alternativa B.

## Consecuencias
- Beneficios.
- Costos.
- Riesgos.
`,
    "threat-model-template.md": `# Threat model

## Sistema
Descripcion breve del sistema y activos protegidos.

## Actores
- Usuario legitimo.
- Atacante externo.
- Servicio externo.

## Riesgos
- Riesgo:
- Impacto:
- Mitigacion:
- Riesgo residual:

## Casos negativos a testear
- Caso:
`,
    "postmortem-template.md": `# Postmortem simulado

## Resumen
Que paso y a quien afecto.

## Linea de tiempo
- Hora: Evento.

## Causa raiz
Explicacion tecnica.

## Deteccion
Como se detecto y que senales faltaron.

## Acciones correctivas
- Accion:
- Responsable:
- Fecha:
`,
  };
}

function writeStarter(project) {
  const dir = join(projectDir(project), "starter");
  ensureFile(join(dir, "README.md"), starterReadme(project));
  ensureFile(join(dir, "package.json"), starterPackage(project));
  ensureFile(join(dir, "tsconfig.json"), tsconfig());
  ensureFile(join(dir, "docker-compose.yml"), starterDocker(project));
  ensureFile(join(dir, ".env.example"), starterEnv(project));
  ensureFile(join(dir, "src", "main.ts"), starterMain(project));
  ensureFile(join(dir, "tests", ".gitkeep"), "");
  ensureFile(join(dir, "docs", "contracts.md"), starterContract(project));
  ensureFile(join(dir, "docs", "adr", "0001-architecture.md"), templates()["adr-template.md"]);
}

function main() {
  rmSync(join(root, "projects"), { recursive: true, force: true });
  rmSync(join(root, "templates"), { recursive: true, force: true });
  rmSync(join(root, "docs"), { recursive: true, force: true });

  ensureFile(join(root, "README.md"), rootReadme());
  ensureFile(join(root, "CONTRIBUTING.md"), contributing());
  ensureFile(join(root, "docs", "evaluation-guide.md"), evaluationGuide());

  for (const [name, content] of Object.entries(templates())) {
    ensureFile(join(root, "templates", name), content);
  }

  for (const project of projects) {
    const dir = projectDir(project);
    ensureFile(join(dir, "README.md"), projectReadme(project));
    ensureFile(join(dir, "questions.md"), projectQuestions(project));
    ensureFile(join(dir, "rubric.md"), projectRubric(project));

    if (project.id >= 7) {
      writeStarter(project);
    }
  }
}

main();
