//Height e Width - Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.

let section = document.querySelector('.animais');

section.clientHeight; //height + padding
section.offsetHeight; //height + padding + border
section.scrollHeight; //height total, mesmo dentro de scroll

