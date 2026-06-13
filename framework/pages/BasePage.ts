import { IDriver } from '#framework/engine/interfaces/IDriver';

export abstract class BasePage {
    constructor(protected driver: IDriver) {}

    async navigate(url: string) {
        await this.driver.navigate(url);
    }
}
