const argv = require('yargs')
    .option('b',{
        alias:'base', 
        type: 'number',
        demandOption: true
    })  
    .option('l',{
        alias:'listar',
        type: 'boolean',
        demandOption: false
    })
    .option('t',{
        alias:'tamaño',
        type: 'number',
        demandOption: false,
        default: 10})
    .check((argv,option)=>{
        if (isNaN(argv.b)){
            throw 'La base no es numero';
        }
        return true;    
    }).argv;

    module.exports= argv;