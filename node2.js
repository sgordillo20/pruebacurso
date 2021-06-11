const { crearTablaMultiplicar } = require('./lib/multiplicar.js');

console.clear();

const base = 4;

crearTablaMultiplicar(base)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));


/* Podriamos mandar una serie de argumentos desde la linea de comandos al momento de ejecutar 
el programa. Esos datos se leen con la función que viene en node process.argv */

const dato = process.argv;
console.log(dato);

/* se puede ver en la impresion de 'dato' los argumentos que maneja process.argv

como es demasiado libre y complejo de manejar en esas condiciones, se usa una nomenclatura clásica
o estandar que se llama yargs.

const argv = require('yargs').argv;

te entrega una data arreglada de la linea de comandos entre mil opciones más bonitas y baratas.

hay que instalarlo en la aplicación con 'npm i yargs' */