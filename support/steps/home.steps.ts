import { Then } from '#support/engine/TestRunnerGherkin';
import { expect } from '#support/engine/TestRunner';

Then('el nombre de la empresa debe ser {string}', async ({ app }, nombre: string) => {
    const nombreEmpresa = await app.pages.home().menu.obtenerNombreEmpresa();
    expect(nombreEmpresa).toBe(nombre);
});

Then('el título principal del hero debe ser {string}', async ({ app }, titulo: string) => {
    const tituloPrincipal = await app.pages.home().hero.obtenerTitulo();
    expect(tituloPrincipal).toBe(titulo);
});

Then('el enlace a productos debe ser visible en el hero', async ({ app }) => {
    const esVisible = await app.pages.home().hero.esVisibleEnlaceProductos();
    expect(esVisible).toBe(true);
});

Then('la cabecera de la página debe contener {string}', async ({ app }, texto: string) => {
    // Nota: Esto asume que estamos en Consejos o similar según el flujo
    const cabecera = await app.pages.consejos().obtenerCabecera();
    expect(cabecera).toContain(texto);
});
