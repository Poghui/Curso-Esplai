EJ: 3
function whereIs(name) {
    return "Dónde esta " + name + "?";
}
const x = whereIs("Jacky");
console.log(x);

//EJ:4
function echo(nombre) {
    return nombre
}
const i = echo('co2')
console.log(i)

//EJ:5
function saludar(name) {
    return name
}
const u = saludar('Ada')
console.log('hola ' + u)

//EJ:6 
function test(val) {
    if (val === 10 && val === 20) {
        return "Inside";
    } else {
        return "Outside";
    }
}
const va = test(5)
console.log(va)

//EJ:7
function testEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not Equal";
}
const pr = testEqual(8)
console.log(pr)

//EJ:8
function testElse(val) {
    let result = '';
    if (val > 5) {
        result = "Mayor que 5";
    }
    else {
        result = "Menor o igual a 5";
    }
    return result;
}
const l = testElse(8)
console.log(l)

//EJ:9
function testElse(val) {
    let result = '';
    if (val > 5) {
        result = "Bigger than 5";
    }

    else if (val < 5) {
        result = "Smaller than 5";
    }

    else {
        result = "Equal to 5";
    }
    return result;
}
const y = testElse(2)
console.log(y)
