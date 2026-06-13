import { PageData } from '#support/data/Pages';
import { TestApp } from '#support/app/TestApp';

export class PageDataBuilder {
    private nombre: string = '';
    private abrirAction: (app: TestApp) => Promise<void> = async () => {};

    public static unaPagina(): PageDataBuilder {
        return new PageDataBuilder();
    }

    public conNombre(nombre: string): this {
        this.nombre = nombre;
        return this;
    }

    public conAccionAbrir(accion: (app: TestApp) => Promise<void>): this {
        this.abrirAction = accion;
        return this;
    }

    public build(): PageData {
        return {
            nombre: this.nombre,
            abrir: this.abrirAction
        };
    }
}
