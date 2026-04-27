# Proyecto 20: GitHub Models integration

**Nivel:** IA aplicada

## Enunciado
Agregar asistencia controlada a una API usando GitHub Models sin convertir al modelo en fuente de verdad.

El foco es integrar IA desde backend con contratos, prompts versionados, streaming, costos y evaluacion.

## Objetivos
- Invocar GitHub Models desde Node.js con credenciales seguras.
- Versionar prompts como parte del codigo.
- Definir contratos de entrada y salida.
- Implementar streaming o respuesta progresiva cuando aplique.
- Manejar timeouts, rate limits y costos.
- Evaluar calidad con casos de prueba.

## Requisitos de implementacion
- Cliente AI aislado detras de una interfaz.
- Uso de GitHub Models con `models: read` documentado.
- Prompts en archivos versionados.
- Validacion de respuesta antes de usarla.
- Mocks para tests sin llamadas reales.
- Registro de latencia y errores sin filtrar secretos.

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
- GitHub Models inference API y catalogo.
- Prompting como contrato versionado.
- Structured output y validacion.
- Evaluacion basica de respuestas generadas.

## Criterios de aceptacion
- La app funciona en modo mock sin token real.
- El modelo no decide permisos ni estado critico.
- Los prompts tienen version y proposito documentado.
- Los errores del proveedor tienen fallback o respuesta clara.

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
