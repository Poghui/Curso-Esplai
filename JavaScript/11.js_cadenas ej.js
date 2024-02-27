//EJ:1 Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.
const longtiud = (txt) => {
    return (txt.length)
};

const wordLength = longtiud('amor');
console.log(wordLength);

//EJ:2 Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.
const devuelvePrimeraLetra = (txt) => txt[0];

const letra = devuelvePrimeraLetra('amor');
console.log(letra);

//EJ:3 Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.
const devuelveUltimaLetra = (txt) => txt.slice(-1);
const lastLet = devuelveUltimaLetra('amor')
console.log(lastLet)

//EJ:4 Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.
const devuelveEnesimaLetra = (txt, n) => txt[n]
const numLet = devuelveEnesimaLetra('amor', 2)
console.log(numLet)

//EJ:5 Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
const devulveLetras = "wonderful day".substring(3, 7)
console.log(devulveLetras)

//EJ:6 Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.
const devuelveMasLarga = (a, b) => a.lenght >= b.lenght ? a : b;
const cadenaMasLarga = devuelveMasLarga('hola', 'noche')
console.log(cadenaMasLarga)

//EJ:7 Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales.
const devuelveMasLarga2 = (c1, c2, c3) => {
    if (c1.lenght > c2.lenght && c1.lenght > c3.lenght) return c1
    else if (c2.lenght > c1.lenght && c2.lenght > c3.lenght) return c3
    else if (c3.lenght > c1.lenght && c3.lenght > c2.lenght) return c3
    else return 'Hay almenos dos cadenas de texto iguales'
}
const cadenaMasLarga2 = devuelveMasLarga2('hola', 'tardes', 'noches')
console.log(cadenaMasLarga2)

//EJ:8 Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra.
const generarNombre = (c1, c2, c3) => {
    if (c1.lenght < 5 || c2.lenght < 5 || c3.lenght < 5) return 'error'
    else return c1.substring(0, 3) + c2.substring(0, 3) + c3.substring(0, 3)
}
const namexd = generarNombre('alex', 'anas', 'Ferr')
console.log(namexd)

//EJ:9 Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra.
const generarNombre2 = (c1, c2, c3) => {
    if (c1.lenght < 5 || c2.lenght < 5 || c3.lenght < 5) return 'error'
    else return (c1.slice(-1) + c2.slice(-1) + c3.slice(-1))
}
const namedev = generarNombre2('hola', 'adios', 'tarde')
console.log(namedev)

//EJ:10 Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.
const generarNombre3 = (c1, c2, c3) => {
    if (c1.lenght < 5 || c2.lenght < 5 || c3.lenght < 5) return 'error'
    else return (c1.slice(-3) + c2.slice(-3) + c3.slice(-3))
}
const name3 = generarNombre3('hola', 'adios', 'tarde')
console.log(name3)

//EJ:11 Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf.
const tieneLetra = (txt, letra) => txt.indexOf(letra) >= 0;

const laLetraEsta = tieneLetra('amor', 'z');
console.log(laLetraEsta);

//EJ:12 Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas
const tieneLetra2 = (txt, letra) => txt.toUpperCase().indexOf(letra.toUpperCase()) >= 0;
const laLetraEsta2 = tieneLetra2('Viba', 'v');
console.log(laLetraEsta2);

//EJ:13 Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.
const crearPalabra = (letra, num) => {
    let palabra = ''
    for (let i = 0; i < num; i++) {
        palabra += letra;
    }
    console.log(palabra);
}
crearPalabra('r', 7)

//EJ:14 Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
const crearPalabra2 = (letra, num) => {
    let palabra = ''
    for (let i = 0; i < num; i++) {
        palabra += letra;
    }
    console.log(palabra.toUpperCase(num));
}
crearPalabra2('r', 7)

//EJ:15 Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
const addGuiones = (txt) => {
    let palabraGenerada = '';
    for (let i = 0; i < txt.length; i++) {
        const letra = txt[i];
        palabraGenerada += letra + '-';
    }
    return palabraGenerada;
}

const nuevaPalabra = addGuiones('Marc');
console.log(nuevaPalabra)

//EJ:16 Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
const contadorDeLetras = (txt, letra) => {
    let palabraGenerada = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === letra) palabraGenerada++;
    }
    return palabraGenerada;
}
const numeroDeVeces = contadorDeLetras('holoa', 'o')
console.log(numeroDeVeces)

//EJ:17 Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.
const contadorDeLetras2 = (txt, letra) => {
    let palabraGenerada = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i].toUpperCase() === letra.toUpperCase()) palabraGenerada++;
    }
    return palabraGenerada;
}
const numeroDeVeces2 = contadorDeLetras2('hOloa', 'o')
console.log(numeroDeVeces2)

//EJ:18 Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

const contadorDeLetras3 = (txt1, txt2, letra) => {
    let contadorLetras1 = 0;
    let contadorLetras2 = 0;

    for (let i = 0; i < txt1.length; i++) {
        if (txt1[i].toUpperCase() === letra.toUpperCase()) contadorLetras1++
    }

    for (let i = 0; i < txt1.length; i++) {
        if (txt2[i].toUpperCase() === letra.toUpperCase()) contadorLetras2++
    }

    if (contadorLetras1 > contadorLetras2) return txt1;
    else if (contadorLetras2 > contadorLetras1) return txt2;
    else return 'son iguales';
}
const palabraMasLarga = contadorDeLetras3('ana', 'amor', 'A');
console.log(palabraMasLarga);

//EJ:19 Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

const toCase = txt => {
    return txt.toLowerCase() + '-' + txt.toUpperCase();
}
const ambosTextos = toCase('Marc')
console.log(ambosTextos)

//EJ:20 Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.
const shortCut = (txt1, txt2) => {
    return txt1[0] + txt2[0]
}
const iniciales = shortCut('Hola', 'Adiós')
console.log(iniciales)

//EJ:21 Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando una cadena de texto es pasada. Para ello, podemos eliminar los espacios en blanco que pudiera haber al principio y al final de la cadena de texto utilizando la el método trim().Si no estás muy seguro de como funciona este método, consúltalo en internet, que no es tan difícil!.
const firstChar = txt => {
    return txt.trim()[0]
}
const letter = firstChar(' buenos días ')
console.log(letter)

//EJ:22 Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta mayúsculas y minúsculas.
const indexOfIgnoreCase = (txt1, txt2) => {
    return txt1.toUpperCase().indexOf(txt2.toUpperCase());
}
console.log(indexOfIgnoreCase('Amor', 'hol'))

//EJ:23 Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.
const firstWord = txt => {
    const whitespace = txt.indexOf(' ');
    const result = txt.substring(0, whitespace);
    return result
}
const v = firstWord("see and stop");
console.log(v);