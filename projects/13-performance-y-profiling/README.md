# Proyecto 13: Performance y profiling

**Nivel:** Backend profundo

## Enunciado
Medir y optimizar una API de busqueda y ranking bajo carga controlada.

El estudiante debe demostrar mejoras con evidencia, no con intuicion.

## Objetivos
- Disenar benchmarks reproducibles.
- Medir latencia, throughput y errores.
- Perfilar CPU, memoria y queries.
- Optimizar pool de conexiones y consultas.
- Comparar antes y despues con criterios claros.
- Evitar optimizaciones que rompan contratos.

## Requisitos de implementacion
- Script de carga local documentado.
- Baseline antes de optimizar.
- Perfil de al menos un cuello de botella.
- Optimizacion de query, cache o algoritmo justificada.
- Reporte con metricas p50, p95, p99 y error rate.
- Tests de regresion funcional.

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
- Latency percentiles y throughput.
- Flamegraphs y profiling de Node.js.
- Pool de conexiones PostgreSQL.
- N+1 queries y optimizacion de indices.

## Criterios de aceptacion
- El reporte muestra evidencia antes/despues.
- La mejora no depende de datos irreales o cache precalentado sin declararlo.
- Los cambios conservan el contrato API.
- El README enumera limites del benchmark local.

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
