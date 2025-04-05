let youtubeURL = "https://youtube.com"

// let ventana = window.open(youtubeURL) // abrir una nueva ventana 

// ventana.close() // cerrar la ventana qur abrimos
// ventana.closed //nos verifica si la ventana cerro o no
// window.stop() // no para la carga de la pagina 
// print() // para imprimir la X de recarga en el navegador
// prompt("dame un dato") // pedir un dato
// let respuesta = confirm("estas seguro que deseas salir? ") //esto se usa para confirmar y devuelve un booleano

// const screnn = window.screen
// const scrennLeft = window.screenLeft // nos dice la distancia entre el borde izquierdo de la pagina y el inicio de la pantalla (solo lectura)
// const scrennTop = window.screenTop // nos dice la distancia entre el borde de arriba de la pagina y el top de la pantalla (solo lectura)

// document.writeln(scrennLeft + "<br>")
// document.writeln(scrennTop + "<br>")
// document.writeln(screnn.availWidth)

// const scrollX = window.scrollX // nos dice los pixeles del scroll en horizontal
// const scrollY = window.scrollY // nos dice los pixeles del scroll en vertical


// alert("X = " + scrollX + " Y = "  + scrollY)

// window.scroll(0, 1200) // nos manda a los pixeles del scroll en x e y Es Absoluto
// window.scrollto(0, 1200) // casi lo mismo a scroll hacen lo mismo

// let ventana = window.open("https://youtube.com")

// ventana.resizeBy(100, 200)
// ventana.resizeTo(100, 200)
// ventana.moveTo(100, 200)
// ventana.moveBy(100, 200)

// LOCATION


const href = window.location.href // url de la pagina
document.writeln(href + "<br>")
const hostname = window.location.hostname // nos devueve el dominio de la pagina
document.writeln(hostname + "<br>")
const pathname = window.location.pathname // desde el origen del dominio nos dice en donde estamos
document.writeln(pathname + "<br>")
const protocol = window.location.protocol // el protocolo
document.writeln(protocol + "<br>")
const assign = window.location.assign() // cargar un nuevo documento
document.writeln(assign + "<br>")

