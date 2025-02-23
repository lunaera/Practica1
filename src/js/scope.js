const diaMes = 14;
const mes = 2;
const fecha_amor = 14;
const febrero = 2;

function ambitoBloque() {
    let musica;
    if (diaMes === fecha_amor && mes === febrero) {
        musica = 'rosas.mp3';
    }

    console.log(musica);
}

ambitoBloque();