import { test, expect } from '#support/engine/TestRunner';

test.describe('Flujos Completos E2E - Deberes', () => {

    test('Escenario 1: Inicio -> Productos -> Buscar saludable', async ({ app }) => {
        // 1. Inicio
        await app.pages.home().abrir();
        
        // 2. -> Productos (usando el menú)
        await app.pages.home().menu.irAProductos();
        
        // 3. -> Buscar "saludable"
        await app.pages.products().buscar('saludable');
        
        // Verificación: El contador debe mostrar resultados
        const contador = await app.pages.products().obtenerContador();
        expect(contador).toContain('3'); // Basado en los datos de prueba conocidos
    });

    test('Escenario 2: Inicio -> Consejos -> Productos -> Buscar pasta', async ({ app }) => {
        // 1. Inicio
        await app.pages.home().abrir();
        
        // 2. -> Consejos (desde menú)
        await app.pages.home().menu.irAConsejos();
        expect(await app.pages.consejos().obtenerCabecera()).toContain('Consejos');

        // 3. -> Productos (desde el menú de la página de consejos)
        await app.pages.consejos().menu.irAProductos();
        
        // 4. -> Buscar "pasta"
        await app.pages.products().buscar('pasta');
        
        // Verificación
        const contador = await app.pages.products().obtenerContador();
        expect(contador).toContain('2');
    });

    test('Escenario 3: Productos -> Buscar hamburguesa lunar -> Sin resultados', async ({ app }) => {
        // 1. Ir directamente a Productos
        await app.pages.products().abrir();
        
        // 2. -> Buscar algo inexistente
        await app.pages.products().buscar('hamburguesa lunar');
        
        // 3. -> Sin resultados
        const esVisibleSinResultados = await app.pages.products().esVisibleSinResultados();
        expect(esVisibleSinResultados).toBe(true);
        
        const contador = await app.pages.products().obtenerContador();
        expect(contador).toContain('0');
    });

});
