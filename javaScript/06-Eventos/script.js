//addEventListener - Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

let img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
img.addEventListener('click', function(){
console.log('Clicou!');
});//O terceiro parâmetro é opcional

