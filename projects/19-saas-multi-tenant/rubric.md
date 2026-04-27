# Rubrica - Proyecto 19: SaaS multi-tenant

La rubrica suma 100 puntos. No hay solucion canonica publica; se evalua comportamiento, criterio tecnico y defensa.

## Criterios
- **Modelo multi-tenant: 25 pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.
- **Aislamiento y autorizacion: 30 pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.
- **Billing, quotas y auditoria: 20 pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.
- **Tests de fugas: 15 pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.
- **ADRs y documentacion: 10 pts.** Evidencia esperada: implementacion funcional, decisiones justificadas, casos borde considerados y explicacion defendible.

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
