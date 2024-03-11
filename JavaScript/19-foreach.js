//2:Recorrer la siguiente lista con un bucle foreach imprimiendo el doble de cada número:
const my_list = [1, 9, 3, 8, 5, 7];

my_list.forEach(item => {
    console.log(item * 2);
});

//1:Crear un array con cinco nombres de persona y recórrelo mostrando el texto «Conozco a alguien llamado «.
const names = ['Juan', 'Alberto', 'Ernesto', 'Miriam', 'Laura']
names.forEach(name => console.log('Yo conozco a alguien que se llama ' + name))

//3:Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
const numbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
numbers.forEach(number => {
    if (number > 0) positiveCount++;
    else if (number < 0) negativeCount++;
    else if (number === 0) zeroCount++;
});
console.log('hay ' + positiveCount + ' números positivos')
console.log('hay ' + negativeCount + ' números negativos')
console.log('hay ' + zeroCount + ' número(s) que equivalen a zero')

//4:Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.
const numbers1 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let positivesSum = 0;
let negativesSum = 0;
let positivesCount = 0;
let negativesCount = 0;

numbers1.forEach(numb => {
    if (numb >= 0) {
        positivesSum += numb;
        positiveCount++;
    }
    else {
        negativesSum += numb;
        negativeCount++;
    }
})
console.log(positiveCount)
console.log(negativeCount)

