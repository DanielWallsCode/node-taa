const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe:'Es la base de multiplicar'
        })
        .option('l', {
            alias:'listar',
            type:'bolean',
            default: true,
            describe:'Muestra la tabla de multiplicar'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default:10,
            describe:'ESTE ES HASTA QUE NUMERO VA A IR TU TABLA DE MULTIPLICAR'

        })
        .check((argv, options) =>{
            if(isNaN(argv.b)){
                throw 'la base tiene que ser un numero'
            }
            return true;
        })
        .argv;

module.exports = argv;