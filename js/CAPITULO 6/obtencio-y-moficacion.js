// const titulo = document.querySelector(".titulo")

// let resultado = titulo.textContent // nos muestra el texto sin el estilo que el deesarrollador desee
// resultado = titulo.innerHTML // lo mismo que textcontent pero nos muestra html tambien
// resultado = titulo.outerHTML // lo mismo que innerHTML pero tambien nos muestra la etiqueta en la que estamos

const contenedor = document.querySelector(".contenedor")
const fragmento = document.createDocumentFragment()

for(let i = 0; i < 20; i++){
    const item = document.createElement("LI")
    item.innerHTML = "Este es un item de la lista"
    fragmento.appendChild(item)
}
contenedor.appendChild(fragmento)
console.log(fragmento)
