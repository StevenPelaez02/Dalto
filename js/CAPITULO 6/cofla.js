const contenedor = document.querySelector(".flex-container")
let contador = 0

function crearLlave(nombre, modelo, precio){
    contador++
    img = "<img src='llave.png'>"
    nombre = `<h2>${nombre}</h2>`
    modelo = `<h3 id='${modelo}'>${modelo}<h3>`
    precio = `<p>Precio: <b>$${precio}</b><h3>`

    return[img, nombre, modelo, precio]
}

let documentFragment = document.createDocumentFragment();

for(let i = 0; i < 20; i++){
    let div = document.createElement("DIV")
    let modeloRandom = Math.round(Math.random()*1000000)
    let precioRandom = Math.round(Math.random()*10+30)
    let llave = crearLlave(`Llave ${i}`, `modeloRandom: ${modeloRandom}`, `${precioRandom}`)
    div.classList.add(`item-${i}`, 'flex-item')
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)