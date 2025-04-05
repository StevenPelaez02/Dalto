const Titulo = document.querySelector(".Titulo")

Titulo.classList.add("grande") // add agregar clase
Titulo.classList.remove("grande") // add remover clase
let valor = Titulo.classList.item(1) // nos devuelve el valor de la clase class="Titulo grande rojo" nos da grande
valor = Titulo.classList.contains("grande") // si encuentra el nombre de la clase que le damos nos arroja true o false

Titulo.classList.toggle("grande", true) // si no esta la agrega sino la saca si se le agrega true siempre la pone
valor = Titulo.classList.replace("grande", "chico") // reemplaza una clase por otra y devuelve un booleano


document.writeln(valor)