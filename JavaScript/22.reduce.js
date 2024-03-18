// Dado el siguiente array de datos: [1, 2, 3].Calcular el valor medio utilizando la instrucción reduce.
const numbers = [2, 3, 9]
const media = numbers.reduce((acc, number) => acc + number) / numbers.length;
console.log(media);