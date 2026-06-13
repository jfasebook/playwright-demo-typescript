import { When, Then } from '#support/engine/TestRunnerGherkin';
import { expect } from '#support/engine/TestRunner';

When('busca el término {string}', async ({ app }, termino: string) => {
  await app.pages.products().buscar(termino);
});

Then('el contador de resultados debe contener {string}', async ({ app }, cantidad: string) => {
  const contador = await app.pages.products().obtenerContador();
  expect(contador).toContain(cantidad);
});

Then('el mensaje de sin resultados debe ser visible', async ({ app }) => {
    const esVisible = await app.pages.products().esVisibleSinResultados();
    expect(esVisible).toBe(true);
});
