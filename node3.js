const { crearTablaMultiplicar } = require('./lib/multiplicar.js');
const argv = require('./config/yargs');

/* podemos configurar lo que recibimos en la consola como argumento e incluso validar o condicionar
la entrada de datos según queramos... 

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un número';
        } else {
            return true;
        }
    })
    .argv;

/* para despejar el código se puede configurar yargs en archivo externo e importarlo con require */


console.clear();

crearTablaMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));