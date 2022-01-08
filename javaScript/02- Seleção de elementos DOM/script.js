let animals = document.getElementById('animais');
// console.log(animals);

//seleciona pela class, retorna um HTMLCollection
let gridSection = document.getElementsByClassName('grid-section');
let contato = document.getElementsByClassName('grid-section contato');

//Seleciona todas as UL's, retorna uma HTMLCollection
let ul = document.getElementsByTagName('ul');

//Retorna o primeiro elemento
// console.log(gridSection[0]);

//QuerySelector retorna o primeiro elemento que combinar com o seu seletor CSS.(. é para classe e # para id);

let animals2 = document.querySelector('.animais');
let contato2 = document.querySelector('#contato');
let lastItem = document.querySelector('.animais-lista li:last-child');
let firstUl = document.querySelector('ul')
let linkCss = document.querySelector('[href^="https://"]');

//busca dentro do Ul apenas
let navItem = firstUl.querySelector('li');

//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
let gridSection2 = document.querySelectorAll('.grid-section');
let list = document.querySelectorAll('ul');
let titulos = document.querySelectorAll('.titulo');
let photoAnimals = document.querySelectorAll('.animais-lista img');


//Retorna o segundo elemento
// console.log(gridSection2[1]);


//Exemplos de htmlCollection e NodeCollection
let gridSectionHtml = document.getElementsByClassName('grid-section');
let gridSectionNode = document.querySelectorAll('.grid-section');

//Adicionando uma classe a um elemento html
firstUl.classList.add('grid-section')

// console.log(gridSectionHtml);
// console.log(gridSectionNode);

//Array-Like: htmlCollection e NodeList são array-like, parecem uma array mas não são. O método Array forEach() por exemplo, existe apenas no NodeList.

//É possível trasformar array-like em uma array real, utilizando o método Array.from()

gridSectionNode.forEach(function(item, index){
    // console.log(index);
});

//Transformando um array-like em array
let arrayGrid = Array.from(gridSectionHtml);
// console.log(arrayGrid);


//Exercícios

//Retorne no console todas as imagens do site

let img = document.querySelectorAll('img');
console.log(img);

//Retorne no console apenas as imagens que começaram com a palavra imagem
let beginImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(beginImg);


//Selecione todos os links internos(onde o href começa com #)
let allLinks = document.querySelectorAll('[href^="#"]')
console.log(allLinks);

//Selecione o primeiro h2 dentro de .animais-descricao
let firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

//Selecione o último p do site
let lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length -1]);