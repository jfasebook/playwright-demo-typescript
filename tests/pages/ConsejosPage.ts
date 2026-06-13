import { BasePage } from '#framework/pages/BasePage';
import { MenuComponent } from '#tests/components/MenuComponent';
import { FooterComponent } from '#tests/components/FooterComponent';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class ConsejosPage extends BasePage {
    public readonly menu: MenuComponent;
    public readonly footer: FooterComponent;

    constructor(driver: IDriver) {
        super(driver);
        this.menu = new MenuComponent(driver);
        this.footer = new FooterComponent(driver);
    }

    async abrir() {
        await this.navigate('consejos.html');
    }

    async obtenerCabecera(): Promise<string | null> {
        return await this.driver.getText('.cabecera-pagina h1');
    }

    async esVisibleFaq(pregunta: string): Promise<boolean> {
        // Usando selector de texto para encontrar el summary de la FAQ
        return await this.driver.isVisible(`text=${pregunta}`);
    }
}

