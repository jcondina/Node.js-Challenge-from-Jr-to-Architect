# Proyecto 23: Arquitectura para modelo local

**Nivel:** IA aplicada

## Enunciado
Disenar una capa AI que pueda alternar entre GitHub Models y un modelo local via Ollama o servidor compatible.

El proyecto evalua abstraccion de proveedores, privacidad, latencia, fallback y operacion en una PC local.

## Objetivos
- Definir una interfaz comun de proveedor AI.
- Implementar proveedor remoto GitHub Models y proveedor local compatible.
- Configurar Ollama o endpoint OpenAI-like local.
- Manejar limites de tokens, memoria y latencia.
- Comparar calidad y costo operativo.
- Testear contratos sin depender del modelo real.

## Requisitos de implementacion
- Provider interface para chat y embeddings si aplica.
- Seleccion de proveedor por configuracion.
- Timeouts, retries y fallback documentados.
- Modo local con `OLLAMA_BASE_URL` o endpoint compatible.
- Tests contractuales con proveedor fake.
- Documento de arquitectura para correr en PC local.

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
- Ollama y servidores compatibles con OpenAI API.
- Tradeoffs modelo local vs remoto.
- Privacidad y residencia de datos.
- Benchmark basico de latencia/calidad.

## Criterios de aceptacion
- Cambiar proveedor no modifica casos de uso.
- El sistema funciona con fake provider en CI.
- El modo local falla de manera clara si el modelo no esta disponible.
- El documento explica requisitos de hardware y limites.

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
