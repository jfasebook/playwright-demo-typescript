# language: es
Característica: Consistencia del Menú de Navegación

  Esquema del escenario: Los enlaces principales deben ser visibles en todas las páginas
    Dado que el usuario navega a la página de "<pagina>"
    Entonces los enlaces principales del menú deben ser visibles

    Ejemplos:
      | pagina    |
      | Inicio    |
      | Productos |
      | Consejos  |
