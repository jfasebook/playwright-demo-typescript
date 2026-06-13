import { test, expect } from '#support/engine/TestRunner';

test.describe('Consistencia del Menú', () => {

    test('Debe mostrar los enlaces principales en todas las páginas', async ({ app, data }) => {
        const paginas = data.paginas.todasLasPrincipales();

        for (const pagina of paginas) {
            await test.step(`Verificando página: ${pagina.nombre}`, async () => {
                // Navegar a la página correspondiente usando los datos abstraídos
                await pagina.abrir(app);
                
                // Verificar que el menú tiene los enlaces correctos
                const menuVisible = await app.menu.estanVisiblesEnlacesPrincipales();
                expect(menuVisible).toBe(true);
            });
        }
    });

});
