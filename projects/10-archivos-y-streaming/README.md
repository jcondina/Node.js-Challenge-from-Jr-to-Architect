# Proyecto 10: Archivos y streaming

**Nivel:** Backend profundo

## Enunciado
Construir un servicio de carga, descarga y procesamiento de archivos grandes.

El proyecto evita cargar todo en memoria y obliga a validar archivos, metadatos y limites.

## Objetivos
- Usar streams de Node.js para uploads y downloads.
- Validar tipo, tamano y metadatos.
- Disenar almacenamiento local compatible conceptualmente con S3.
- Procesar archivos asincronicamente.
- Proteger endpoints de abuso.
- Testear errores de IO y limites.

## Requisitos de implementacion
- Upload multipart con limite de tamano.
- Download por streaming con headers correctos.
- Metadatos persistidos en PostgreSQL.
- Almacenamiento local aislado por entorno.
- Job de procesamiento o validacion posterior.
- Tests de archivo invalido, grande y inexistente.

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
- Streams, backpressure y memoria.
- Multipart upload y content type.
- ETag, Content-Disposition y rangos HTTP.
- Riesgos de path traversal.

## Criterios de aceptacion
- Subir un archivo grande no dispara uso de memoria descontrolado.
- Los paths del usuario no se usan directamente en disco.
- La descarga conserva metadatos HTTP relevantes.
- Los archivos invalidos no quedan como validos en base.

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
