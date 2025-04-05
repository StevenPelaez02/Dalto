const contenedor = document.querySelector(".contenedor")

// const primerHijo = contenedor.firstChild // para el primer hijo, debe estar junto a la etiqueta padre
// const primerHijo = contenedor.lastChild // para el ultimo hijo, debe estar junto a la etiqueta padre
// const primerHijo = contenedor.firstElementChild // para el primer elemento hijo, debe estar junto a la etiqueta padre
// const primerHijo = contenedor.lastElementChild // para el ultimo elemento hijo, debe estar junto a la etiqueta padre
// const hijos = contenedor.childNodes // para todos los hijos los espacios entre elementos cuentan como texto
// const hijos = contenedor.children // para todos los elementos hijos 


// metodos de hijos

const parrafo = document.createElement("P").innerHTML = "Parrafo" // para todos los elementos hijos
let  h2_nuevo = document.createElement("H2")
// h2_nuevo.innerHTML = "Titulo"

const h2_antiguo  = document.querySelector(".h2")

// //contenedor.replaceChild(h2_nuevo, h2_antiguo) // reemplazamos uno por otro
// contenedor.removeChild(h2_antiguo) // eliminamos hijo antiguo H2_viejo
// // let respuesta = h2_antiguo.hasChildNodes();
// let respuesta = h2_antiguo.hasChildNodes();

// if(respuesta){
//     document.writeln("el elemento tiene hijos")
// }else{
//     document.writeln("no tiene")
// }

// let h2_a = document.querySelector(".h2");

// console.log(h2_a.parentElement);
// console.log(h2_a.parentNode);

// propiedades de siblings


console.log(h2_antiguo.nextSibling)
console.log(h2_antiguo.previousSibling)
console.log(h2_antiguo.previousElementSibling)
console.log(h2_antiguo.nextElementSibling)

// nodos extras

const div = document.querySelector(".div-3");

console.log(div.closest(".div"))