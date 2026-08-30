/// ======================================================
// CHILITO ELECTRONICS
// SISTEMA DE INVENTARIO
// ======================================================


// ======================================================
// CAJA 1 - RESISTENCIAS
// ======================================================

const caja1 = [
    "10R", "22R", "47R", "100R", "200R", "220R",
    "270R", "330R", "500R", "510R", "680R",
    "1K", "2K", "2.2K", "3.3K", "4.7K", "5.1K",
    "6.8K", "10K", "20K", "47K", "51K", "68K",
    "100K", "150K", "220K", "300K", "470K",
    "680K", "1M"
];


// ======================================================
// CAJA 2 - RESISTENCIAS
// ======================================================

const caja2 = [
    "30R", "430R", "24K", "8.2K", "180K", "1.8K",
    "1.8R", "910K", "300R", "75R", "150R", "620K",
    "10R", "5.6K", "130K", "270K", "20R", "750R",
    "560R", "62R", "56R", "6.8R", "47R", "1.6R",
    "2.4R", "3.6R", "43K", "470R", "510R", "240R",
    "22K", "180R", "820R", "16R", "27K", "39K",
    "240K", "1.5K", "7.5K", "33R", "560K", "120K",
    "110R", "18R", "910R", "4.7K", "43R", "68R",
    "390K", "82K", "7.5R", "6.2K", "1.1K", "13K",
    "110K", "1.6K", "2.7R", "8.20K", "12K", "18K",
    "200K", "160K", "4.3R", "1.3K", "3.3R", "20K",
    "750K", "2.7K", "470K", "1.2R", "33K", "160R",
    "620R", "6.8K", "390R", "130R", "330R", "51R",
    "3R", "1.5R", "1.1R", "8.2R", "9.1R", "6.2R",
    "24R", "360K", "15K", "16K", "4.3K", "3.6K",
    "36R", "13R", "1.2K", "2R", "3K", "200R",
    "27R", "91R", "91K", "4.7R", "3.9R", "300K",
    "39R", "22R", "20K", "82R", "1R", "30K",
    "2.2K", "10K", "3.9K", "5.6R", "15R", "150K",
    "12R", "2.2R", "36K", "5.1R", "4K", "330K",
    "430K", "75K", "3.3K", "11R", "68K", "360R",
    "62K", "56K", "47K", "9.1K", "270R"
];


// ======================================================
// INVENTARIO GENERAL
// ======================================================

const inventario = [];


// ======================================================
// CREAR RESISTENCIAS DE CAJA 1
// ======================================================

caja1.forEach(valor => {

    inventario.push({
        categoria: "Resistencia",
        valor: valor,
        tipo: "Película metálica",
        tolerancia: "5%",
        potencia: "1/4W",
        cantidad: 10,
        caja: " 1",
        voltaje: "",
        compartimento: "0001",
        observaciones: ""
    });

});


// ======================================================
// CREAR RESISTENCIAS DE CAJA 2
// ======================================================

caja2.forEach(valor => {

    const existe = inventario.some(componente =>
        componente.categoria === "Resistencia" &&
        componente.valor === valor &&
        componente.caja === " 2"
    );

    if (!existe) {

        inventario.push({
            categoria: "Resistencia",
            valor: valor,
            tipo: "Película metálica",
            tolerancia: "5%",
            potencia: "1/4W",
            cantidad: 10,
            caja: " 2",
            voltaje: "",
            compartimento: "00001",
            observaciones: ""
        });

    }

});


// ======================================================
// EJEMPLO DE CAPACITOR
// ======================================================
//
// Puedes borrar este ejemplo después.
// Aquí puedes ver que el capacitor NO tiene
// tolerancia ni potencia.
//
// ======================================================

