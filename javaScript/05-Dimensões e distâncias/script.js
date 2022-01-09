//Height e Width - Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

let section = document.querySelector('.animais');

section.clientHeight; //height + padding
section.offsetHeight; //height + padding + border
section.scrollHeight; //height total, mesmo dentro de scroll

//exemplos
let listaAnimais = document.querySelector('.animais-lista');

let height = listaAnimais.scrollHeight;
let animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

//mesma coisa para o width (largura)
// getBoundingClientRect() - Método que retorna um objeto com alores de widht, height, distâncias do elemento e mais.

let section2 = document.querySelector('.animais');

let rect = section2.getBoundingClientRect();
rect.height; //height e elemento
rect.width; //width do elemento
rect.top; //distância entre o top do elemento e o scroll
console.log(rect.height);

/** Window */
window.innerWidth; //width da janela
window.outerWidth; //soma dev tools também
window.innerHeight; //height da janela
window.innerWidth; //soma a barra de endereço

window.pageYOffset; //distância total do scroll horizontal
window.pageXOffset; //distância total do scroll vertical

if(window.innerWidth < 600) {
    console.log('Tela menor que 600px');
};

//matchMedia() - utilize match-querie como no css para verificar a largura do browser
let small = window.matchMedia('(max-width: 600px)');
if(small.matches){
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
};

//Dicas: Selecione o elemento no insṕetor(dom);
//Ara no console e digite $0 para selecionar o mesmo
//Os elementos selecionados anteriormente são $1, $2

//Exercícios

//Verifique a distância da primeira imagem em relação ao topo da página.
let img = document.querySelector('img');
let imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens
function somaImagens(){
let imgs = document.querySelectorAll('img');
let soma = 0;
imgs.forEach((imagem)=>{
    soma = soma + imagem.offsetWidth;
    
});
console.log(soma);
}

window.onload = function(){
somaImagens();
}