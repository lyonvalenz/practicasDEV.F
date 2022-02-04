let txtNombre, fechaNac, edad, fechaActual, añoNac, añoActual, mes, dias;

function capturaNombre ()
{
    txtNombre = document.getElementById('nombre');

    alert('Tu nombre es: ' + txtNombre.value);

}

function calcularEdad()
{
    let fecha = new Date(); 

    fechaNac = Number (document.getElementById('fecha').value.slice(0,4));
    añoActual = fecha.getFullYear();

    if(añoActual < añoNac)
    {
        alert('Elige un año de nacimiento valido');
    }
    else
    {
        edad = añoActual - añoNac
        document.getElementById('edad').innerText = 'Te edad es: ' + edad;
    }
}

document.getElementById('calcular').addEventListener('click', calcularEdad);

function cambiarColor()
{
    document.getElementById('cuerpo').style.backgroundColor = 'green'
}


//sacar edad mes y dias
//cambio de color de vuelta