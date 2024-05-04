const listaDeTeclas =  document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = playPom;

function playPom () {
    document.querySelector("#sonido_tecla_pom").play();

}

