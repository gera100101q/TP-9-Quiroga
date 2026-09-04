# Sistema de Gestión de Resultados del Mundial

Proyecto de la materia Laboratorio de Programación - 6° G (IPET N° 249). Sitio de 3 páginas sobre el Mundial de Fútbol, que mantiene la estética visual del TP08 e incorpora las primeras interacciones con JavaScript.

## Trabajo Práctico N° 9 - Introducción a la Programación Dinámica con JavaScript

El sitio está compuesto por tres páginas conectadas mediante la misma barra de navegación:

- index.html: inicio, con la información del próximo partido y un mensaje de bienvenida por alert().
- partidos.html: tabla de resultados jugados y un botón que evalúa el resultado del último partido cargado.
- posiciones.html: tabla de posiciones del grupo y una sección lateral con criterios de clasificación.

## Estructura del proyecto

```
├── index.html            Inicio
├── partidos.html          Partidos
├── posiciones.html        Posiciones
├── css/
│   └── estilos.css        Hoja de estilos compartida (misma línea visual del TP08)
├── js/
│   └── script.js          Lógica de JavaScript: variables, alert() y validación if/else
└── assets/
    └── ...                 Imágenes y recursos
```

## Requisitos técnicos cumplidos (TP9)

- Script externo (js/script.js) vinculado en las tres páginas mediante script src
- Script interno en index.html que llama a la función externa al cargar la página
- Variables declaradas con const, let y var, con información estática de los equipos (nombres, grupo, sede)
- Mensaje de bienvenida mediante alert() que concatena variables con los datos del próximo partido
- Validación con if / else que compara el resultado de un partido y muestra un mensaje distinto según el equipo ganador, perdedor o empate
- Coherencia visual con el TP08: misma hoja de estilos, mismo nav y footer reutilizados en las tres páginas
- Código indentado y estructura de carpetas limpia (css, js, assets)

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts (Cormorant Garamond y Work Sans)

## Cómo verlo

Opción 1 - Online: activar GitHub Pages en el repositorio (Settings > Pages > Branch: main) y acceder a:
```
https://gera100101q.github.io/TU-REPOSITORIO/index.html
```

Opción 2 - Local: descargar el proyecto completo y abrir index.html con el navegador, manteniendo las carpetas css y js en el mismo nivel que los archivos HTML. El navegador va a pedir permiso para mostrar el alert() de bienvenida.

## Datos de la entrega

- Trabajo Práctico: N° 9 - Introducción a la Programación Dinámica con JavaScript
- Materia: Laboratorio de Programación
- Curso: 6° G - IPET N° 249
- Modalidad: Individual
- Fecha de entrega: 24/06/2026

## Autor

Gerardo Quiroga
