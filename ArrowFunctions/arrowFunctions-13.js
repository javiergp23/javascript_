//Metodos de propiedad con Arrow Functions
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id...${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion id...${id}`),

    set nuevaCancion(cancion){
        this.cancion = cancion
        console.log(`Añadiendo canción ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'enter sandman';

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)