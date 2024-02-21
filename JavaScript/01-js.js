const txt1 = 'Este es el principio';
const txt2 = 'Este es el final';
const txt3 = txt1 + ' ' + txt2;
console.log(txt3)

const euros = 7;
const dolares = euros * 2
console.log(dolares);

const precio = 100;
const precioConIva = precio * 1.21 //p + 0.21 * p = p (1+0.21) = p(1.21)
console.log(precioConIva);

const ancho = 4
const alto = 24
const rectángulo = ancho * alto
console.log(rectángulo)

const centigrados = 25;
const fahrenheit = centigrados * 9 / 5 + 32
console.log(fahrenheit);

const nombre = 'Marc';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
console.log(nombre + ' ha pedido  una caja de' + material + 'con unas dimensiones ' + dimensiones + '. ' + comentario);