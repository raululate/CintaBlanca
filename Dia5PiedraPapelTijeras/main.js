
//var es para js antiguo 
//let es para js moderno
//const es para algo que es constante

let i = 1;
while (i = 1) {
    let jugador1 = prompt("Jugador 1 qué eliges: Piedra, papel o tijeras?", "Escriba aqui");

    let jugador2 = prompt("Jugador 2 qué eliges: Piedra, papel o tijeras?", "Escriba aqui");

    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();

    if (jugador1 == "piedra" || jugador1 == "piedras") {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            alert("El Jugador 1 ha ganado");
            i = 2;
        }
        else if (jugador2 == "papel") {
            alert("El Jugador 2 ha ganado");
            i = 2;
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
            alert("Ha habido un empate");
            i = 2;
        }
        else {
            alert("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else if (jugador1 == "tijeras" || jugador1 == "tijera") {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            alert("Ha habido un empate");
            i = 2;
        }
        else if (jugador2 == "papel") {
            alert("El Jugador 1 ha ganado");
            i = 2;
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
            alert("El Jugador 2 ha ganado");
            i = 2;
        }
        else {
            alert("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else if (jugador1 == "papel") {
        if (jugador2 == "tijeras" || jugador2 == "tijera") {
            alert("El Jugador 2 ha ganado");
            i = 2;
        }
        else if (jugador2 == "papel") {
            alert("Ha habido un empate");
            i = 2;
        }
        else if (jugador2 == "piedra" || jugador2 == "piedras") {
            alert("El Jugador 1 ha ganado");
            i = 2;
        }
        else {
            alert("El jugador 2 introdujo mal su valor. Reintentelo")
        }
    }
    else {
        alert("El jugador 1 introdujo mal su valor. Reintentelo");
    }
}
console.log(jugador1);
console.log(jugador2);

//PUEDO IMPRIMIR EN CONSOLA COMO SI SE TRATARA DE UN ERROR O UN WARNING
console.error("esto es un error");
console.warn("esto es una alerta");

