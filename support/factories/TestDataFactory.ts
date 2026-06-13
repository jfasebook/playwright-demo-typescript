import { PageDataFactory } from '#support/factories/PageDataFactory';
import { ProductDataFactory } from '#support/factories/ProductDataFactory';

export class TestDataFactory {
    private readonly pageFactory = new PageDataFactory();
    private readonly productFactory = new ProductDataFactory();
    
    public get paginas() {
        return this.pageFactory.paginas;
    }

    public get productos() {
        return this.productFactory.productos;
    }
}
