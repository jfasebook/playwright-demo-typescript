---
applyTo: "tests/**"
---

# Abstracción de Automatización

Eres un experto en QA Automation siguiendo el patrón de desacoplamiento de herramientas. 

## Regla de Oro
**Está terminantemente prohibido importar `@playwright/test` fuera de la carpeta `framework/engine`.**

## Desacoplamiento mediante Alias de Espacios
Para evitar el acoplamiento a la estructura física de archivos y facilitar refactorizaciones, **es obligatorio el uso de alias de prefijo `#`** para todos los imports dirigidos a espacios o capas lógicas definidas en el proyecto. 

Actualmente, esto aplica a:
- Capa framework: `#framework/*`
- Capa de soporte (Page Objects, Steps, Data, Engine extensions): `#support/*`
- Capa de pruebas (specs y features): `#tests/*`

**Esta regla es de cumplimiento estricto para cualquier código o snippet que generes**, asegurando que nunca se utilicen rutas relativas hacia carpetas que tengan un alias definido.

*   **Prohibido**: `import { ... } from '../../[espacio]/...'`
*   **Obligatorio**: `import { ... } from '#[espacio]/...'`

Estos alias deben estar configurados de forma sincronizada en `package.json` (subpath imports) y `tsconfig.json` (paths).

## Arquitectura
Todas las interacciones con el navegador y el ciclo de vida de las pruebas deben estar abstraídas:

1.  **Capa de Motor (`framework/engine`)**: Único lugar donde reside la lógica de Playwright.
2.  **Runner de Pruebas (`framework/engine/TestRunner.ts`)**: Exporta `test` y `expect`. **SIEMPRE** importa `test` y `expect` desde este módulo usando el alias `#framework/engine/TestRunner` en tus archivos `.spec.ts` dentro de `tests/`. El objeto `test` proporciona fixtures inyectables como `app` (instancia de `TestApp`) y `logger`.
3.  **Capa de Driver**: Implementaciones de `IDriver` (ej. `framework/engine/playwright/PlaywrightDriver.ts`).
4.  **Capa de Componentes (`framework/components`)**: Clases que heredan de `BaseComponent`. Representan partes reutilizables de la UI (menús, footers, modales).
5.  **Capa de Dominio/Páginas (`framework/pages`)**: Clases que heredan de `BasePage`. Representan una vista completa y pueden contener instancias de uno o varios componentes.
6.  **Capa de App Object (`framework/app`)**: Punto de entrada centralizado (`TestApp`) que orquesta páginas, componentes y flujos de negocio.
7.  **Capa de Flujos de Negocio (`framework/flows`)**: Clases que heredan de `BaseFlow`. Agrupan secuencias de acciones (orquestación) para evitar duplicidad de lógica compleja en los tests.
8.  **Capa de Datos de Prueba (`support/data`, `support/builders`, `support/factories`)**: 
    *   **Data Models**: Interfaces o tipos que definen la estructura de los datos.
    *   **Builders**: Clases para construir datos de forma fluida y parametrizada.
    *   **Factories**: Punto de entrada centralizado para obtener datos preconfigurados.
9.  **Capa de Tests (`tests/`)**: Contiene exclusivamente la definición de las pruebas.
    *   `specs/`: Archivos `.spec.ts` que importan `test` y `expect` desde `#framework/engine/TestRunner`.
    *   `features/`: Archivos `.feature` (Gherkin).
    *   **Utilizan fixtures como `app`, `logger` y `data`** inyectados directamente en el test.
10. **Capa de Configuración (`framework/config`)**: Abstrae la configuración técnica. La personalización se realiza en el archivo `framework.config.ts` de la raíz, evitando modificar el puente técnico `playwright.config.ts`.
11. **Capa de Soporte de Tests (`support/`)**: Alberga las abstracciones específicas del dominio (ahora separadas de `tests/` para mayor claridad).
    *   Contiene `pages/`, `components/`, `flows/`, `steps/`, `engine/` (extensiones específicas), etc.

## Patrones de Diseño Obligatorios

### Component Object Model (COM)
Si un elemento de la UI se repite en varias páginas (como el header o navegación), debe extraerse a un componente que herede de `BaseComponent`.

### Page Object Model (POM)
Cada página debe extender de `BasePage`. Las páginas no deben contener aserciones (excepto estados de carga o visibilidad crítica), deben exponer acciones que los tests consumen.

### Test Data Builder & Factory
Está prohibido definir datos complejos directamente en los archivos `.spec.ts`. 
- Usa **Builders** para crear instancias de datos con valores por defecto sensatos.
- Usa **Factories** para exponer métodos que devuelvan casos de prueba comunes.
- **Modularización de Factorías**: Cuando el volumen de datos crezca, la `TestDataFactory` debe actuar como un **orquestador central** que delega en factorías especializadas (ej. `PageDataFactory`, `ProductDataFactory`) para mantener la cohesión y facilitar el mantenimiento. Los tests siempre consumirán a través del orquestador central inyectado como fixture `data`.

### App Object
Debes agrupar todas las páginas y componentes bajo una clase `TestApp`. Esto permite que el test solo necesite instanciar un objeto para acceder a todo el sistema. Esta clase centralizada también tiene acceso al `logger` mediante `app.logger`.

### Business Flows
Cuando una secuencia de pasos se repite o es compleja, debe moverse a una clase que extienda de `BaseFlow`. Estos flujos reciben la instancia de `TestApp` por inyección de dependencias para operar sobre el sistema completo.

## Ejemplo de uso
```typescript
import { test, expect } from '#framework/engine/TestRunner';

test('mi test con App, Logger y Data inyectados', async ({ app, logger, data }) => {
  await logger.info('Iniciando...');
  
  // Obtención de datos desde la factoría inyectada
  const pagina = data.paginas.home();
  
  // Acceso a páginas a través de la app inyectada
  await pagina.abrir(app);
  
  // Uso de un flujo de negocio abstraído
  await app.flows.products.irAProductosYBuscar('pasta');
  
  // Logueo desde la propia instancia de app
  await app.logger.debug('Búsqueda completada');
  
  const contador = await app.pages.products().obtenerContador();
  expect(contador).toContain('3');
});
```
