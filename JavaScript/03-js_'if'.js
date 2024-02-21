const dato1 = 10;
const dato2 = 10;
if (dato1 === dato2) {
    console.log('exito');
}

if (10 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}
if (20 == 10) {
    console.log('You got a true!')
} else {
    console.log('You got a false!')
}

const nota = 7
if (nota < 5) { console.log('Suspenso') }
if (nota === 5) { console.log('Aprobado por los pelos!') }
if (nota > 5) { console.log('Aprobado') }

const i = 20
if (i < 100) {
    console.log(i + ' es menor que 100')
} else if (i > 100) {
    console.log(i + ' es mayor que 100')
}
if (i < 0) {
    console.log(i + ' es negativo')
} if (i > 0) {
    console.log(i + ' es positivo')
}
if (i % 2 === 0) {
    console.log(i + ' es número par')
} if (i % 2 != 0) {
    console.log(i + ' es número impar')
}
if (i % 5 === 0) {
    console.log(i + ' es multiplo de 5')
} if (i % 5 != 0) {
    console.log(i + ' no es multiplo de 5')
}
if (i % 10 === 0) {
    console.log(i + ' es multiplo de 10')
} if (i % 5 != 0) {
    console.log(i + ' no es multiplo de 10')
}
// CALCULADORA
const n1 = 7;
const n2 = 26;
const op = '-';

if (op === '+') {
    console.log(n1 + n2)
} else if (op === '-') {
    console.log(n1 - n2)
} else if (op === '*') {
    console.log(n1 * n2)
} else if (op === '/') {
    console.log(n1 / n2)
}
