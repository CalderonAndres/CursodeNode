const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base, listar, tamaño)=>{
    let salida="";

try {
    for (let index = 1; index <= tamaño; index++) {
        salida += `${colors.bgYellow(base)}${'x'.bgWhite}${index}=${base*index}.\n`;  
    }
    
    if(listar){
        console.log(`<<TABLA DEL ${base}>>`);
        console.log(`<<${tamaño} PRODUCTOS>>\n`);  
        console.log(salida);    
    }
    

    fs.writeFileSync(`./salida/Tabla_del_${base}.txt`, salida);

    return (`Tabla_del_${base}.txt`);
    
} catch (err) {
    throw err;
}}
    //Grabar en un archivo

module.exports ={
    crearArchivo
}


//esta es una forma de controlar con argumentos lo  que quieras que una aplicación muestre 