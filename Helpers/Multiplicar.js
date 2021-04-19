const fs = require('fs');

const crearArchivo = (base=2)=>{
    let salida="";

    for (let index = 1; index <= 11; index++) {
    salida += `${base}*${index}=${base*index}\n`;   
    }   
//Grabar en un archivo
fs.writeFileSync(`Tabla_del_${base}.txt`, salida);
console.log(salida);
console.log("tabla creada");
}

module.exports ={
    crearArchivo
}

//Este deja de funcionar cuando aplico Then y Catch