# Cuestionario - Proyecto 17: Microservicios controlados

Este cuestionario no incluye respuestas. El estudiante debe responderlo en su fork y estar preparado para defenderlo oralmente.

## Fundamentos
1. Que responsabilidad cumple microservicios en este proyecto y que problema evita?
2. Que diferencia practica hay entre data ownership y contratos en este contexto?
3. Que invariantes del dominio no deberian depender solo de la capa HTTP?

## Diseno
1. Donde ubicarias la logica relacionada con timeouts y por que?
2. Que contrato publico deberia quedar estable aunque cambie la implementacion interna?
3. Que decision de arquitectura seria dificil de revertir mas adelante?

## Debugging
1. Como investigarias un bug donde retries produce resultados inconsistentes?
2. Que logs, metricas o trazas necesitarias para diagnosticar problemas relacionados con fallos remotos?
3. Como reproducirias localmente un caso borde sin depender de datos manuales?

## Tradeoffs
1. Que ganas y que pierdes al priorizar Docker Compose sobre simplicidad inicial?
2. Que parte del proyecto no optimizarias todavia y por que?
3. Que riesgo introduce service discovery si el sistema crece en trafico o datos?

## Defensa oral
1. Explica una decision tecnica que tomaste y una alternativa razonable que descartaste.
2. Si aparece un incidente relacionado con tests de contrato en produccion, cual seria tu primer paso de diagnostico?
3. Que evidencia mostrarias para demostrar que dominas transacciones distribuidas?
