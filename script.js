document.addEventListener('DOMContentLoaded', () => {
    const backgroundSound = document.getElementById('backgroundSound');
    const enterButton = document.getElementById('enterButton');

    // Reproducir sonido al cargar la página
    backgroundSound.play();

    // Evento para el botón de entrada
    enterButton.addEventListener('click', () => {
        // Aquí puedes redirigir a otra página o realizar otra acción
        window.location.href = 'main.html'; // Cambia 'main.html' por la página a la que deseas redirigir
    });
});
