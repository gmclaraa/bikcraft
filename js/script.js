const links = document.querySelectorAll('.header-menu a');

// Ativar Links do Menu

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url === href) {
        link.classList.add("Ativo");
    }
}

links.forEach(ativarLink)

//2
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) { elemento.checked = true };
}

parametros.forEach(ativarProduto);


//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    console.log(ativa);
    pergunta.setAttribute('aria-expanded', ativa)



}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


//galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');

const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;

    const media = matchMedia('(min-width:1000px)').matches;

    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);


//Animação
if(window.SimpleAnime){
new SimpleAnime();}

