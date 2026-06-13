import { PageDataFactory } from '#tests/factories/PageDataFactory';
import { ProductDataFactory } from '#tests/factories/ProductDataFactory';

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
