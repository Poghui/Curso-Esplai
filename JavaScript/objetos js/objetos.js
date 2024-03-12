//1. Escribe un objeto llamado miPerro que tenga las siguientes propiedades: piernas, colas, amigos. Dale valor a estas propiedades y haz tres console.log(), uno por cada una de las tres propiedades.
const miPerro = {
    piernas: 3,
    colas: 2,
    amigos: 100
};
console.log(miPerro.piernas);
console.log(miPerro.colas);
console.log(miPerro.amigos);

//2. La constante ojos debe valer la propiedad ojos del objeto testObj. Además, la constante nombre debe valer la propiedad nombre del objeto testObj.
const testObj = {
    "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
};

// Sólo hay que hacer modificaciones por debajo de esta línea 
const ojos = testObj.ojos;
const nombre = testObj.nombre;

console.log(ojos); // Debería mostrar: 2
console.log(nombre); // Debería mostrar: "Pablo"

//3. Utilizar la constante playerNumber para acceder a la propiedad correspondiente del objeto testObj.
const testObj1 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj1[playerNumber];   // Cambia esta línea

console.log(player); // Debería mostrar: "Unitas"

//4. Accede a la propiedad nombre para cambiar su valor de Coder a HappyCoder.
const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};

myDog.nombre = 'HappyCoder'
console.log(myDog.nombre); // Debería mostrar: "HappyCoder"

//5. Convierte el bloque switch-case en un objeto llamado lookup.
function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }

    // Sólo cambia el código por encima de esta línea
    return lookup[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago

//6. Añade un nuevo album al array myMusic. Deberá tener las mismas propiedades, pero con valores diferentes que el primer objeto del array.
// Después, añadir un console.log para mostrar el valor del nombre del artista y otro console.log para mostrar el valor del primer elemento del array de formatos del album recien añadido.
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "SmokePurp",
        "titulo": "ZaxaWizard",
        "formatos": [
            "CD",
            "VHS"
        ],
        "premios": true
    }
];
console.log(myMusic[0].artista)
console.log(myMusic[1].formatos[1])

//7. Asigna a la constante gloveBoxContents el valor de la propiedad glob box.
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents); // Debería valer: "maps"

//8. Asigna a la constante secondTree el valor de la propiedad list del segundo objeto del array myPlants.
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list;
console.log(secondTree); // Debería mostrar: ["fir", "pine", "birch"]
