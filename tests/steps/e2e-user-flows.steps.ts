import { Given, When, Then } from '../engine/TestRunnerGherkin';
import { expect } from '@playwright/test';

Given('que el usuario abre la página de inicio', async ({ app }) => {
  await app.pages.home().abrir();
});

When('navega a la sección de productos', async ({ app }) => {
  await app.pages.home().menu.irAProductos();
});

When('busca el término {string}', async ({ app }, termino: string) => {
  await app.pages.products().buscar(termino);
});

Then('el contador de resultados debe mostrar {string} items', async ({ app }, cantidad: string) => {
  const contador = await app.pages.products().obtenerContador();
  expect(contador).toContain(cantidad);
});
