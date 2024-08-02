//comparando con else if condicionales parte cuatro

const dinero = 500;
const totalAPagar = 300;
const tarjeta = false;

if(dinero < totalAPagar){
    console.log('Podemos pagar')
}else if(tarjeta){
    console.log('Podemos pagar con tarjeta')
}else{
    console.log('fondos insuficientes')
}
