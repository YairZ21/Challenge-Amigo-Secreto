
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();

    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    
    setTimeout(reiniciarJuego, 2000);
} 

document.addEventListener('DOMContentLoaded', () => {
    //document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});

function reiniciarJuego() {
    amigos = [];

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    alert('El sorteo se ha reiniciado. ¿¡Comenzamos de nuevo!?');
}
