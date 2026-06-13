# Estructura del Proyecto

El proyecto está organizado para separar claramente la lógica de los tests de las abstracciones de soporte:

- **`tests/`**: Contiene únicamente la definición de los tests.
    - `specs/`: Pruebas escritas en TypeScript convencional.
    - `features/`: Especificaciones de negocio en formato Gherkin (BDD).
- **`support/`**: Abstracciones específicas de la aplicación.
    - `pages/` y `components/`: Implementación del Page Object y Component Object Model.
    - `flows/`: Orquestación de lógica de negocio compleja.
    - `steps/`: Implementación (glue code) de los pasos de Gherkin.
    - `data/`, `builders/`, `factories/`: Gestión de datos de prueba inyectables.
    - `app/`: Punto de entrada `TestApp`.
- **`framework/`**: Núcleo técnico independiente del dominio de la aplicación.
    - `engine/`: Único punto de acoplamiento con Playwright.
    - `components/` y `pages/`: Clases base y contratos de la arquitectura.
