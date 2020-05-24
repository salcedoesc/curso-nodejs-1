/*
 En este archivo podemos definir variables, funciones, objetos etc. y los
  que necesitamos que sean accedidos desde otro archivo los
   exportamos agregándolos al objeto exports:
 */

 /*Codifiquemos ahora nuestra aplicación principal que la llamaremos INVOCAR.js 
 y también la guardamos en la misma carpeta donde tenemos el archivo mate.js: */

 const mat=require('./mate');

console.log('La suma de 2+2='+mat.sumar(2,2));
console.log('La resta de 4-1='+mat.restar(4,1));
console.log('La división de 6/3='+mat.dividir(6,3));
console.log('El valor de PI='+mat.PI);

