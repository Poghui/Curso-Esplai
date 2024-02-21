const b = 3;

console.log(b < 0 ? b + ' es negativo' : b + ' es positivo');

console.log(b % 2 === 0 ? b + 'es par' : b + ' es impar');

const color = 'amarillo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('Has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}

const golosina = 'nubes';

switch (golosina) {
    case 'chicle':
        console.log('Has escogido un chicle');
        break;
    case 'gominola':
        console.log('Has escogido una gominola');
        break;
    case 'regaliz':
        console.log('Has escogido un regaliz');
        break;
    default:
        console.log('No has escogido ninguna golosina')
}