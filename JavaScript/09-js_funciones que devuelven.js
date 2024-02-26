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

function duplica(nombre) {
    return nombre + " and " + nombre;
}

//EJ:12
function testSize(num) {
    if (num < 5) return "Tiny"
    else if (num < 10) return "Small"
    else if (num < 15) return "Medium"
    else if (num < 20) return "Large"
    else if (num >= 20) return "Huge"
}
const o = testSize(10)
console.log(o)

//EJ:13
function nand(a, b) {
    return !(a && b)
}
const e = nand(true, true)
console.log(e)

function nand2(a, b) {
    if (a && b) return false
    else return true
}
const c = nand2(true, true)
console.log(c)

//EJ:14
function nor(a, b) {
    if (a && b) return false
    else if (a) return false
    else if (b) return false
    else return true
}
const n = nor(false, false)
console.log(n)

// if (a===true && b===true) return false
//     else if (a) return false
// else if (b) return false
// else return true

function nor2(a, b) {
    if (!a && !b) return true

}
const ñ = nor2(false, false)
console.log(ñ)

//EJ:15
function xor(a, b) {
    if (!a && !b) return false
    else if (a && b) return false
    else return true
}
const k = xor(false, true)
console.log(k)

