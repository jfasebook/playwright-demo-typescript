import { Given, When } from '#support/engine/TestRunnerGherkin';

Given('que el usuario navega a la página de {string}', async ({ app, data }, nombrePagina: string) => {
    switch (nombrePagina) {
        case 'Inicio':
            await app.pages.home().abrir();
            break;
        case 'Productos':
            await app.pages.products().abrir();
            break;
        case 'Consejos':
            await app.pages.consejos().abrir();
            break;
        default:
            throw new Error(`Página no reconocida: ${nombrePagina}`);
    }
});

When('navega a la sección de {string} desde el menú', async ({ app }, seccion: string) => {
    switch (seccion) {
        case 'Productos':
            await app.menu.irAProductos();
            break;
        case 'Consejos':
            await app.menu.irAConsejos();
            break;
        case 'Inicio':
            await app.menu.irAInicio();
            break;
        default:
            throw new Error(`Sección del menú no reconocida: ${seccion}`);
    }
});
