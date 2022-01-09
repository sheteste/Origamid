//classList - Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
let menu = document.querySelector('.menu');
menu.className; //string
menu.classList; //lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo'); //true or false
menu.classList.replace('ativo', 'inativo');

//Atributes - Retorna um array-like com os atributos do elemento
let animals = document.querySelector('.animais');
animals.attributes; //retorna todos os atributos
animals.attributes[0]; //retorna o primeiro atributo

//por padrão ele não pode receber uma variável que receba ífem nele, passa como array, dentro de aspas, tem que estar dentro das aspas pois o nome não é reconhecido como uma variável, etão ele não pode ser uma propriedade.
// console.log(animals.attributes['data-texto']);

//getAttribute e setAttribute - Métodos que retornam ou definem de acordo com o atributo selecionado.
let img = document.querySelector('img');

img.getAttribute('src'); //valor do src
console.log(img.getAttribute('src'));
img.getAttribute('alt', 'texto alternativo'); //muda o alt
img.hasAttribute('alt'); //remove o alt
img.removeAttribute('alt'); //remove o alt

img.hasAttributes(); //true /false tem algum atributo

//Exercícios
//Adicione a classe ativo para todos os itens do menu
let itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo')
})

//Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo')
});
itensMenu[0].classList.add('ativo');
//Verifique se as imagens possuem atributos alt
let image = document.querySelectorAll('img');
image.forEach((img) => {
    let possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
});

//Modifique o href do link externo no menu
let link = document.querySelector('a[href^="http"]');