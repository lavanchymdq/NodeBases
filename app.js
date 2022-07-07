const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
var colors = require('colors');

console.clear();

// console.log(process.argv);
//Obtener argumentos de ejecucion manualmente
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);

//Obtener argumentos con yargs
const { base, list, amount } = argv;

crearArchivo(base,amount, list).
    then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'.blue)).
    catch(err => console.log(err.red));

