//objeto tranvía con las probabilidades y los movimientos por probabilidad
const tranvia = {
  nombre: "chuchu",
  img: "tranvia",
  ventaja: {
    probabilidad: 25,
    movimiento: 5
  },
  normal: {
    probabilidad: 60,
    movimiento: 2
  },
  dificultad: {
    probabilidad: 15,
    movimiento: 0
  }
};
//objeto autobus con las probabilidades y los movimientos por probabilidad
const autobus = {
  nombre: "titsa",
  img: "autobus.jpg",
  ventaja: {
    probabilidad: 43,
    movimiento: 5
  },
  normal: {
    probabilidad: 43,
    movimiento: 3
  },
  dificultad: {
    probabilidad: 14,
    movimiento: -1
  }
};
//objeto coche con las probabilidades y los movimientos por probabilidad
const coche = {
  nombre: "ferrari",
  img: "coche.jpg",
  ventaja: {
    probabilidad: 15,
    movimiento: 20
  },
  normal: {
    probabilidad: 45,
    movimiento: 10
  },
  dificultad: {
    probabilidad: 40,
    movimiento: -5
  }
};
//Objeto COBETE con las probabilidades y los movimientos por probabilidad
const cohete = {
  nombre: "cohete",
  img: "cohete.jpg",
  ventaja: {
    probabilidad: 40,
    movimiento: 15
  },
  normal: {
    probabilidad: 40,
    movimiento: 10
  },
  dificultad: {
    probabilidad: 30,
    movimiento: 5
  }
};

//Zona donde voy a meter todo. 
const trayecto = document.getElementsByClassName("trayecto")[0];

//crear una array para movimientos. 
let vehiculos = [];
vehiculos.push(tranvia, autobus, coche, cohete);

// la tirada de "dado" que hace cada uno. 
function tirardado(maximo) {
  let num = 0;
  num = Math.floor(Math.random() * maximo) + 1;
  return num;
}

const numParticipantes = document.getElementById("numParticipantes");

let numeroVehiculos = numParticipantes.value;

//Recorre arrays  RECORRER EL ARRAY DE VEHÍCULOS, SACAR UNO DE LOS NOMBRES, SI EL NOMBRE SE REPITE, SACAR OTRO, HASTA QUE EL NÚMERO COINCIDA CON EL NÚMERO DE PARTICIPANTES INTRODUCIDOS.
//PD: no sé hacerlo. 
function recorrerArray (arroces, jugadores){ 
  let arrayFinal = [];

  let terminado = false;
  while(terminado != true){
    
  }

}



/*numParticipantes.nextElementSibling.addEventListener("click");*/





//función de sumar los componentes del array "pasito".
function sumaPasito(paso) {
  let total = paso.reduce((a, b) => a + b, 0); //el 0 representa la posición 0 que es desde donde empiezan todos, a no ser que se pida por teclado algo diferente
  return (total);
}

//Función de movimiento paso a paso 

function movimientoPasoPaso(num, vehiculos, pasito) {

  if (num <= vehiculos.ventaja.probabilidad) { // && si llega a 250 para puto. 
    pasito.push(vehiculos.ventaja.movimiento);

  } else {

    if (num <= vehiculos.normal.probabilidad + vehiculos.ventaja.probabilidad) {

      pasito.push(vehiculos.normal.movimiento);

    } else {

      if (vehiculos.dificultad.movimiento + sumaPasito(pasito) < 0) {

        pasito.push(0);

      } else {
        pasito.push(vehiculos.dificultad.movimiento);
      }
    }
  }
}
//Creación de nodo de forma FULLPRO JOSE#
// prueba let pitoNodo = crearNodo("div","Hola, pa ti mi cola",["pitoClase"],[{name: "id",value:"pitoId"}]);
function crearNodo(tipoNodo, textoNodo, clasesNodo, atributos) {

  let nodo = document.createElement(tipoNodo);

  if (textoNodo != "" && textoNodo != null) {
    nodo.appendChild(document.createTextNode(textoNodo));
  }
  if (clasesNodo.length > 0) {
    clasesNodo.forEach(clase => nodo.classList.add(clase));
  }
  if (atributos.length > 0) {
    atributos.forEach(atributo => nodo.setAttribute(atributo.name, atributo.value));
  }
  return nodo;
}





/* // Función para rellenar "Paso a Paso"
function pito() {
  for (var i = 0; i < vehiculos.length; i++)
    movimientoPasoPaso(tirardado(), vehiculos[i], movimientoArray[i]);
} */
