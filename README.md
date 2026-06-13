# Mi Solución Delicias Express Web

## Cómo empezar

### Instalación de dependencias
Asegúrate de tener instaladas todas las dependencias necesarias y los navegadores de Playwright:
```bash
npm run setup
```

O si prefieres hacerlo por separado:
```bash
npm install
npx playwright install
```

### Servir la web de forma local
Para servir la web de forma estática (contenida en la carpeta `web`), utiliza el siguiente script:
```bash
npm run serve
```

### Ejecutar tests de Playwright
Dispones de varios scripts para ejecutar los tests de forma sencilla:

*   **Ejecutar todos los tests:**
    ```bash
    npm test
    ```
*   **Solo tests de Specs (tradicionales):**
    ```bash
    npm run test:specs
    ```
*   **Solo tests de Gherkin (BDD):**
    ```bash
    npm run test:gherkin
    ```
*   **Modo UI (Interactivo):**
    ```bash
    npm run test:ui
    ```
*   **Modo Debug:**
    ```bash
    npm run test:debug
    ```
*   **Ver el último reporte:**
    ```bash
    npm run test:report
    ```

## Documentación detallada

Para más información técnica y de organización, consulta los siguientes documentos:

- [Estructura del Proyecto](docs/project-structure.md)
- [Tests Implementados](docs/tests-implemented.md)
- [Arquitectura y Decisiones de Diseño](docs/architecture.md)

