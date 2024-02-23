for (let i = 0; i < 100; i += 2) {
    console.log(i);
}
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0)
        console.log(i);
}

// Imprimir los números del 1 al 20.

// Para números divisibles por 3, imprimir “Fizz”.
// Para números divisibles por 5, imprimir “Buzz”.
// Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
// En cualquier otro caso, imprimir el número.

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else
        console.log(i)
}

let aux = 0
for (let n = 5; n <= 0; n--) {

}
