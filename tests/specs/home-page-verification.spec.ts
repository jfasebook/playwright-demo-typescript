import { test, expect } from '#support/engine/TestRunner';

test.describe('Página Principal - Verificaciones de Contenido', () => {
    
    test('Debe mostrar el nombre de la empresa, el texto principal y el enlace hacia productos', async ({ app }) => {
        const homePage = app.pages.home();
        
        // Navegar a la página principal
        await homePage.abrir();
        
        // 1. Comprobar nombre de la empresa
        const nombreEmpresa = await homePage.menu.obtenerNombreEmpresa();
        expect(nombreEmpresa).toBe('Delicias Express');
        
        // 2. Comprobar texto principal (H1)
        const tituloPrincipal = await homePage.hero.obtenerTitulo();
        expect(tituloPrincipal).toBe('Comer bien no debería ser complicado.');
        
        // 3. Comprobar enlace hacia productos
        const esVisibleEnlace = await homePage.hero.esVisibleEnlaceProductos();
        expect(esVisibleEnlace).toBe(true);
    });

});
