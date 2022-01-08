let animals = document.getElementById('animais');
console.log(animals);

//seleciona pela class, retorna um HTMLCollection
let gridSection = document.getElementsByClassName('grid-section');
let contato = document.getElementsByClassName('grid-section contato');

//Seleciona todas as UL's, retorna uma HTMLCollection
let ul = document.getElementsByTagName('ul');

//Retorna o primeiro elemento
console.log(gridSection[0]);

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
console.log(gridSection2[1]);