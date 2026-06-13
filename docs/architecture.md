# Arquitectura y Decisiones de Diseño

El proyecto sigue un diseño de **QA Automation con desacoplamiento de herramientas**, basado en las siguientes capas y principios:

### Capas del Framework
- **Motor de Ejecución (Engine)**: Ubicado en [framework/engine/](../framework/engine/), es el **único** lugar con acoplamiento directo a Playwright.
- **App Object (`TestApp`)**: Centraliza el acceso a páginas, componentes y flujos de negocio. Inyectado como fixture en los tests.
- **Component Object Model (COM)**: Fragmentación de la UI en componentes reutilizables ([support/components/](../support/components/)).
- **Page Object Model (POM)**: Representación de páginas completas ([support/pages/](../support/pages/)) que exponen acciones de dominio.
- **Business Flows**: Orquestación de pasos complejos ([support/flows/](../support/flows/)).
- **Configuración Abstraída**: Sistema basado en `framework.config.ts` para personalizar ejecuciones sin tocar `playwright.config.ts`.
- **Test Data Builders & Factories**: Gestión centralizada de datos ([support/builders/](../support/builders/) y [support/factories/](../support/factories/)).

### Regla de Oro: Desacoplamiento Total
Está estrictamente prohibido importar `@playwright/test` fuera de `framework/engine`. Toda interacción debe pasar por la abstracción de `app` y `TestRunner`.

### Uso de Alias de Importación (`#`)
Se utilizan subpath imports definidos en `package.json` y `tsconfig.json`:
- `#framework/*`: Núcleo de automatización.
- `#support/*`: Abstracciones de dominio (Pages, Steps, Data).
- `#tests/*`: Definición de pruebas (Specs, Features).

**Ventajas:** Independencia de la estructura física, semántica clara, y facilidad para refactorizar carpetas sin romper imports.
