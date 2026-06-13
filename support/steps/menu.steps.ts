import { Then } from '#support/engine/TestRunnerGherkin';
import { expect } from '#support/engine/TestRunner';

Then('los enlaces principales del menú deben ser visibles', async ({ app }) => {
    const menuVisible = await app.menu.estanVisiblesEnlacesPrincipales();
    expect(menuVisible).toBe(true);
});
