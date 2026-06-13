import { BaseComponent } from '#framework/components/BaseComponent';

export class FooterComponent extends BaseComponent {
    async obtenerTexto(): Promise<string | null> {
        return await this.driver.getText('footer');
    }

    async esVisible(): Promise<boolean> {
        return await this.driver.isVisible('footer');
    }
}

