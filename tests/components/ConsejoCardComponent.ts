import { BaseComponent } from '#framework/components/BaseComponent';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class ConsejoCardComponent extends BaseComponent {
    constructor(driver: IDriver, private readonly baseSelector: string) {
        super(driver);
    }

    async obtenerTitulo(): Promise<string | null> {
        return await this.driver.getText(`${this.baseSelector} h2`);
    }

    async obtenerDescripcion(): Promise<string | null> {
        return await this.driver.getText(`${this.baseSelector} p`);
    }
}

