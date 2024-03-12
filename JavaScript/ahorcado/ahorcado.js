//6:Juego de ahorcado
const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

let hemosGanado = false;

const words = ['hola', 'mama', 'papa', 'tarde'];
const palabraSecreta = words[Math.floor(Math.random() * words.length)];
let palabraConGuiones = palabraSecreta.replace(/./g, "_ ");



while (!hemosGanado) {
    alert(palabraConGuiones)

    const letraIntroducida = prompt('Introduce una letra');

    let letraEncontrada = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letraIntroducida) {
            palabraConGuiones = replaceAt(palabraConGuiones, letraIntroducida, i * 2);
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        alert('Has fallado');
    }
    if (palabraConGuiones.indexOf("_") == -1) {
        alert("¡Has ganado!, esta era la palabra ' " + palabraConGuiones.replace(/\s/g, '') + " '")
        hemosGanado = true;
    }
}