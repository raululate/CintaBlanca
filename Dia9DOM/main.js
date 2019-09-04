
function juego(jugador1,jugador2){

    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();

    if (jugador1 == jugador1 ) {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            console.log Jugador 1 ha ganado");
          
        }
        else if (jugador2 == "papel") {
            console.log("El Jugador 2 ha ganado");
            
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
            console.log("Ha habido un empate");
            
        }
        else {
            console.log("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else if (jugador1 == "tijeras" || jugador1 == "tijera") {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            console.log("Ha habido un empate");
           
        }
        else if (jugador2 == "papel") {
            console.log("El Jugador 1 ha ganado");
            
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
            console.log("El Jugador 2 ha ganado");
            
        }
        else {
            console.log("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else if (jugador1 == "papel") {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            console.log("El Jugador 2 ha ganado");
            
        }
        else if (jugador2 == "papel") {
           console.log("Ha habido un empate");
            
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
           console.log("El Jugador 1 ha ganado");
           
        }
        else {
            console.log("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else {
        console.log("El jugador 1 introdujo mal su valor. Reintentelo");
    }

console.log(jugador1);
console.log(jugador2);

//PUEDO IMPRIMIR EN CONSOLA COMO SI SE TRATARA DE UN ERROR O UN WARNING
console.error("esto es un error");
console.warn("esto es una alerta");
}

juego("piedra","papel")