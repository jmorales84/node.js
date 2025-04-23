/*const fs = require('node:fs')
 fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
   if (error)
     console.log(error)
   else
     console.log('El archivo fue creado')
 })
 console.log('última línea del programa')*/


 /*const fs = require('node:fs/promises')
fs.readFile('./archivo1b.txt')
  .then(datos => {
    console.log(datos.toString())
  })
  .catch(error => {
    console.log(error)
  })
console.log('última línea del programa')*/


/*const fs = require('node:fs/promises')
fs.readdir('./')
  .then(archivos => {
    for (let archivo of archivos) {
      console.log(archivo)
} })
  .catch(error => {
    console.log(error)
})*/


const fs = require('node:fs/promises')
async function leerDirectorio() {
  const archivos = await fs.readdir("./")
  for (let archivo of archivos) {
    console.log(archivo)
  }
}
leerDirectorio()

