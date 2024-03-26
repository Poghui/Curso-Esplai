const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}
const words = ['hola', 'mama', 'papa', 'tarde'];
const palabraSecreta = words[Math.floor(Math.random() * words.length)];
let palabraConGuiones = palabraSecreta.replace(/./g, "_ ");
document.querySelector('.hiddenWord').innerHTML = palabraConGuiones;
let errorCounter = 0;
const evaluateWord = () => {
    const letraIntroducida = document.querySelector('input').value;
    document.querySelector('input').value = '';
    let error = true;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letraIntroducida) {
            palabraConGuiones = replaceAt(palabraConGuiones, letraIntroducida, i * 2);
            error = false;
        }
    }
    document.querySelector('.hiddenWord').innerHTML = palabraConGuiones;
    if (error) {
        errorCounter++;
        document.querySelector('.ahorcado').style.backgroundPosition = -errorCounter * 200 + 'px';
        if (errorCounter === 4) {
            document.querySelector('.info').innerHTML = 'Has perdido pringado'
        }
    }
    if (palabraConGuiones.indexOf("_") == -1) {
        document.querySelector('.info').innerHTML = "¡Has ganado!, esta era la palabra ' " + palabraConGuiones.replace(/\s/g, '') + " '"

    }
}
document.querySelector('button').addEventListener('click', evaluateWord);