let cuentas = [];
let numero,
operador,
saldoInicial,
nombreUsuario,
password1,
saldoEnCuenta,
userExists,
correctPassword,
total;

function validaUsuario() {
nombreUsuario = document.getElementById("nombre").value;
password1 = document.getElementById("password").value;
saldoInicial = document.getElementById("apertura").value;

userExists = false;
correctPassword = false;
saldoEnCuenta = 0;

for (i = 0; i < cuentas.length; i++) {
// este for no va a correr hasta que no haya cuentas
if (cuentas[i].nombre == nombreUsuario) {
    // Jacinto // Enrique
    userExists = true;
    if (cuentas[i].password == password1) {
    // asd // asdf
    correctPassword = true;
    saldoEnCuenta = cuentas[i].saldo; // 300 // 700
    }
}
}

if (userExists == true && correctPassword == false) {
// Si el usuario existe pero la contraseña no es correcta
document.getElementById("bienvenida").innerText =
    "Su contraseña es incorrecta";
document.getElementById("operaciones").innerText = 0;
} else if (userExists == true && correctPassword == true) {
// Si el usuario existe y la contraseña es correcta
document.getElementById("bienvenida").innerText =
    "Bienvenido de nuevo " + nombreUsuario;
document.getElementById("montoApertura").innerText = saldoEnCuenta;
} else {
// Si el usuario no existe entonces se crea una nueva cuenta
document.getElementById("bienvenida").innerText =
    "Primer inicio de sesion " + nombreUsuario;
document.getElementById("montoApertura").innerText = saldoInicial;
cuentas.push({
    nombre: nombreUsuario,
    password: password1,
    saldo: saldoInicial,
});
}
}

//permite la suma de dos numeros
function Calculo(data) {
// ['6', 'x', '6'] // data[i]
let resultado = 0; // 2da: 6 // 3ra: 6
let operacion = ""; // 2da: "" // 3ra: 'x'

for (i = 0; i < data.length; i++) {
// 1ra: i === '6' // 2da: i === 'x' // 3ra: i === '6'
if (data[i] === "+" || data[i] === "-") {
    operacion = data[i]; // 2da: 'x'
} else {
    if (operacion === "") {
    // 1ra: operacion === ""
    resultado = Number(data[i]); // 1ra: Number('6') === 6
    } else {
    if (operacion === "+") {
        resultado = resultado + Number(data[i]);
    }

    if (operacion === "-") {
        resultado = resultado - Number(data[i]);
    }
    }
}
}

return resultado;
}

function CapturarDatos(id) {
let imprimirTotal = document.getElementById("total");
let operaciones = document.getElementById("operaciones");
let saldoFinal = document.getElementById("total1");
let montoInicial = document.getElementById("montoApertura");
let array = [];
total;

if (id === "+" || id === "-") {
// montoInicial.innerText = saldoInicial;
operaciones.innerText = montoInicial.innerText + " " + id;

operador = 1;
} else if (id === "break") {
document.getElementById("bienvenida").innerText =
    nombreUsuario + " " + "¡Gracias por utilizar nuestros servicios!";

imprimirTotal.innerText = "0";
operaciones.innerText = "0";
saldoFinal.innerText = "$";
montoInicial.innerText = "$";

for (i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre == nombreUsuario) {
    userExists = true;
    cuentas[i].saldo = total;
    }
}
} else if (id === "=") {
// operaciones.innerText = confirm('¿Quieres confirmar esta operación?')
document.getElementById("bienvenida").innerText =
    nombreUsuario + " " + "¡Acabas de realizar un movimiento!";

operaciones.innerText =
    operaciones.innerText + " " + imprimirTotal.innerText;
array = operaciones.innerText.split(" ");
total = Calculo(array);
imprimirTotal.innerText = "$" + " " + total;
saldoFinal.innerText = "$" + " " + total;
montoInicial.innerHTML = "";
} else if (id === "c") {
imprimirTotal.innerText = "0";
operaciones.innerText = "0";
saldoFinal.innerText = "$";
} else {
numero = Number(id);

if (imprimirTotal.innerText === "0" || operador === 1) {
    imprimirTotal.innerText = numero;
    operador = 0;
} else {
    imprimirTotal.innerText = imprimirTotal.innerText + numero;
}
}
}