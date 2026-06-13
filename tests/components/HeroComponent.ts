import { BaseComponent } from '#framework/components/BaseComponent';

export class HeroComponent extends BaseComponent {
    async irAProductos() {
        await this.driver.clickByRole('link', /ver productos/i);
    }

    async irAConsejos() {
        await this.driver.clickByRole('link', /leer consejos/i);
    }

    async obtenerTitulo(): Promise<string | null> {
        return await this.driver.getText('h1');
    }

    async esVisibleEnlaceProductos(): Promise<boolean> {
        return await this.driver.isVisibleByRole('link', /ver productos/i);
    }
}

