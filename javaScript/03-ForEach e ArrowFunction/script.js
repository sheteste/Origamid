//Para visualizar no navegador basta remover os comentários do console.

//ForEach - É um método e a melhor forma para interagirmos com uma lista de itens do DOM.

let imgs = document.querySelectorAll('img');
imgs.forEach(function(item){
    // console.log(item);
});

/*Parâmetros do ForEach:
1-Primeiro parâmetro é o callback, ou seja a função que será ativada a cda item. Essa função pode receber três parâmetros:
valorAtual, index e array
*/
let imgs1 = document.querySelectorAll('img');
imgs.forEach(function(item, index, array){
    // console.log(item); //o item do loop
    // console.log(index); // o número do index
    // console.log(array); // o array completo
});

//ForEach e Array: o forEach é um método de Array, alguns objetos array-lke possuem este método. Caso não possua, o ideal é tranforma-lo em uma array.
let titulos = document.getElementsByClassName('titulo');
let titulosArray = Array.from(titulos); //transforma o titulos que é um htmlCollection em um array

titulosArray.forEach(function(item, index, array){
    // console.log(item, index, array);
})

//Arrow Functions - Sintaxe curta em relação a function expression. Basta remover a palavra cheve function e adicionar a fat arrow => após os argumentos.
let imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
    // console.log(item);
});

//Argumentos e parênteses
let photos = document.querySelectorAll('img');

//argumento único não precisa de parêntesis
photos.forEach(item => { //arguento sem parênteses
    // console.log(item);
});

//multiplos argumentos precisam de parêntesis
photos.forEach((item, index) =>{
    // console.log(item, index);
});

//sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
photos.forEach(() =>{
    // console.log(i++);
})

//Quando só tem uma linha de código não precisa das chaves.
// photos.forEach((item) => console.log(i++));

//Exercícios:

//Mostre no console cada parágrafo do site
let paragrafo = document.querySelectorAll('p');
paragrafo.forEach((item)=>{
    console.log(item);
})
//Mostre o texto dos parágrafos no console
paragrafo.forEach((item)=>{
    console.log(item.innerText);
})

//Corrigindo os erros abaixo
let photo = document.querySelectorAll('img');
photo.forEach((item, index) => {
    console.log(item, index);
});

let index = 0;
photo.forEach(() => {
    console.log(index++);
});
photo.forEach(() => index++);