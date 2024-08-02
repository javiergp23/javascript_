const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!puedePagar && !usuario){
    console.log('no puedes pagar');
}
else if(!usuario){
    console.log('Inicia sesión o crea una cuenta');
}else if(!puedePagar){
    console.log('fondos insuficientes');
}