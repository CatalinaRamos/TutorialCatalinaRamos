// Función para mostrar solo la sección seleccionada
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    document.getElementById(id).classList.add('activa');
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