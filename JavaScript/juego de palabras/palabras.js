function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
const btnPulsado = () => {
    document.querySelector('.p2').innerHTML += '<span>' + obj.innerHTML + '</span>'
}

const frases = ['bueno, aquí estoy, ¿cuáles eran tus otros 2 deseos?', 'no soy un perro, pero guau contigo', 'por tentaciones como tú hay tantos pecadores como yo']
const fraseSecreta = frases[Math.floor(Math.random() * frases.length)];
const palabras = fraseSecreta.split(' ');
const palabrasDesordenadas = shuffle(palabras);

const palabrasHTML = palabrasDesordenadas.map(palabra => `<span class="button">${palabra} </span>`).join(' ');
document.querySelector('.p1').innerHTML = palabrasHTML;
document.querySelectorAll('.button').forEach(obj => obj.addEventListener('click', btnPulsado));