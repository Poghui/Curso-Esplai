//Vamos a resolver este ejercicio de varias formas. Utilizaremos el bucle for y el bucle while, cada uno iterando de forma ascendente o descendente.
// La idea es que tendremos una variable r(resultado), en la que iremos acumulando el resultado de nuestras operaciones.Por ejemplo, si queremos calcular el cuadrado de 3:
// En la primera iteración múltiplicaremos la base por r(que inicialmente valdrá 1).Obtendremos 3.
// En la siguiente, multiplicaremos el resultado acumulado anterior por la base(3 x 3).El nuevo resultado acumulado será 9, y vamos por la segunda iteración(hemos elevado al cuadrado).

const base = 3;
const exponente = 7;
let r = 1;

for (let i = 0; i < exponente; i++) {
    r = r * base
}
console.log(r)

