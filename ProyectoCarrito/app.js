// Variables
const carrito = document.getElementById("#carrito");
const contenedorCarrito = document.getElementById("#lista-carrito tbody");
const vaciarCarrito = document.getElementById("#vaciar-carrito");
const listaCursos = document.getElementById('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso)

}

// Funciones
function agregarCurso(){
    console.log('presionando en cursos')
}
