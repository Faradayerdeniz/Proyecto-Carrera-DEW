//objeto tranvía con las probabilidades y los movimientos por probabilidad
const tranvia = {
  nombre: "chuchu",
  img: "tranvia.jpg",
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
    probabilidad: 30,
    movimiento: 10
  },
  dificultad: {
    probabilidad: 20,
    movimiento: 5
  }
};

//Zona donde voy a meter todo. 
const trayecto = document.getElementsByClassName("trayecto")[0];


//crear una array para movimientos. 
let vehiculos = [];
vehiculos.push(tranvia, autobus, coche, cohete);

vehiculos.forEach(vehiculo => {
  let containerParticipante = crearNodo("div","",["participante"],[]);

  let imagenParticipante = crearNodo("img","",[],[{name:"id",value:vehiculo.nombre}, {name:"src",value:`./img/${vehiculo.img}`}]);

  containerParticipante.appendChild(imagenParticipante);

  trayecto.appendChild(containerParticipante);

});


//tengo que para cada imagen(participante), hacer que haga un paso cuando haga click en el botón y aplicarle un margin-left: + el movimiento de cada vehiculo x4 + "px"; 

const totalParticipantes = vehiculos.length;

//objeto al que le voy a meter, array de objetos.
/* let movimientos = {
  nombre:[{movimiento: "ventaja", value: 10},{}]
}; */

let movimientos = {};

function funcionalidadesParticipantes() {
  
  vehiculos.forEach(vehiculo => {
    movimientos[vehiculo.nombre] = [];
  });

  return movimientos;
}

console.log(funcionalidadesParticipantes());



// la tirada de "dado" que hace cada uno. 
function tirardado(maximo) {
  let num = 0;
  num = Math.floor(Math.random() * maximo) + 1;
  return num;
};

function totalMovimientos(movimientoParticipante) {
  let suma = 0;
  suma = movimientoParticipante.reduce(function (acumulador, avance) {
    return (acumulador + avance) < 0 ? 0 : acumulador + avance;
  }, 0);
  return suma;
}

let botonPaso = document.getElementById("botonPaso");

botonPaso.addEventListener("click", movimientoPasoPaso);


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