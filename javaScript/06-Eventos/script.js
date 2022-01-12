//addEventListener - Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

let img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
img.addEventListener('click', function(){
// console.log('Clicou!');
});//O terceiro parâmetro é opcional

//Callback - É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.
let img1 = document.querySelector('img');
function callback(){
    // console.log('Clicou');
}
img1.addEventListener('click', callback);
img1.addEventListener('click',callback()); //undefined
img.addEventListener('click', function(){
    console.log('Clicou!!');
});
img1.addEventListener('click', () => {
    // console.log('Clicou!');
})

//Event - o primeiro parâmetro do callback é referente ao evento que ocorreu.
let img2 = document.querySelector('img');

function callback(event){
    // console.log(event);
}
img2.addEventListener('click', callback);

//Geralmente utilizam e como nome para o parâmetro!

//Propriedades do event:
let animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    let currentTarget = event.currentTarget; // this
    let target = event.target; //onde o click ocorreu
    let type = event.type; //tipo de evento
    let path = event.path;
    // console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener('click', executarCallback);

//event.preventDefault() - Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
let linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event){
    event.preventDefault();
    // console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink);

//this - a palavra chave this é uma palavra especial de JavaScript que, pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ele fará referência ao elemento em que addEventListener foi adicionado.
let img3 = document.querySelector('img');

function callback(event) {
    console.log(this); //retorna a imagem
    console.log(this.getAttribute('src'));
}
img3.addEventListener('click', callback);

//geralmente igual ao event.currentTarget