inventario.push({

    categoria: "Capacitor",
    valor: "0.1uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "50V",

    compartimento: "01",

    observaciones: ""

});
inventario.push({

    categoria: "Capacitor",
    valor: "0.22uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "50V",

    compartimento: "02",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "0.47uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "50V",

    compartimento: "03",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "1uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "50V",

    compartimento: "04",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "2.2uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "50V",

    compartimento: "05",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "3.3uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "50V",

    compartimento: "06",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "4.7uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "50V",

    compartimento: "07",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "10uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "25V",

    compartimento: "08",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "10uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "50V",

    compartimento: "09",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "22uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "16V",

    compartimento: "10",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "22uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "25V",

    compartimento: "11",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "33uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "16V",

    compartimento: "12",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "47uF",
    tipo: "Electrolítico",

    cantidad: 30,

    caja: " 06",

    voltaje: "16V",

    compartimento: "13",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "47uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "25V",

    compartimento: "14",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "47uF",
    tipo: "Electrolítico",

    cantidad: 15,

    caja: " 06",

    voltaje: "50V",

    compartimento: "15",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "100uF",
    tipo: "Electrolítico",

    cantidad: 20,

    caja: " 06",

    voltaje: "16V",

    compartimento: "16",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "100uF",
    tipo: "Electrolítico",

    cantidad: 15,

    caja: " 06",

    voltaje: "25V",

    compartimento: "17",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "220uF",
    tipo: "Electrolítico",

    cantidad: 15,

    caja: " 06",

    voltaje: "10V",

    compartimento: "18",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "220uF",
    tipo: "Electrolítico",

    cantidad: 15,

    caja: " 06",

    voltaje: "25V",

    compartimento: "19",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "330uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 06",

    voltaje: "25V",

    compartimento: "20",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "470uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 06",

    voltaje: "25V",

    compartimento: "21",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "470uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 06",

    voltaje: "16V",

    compartimento: "22",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "680uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 06",

    voltaje: "16V",

    compartimento: "23",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "1000uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 06",

    voltaje: "16V",

    compartimento: "24",

    observaciones: ""

});inventario.push({

    categoria: "capacitor",
    valor: "10uF",
    tipo: "Electrolítico",

    cantidad: 10,

    caja: " 10",

    voltaje: "25V",

    compartimento: "",

    observaciones: ""

});
// ======================================================
// EJEMPLO DE integrados
// ======================================================
;inventario.push({
 categoria: "INTEGRADO",
    valor: "PC817",
    tipo: " OPTOACOPLADOR",

    cantidad: 61,

    caja: " 10",

    voltaje: ".",

    compartimento: "01",

    observaciones: ""
 

});
;inventario.push({
 categoria: "INTEGRADO",
    valor: "NE555",
    tipo: "temporizador",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "04",

    observaciones: ""
 

});
;inventario.push({
 categoria: "INTEGRADO",
    valor: "NE555",
    tipo: "temporizador",

    cantidad: 38,

    caja: " 14",

    voltaje: ".",

    compartimento: "01",

    observaciones: ""
 

});
;inventario.push({
 categoria: "INTEGRADO",
    valor: "LM358",
    tipo: "Amplificador operacional doble",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "02",

    observaciones: ""
 

});
;inventario.push({
 categoria: "INTEGRADO",
    valor: "LM393",
    tipo: "Comparador de voltaje doble",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "03",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "NE5532",
    tipo: "Amplificador operacional doble de bajo ruido",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "05",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "UA741",
    tipo: "Amplificador operacional simple",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "06",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "LM386",
    tipo: "Amplificador de audio de baja potencia",

    cantidad: 10,

    caja: " 13",

    voltaje: ".",

    compartimento: "07",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "ULN2003",
    tipo: "Arreglo de transistores Darlington (7 canales)",

    cantidad: 5,

    caja: " 13",

    voltaje: ".",

    compartimento: "08",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "LM324",
    tipo: "Amplificador operacional cuádruple",

    cantidad: 5,

    caja: " 13",

    voltaje: ".",

    compartimento: "09",

    observaciones: ""
 

});;inventario.push({
 categoria: "INTEGRADO",
    valor: "ULN803",
    tipo: "Arreglo de transistores Darlington (8 canales)",

    cantidad: 5,

    caja: " 13",

    voltaje: ".",

    compartimento: "10",

    observaciones: ""
 

});
// ======================================================
// EJEMPLO DE CAPACITOR CERÁMICO
// ======================================================

