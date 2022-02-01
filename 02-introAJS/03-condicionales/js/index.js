//variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg, cantidadesCaracteres;

nombreCompleto = prompt('Ingresa tu Nombre').toUpperCase().trim();
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa tu años actual'));

//proceso lógico
if(nombreCompleto ==="" || añoActual === 0 || añoNacimiento === 0)
{
    msg = "Te faltaron datos por llenar, ingresalos para continuar"
}
else if(añoNacimiento > añoActual)
{
    msg = "¡Cuidado! el año no puede ser mayor al actual"
}
else
{
    // obtener cantidad de caracteres de un string
    cantidadesCaracteres = nombreCompleto.length;
    console.log(cantidadesCaracteres);

        edad = añoActual - añoNacimiento;

    if(edad <= 12)
    {
        msg = `Hola ${nombreCompleto} eres un niño`;
    }
    else if (edad >  12 && edad <18)
    {
        msg = `Hola ${nombreCompleto} eres un adolescente`;
    }
    else if (edad >=18 && edad <65)
    {
        msg = `Hola ${nombreCompleto} eres un adulto`;
    }
    else
    {
        msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
    }
}


//salida de datos
alert(msg);