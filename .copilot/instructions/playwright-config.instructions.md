---
applyTo: "playwright.config.ts"
---

# Configuración de Playwright y Gherkin

Este archivo orquesta la ejecución técnica de las pruebas, integrando Playwright con el generador de BDD.

## Reglas de Mantenimiento

### 1. Generación de BDD (`defineBddConfig`)
Para asegurar que los archivos `.feature` se transformen correctamente en tests de Playwright:
*   **Paths**: Asegúrate de que apunte a `tests/features/*.feature`.
*   **Steps**: Utiliza el patrón de archivos `.steps.ts`. **IMPORTANTE**: No utilices `importTestFrom` (opción obsoleta), en su lugar incluye el archivo que contiene `createBdd` (ej. `support/engine/TestRunnerGherkin.ts`) dentro del array de `steps` si es necesario o asegúrate de que los archivos de steps lo importen correctamente.
*   **OutputDir**: Los tests generados deben ir a `.features-gen/`. No modifiques este directorio sin actualizar el proyecto `gherkin`.

### 2. Proyectos de Playwright
El framework soporta un enfoque dual:
*   **specs**: Para tests tradicionales en `tests/specs`.
*   **gherkin**: Para tests basados en características en `.features-gen`.

### 3. Abstracción del Framework
No definas configuraciones de navegador pesadas aquí. Utiliza el puente `playwrightBaseConfig` importado desde `#framework/config/playwrightBridge` para mantener la base técnica separada de la personalización del proyecto.

## Ejemplo de Configuración BDD Correcta
```typescript
const bddConfig = defineBddConfig({
  paths: ['tests/features/*.feature'],
  steps: ['support/steps/*.steps.ts', 'support/engine/TestRunnerGherkin.ts'],
  outputDir: '.features-gen',
});
```