inventario.push({

    categoria: "Capacitor",
    valor: "102J",
    tipo: "poliester",

    tolerancia: "",
    potencia: "10NF",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "01",

    observaciones: ""

});
inventario.push({

    categoria: "Capacitor",
    valor: "103j",
    tipo: "poliester",

    tolerancia: "",
    potencia: "10NF",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "04",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "104J",
    tipo: "poliester",

    tolerancia: "",
    potencia: "100NF",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "07",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "105J",
    tipo: "poliester",

    tolerancia: "",
    potencia: "1000NF",

    cantidad: 5,

    caja: " 09",

    voltaje: "100V",

    compartimento: "10",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "222J",
    tipo: "poliester",

    tolerancia: "",
    potencia: "2.2NF",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "02",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "223J",
    tipo: "poliester",

    tolerancia: "",
    potencia: "22nf",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "05",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "224j",
    tipo: "poliester",

    tolerancia: "",
    potencia: "220nf",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "08",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "472j",
    tipo: "poliester",

    tolerancia: "",
    potencia: "4.7nf",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "03",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "473j",
    tipo: "poliester",

    tolerancia: "",
    potencia: "47nf",

    cantidad: 10,

    caja: " 09",

    voltaje: "100V",

    compartimento: "06",

    observaciones: ""

});inventario.push({

    categoria: "Capacitor",
    valor: "474j",
    tipo: "poliester",

    tolerancia: "",
    potencia: "470nf",

    cantidad: 0,

    caja: " 09",

    voltaje: "100V",

    compartimento: "09",

    observaciones: ""

});

// ======================================================
// EJEMPLO DE DIODO
// ======================================================

inventario.push({

    categoria: "Diodo",
    valor: "1N4001",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "50v",

    compartimento: "01",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4002",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "100v",

    compartimento: "02",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4003",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "200v",

    compartimento: "03",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4004",
    tipo: "Rectificador",
    cantidad: 10,

    caja: "4",

    voltaje: "400v",

    compartimento: "04",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4005",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "600v",

    compartimento: "05",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4006",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "800v",

    compartimento: "06",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N4007",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "1000v",

    compartimento: "07",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N5408",
    tipo: "Rectificador",
    cantidad: 25,

    caja: " 06",

    voltaje: "1000v",

    compartimento: "01",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N5817",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "20v",

    compartimento: "08",

    observaciones: ""

});inventario.push({

    categoria: "Diodo",
    valor: "1N5818",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "30v",

    compartimento: "09",

    observaciones: ""

});
inventario.push({

    categoria: "Diodo",
    valor: "1N5819",
    tipo: "Rectificador",
    cantidad: 10,

    caja: " 4",

    voltaje: "40v",

    compartimento: "10",

    observaciones: ""

});

// ======================================================
//  POTENCIOMETRO
// ======================================================

inventario.push({

    categoria: "Potenciómetro",
    valor: "1K",
    tipo: "6 PINES",
    cantidad: 2,
     caja: " 18",

    compartimento: "15",

    observaciones: ""

});
inventario.push({

    categoria: "Potenciómetro",
    valor: "1K",
    tipo: "3 PINES",
    cantidad: 2,
     caja: "19 ",

    compartimento: "15",

    observaciones: ""

});
// ======================================================
//  LED
// ======================================================

inventario.push({

    categoria: "LED",
    valor: "5",
    tipo: "verde",
    cantidad: 2,
     caja: " 111",

    compartimento: "15",

    observaciones: ""

});
inventario.push({

    categoria: "LED",
    valor: "5",
    tipo: "amarillo",
    cantidad: 2,
     caja: " 111",

    compartimento: "15",

    observaciones: ""

});
// ======================================================
//  Interruptores
// ======================================================

inventario.push({

    categoria: "Interruptores",
    valor: "Interruptores",
    tipo: "4 pines",
    cantidad: 2,
     caja: " 25",

    compartimento: "15",

    observaciones: ""

});
// ======================================================
//  Conectores
// ======================================================

