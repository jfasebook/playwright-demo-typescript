import { BaseComponent } from '#framework/components/BaseComponent';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class ProductoCardComponent extends BaseComponent {
    constructor(driver: IDriver, private readonly baseSelector: string) {
        super(driver);
    }

    async obtenerNombre(): Promise<string | null> {
        return await this.driver.getText(`${this.baseSelector} .producto-nombre`);
    }

    async obtenerPrecio(): Promise<string | null> {
        return await this.driver.getText(`${this.baseSelector} .producto-precio`);
    }

    async añadirAlCarrito() {
        // Usando el selector de rol dentro del contexto del card si fuera posible, 
        // pero IDriver actualmente no soporta "child locators" de forma limpia sin selectores CSS
        await this.driver.click(`${this.baseSelector} >> internal:role=button[name=/añadir/i]`);
    }
}

