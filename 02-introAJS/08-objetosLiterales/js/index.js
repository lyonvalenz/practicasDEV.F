// let carro = {
//     llantas: "4",  //int
//     color: "rojo",  //string
//     puertas: 5,
//     usaGasolina: true
// };

// console.log(carro, color);
// console.log(carro, puertas);

// console.log(carro['usaGasolina']);
// console.log(carro['puertas']);


// let perro = {
//     nombre: "Canelo",
//     color: "Cafe",
//     edad: 3,
//     raza: "Doberman",
//     ladrar: function(){
//         return (`${this.nombre} puede ladrar wau wau`)
//     },
//     comer: function(){
//         console.log('yomi yomi')
//     }
// };

// console.log(perro.ladrar());
// console.log(perro.comer());


// //añadimos valores
// perro.tamaño = "grande";
// perro.macho = true;

// console.log(perro);

// //modificar valores
// perro.edad = 5;

// //eliminar una valor
// delete perro.raza;

// //desestructuracion

// const animales = ["Conejo","Gato","Perro","Rana"];
// const [animal1,animal2,animal3,animal4] = animales

// console.log(`Mi primer mascota fue: ${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`);

// // destructura lo que necesites++++++++++++++++

// const nombres = ["Zanahoria","Mei","Taco","Rene"];

// const [nombre0, , nombre2] = nombres;

// console.log(`Mis mascotas son: ${nombre0} y ${nombre2}`);

// //Uso del operador rest

// const empleado = ["Emilio", 24, "Puebla", "Desarrollador front El chido",];

// const [nombre, edad, ...rest] = empleado;
// console.info(`${nombre} tiene ${edad}`);

// console.info(`Los datos completos son: ${rest}`);

//Objeto animales de la sabana-------------------
const animales = ["Cheeta","Avestruz","León"];
    let Cheeta = {
        Familia: "Felinos",
        Patas: 4,
        Come: "Carne",
        Color: "Amarillo"
    };
    let Avestruz = {
        Familia: "Aves",
        Patas: 2,
        Come: "Plantas",
        Color: "Negro"
    };
    let León = {
        Familia: "Felinos",
        Patas: 4,
        Come: "Carne",
        Color: "Amarillo"
    };
const [animal1,animal2,animal3] = animales;

console.log (`Mi animal favorito es el ${animal3}, antes era el ${animal2} y ${animal1}`);

const datos = ["Es un felino"," tiene 4 patas"," come carne"," es color amarillo"]

console.info(`Sus características son: ${datos}`)
 



