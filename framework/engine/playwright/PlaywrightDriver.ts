import { Page } from '@playwright/test';
import { IDriver } from '#framework/engine/interfaces/IDriver';

export class PlaywrightDriver implements IDriver {
    constructor(private page: Page) {}

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string | null> {
        return await this.page.textContent(selector);
    }

    async getAttribute(selector: string, attribute: string): Promise<string | null> {
        return await this.page.getAttribute(selector, attribute);
    }

    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }

    async clickByRole(role: any, name?: string | RegExp): Promise<void> {
        await this.page.getByRole(role, { name }).click();
    }

    async fillByRole(role: any, name: string | RegExp, text: string): Promise<void> {
        await this.page.getByRole(role, { name }).fill(text);
    }

    async pressSequentiallyByRole(role: any, name: string | RegExp, text: string): Promise<void> {
        await this.page.getByRole(role, { name }).pressSequentially(text);
    }

    async isVisibleByRole(role: any, name?: string | RegExp): Promise<boolean> {
        return await this.page.getByRole(role, { name }).isVisible();
    }
}
