//const 
/* No se puede volver a redefinir una variable const */

//////////////////////////////////////////////////////////////////////////////////////

/* saludar();

function saludar(){
    console.log("Hola!!");
} */

//////////////////////////////////////////////////////////////////////////////////////

//Las arrow no funcionan con hoisting (invocar funcion y despues funciona)
/* let saludar = () => {
    console.log("Hola!!");
};

saludar(); */

//////////////////////////////////////////////////////////////////////////////////////

/* const saludar = (nombre) => {
    console.log(`Hola ${nombre}!!`);
};

saludar('Gianfranco'); */

//////////////////////////////////////////////////////////////////////////////////////

/* function triplicar(num){
    let resultado = num * 3;
    return resultado;
};

let triple = triplicar(6);
console.log(triple); */

//////////////////////////////////////////////////////////////////////////////////////

/* const triplicar = num => {
    return num * 3;
}; */

//Funcion triplicar, que recibe como parametro num y hace que num * 3 retornando el resultado
/* const triplicar = num => num * 3;

let triple = triplicar(2);
console.log(triple); */

//////////////////////////////////////////////////////////////////////////////////////

/* const saludar = (nombre, idioma) => {
    let mensaje;
    if(idioma=="es")
        mensaje = `Hola ${nombre}`
    else
        mensaje = `Welcome ${nombre}`
    return mensaje
}

let final = saludar("Gian","en");
console.log(final); */

//////////////////////////////////////////////////////////////////////////////////////

//                  DEFINIR EL IF SIN IF

/* const saludar = (nombre, idioma) => {
    let mensaje;
    (idioma=="es") ? mensaje = `Hola ${nombre}` : mensaje = `Welcome ${nombre}`
    return mensaje
}

let final = saludar("Gian","en");
console.log(final);
 */
//////////////////////////////////////////////////////////////////////////////////////

//              FUNCTION ARROW SIN DECLARAR VARIABLE

/* const saludar = (nombre, idioma) => (idioma=="es") ? `Hola ${nombre}` : `Welcome ${nombre}`

let final = saludar("Gian","en");
console.log(final); */

//////////////////////////////////////////////////////////////////////////////////////

let jugadores = ["Rochet", "Vina", "Valverde", "Pellistri", "Bentancur"];

/* jugadores.forEach(function (nombre){
    console.log(nombre);
}) */

/* jugadores.forEach(nombre => console.log(nombre)); */

//Muestra tambien la posicion
/* jugadores.forEach((nom, pos) => {
    console.log(nom, pos);
}); */

///////////////////////////////////////////////////////////////////////////////

/* let filtrados = jugadores.filter(jugador => {
    let dev = false;
    if (jugador.length === 9) {
        dev = true;
    }
    return dev;
});

console.log(filtrados);*/

///////////////////////////////////////////////////////////////////////////////
//  Agrega lo que coincida al array

/* 
let filtrados = jugadores.filter(jugador => jugador.length === 9);
console.log(filtrados); 
*/

///////////////////////////////////////////////////////////////////////////////
//  Devuelve el primero en cumplir la condicion

/* let elemento = jugadores.find(jugador => jugador.charAt(0) === "B");
console.log(elemento); */

///////////////////////////////////////////////////////////////////////////////
//  Me permite recorrerlo mapearle un mensaje.

/* let detalles = jugadores.map(jug => `Hol, soy ${jug}`)
console.log(detalles) */

///////////////////////////////////////////////////////////////////////////////
//////////////////////////  DESTRUCURING  /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

/* let nombres = ["Diego", "Gaston", "Ariana", "Carolina"]; */

/* let primero = nombres[0];
let segundo = nombres[1];
let tercero = nombres[2]; */

/* let [primero,segundo,tercero] = nombres; */
/* let [, ,tercero, cuarto] = nombres;

//METODO AUX
let a = 4;
let b = 8;

[a,b] = [b,a];

console.log(a);
 */

/* let jugador = {
    nombre: "Rochet",
    edad: 29,
    posicion: "Golero"
} */

/* 
let {nombre, posicion} = jugador;  

console.log(posicion);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
const saludar = jugador => {
    console.log(`Hola, soy ${jugador.nombre}, tengo ${jugador.edad} anos y juego de ${jugador.posicion}`);
}; 

saludar(jugador);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const saludar = ({nombre, edad, posicion}) => { //{nombre, edad, posicion} = {nombre:"Rochet", edad: 29, posicion:"Golero"}
    console.log(`Hola, soy ${nombre}, tengo ${edad} anos y juego de ${posicion}`);
};

saludar(jugador); */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let numeros1 = [4,5];

let numeros2 = numeros1;
numeros1.push(6);
console.log(numeros2); //[4,5,6] */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////     SPREAD     //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
let numeros1 = [4,5];
let numeros2 = [...numeros1, 9, 11]; //Genero un nuevo array a partir de numeros1

numeros1.push(6);

console.log(numeros1);
console.log(numeros2); 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
let historico = [];

let numeros = [4];
historico.push(numeros);

let numeros2 = [...numeros,5];
historico.push(numeros2);

let numeros3 = [...numeros2,6];
historico.push(numeros3);

let numeros4 = [...numeros3,7];
historico.push(numeros4);

console.log(historico); 
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let jugador = {
    nombre: "Rochet",
    edad: 29,
    posicion: "Golero"
}
let masDatos = {altura:1.9, peso:85}

let jugadorNuevo = {...jugador, ...masDatos};


jugadorNuevo.edad = 30;
console.log(jugador);
console.log(jugadorNuevo);