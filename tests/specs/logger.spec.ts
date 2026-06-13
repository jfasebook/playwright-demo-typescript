import { test, expect } from '#tests/engine/TestRunner';

test.describe('Verificación del Logger Inyectado', () => {
    
    test('Debe permitir loguear desde el test y desde la app', async ({ app, logger }) => {
        // Log directo desde el fixture
        await logger.info('Iniciando test de logging...');
        
        await app.pages.home().abrir();
        
        // Log a través de la app
        await app.logger.debug('Home abierta con éxito');
        
        expect(app.logger).toBeDefined();
    });
});
