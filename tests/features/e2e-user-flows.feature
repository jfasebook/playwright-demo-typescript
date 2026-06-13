# language: es
Característica: Flujos de Usuario E2E

  Escenario: Buscar productos saludables
    Dado que el usuario abre la página de inicio
    Cuando navega a la sección de productos
    Y busca el término "saludable"
    Entonces el contador de resultados debe mostrar "3" items
