
iniciarApp();

function iniciarApp (){
    console.log('Iniciando App');

    segundaFuncion();
}

function segundaFuncion (){
    console.log('Segunda Funcion');
    usuarioAutenticado('Juan');
}

function usuarioAutenticado (usuario){
    console.log('autenticando usuario');
    console.log(`Usuario autenticado: ${usuario}`);
}