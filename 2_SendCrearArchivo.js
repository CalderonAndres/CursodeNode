
const{crearArchivo}=require('./Helpers/AsyncTabla.js');

const base=2;

crearArchivo(base)
.then(nombreArchivo=> console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));