const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción id...${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    borrar: function(id){
        console.log(`Borrando cancion id...${id}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)