const fs = require('fs');

const crearArchivo = (base = 7)=>{
    let salida="";
   
    return new Promise((resolve, reject)=>{

    for (let index = 1; index <= 11; index++) {
    salida += `${base}*${index}=${base*index}\n`;  
    }
        
    resolve (`Tabla_del_${base}.txt`)
   fs.writeFileSync(`Tabla_del_${base}.txt`, salida);
})
}
//Grabar en un archivo

module.exports ={
    crearArchivo
}