inventario.push({

    categoria: "Conectores",
    valor: "445",
    tipo: "verde",
    cantidad: 2,
     caja: " 145",

    compartimento: "15",

    observaciones: ""

});
// ======================================================
// EJEMPLO DE TRANSISTOR
// ======================================================

inventario.push({

    categoria: "Transistor",
    valor: "2N2222",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "15",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "A1015",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "01",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "BC327",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "02",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "BC547",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "03",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "C945",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "04",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S 8050",
    tipo: "NPN",
    cantidad: 10,
     caja: "5",

    compartimento: "05",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S9018",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "07",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "BC337",
    tipo: "NPN",
    cantidad: 10,
     caja: "5",

    compartimento: "08",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "BC557",
    tipo: "PNP",
    cantidad: 10,
     caja: "5",

    compartimento: "09",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "C1815",
    tipo: "NPN",
    cantidad: 10,
     caja: "5",

    compartimento: "10",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S 8550",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "11",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S9012",
    tipo: "PNP",
    cantidad: 10,
     caja: "5",

    compartimento: "13",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S9014",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "14",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "2N3904",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "16",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "2N5401",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "17",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S9013",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "19",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "S9015",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "20",

    observaciones: ""

});
inventario.push({

    categoria: "Transistor",
    valor: "2N2907",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "21",

    observaciones: ""

});inventario.push({

    categoria: "Transistor",
    valor: "2N3906",
    tipo: "PNP",
    cantidad: 10,
     caja: " 5",

    compartimento: "22",

    observaciones: ""

});inventario.push({

    categoria: "Transistor",
    valor: "2N5551",
    tipo: "NPN",
    cantidad: 10,
     caja: " 5",

    compartimento: "23",

    observaciones: ""

});


// ======================================================
// BUSCADOR
// ======================================================

