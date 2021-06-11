const empleados = [{
        id: 1,
        nombre: 'sergio'
    },
    {
        id: 2,
        nombre: 'maite'
    },
    {
        id: 3,
        nombre: 'felipe'
    }
];

const sueldos = [{
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }

];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id);

        /*        if (empleado) {
                    resolve(empleado);
                } else {
                    reject(`no existe empleado con id ${ id }`)
                }
        */

        //       IF SIMPLIFICADO

        (empleado) ?
        resolve(empleado): reject(`no existe empleado con id ${ id }`);




    });
};

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const sueldo = sueldos.find(e => e.id === id);


        (sueldo) ?
        resolve(sueldo): reject(`empleado con id ${ id } trabaja por la comida y no tiene sueldo`);

    });
};

const id = 3;

/*getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));


getSalario(id)
    .then(sueldo => console.log(sueldo))
    .catch(err => console.log(err));

*/

// PROMESAS EN CADENA

/*let nombre;

getEmpleado(id)
    .then(empleado => {

        nombre = empleado;
        return getSalario(id);
    })
    .then(sueldo => console.log('el empleado', nombre.nombre, 'tiene un salario de', sueldo.sueldo))
    .catch(err => console.log(err));

*/
// PROMESAS CON ASYNC Y AWAIT


const getInfoUsuario = async(id) => {

    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `el salario del empleado: ${ empleado.nombre } es de ${ salario.sueldo }`;

    } catch (error) {
        throw error; //manda un error como reject de la promesa...
    }


}

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));