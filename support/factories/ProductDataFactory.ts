import { ProductDataBuilder } from '#support/builders/ProductDataBuilder';
import { ProductData } from '#support/data/Products';

export class ProductDataFactory {
    public get productos() {
        return {
            lasañaCasera: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Lasaña casera')
                .conCategoria('Pasta')
                .conEtiqueta('Familiar')
                .conDescripcion('Lasaña al horno con carne, tomate y bechamel.')
                .conPrecio('7,95 €')
                .build(),
                
            ensaladaMediterranea: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Ensalada mediterránea')
                .conCategoria('Ensaladas')
                .conEtiqueta('Saludable')
                .conDescripcion('Lechuga, tomate, aceitunas, queso fresco y aceite de oliva.')
                .conPrecio('5,95 €')
                .build(),

            polloAlCurry: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Pollo al curry')
                .conCategoria('Carnes')
                .conEtiqueta('Especiado')
                .conDescripcion('Pollo tierno con salsa curry y arroz basmati.')
                .conPrecio('8,50 €')
                .build(),

            cremaDeCalabaza: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Crema de calabaza')
                .conCategoria('Cremas')
                .conEtiqueta('Vegetal')
                .conDescripcion('Crema suave de calabaza con un toque de jengibre.')
                .conPrecio('4,95 €')
                .build(),

            bowlVegetal: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Bowl vegetal')
                .conCategoria('Vegetal')
                .conEtiqueta('Saludable')
                .conDescripcion('Quinoa, garbanzos, aguacate, verduras y salsa ligera.')
                .conPrecio('7,25 €')
                .build(),

            albondigasConTomate: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Albóndigas con tomate')
                .conCategoria('Carnes')
                .conEtiqueta('Tradicional')
                .conDescripcion('Albóndigas caseras con salsa de tomate natural.')
                .conPrecio('7,75 €')
                .build(),

            tortillaDePatata: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Tortilla de patata')
                .conCategoria('Tradicional')
                .conEtiqueta('Clásico')
                .conDescripcion('Tortilla jugosa de patata y cebolla.')
                .conPrecio('5,50 €')
                .build(),

            arrozConVerduras: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Arroz con verduras')
                .conCategoria('Arroces')
                .conEtiqueta('Vegetal')
                .conDescripcion('Arroz salteado con verduras frescas de temporada.')
                .conPrecio('6,75 €')
                .build(),

            pastaCarbonara: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Pasta carbonara')
                .conCategoria('Pasta')
                .conEtiqueta('Cremoso')
                .conDescripcion('Pasta con salsa carbonara, queso y panceta.')
                .conPrecio('7,50 €')
                .build(),

            salmonConPatatas: (): ProductData => ProductDataBuilder.unProducto()
                .conNombre('Salmón con patatas')
                .conCategoria('Pescados')
                .conEtiqueta('Saludable')
                .conDescripcion('Salmón al horno con patatas panadera.')
                .conPrecio('9,95 €')
                .build(),

            todos: (): ProductData[] => [
                this.productos.lasañaCasera(),
                this.productos.ensaladaMediterranea(),
                this.productos.polloAlCurry(),
                this.productos.cremaDeCalabaza(),
                this.productos.bowlVegetal(),
                this.productos.albondigasConTomate(),
                this.productos.tortillaDePatata(),
                this.productos.arrozConVerduras(),
                this.productos.pastaCarbonara(),
                this.productos.salmonConPatatas()
            ],

            buscarPorNombre: (nombre: string): ProductData | undefined => {
                return this.productos.todos().find(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
            },

            filtrarPorCategoria: (categoria: string): ProductData[] => {
                return this.productos.todos().filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
            }
        };
    }
}
