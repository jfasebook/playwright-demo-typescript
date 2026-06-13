import { BaseComponent } from '#framework/components/BaseComponent';

export class MenuComponent extends BaseComponent {
    async irAInicio() {
        await this.driver.clickByRole('link', /^Inicio$/);
    }

    async irAProductos() {
        await this.driver.clickByRole('link', /^Productos$/);
    }

    async irAConsejos() {
        await this.driver.clickByRole('link', /^Consejos$/);
    }

    async estanVisiblesEnlacesPrincipales(): Promise<boolean> {
        const inicio = await this.driver.isVisibleByRole('link', /^Inicio$/);
        const productos = await this.driver.isVisibleByRole('link', /^Productos$/);
        const consejos = await this.driver.isVisibleByRole('link', /^Consejos$/);
        return inicio && productos && consejos;
    }

    async obtenerNombreEmpresa(): Promise<string | null> {
        return await this.driver.getText('.marca span:last-child');
    }
}
