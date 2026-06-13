import { test as base, expect, Page } from '@playwright/test';
import { test as bddBase } from 'playwright-bdd';
import { IDriver } from '#framework/engine/interfaces/IDriver';
import { EngineFactory } from '#framework/engine/EngineFactory';
import { Logger } from '#framework/logger/Logger';

/**
 * Fixtures estructurales del framework.
 */
export type FrameworkFixtures = {
    driver: IDriver;
    logger: Logger;
};

/**
 * Este módulo actúa como un wrapper sobre el runner de Playwright.
 * Inyectamos automáticamente el driver para que esté disponible en 
 * cualquier test o fixture que lo necesite.
 */
export const test = bddBase.extend<FrameworkFixtures>({
    driver: async ({ page }, use) => {
        const driver = EngineFactory.createDriver(page);
        await use(driver);
    },
    logger: async ({}, use) => {
        const logger = new Logger();
        await use(logger);
    }
});

export { expect };
