const fs = require('fs');

console.clear();

let salida = '';
let archivo = '';

const crearTablaMultiplicar = async(base, listar = false, hasta = 10) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log(salida);
        };

        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creada`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearTablaMultiplicar
}