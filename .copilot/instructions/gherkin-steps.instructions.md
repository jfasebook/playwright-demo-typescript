---
applyTo: "tests/steps/**/*.steps.ts"
---

# Implementación de Pasos Gherkin (Steps)

Eres un experto en QA Automation siguiendo el patrón de desacoplamiento y herencia de arquitecturas basadas en App Object Pattern.

## Reglas de Implementación (Cumplimiento de Abstracción)
1. **Runner Específico**: Utiliza **SIEMPRE** el decorador `#tests/engine/TestRunnerGherkin` para importar las funciones de Gherkin.
    *   **Prohibido**: `import { Given, ... } from 'playwright-bdd';`
    *   **Obligatorio**: `import { Given, When, Then } from '#tests/engine/TestRunnerGherkin';`
2. **Prohibición de Playwright**: Al igual que en los specs, está terminantemente prohibido importar `@playwright/test` directamente para interactuar con el navegador. Todo debe orquestarse a través de la `app`.
3. **Uso de Aliases (`#`)**: Todos los imports a carpetas del proyecto deben usar su alias correspondiente (`#framework/*`, `#tests/*`).

## Arquitectura del Step
1. **Propósito**: El archivo de steps es "pegajoso" (glue code); su única función es mapear las frases de Gherkin a llamadas de la arquitectura de automatización.
2. **Inyección de Fixtures**: Los pasos reciben automáticamente los fixtures `app`, `data` y `logger` gracias al decorador.
    *   `Given('...', async ({ app, data, logger }) => { ... });`
3. **Delegación de Responsabilidades**:
    *   **Acciones**: Llama a métodos de `app.pages...` o `app.flows...`.
    *   **Datos**: Obtiene entidades de prueba desde el fixture `data`.
    *   **Validaciones**: Utiliza `expect` importado desde `#framework/engine/TestRunner`.

## Ejemplo de Implementación Correcta
```typescript
import { Given, When, Then } from '#tests/engine/TestRunnerGherkin';
import { expect } from '#framework/engine/TestRunner';

When('navega a la sección de productos', async ({ app }) => {
  await app.pages.home().menu.irAProductos();
});

Then('el contador de resultados debe mostrar {string} items', async ({ app }, cantidad: string) => {
  const contador = await app.pages.products().obtenerContador();
  expect(contador).toContain(cantidad);
});
```
