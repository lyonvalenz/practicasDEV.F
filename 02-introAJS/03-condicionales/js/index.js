//variables
var nombreCompleto, añoNacimiento, añoActual, edad;

nombreCompleto = prompt('Ingresa tu Nombre');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa tu años actual'));

//proceso lógico
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


//salida de datos
alert(msg);