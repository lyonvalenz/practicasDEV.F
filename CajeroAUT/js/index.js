let cuentas = [];
let numero, operador, saldoInicial, nombreUsuario, password1, saldoEnCuenta, userExists, correctPassword, total;

function enterData() {
    nombreUsuario = document.getElementById("nombre").value;
    password1 = document.getElementById("password").value;
    saldoInicial = document.getElementById("apertura").value;

userExists = false;
correctPassword = false;
saldoEnCuenta = 0;

for (i = 0; i < cuentas.length; i++) {

    if (cuentas[i].nombre == nombreUsuario) {

        userExists = true;
        if (cuentas[i].password == password1) {

        correctPassword = true;
        saldoEnCuenta = cuentas[i].saldo; 
        }
    }
}

if (userExists == true && correctPassword == false) {

document.getElementById("bienvenida").innerText =
    "Su contraseña es incorrecta";
document.getElementById("operaciones").innerText = 0;
} else if (userExists == true && correctPassword == true) {

document.getElementById("bienvenida").innerText =
    "Bienvenido de nuevo " + nombreUsuario;
document.getElementById("montoApertura").innerText = saldoEnCuenta;
} else {

    document.getElementById("bienvenida").innerText =
        "Sesion de " + nombreUsuario + " , ¡Bienvenido!";
    document.getElementById("montoApertura").innerText = saldoInicial;
    cuentas.push({
        nombre: nombreUsuario,
        password: password1,
        saldo: saldoInicial,
        });
    }
}


function Calculo(data) {

let resultado = 0; 
let operacion = ""; 

for (i = 0; i < data.length; i++) {

        if (data[i] === "+" || data[i] === "-") {
            operacion = data[i]; 
        } else {
            if (operacion === "") {

    resultado = Number(data[i]); 
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

    operaciones.innerText = montoInicial.innerText + " " + id;

    operador = 1;
} else if (id === "break") {
    document.getElementById("bienvenida").innerText =
    nombreUsuario + " " + "Gracias y vuelva pronto";

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

document.getElementById("bienvenida").innerText =
    nombreUsuario + " " + " Operación exitosa";

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