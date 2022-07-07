var argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '1',
        describe: 'Is the base of multiplication',
        type: 'number'
    })
    .option('a', {
        alias: 'amount',
        demandOption: true,
        default: '10',
        describe: 'Amount of multiplications',
        type: 'number'
    })
    .option('l', {
        alias: 'list',
        default: false,
        describe: 'List equal true if want to print result',
        type: 'boolean'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw new Error("The base must be a number");
        } else {
            return true;
        }
    })
    .argv;

    module.exports = argv;