function buscarResistencia() {

    const valorBuscado = document
        .getElementById("resistencia")
        .value
        .trim()
        .toUpperCase();

    const resultado = document.getElementById("resultado");

// ======================================================
    // ALERTA DE INVENTARIO
    // ======================================================

    // Cantidad mínima para generar alerta
    const LIMITE_ALERTA = 5;

    // Palabras que activan la alerta
    const palabrasAlerta = [
        "ALERTA",
        "POCOS",
        "POCAS",
        "POR ACABARSE",
        "AGOTANDO",
        "QUE ME FALTA COMPRAR",
        "QUE DEBO COMPRAR"
    ];

    const activarAlerta = palabrasAlerta.some(palabra =>
        valorBuscado.includes(palabra)
    );


    // ======================================================
    // MOSTRAR COMPONENTES CON POCA CANTIDAD
    // ======================================================

    if (activarAlerta) {

        const pocos = inventario
            .filter(componente => componente.cantidad <= LIMITE_ALERTA)
            .sort((a, b) => a.cantidad - b.cantidad);


        // ------------------------------------------
        // SI NO HAY COMPONENTES CON POCA CANTIDAD
        // ------------------------------------------

        if (pocos.length === 0) {

            resultado.innerHTML = `

                <div>

                    <h2>🟢 INVENTARIO EN BUEN ESTADO</h2>

                    <p>
                        No tienes componentes con
                        <strong>${LIMITE_ALERTA} o menos unidades</strong>.
                    </p>

                </div>

            `;

            return;
        }


        // ------------------------------------------
        // MOSTRAR ALERTA
        // ------------------------------------------

        resultado.innerHTML = `

            <div>

                <h2>🚨 ALERTA DE INVENTARIO</h2>

                <p>
                    Estos componentes tienen
                    <strong>${LIMITE_ALERTA} o menos unidades:</strong>
                </p>

            </div>

        `;


        // ------------------------------------------
        // MOSTRAR CADA COMPONENTE
        // ------------------------------------------

        pocos.forEach(componente => {

            let estado = "";

            if (componente.cantidad === 0) {
                estado = "⚫ AGOTADO";
            } 
            else if (componente.cantidad <= 2) {
                estado = "🔴 MUY POCO";
            } 
            else {
                estado = "🟡 POCO";
            }


            resultado.innerHTML += `

                <div>

                    <hr>

                    <h2>
                        ${estado}
                    </h2>

                    <h2>
                        🔧 ${componente.valor}
                    </h2>

                    <p>
                        📂 <strong>Categoría:</strong>
                        ${componente.categoria}
                    </p>

                    <p>
                        🔩 <strong>Tipo:</strong>
                        ${componente.tipo}
                    </p>

                    <p>
                        📊 <strong>Cantidad:</strong>
                        ${componente.cantidad}
                    </p>

                    <p>
                        📦 <strong>Caja:</strong>
                        ${componente.caja}
                    </p>

                    <p>
                        🗄️ <strong>Compartimento:</strong>
                        ${componente.compartimento || "—"}
                    </p>

                </div>

            `;

        });


        return;
    }

    // ------------------------------------------
    // CAMPO VACÍO
    // ------------------------------------------

    if (valorBuscado === "") {

        resultado.innerHTML = `
            <h2>⚠️ BUSCAR COMPONENTE</h2>
            <p>Escriba un valor o referencia.</p>
        `;

        return;
    }


    // ------------------------------------------
    // BUSCAR COMPONENTES
    // ------------------------------------------

    const encontrados = inventario.filter(componente =>
        componente.valor.toUpperCase() === valorBuscado
    );


    // ------------------------------------------
    // NO ENCONTRADO
    // ------------------------------------------

    if (encontrados.length === 0) {

        resultado.innerHTML = `

            <div>

                <h2>🔴 NO TENGO</h2>

                <p>
                    No tienes registrado:
                </p>

                <h2>${valorBuscado}</h2>

            </div>

        `;

        return;
    }


    // ------------------------------------------
    // ENCONTRADO
    // ------------------------------------------

    resultado.innerHTML = `

        <div>

            <h2>🟢 SÍ TENGO</h2>

            <p>
                Resultados para:
                <strong>${valorBuscado}</strong>
            </p>

        </div>

    `;


    // ------------------------------------------
    // MOSTRAR CADA RESULTADO
    // ------------------------------------------

    encontrados.forEach(componente => {

        resultado.innerHTML += `

            <div>

                <hr>

                <h2>
                    🔧 ${componente.valor}
                </h2>

                <p>
                    📂 <strong>Categoría:</strong>
                    ${componente.categoria}
                </p>

                <p>
                    🔩 <strong>Tipo:</strong>
                    ${componente.tipo}
                </p>

                ${mostrarCaracteristicas(componente)}

                <p>
                    📊 <strong>Cantidad:</strong>
                    ${componente.cantidad}
                </p>

                <p>
                    📦 <strong>Caja:</strong>
                    ${componente.caja}
                </p>

                <p>
                    🗄️ <strong>Compartimento:</strong>
                    ${componente.compartimento || "—"}
                </p>

                <p>
                    📝 <strong>Observaciones:</strong>
                    ${componente.observaciones || "—"}
                </p>

            </div>

        `;

    });

}


// ======================================================
// CARACTERÍSTICAS SEGÚN CATEGORÍA
// ======================================================

function mostrarCaracteristicas(componente) {


    // ------------------------------------------
    // RESISTENCIA
    // ------------------------------------------

    if (componente.categoria === "Resistencia") {

        return `

            <p>
                🎯 <strong>Tolerancia:</strong>
                ${componente.tolerancia}
            </p>

            <p>
                ⚡ <strong>Potencia:</strong>
                ${componente.potencia}
            </p>

        `;

    }


    // ------------------------------------------
    // CAPACITOR
    // ------------------------------------------

    if (componente.categoria === "Capacitor") {

        return `

            <p>
                🔋 <strong>Voltaje:</strong>
                ${componente.voltaje}
            </p>

        `;

    }


    // ------------------------------------------
    // DIODO
    // ------------------------------------------

    if (componente.categoria === "Diodo") {

        return `

            <p>
                🔋 <strong>Voltaje:</strong>
                ${componente.voltaje || "—"}
            </p>

        `;

    }


    // ------------------------------------------
    // TRANSISTOR
    // ------------------------------------------

    if (componente.categoria === "Transistor") {

        return `

            <p>
                🔋 <strong>Voltaje:</strong>
                ${componente.voltaje || "—"}
            </p>

        `;

    }


    // ------------------------------------------
    // OTROS COMPONENTES
    // ------------------------------------------

    return "";

}
// ======================================================
// CHILITO ELECTRONICS
// FUNCIONES DEL PANEL PRINCIPAL
// ======================================================


