let frutas = ["banana", "manzana", "pera"]

let pc1 = {
    nombre: "DaltoPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre =  pc1.nombre
let procesador = pc1.procesador
let ram = pc1.ram
let espacio = pc1.espacio

frase = `el nombre de mi Pc es: <b>${nombre}</b> <br>
        el procesador es: <b>${procesador}</b> <br>
        la ram es: <b>${ram}</b> <br>
        el espacio es: <b>${espacio}</b> <br>`
document.write(frase)