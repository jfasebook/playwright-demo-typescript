import { ProductData } from '#tests/data/Products';

export class ProductDataBuilder {
    private nombre: string = 'Producto genérico';
    private categoria: string = 'Varios';
    private etiqueta: string = 'Normal';
    private descripcion: string = 'Descripción del producto';
    private precio: string = '0,00 €';

    public static unProducto(): ProductDataBuilder {
        return new ProductDataBuilder();
    }

    public conNombre(nombre: string): this {
        this.nombre = nombre;
        return this;
    }

    public conCategoria(categoria: string): this {
        this.categoria = categoria;
        return this;
    }

    public conEtiqueta(etiqueta: string): this {
        this.etiqueta = etiqueta;
        return this;
    }

    public conDescripcion(descripcion: string): this {
        this.descripcion = descripcion;
        return this;
    }

    public conPrecio(precio: string): this {
        this.precio = precio;
        return this;
    }

    public build(): ProductData {
        return {
            nombre: this.nombre,
            categoria: this.categoria,
            etiqueta: this.etiqueta,
            descripcion: this.descripcion,
            precio: this.precio
        };
    }
}
