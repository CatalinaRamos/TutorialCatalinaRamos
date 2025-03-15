// Función para mostrar solo la sección seleccionada
function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Muestra la sección seleccionada
    document.getElementById(id).classList.add('activa');

    // Remueve la clase 'activo' de todos los enlaces
    document.querySelectorAll('.menu ul li a').forEach(link => {
        link.classList.remove('activo');
    });

    // Agrega la clase 'activo' al enlace seleccionado
    document.querySelector(`.menu ul li a[href="#"][onclick="mostrarSeccion('${id}')"]`).classList.add('activo');
}


// Mostrar la sección de inicio por defecto
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('inicio');
});

// Función para aumentar el tamaño del texto de manera dinámica
document.getElementById("aumentarTexto").addEventListener("click", function() {
    let cuerpo = document.body;
    let tamañoActual = parseFloat(window.getComputedStyle(cuerpo).fontSize);
    cuerpo.style.fontSize = (tamañoActual + 2) + "px";
});
// Función para aumentar el tamaño del texto de manera dinámica
document.getElementById("disminuirTexto").addEventListener("click", function() {
    let cuerpo = document.body;
    let tamañoActual = parseFloat(window.getComputedStyle(cuerpo).fontSize);
    cuerpo.style.fontSize = (tamañoActual - 2) + "px";
});