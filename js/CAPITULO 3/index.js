class Animal {
    constructor(especie, edad, color){
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y mi color es ${this.color}`
    }
    verInformacion(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = null
    }
    static ladrar(){
        alert("Waw")
    }
    set setRaza(newName){
        this.raza = newName
    }
    get getRaza(){
        this.raza
    }
}

const perro = new Perro ("perro", 5, "marron", "doberman")
const gato = new Animal("gato", 2, "negro")
const pajaro = new Animal("pajaro", 1, "azul")

perro.setRaza = "pedro"
document.write(perro.getRaza)