# Mi Solución Delicias Express Web

## Cómo empezar

### Instalación de dependencias
Asegúrate de tener instaladas todas las dependencias necesarias:
```bash
npm install
```

### Servir la web de forma local
Para servir la web de forma estática (contenida en la carpeta `web`), utiliza el siguiente script:
```bash
npm run serve
```

### Ejecutar tests de Playwright
```bash
npx playwright test
```

## Tests Implementados (Specs)

Se han implementado las siguientes suites de pruebas bajo la carpeta [tests/specs/](tests/specs/):

- **[e2e-user-flows.spec.ts](tests/specs/e2e-user-flows.spec.ts)**: Verificación de flujos completos de usuario (E2E), desde la navegación hasta la búsqueda y selección de productos.
- **[home-page-verification.spec.ts](tests/specs/home-page-verification.spec.ts)**: Validaciones específicas de los elementos y secciones de la página de inicio (Hero section, secciones destacadas).
- **[menu-consistency.spec.ts](tests/specs/menu-consistency.spec.ts)**: Pruebas de integridad del menú de navegación para asegurar que las rutas y el comportamiento sean consistentes en toda la aplicación.
- **[product-data-integrity.spec.ts](tests/specs/product-data-integrity.spec.ts)**: Validación de la correcta carga y visualización de los datos de productos y sus detalles.

## Arquitectura y Decisiones de Diseño

El proyecto sigue un diseño de **QA Automation con desacoplamiento de herramientas**, basado en las siguientes capas y principios:

### Capas del Framework
- **Motor de Ejecución (Engine)**: Ubicado en [framework/engine/](framework/engine/), es el **único** lugar con acoplamiento directo a Playwright.
- **App Object (`TestApp`)**: Centraliza el acceso a páginas, componentes y flujos de negocio. Inyectado como fixture en los tests.
- **Component Object Model (COM)**: Fragmentación de la UI en componentes reutilizables ([framework/components/](framework/components/)) como `MenuComponent` o `FooterComponent`.
- **Page Object Model (POM)**: Representación de páginas completas ([framework/pages/](framework/pages/)) que exponen acciones de dominio.
- **Business Flows**: Orquestación de pasos complejos ([framework/flows/](framework/flows/)) para simplificar la lógica de los tests.
- **Configuración Abstraída**: Sistema de configuración basado en `framework.config.ts` que permite personalizar los tests sin modificar la infraestructura técnica de Playwright.
- **Test Data Builders & Factories**: Gestión centralizada de datos de prueba ([tests/builders/](tests/builders/) y [tests/factories/](tests/factories/)) para evitar datos "hardcoded" en las specs.

### Configuración del Proyecto
El proyecto utiliza un sistema de configuración de doble capa para mantener el desacoplamiento:

1. **`playwright.config.ts` (Puente Técnico)**: Ubicado en la raíz, actúa únicamente como un puente hacia el framework. No debe modificarse.
2. **`framework.config.ts` (Configuración de Usuario)**: Es el punto de entrada oficial para configurar el comportamiento de los tests. Permite sobrescribir:
    - `baseUrl`: URL de la aplicación bajo prueba.
    - `timeout`: Tiempo máximo de espera para los tests.
    - `retries`: Número de reintentos en caso de fallo.
    - `projects`: Definición de navegadores (Chromium, Firefox, Webkit).

Este sistema permite que el usuario del framework no necesite conocer los detalles internos de Playwright para configurar sus ejecuciones.

### Regla de Oro: Desacoplamiento Total
Está estrictamente prohibido importar `@playwright/test` en las capas de negocio, páginas o tests. Toda interacción debe pasar por la abstracción del `TestRunner`.

### Uso de Alias de Importación (`#`)
Se ha implementado el uso de alias (subpath imports) para los espacios lógicos del proyecto, definidos en el `package.json`:
- `#framework/*`: Acceso a la lógica del framework de automatización.
- `#tests/*`: Acceso a elementos de la carpeta de pruebas (specs, data, factories, etc.).

**Justificación:**
1. **Independencia de la Estructura de Archivos**: Evita los `../../../../` que se rompen al mover archivos de carpeta.
2. **Semántica**: El código es más legible al identificar claramente a qué capa pertenece el módulo importado.
3. **Mantenibilidad**: Facilita refactorizaciones profundas de la estructura de carpetas sin impactar masivamente en los archivos de test.
4. **Acuerdo de Proyecto**: Establece fronteras claras entre el código de infraestructura del framework y la lógica de las pruebas.
