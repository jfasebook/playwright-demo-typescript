import { Page } from '@playwright/test';
import { IDriver } from '#framework/engine/interfaces/IDriver';
import { PlaywrightDriver } from '#framework/engine/playwright/PlaywrightDriver';

export class EngineFactory {
    static createDriver(page: Page): IDriver {
        // Por defecto devolvemos PlaywrightDriver, pero aquí podríamos 
        // decidir qué driver devolver basándonos en configuración
        return new PlaywrightDriver(page);
    }
}
