//variables y entradas
// var numero;
// var sumatoria = 0;
// //var aux = 0;

// //logica
// do
// {
//     numero = Number(prompt('Ingresa un numero para continuar o nada para terminar'))

//     if(numero > 0)
//     {
//         sumatoria = sumatoria + numero;
//     }

// }while(numero > 0);




// while(aux === 0)
// {
//      numero = Number(prompt('Ingresa un numero para continuar o nada para terminar'))        

//     if(numero > 0)
//     {
//         sumatoria = sumatoria + numero;
//     }
//     else
//     {
//         aux = -1
//     }
// }

//salidas
// alert(`La sumatoria de los numeros es ${sumatoria}`)


//Hacer un juego de piedra papel o tijera.
var Piedra = 'Piedra';
var Papel = 'Papel';
var Tijera = 'Tijera';

var opciones = ["Piedra", "Papel", "Tijera"];

var jugador1;
var jugador2;

prompt('Jugador 1, ¿Qué opción eliges? Piedra, Papel o Tijera')

prompt('Jugador 2, ¿Qué opción eliges? Piedra, Papel o Tijera')

if(jugador1 === Piedra)
    if(jugador2 === Piedra)
    {
        alert('¡Empate!')
    }

    else if(jugador2 === Papel)
    {
        alert('¡Perdiste!')
    }
    
    else if(jugador2 === Tijera)
    {
        alert('¡Ganaste!')
    }

if(jugador1 === Papel)
    if(jugador2 === Papel)
    {
        alert('¡Ganaste!')
    }
    else if(jugador2 === Piedra)
    {
        alert('¡Empate!')
    }
    else if(jugador === Tijera)
    {
        alert('¡Perdiste!')
    }

if(jugador1 === Tijera)
    if(jugador2 === Tijera)
    {
        alert('¡Empate!')
    }
    else if(jugador2 === Piedra)
    {
        alert('¡Perdiste!')
    }
    else if(jugador2 === Papel)
    {
        alert('¡Ganaste!')
    }





// //Genera un número aleatorio entre un rango de enteros
// function patito(minimo, maximo)
// {
//     var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
//     return numero;
// }

// var piedra = 0;
// var papel = 1;
// var tijera = 2;

// var opciones = ["Piedra", "Papel", "Tijera"];

// var opcionUsuario;
// var opcionMaquina = patito(0,2);

// opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

// alert("Elegiste " + opciones[opcionUsuario]);
// alert("Javascript eligió " + opciones[opcionMaquina]);

// if(opcionUsuario == piedra)
// {
//     if(opcionMaquina == piedra)
//     {
//         alert("Empate!");
//     }
//     else if(opcionMaquina == papel)
//     {
//         alert("Perdiste :( ");
//     }
//     else if(opcionMaquina == tijera)
//     {
//         alert("Ganaste!");
//     }
// }
// else if(opcionUsuario == papel)
// {
//     if(opcionMaquina == piedra)
//     {
//         alert("Ganaste!");
//     }
//     else if(opcionMaquina == papel)
//     {
//         alert("Empate!");
//     }
//     else if(opcionMaquina == tijera)
//     {
//         alert("Perdiste!");
//     }
// }
// else if(opcionUsuario == tijera)
// {
//     if(opcionMaquina == piedra)
//     {
//         alert("Perdiste!");
//     }
//     else if(opcionMaquina == papel)
//     {
//         alert("Ganaste!");
//     }
//     else if(opcionMaquina == tijera)
//     {
//         alert("Empate!");
//     }
// }
// else
// {
//     alert("¿Pos qué carajo?");
// }
