const fs = require('fs');

const crearArchivo = async(base)=>{
    let salida="";

try {
    for (let index = 1; index <= 11; index++) {
        salida += `${base}*${index}=${base*index}\n`;  
    }

    console.log(salida);

    fs.writeFileSync(`Tabla_del_${base}.txt`, salida);

    return (`Tabla_del_${base}.txt`);
    
} catch (err) {
    throw err;
}}
    //Grabar en un archivo

module.exports ={
    crearArchivo
}