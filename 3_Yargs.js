require('colors');
const{crearArchivo}=require('./Helpers/AsyncTablaYargs.js');
const argv = require('./config/yargs');

console.clear();   
    
console.log('base:', argv.base);      
   
crearArchivo(argv.b, argv.l, argv.t)
.then(nombreArchivo=> console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));



//esta es una forma de controlar con argumentos lo  que quieras que una aplicación muestre 
