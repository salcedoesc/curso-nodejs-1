
/*
Módulo de un único archivo
============================
Vamos a crear un programa muy sencillo que nos permita 
sumar, restar y dividir números y mostrarlos por la consola. 
Las funcionalidades las dispondremos en un módulo de archivo y 
veremos como la consumimos en nuestro programa principal.

Primero creemos nuestro módulo llamado matematica.js con el siguiente código:
*/

const PI=3.14;

function sumar(x1,x2)
{
  return x1+x2;
}
 
function restar(x1,x2)
{
  return x1-x2;
}
 
function dividir(x1,x2)
{
  if (x2==0)
  {
    mostrarErrorDivision();
  }
  else
  {
    return x1/x2;
  }
}
 
function mostrarErrorDivision() {
  console.log('No se puede dividir por cero');
}
 
exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI; 