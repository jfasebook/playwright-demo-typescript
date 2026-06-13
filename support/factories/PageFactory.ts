import { IDriver } from '#framework/engine/interfaces/IDriver';
import { HomePage } from '#support/pages/HomePage';
import { ProductsPage } from '#support/pages/ProductsPage';
import { ConsejosPage } from '#support/pages/ConsejosPage';

export class PageFactory {
    constructor(private readonly driver: IDriver) {}

    public home(): HomePage {
        return new HomePage(this.driver);
    }

    public products(): ProductsPage {
        return new ProductsPage(this.driver);
    }

    public consejos(): ConsejosPage {
        return new ConsejosPage(this.driver);
    }
}
