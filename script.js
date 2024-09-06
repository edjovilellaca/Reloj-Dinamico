function actualizarHora() {
    const horaActual = new Date();
    const hora = horaActual.toLocaleTimeString();
    document.getElementById('hora').innerHTML = hora;
}
setInterval(actualizarHora, 1000);
actualizarHora();