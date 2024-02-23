//Parámetro booleano
1.
function evaluateBoolean(boolean) {
    console.log(boolean ? 'Sí, es cierto' : 'No, eso es falso')

}
evaluateBoolean(false)

2.
function hoyQuieroComer(comida) {
    console.log('Hoy quiero comer ' + comida)
}
hoyQuieroComer('garbanzos')

3.
function calcularCubo(num) {
    console.log(num * num * num) //num**3, operador aritmético
}
calcularCubo(6)

4.
function calcularVelocidad(num) {
    console.log(num * 1000 + 'mt/h')
}
calcularVelocidad(3)

5.
function calcularArea(alto, ancho) {
    console.log(alto * ancho)
}
calcularArea(6, 7)

6.
function calcularArea(base, altura) {
    console.log(base * altura / 2)
}

7.
function calculaPerimetro(radio) {
    console.log(2 * Math.PI * radio + ' perimetro')
}
function calculaArea(radio2) {
    console.log(Math.PI * radio2 + ' area')
}
calculaPerimetro(4)
calculaArea(3)