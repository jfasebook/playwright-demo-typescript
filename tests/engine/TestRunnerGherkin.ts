import { createBdd } from 'playwright-bdd';
import { test } from './TestRunner';

/**
 * Decorador de TestRunner para Gherkin.
 * Hereda todos los fixtures (app, data, driver, logger) de TestRunner.ts
 * y los pone a disposición de las funciones Given, When, Then de Gherkin.
 */
export const { Given, When, Then } = createBdd(test);
