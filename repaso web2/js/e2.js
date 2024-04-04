//ejempplo para saber si una persona de deda x es mayor de edad
var anio,edad;
anio=parseInt(prompt("ingrese el año de nacimiento"));
edad=2024-anio;
    if(edad>=18)//verdad
    {
        alert ("MAYOR DE EDAD");
    }
    else 
    {
        alert ("MENOR DE EDAD");
    }// en caso de ser falso



    var dia;
    dia=parseInt(prompt("ingrese dia entre 1 y 7: "));

    switch(dia)
    {
        case 1: alert("lun"); break;
        case 2: alert("mar"); break;
        case 3: alert("mie"); break;
        case 4: alert("jue"); break;
        case 5: alert("vie"); break;
        case 6: alert("sab"); break;
        case 7: alert("dom"); break;
        default: alert("fuera de rango bb :c");

    }