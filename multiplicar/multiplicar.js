//REQUIRES
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor BASE introducido "${base}" no es un número.`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor LÍMITE introducido "${limite}" no es un número.`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}`)
        });
    })
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor BASE introducido "${base}" no es un número.`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor LÍMITE introducido "${limite}" no es un número.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        console.log(data.green);

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}