//EJ:4
let aux = 0
for (let n = 5; n >= 0; n--) {
    console.log(n)
    //aux += n
    aux = aux + n
    console.log(aux)
}
//EJ:5  tabla del 7
for (let i = 0; i <= 10; i++) {
    console.log('7 * ' + i + ' = ' + 7 * i)
}
//EJ:6 Todas las tablas de multiplicar
for (let num1 = 1; num1 <= 9; num1++) {
    for (let num2 = 1; num2 <= 9; num2++)
        console.log(num1 + ' * ' + num2 + ' = ' + num1 * num2)
}
