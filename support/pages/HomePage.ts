import { BasePage } from '#framework/pages/BasePage';
import { MenuComponent } from '#support/components/MenuComponent';
import { HeroComponent } from '#support/components/HeroComponent';
import { FooterComponent } from '#support/components/FooterComponent';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class HomePage extends BasePage {
    public readonly menu: MenuComponent;
    public readonly hero: HeroComponent;
    public readonly footer: FooterComponent;

    constructor(driver: IDriver) {
        super(driver);
        this.menu = new MenuComponent(driver);
        this.hero = new HeroComponent(driver);
        this.footer = new FooterComponent(driver);
    }

    async abrir() {
        await this.navigate('index.html');
    }

    async verProductos() {
        await this.hero.irAProductos();
    }
}
