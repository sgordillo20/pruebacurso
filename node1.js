/* Primero construimos la tabla para la base... la mostramos en el terminal y luego 
comentamos algunos pasajes para no perderlos y cambiar el código para que la tabla se 
grabe en un archivo de texto usando las librerías de node para grabar archivos.*/

const fs = require('fs');

let base = 5;

console.clear();

let salida = '';

for (let i = 1; i <= 10; i++) {

    //    console.log(`${ base } x ${ i } = ${ base * i }`);

    salida += `${ base } x ${ i } = ${ base * i }\n`;

}

// console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creada`);
})