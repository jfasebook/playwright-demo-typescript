import { BasePage } from '#framework/pages/BasePage';
import { MenuComponent } from '#support/components/MenuComponent';
import { SearchBoxComponent } from '#support/components/SearchBoxComponent';
import { FooterComponent } from '#support/components/FooterComponent';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class ProductsPage extends BasePage {
    public readonly menu: MenuComponent;
    public readonly searchBox: SearchBoxComponent;
    public readonly footer: FooterComponent;
    
    private readonly productCounter = '#contador-productos';
    private readonly noResultsMessage = '#sin-resultados';

    constructor(driver: IDriver) {
        super(driver);
        this.menu = new MenuComponent(driver);
        this.searchBox = new SearchBoxComponent(driver);
        this.footer = new FooterComponent(driver);
    }

    async abrir() {
        await this.navigate('productos.html');
    }

    async buscar(texto: string) {
        await this.searchBox.escribir(texto);
    }

    async limpiarBusqueda() {
        await this.searchBox.limpiar();
    }

    async obtenerContador(): Promise<string | null> {
        return await this.driver.getText(this.productCounter);
    }

    async esVisibleSinResultados(): Promise<boolean> {
        return await this.driver.isVisible(this.noResultsMessage);
    }
}
