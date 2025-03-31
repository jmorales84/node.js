const {promisify} = require ("util")
function pedirPizzaCallback(callback){
    console.log("Pedidio realiado. Espeando pizza ...");
    setTimeout(()=>{
        let exito = false;
        if (exito){
            callback("!Pizza entregada! Disfruta tu comida");
        }else{
            callback ("Hubo un problema con tu pedido");
        }
    },3000);
}
const pedriPizza = promisify(pedirPizzaCallback)
async function pedirPizzaAwait() {
    try {
        const mensajeExito = await pedriPizza ()
        console.log(mensajeExito)
    } catch (mensajeError) {
        console.log(mensajeError)
        
    }
    
}

pedirPizzaAwait()