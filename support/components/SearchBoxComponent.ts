import { BaseComponent } from '#framework/components/BaseComponent';

export class SearchBoxComponent extends BaseComponent {
    async escribir(texto: string) {
        // En lugar de fill, usamos el locator nativo si es necesario para asegurar estabilidad
        // Pero aquí seguiremos usando IDriver para ser consistentes. 
        // Aumentamos el tiempo y usamos una técnica mixta.
        await this.driver.clickByRole('searchbox', /buscar productos/i);
        await this.driver.fillByRole('searchbox', /buscar productos/i, '');
        await this.driver.pressSequentiallyByRole('searchbox', /buscar productos/i, texto);
        
        // Espera explícita para que el contador cambie de "Mostrando 10 productos" o "0" a algo filtrado
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    async limpiar() {
        await this.driver.clickByRole('button', /limpiar/i);
    }

    async esVisible(): Promise<boolean> {
        return await this.driver.isVisibleByRole('searchbox', /buscar productos/i);
    }
}

