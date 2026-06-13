import { test, expect } from '#support/engine/TestRunner';

test.describe('Integridad de Datos - Productos', () => {

    test('Todos los productos en la factoría deben tener los campos obligatorios correctamente informados', async ({ data }) => {
        const productos = data.productos.todos();

        // Verificamos que al menos hay productos para validar
        expect(productos.length).toBeGreaterThan(0);

        productos.forEach(producto => {
            expect(producto.nombre, `El producto debe tener un nombre definido`).not.toBe('');
            expect(producto.nombre, `El nombre de "${producto.nombre}" no debe ser solo espacios`).not.toMatch(/^\s+$/);
            
            expect(producto.precio, `El producto "${producto.nombre}" debe tener precio`).not.toBe('');
            expect(producto.precio, `El precio de "${producto.nombre}" debe contener el símbolo €`).toContain('€');
            
            expect(producto.categoria, `El producto "${producto.nombre}" debe tener categoría`).not.toBe('');
            
            expect(producto.descripcion, `La descripción de "${producto.nombre}" no debe estar vacía`).not.toBe('');
            expect(producto.descripcion.length, `La descripción de "${producto.nombre}" debe tener una longitud mínima razonable`).toBeGreaterThan(10);
        });
    });
});
