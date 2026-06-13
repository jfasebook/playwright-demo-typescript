import { Then } from '#support/engine/TestRunnerGherkin';
import { expect } from '#support/engine/TestRunner';

Then('todos los productos deben tener los campos obligatorios informados correctamente', async ({ data }) => {
    const productos = data.productos.todos();

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