// ======================================================
// ACTUALIZAR ESTADÍSTICAS
// ======================================================

function actualizarEstadisticas() {

    const total = inventario.length;

    const resistencias = inventario.filter(
        c => c.categoria === "Resistencia"
    ).length;

    const capacitores = inventario.filter(
        c => c.categoria === "Capacitor"
    ).length;

    const transistores = inventario.filter(
        c => c.categoria === "Transistor"
    ).length;

    const diodos = inventario.filter(
        c => c.categoria === "Diodo"
    ).length;
    const Potenciómetro = inventario.filter(
        c => c.categoria === "Potenciómetro"
    ).length;
    
    const LED = inventario.filter(
        c => c.categoria === "LED"
    ).length;
    

    const integrados = inventario.filter(
        c => c.categoria === "INTEGRADO"
    ).length;

    const Interruptores = inventario.filter(
        c => c.categoria === "Interruptores"
    ).length;
    const Conectores = inventario.filter(
        c => c.categoria === "Conectores"
    ).length;

    document.getElementById("totalComponentes").textContent = total;

    document.getElementById("totalResistencias").textContent =
        resistencias;

    document.getElementById("totalCapacitores").textContent =
        capacitores;

    document.getElementById("totalTransistores").textContent =
        transistores;

    document.getElementById("totalDiodos").textContent =
        diodos;
     document.getElementById("totalPotenciómetro").textContent =
        Potenciómetro;
     document.getElementById("totalLED").textContent =
        LED;

    document.getElementById("totalIntegrados").textContent =
        integrados;
    document.getElementById("totalInterruptores").textContent =
        Interruptores;
        document.getElementById("totalConectores").textContent =
        Conectores;
}


// ======================================================
// MOSTRAR ALERTAS
// ======================================================

function mostrarAlertas() {

    const resultado =
        document.getElementById("resultado");


    const alertas = inventario
        .filter(componente => componente.cantidad <= 5)
        .sort((a, b) => a.cantidad - b.cantidad);


    if (alertas.length === 0) {

        resultado.innerHTML = `

            <h2>🟢 INVENTARIO EN BUEN ESTADO</h2>

            <p>
                No hay componentes con 5 o menos unidades.
            </p>

        `;

        return;
    }


    resultado.innerHTML = `

        <h2>🚨 ALERTAS DE INVENTARIO</h2>

        <p>
            Componentes que necesitan atención:
        </p>

    `;


    alertas.forEach(componente => {

        let clase = "";
        let estado = "";


        if (componente.cantidad === 0) {

            clase = "agotado";
            estado = "⚫ AGOTADO";

        }

        else if (componente.cantidad <= 2) {

            clase = "muy-poco";
            estado = "🔴 MUY POCO";

        }

        else {

            clase = "poco";
            estado = "🟠 POCO";

        }


        resultado.innerHTML += `

            <div class="resultado-item ${clase}">

                <h2>${estado}</h2>

                <h3>🔧 ${componente.valor}</h3>

                <p>
                    📂 Categoría:
                    ${componente.categoria}
                </p>

                <p>
                    🔩 Tipo:
                    ${componente.tipo}
                </p>

                <p>
                    📊 Cantidad:
                    <strong>${componente.cantidad}</strong>
                </p>

                <p>
                    📦 Caja:
                    ${componente.caja}
                </p>

                <p>
                    🗄️ Cajón:
                    ${componente.compartimento || "—"}
                </p>

            </div>

        `;

    });

}


// ======================================================
// BUSCAR POR CAJA O CAJÓN
// ======================================================

