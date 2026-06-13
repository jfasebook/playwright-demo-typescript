import { IDriver } from '#framework/engine/interfaces/IDriver';
import { PageFactory } from '#support/factories/PageFactory';
import { MenuComponent } from '#support/components/MenuComponent';
import { ProductFlows } from '#support/flows/ProductFlows';
import { Logger } from '#framework/logger/Logger';

export class TestApp {
    public readonly pages: PageFactory;
    public readonly menu: MenuComponent;
    
    // Agrupación de flujos de negocio
    public readonly flows: {
        products: ProductFlows;
    };

    constructor(
        private readonly driver: IDriver,
        public readonly logger: Logger
    ) {
        this.pages = new PageFactory(driver);
        this.menu = new MenuComponent(driver);
        
        // Inicialización de flujos con inyección de la propia app
        this.flows = {
            products: new ProductFlows(this)
        };
    }
}
