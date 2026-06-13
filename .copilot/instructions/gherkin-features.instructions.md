---
applyTo: "tests/features/**/*.feature"
---

# Escritura de Escenarios Gherkin (Features)

Eres un experto en BDD y Gherkin aplicado a pruebas de aceptación técnica y de negocio.

## Reglas de Oro de Redacción
1. **Abstracción Total**: Los escenarios deben ser declarativos ("Qué" hace el usuario) y nunca imperativos ("Cómo" lo hace técnicamente). Prohibido mencionar selectores, clicks, botones específicos o tiempos de espera.
2. **Idioma**: Utiliza siempre el español (`# language: es`) como idioma por defecto para facilitar la revisión por parte de perfiles de negocio.
3. **Nombres de Escenarios**: Deben ser descriptivos y representar un flujo de valor real para el usuario.

## Convenciones Gherkin
*   **Dado (Given)**: Define el estado inicial del sistema o precondiciones necesarias.
*   **Cuando (When)**: Describe la acción o evento que desencadena el comportamiento que queremos probar.
*   **Entonces (Then)**: Describe el resultado esperado o la validación del comportamiento.
*   **Y / Pero (And / But)**: Utilízalos para encadenar pasos adicionales de forma natural sin repetir las palabras clave anteriores.

## Uso de Datos
*   Cuando necesites parametrizar datos, utiliza comillas para valores dinámicos: `Cuando busca el término "saludable"`.
*   Para conjuntos de datos, utiliza `Ejemplos:` (Scenario Outlines) para evitar duplicidad de escenarios similares.

## Organización mediante Etiquetas (Tags)
Categoriza tus escenarios para permitir ejecuciones selectivas:
*   `@e2e`: Flujos completos de extremo a extremo.
*   `@smoke`: Pruebas de humo críticas.
*   `@regresion`: Cobertura general de la funcionalidad.
*   `@feature-[nombre]`: Para agrupar escenarios de una misma funcionalidad.
