const fs = require('fs');
const base=5;
let salida="";
for (let index = 1; index <= 11; index++) {
    const element = base*index;
    salida += `${base}*${index}=${element}\n`;       
}

//Grabar en un archivo

fs.writeFile(`Tabla_del_${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log('tabla creada');
});