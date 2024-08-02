//Estructura de control switch con condicionales

const metodoDePago = 'efectivo';

switch(metodoDePago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoDePago}`)
        break;
    case 'tarjeta':
        console.log('Tarjeta')
        break;
    default:
        console.log('No se pudo identificar el metodo de pago')
        break;
}