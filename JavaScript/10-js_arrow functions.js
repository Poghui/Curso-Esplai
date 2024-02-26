//EJ:1
const alCubo = (x) => {
    const res = x ** 3
    console.log(res)
}
alCubo(3)

//EJ:2
const kmAmt = (c) => {
    const resultado = c * 1000
    console.log(resultado + 'mts/h')
}
kmAmt(4)

//EJ:3
const calculateArea = (width, height) => {
    const area = width * height
    console.log(area)
}
calculateArea(5, 7)

//EJ:4
const calculateTriangle = (base, altura) => {
    const areaT = base * altura / 2
    console.log(areaT)
}
calculateTriangle(8, 12)

//EJ:5
const calculatePerimeter = (radius) => {
    const perimetroCircun = 2 * Math.PI * radius
    console.log(perimetroCircun)
}
calculatePerimeter(4)
const calculateArea2 = (radius) => {
    const areacircun = Math.PI * radius * radius
    console.log(areacircun)
}
calculateArea2(6)



