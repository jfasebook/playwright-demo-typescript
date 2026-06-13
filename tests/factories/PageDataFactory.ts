import { PageDataBuilder } from '#tests/builders/PageDataBuilder';
import { PageData } from '#tests/data/Pages';

export class PageDataFactory {
    public get paginas() {
        return {
            home: (): PageData => PageDataBuilder.unaPagina()
                .conNombre('Home')
                .conAccionAbrir(async (app) => await app.pages.home().abrir())
                .build(),
            
            products: (): PageData => PageDataBuilder.unaPagina()
                .conNombre('Productos')
                .conAccionAbrir(async (app) => await app.pages.products().abrir())
                .build(),
            
            consejos: (): PageData => PageDataBuilder.unaPagina()
                .conNombre('Consejos')
                .conAccionAbrir(async (app) => await app.pages.consejos().abrir())
                .build(),

            todasLasPrincipales: (): PageData[] => [
                this.paginas.home(),
                this.paginas.products(),
                this.paginas.consejos()
            ]
        };
    }
}
