# language: es
Característica: Búsqueda de Productos

  Escenario: Buscar productos por término existente
    Dado que el usuario navega a la página de "Inicio"
    Cuando navega a la sección de "Productos" desde el menú
    Y busca el término "saludable"
    Entonces el contador de resultados debe contener "3"

  Escenario: Navegación compleja y búsqueda de productos
    Dado que el usuario navega a la página de "Inicio"
    Cuando navega a la sección de "Consejos" desde el menú
    Entonces la cabecera de la página debe contener "Consejos"
    Cuando navega a la sección de "Productos" desde el menú
    Y busca el término "pasta"
    Entonces el contador de resultados debe contener "2"

  Escenario: Buscar producto inexistente
    Dado que el usuario navega a la página de "Productos"
    Cuando busca el término "hamburguesa lunar"
    Entonces el mensaje de sin resultados debe ser visible
    Y el contador de resultados debe contener "0"
