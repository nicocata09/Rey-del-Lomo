function actualizarReloj() {
    const ahora = new Date();

    // Hora
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    document.getElementById("reloj").textContent =
        `${horas}:${minutos}:${segundos}`;

    // Fecha
    const opcionesFecha = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fechaTexto = ahora.toLocaleDateString('es-ES', opcionesFecha);

    document.getElementById("fecha").textContent = fechaTexto;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Ejecutar ya al inicio
actualizarReloj();
