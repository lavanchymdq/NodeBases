const { rejects } = require('assert');
const fs = require('fs');
var colors = require('colors');

//Funcion retornando promesa a travez de async
const crearArchivo = async (base = 1, amount = 10, list = false) => {
    try {

        let header = '';
        let body = '';

        header += '============\n';
        header += `Tabla del ${base}\n`;
        header += '============\n\n';

        if (list) {
            for (let index = 1; index <= amount; index++) {
                body += `${index} X ${base} = ${index * base}\n`;
            }
        }

        console.log(header.yellow, body.green);
        fs.writeFileSync(`output/tabla-${base}.txt`, header + body);

        return `Archivo tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }

}

//Funcion utilizando pronesa
// const crearArchivo = async (base = 1) => {
//     return new Promise((resolve, reject) => {
//         let salida = '';

//         salida += '============\n';
//         salida += `Tabla del ${base}\n`;
//         salida += '============\n\n';

//         for (let index = 1; index <= 10; index++) {
//             salida += `${index} X ${base} = ${index * base}\n`;
//         }

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`Archivo tabla-${base}.txt creado`);
//     });

// }

module.exports = { crearArchivo }