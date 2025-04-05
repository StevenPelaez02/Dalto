function saludo(){
    respuesta = prompt("Hola steven,, que mas?")
    if(respuesta == "bien"){
        alert("me alegro")
    } else {
        alert("que pena")
    }
}

function saludar(){
    return "ok"
    alert("hola")
}

let saludos = saludar()
document.write(saludos)