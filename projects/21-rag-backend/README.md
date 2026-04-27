# Proyecto 21: RAG backend

**Nivel:** IA aplicada

## Enunciado
Construir una API de preguntas sobre documentos internos usando embeddings, busqueda vectorial y grounding.

El estudiante debe entender ingestion, chunking, retrieval, contexto, evaluacion y limites de confianza.

## Objetivos
- Ingerir documentos y dividirlos en chunks.
- Generar y almacenar embeddings.
- Recuperar contexto relevante para una pregunta.
- Construir prompts grounded con citas o referencias.
- Evaluar precision y alucinaciones.
- Proteger documentos por permisos.

## Requisitos de implementacion
- Pipeline de ingestion con estados.
- Persistencia de documentos, chunks y embeddings.
- Busqueda vectorial con opcion local documentada.
- Endpoint de pregunta con contexto recuperado.
- Respuesta con referencias a chunks usados.
- Set de evaluacion con preguntas esperadas sin respuestas publicas completas.

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
- Embeddings y similitud vectorial.
- Chunking strategies.
- Retrieval augmentation y grounding.
- Evaluacion de RAG.

## Criterios de aceptacion
- Una pregunta sin contexto suficiente no inventa respuesta confiable.
- Los documentos no autorizados no se recuperan.
- El pipeline puede reintentar ingestion fallida.
- La evaluacion mide recuperacion y respuesta por separado.

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
