import { BaseFlow } from '#framework/flows/BaseFlow';

export class ProductFlows extends BaseFlow {
    async irAProductosYBuscar(termino: string) {
        await this.app.pages.home().abrir();
        await this.app.menu.irAProductos();
        await this.app.pages.products().buscar(termino);
    }
}

