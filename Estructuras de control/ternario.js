const autenticado = true;
const puedePagar = false;

console.log( autenticado || puedePagar ? "Si puede pagar" : "No autenticado" );
console.log( autenticado && puedePagar ? "Si puede pagar" : "No autenticado" );