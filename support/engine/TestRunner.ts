import { test as base, expect } from '#framework/engine/TestRunner';
import { TestApp } from '#support/app/TestApp';
import { TestDataFactory } from '#support/factories/TestDataFactory';

/**
 * Fixtures de negocio específicos del proyecto.
 * Aquí inyectamos la TestApp que ya contiene la factoría de páginas.
 */
export type TestFixtures = {
    app: TestApp;
    data: TestDataFactory;
};

/**
 * Extendemos el test base del framework (que ya trae el driver)
 * para añadir nuestra abstracción de aplicación.
 */
export const test = base.extend<TestFixtures>({
    app: async ({ driver, logger }, use) => {
        const app = new TestApp(driver, logger);
        await use(app);
    },
    data: async ({}, use) => {
        await use(new TestDataFactory());
    }
});

export { expect };