function buscarUbicacion() {

    const texto = document
        .getElementById("ubicacion")
        .value
        .trim()
        .toUpperCase();


    const resultado =
        document.getElementById("resultado");


    if (texto === "") {

        resultado.innerHTML = `

            <h2>⚠️ ESCRIBE UNA UBICACIÓN</h2>

            <p>
                Ejemplo: Caja 5 o Cajón 03.
            </p>

        `;

        return;
    }


    const encontrados = inventario.filter(componente => {

        const caja = String(componente.caja)
            .trim()
            .toUpperCase();

        const cajon = String(componente.compartimento || "")
            .trim()
            .toUpperCase();


        return caja.includes(texto) ||
               cajon.includes(texto);

    });


    if (encontrados.length === 0) {

        resultado.innerHTML = `

            <h2>🔴 NO ENCONTRADO</h2>

            <p>
                No hay componentes registrados
                en esa ubicación.
            </p>

        `;

        return;
    }


    resultado.innerHTML = `

        <h2>📦 RESULTADOS DE UBICACIÓN</h2>

        <p>
            Se encontraron
            <strong>${encontrados.length}</strong>
            componentes.
        </p>

    `;


    encontrados.forEach(componente => {

        resultado.innerHTML += `

            <div class="resultado-item">

                <h2>
                    🔧 ${componente.valor}
                </h2>

                <p>
                    📂 Categoría:
                    ${componente.categoria}
                </p>

                <p>
                    🔩 Tipo:
                    ${componente.tipo}
                </p>

                <p>
                    📊 Cantidad:
                    ${componente.cantidad}
                </p>

                <p>
                    📦 Caja:
                    ${componente.caja}
                </p>

                <p>
                    🗄️ Cajón:
                    ${componente.compartimento || "—"}
                </p>

            </div>

        `;

    });

}


// ======================================================
// MOSTRAR POR CATEGORÍA
// ======================================================

function mostrarCategoria(categoria) {

    const resultado =
        document.getElementById("resultado");


    const encontrados = inventario.filter(
        componente => componente.categoria === categoria
    );


    resultado.innerHTML = `

        <h2>📋 ${categoria.toUpperCase()}</h2>

        <p>
            Componentes registrados:
            <strong>${encontrados.length}</strong>
        </p>

    `;


    encontrados.forEach(componente => {

        resultado.innerHTML += `

            <div class="resultado-item">

                <h2>
                    🔧 ${componente.valor}
                </h2>

                <p>
                    🔩 Tipo:
                    ${componente.tipo}
                </p>

                <p>
                    📊 Cantidad:
                    ${componente.cantidad}
                </p>

                <p>
                    📦 Caja:
                    ${componente.caja}
                </p>

                <p>
                    🗄️ Cajón:
                    ${componente.compartimento || "—"}
                </p>

            </div>

        `;

    });

}


// ======================================================
// MOSTRAR TODO EL INVENTARIO
// ======================================================

function mostrarTodoInventario() {

    const resultado =
        document.getElementById("resultado");


    resultado.innerHTML = `

        <h2>📦 TODO EL INVENTARIO</h2>

        <p>
            Componentes registrados:
            <strong>${inventario.length}</strong>
        </p>

    `;


    inventario.forEach(componente => {

        resultado.innerHTML += `

            <div class="resultado-item">

                <h3>
                    🔧 ${componente.valor}
                </h3>

                <p>
                    📂 ${componente.categoria}
                </p>

                <p>
                    🔩 ${componente.tipo}
                </p>

                <p>
                    📊 Cantidad:
                    ${componente.cantidad}
                </p>

                <p>
                    📦 Caja:
                    ${componente.caja}
                </p>

                <p>
                    🗄️ Cajón:
                    ${componente.compartimento || "—"}
                </p>

            </div>

        `;

    });

}


// ======================================================
// CARGAR ESTADÍSTICAS AL ABRIR LA PÁGINA
// ======================================================

window.addEventListener("DOMContentLoaded", () => {

    actualizarEstadisticas();

});
