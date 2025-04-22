/* const fs = require('node:fs')
 fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
   if (error)
     console.log(error)
   else
     console.log('El archivo fue creado')
 })
 console.log('última línea del programa')*/
 
const fs = require('node:fs/promises')
fs.writeFile('./archivo1b.txt', 'línea 1\nLínea 2\n creado con promesas.')
  .then(() => {
    console.log('El archivo de texto fue creado empleando promesas')
  })
  .catch(error => {
    console.log(error)
  })
console.log('última línea del programa') 