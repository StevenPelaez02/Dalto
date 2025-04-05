class Celulares {
    constructor(color, peso, resolucionP, resolucionCamara, ram){
        this.color = color
        this.peso = peso
        this.resolucionP = resolucionP
        this.resolucionCamara = resolucionCamara
        this.ram = ram
        this.encendido = false
    }
    prender(){
        if(this.encendido == false){
            alert("Celular encendido")
            this.encendido = true
        }else{
            alert("Celular apagado")
        }
    }

    apagar(){
        if(this.encendido == true){
            alert("Celular apagado")
            this.encendido = false
        }else{
            alert("Celular encendido")
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando Celular")
        } else {
            alert("Celular apagado")
        }
    }

    tomarFotos(){
        if(this.encendido == true){
            alert(`foto tomada en una resolucion de ${this.resolucionCamara}`)
        }else{
            alert("Celular apagado")
        }
    }

    grabar(){
        alert(`grabando video en resolucion de ${this.resolucionCamara}`)
    }
    mobileInfo(){
        return `
                Color: <b>${this.color}</b><br>
                Peso: <b>${this.peso}</b><br>
                Tamano: <b>${this.resolucionP}</b><br>
                Resolucion de video: <b>$${this.resolucionCamara}</b><br>
                Memoria Ram: <b>${this.ram}</b><br>
                `
    }
}

// const celular1 = new Celulares("rojo", "100g", "1080", "2k", "16GB")
// const celular2 = new Celulares("negro", "155g", "1080", "4k", "32GB")
// const celular3 = new Celulares("morado", "100g", "1080", "1080", "4GB")

// celular.prender()
// celular.tomarFotos()
// celular.grabar()
// celular.reiniciar()
// celular.tomarFotos()

// document.write(`
//                 ${celular1.mobileInfo()} <br>
//                 ${celular2.mobileInfo()} <br>
//                 ${celular3.mobileInfo()} <br>
//                 `)

// class celularesAG extends Celulares{
//     constructor(color, peso, resolucionP, resolucionCamara, ram, camaraExtra){
//         super(color, peso, resolucionP, resolucionCamara, ram)
//         this.camaraExtra = camaraExtra
//     }
//     grabarSuperLento(){
//         alert("Grabando Super Lento")
//     }
//     reconocimientoFacial(){
//         alert("Reconociendo tu cara")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion Cama extras: ${this.camaraExtra} <br>`
//     }
// }

// const celular1 = new celularesAG("rojo", "130g", "5.2'", "4k", "3GB", "Full Hd");
// const celular2 = new celularesAG("negro", "142g", "6'", "4k", "4GB", "HD");

// document.write(`
//                 ${celular1.infoAltaGama()} <br>
//                 ${celular2.infoAltaGama()} <br>
//     `)

class descargarApp{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas
        this.puntuacion = puntuacion
        this.peso = peso
        this.iniciada = false
        this.instalada = false
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true
            alert("App iniciada")
        }
    }
    cerrar() {
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false
            alert("App cerrada")
        }
    }
    instalar() {
        if(this.instalada == false){
            this.instalada = true
            alert("App instalada Correctamente")
        }
    }
    desinstalar() {
        if(this.instalada == true){
            this.instalada = false
            alert("App desinstalada Correctamente")
        }
    }
    appInfo(){
        return `
                Descargas: <b style="color: red">${this.descargas}</b> <br>
                Puntuacion: <b style="color: red">${this.puntuacion}</b> <br>
                Peso: <b style="color: red">${this.peso}</b> <br>
                `
    }
}

const app1 = new descargarApp("1000", "5 estrellas", "900mb")
const app2 = new descargarApp("6000", "4 estrellas", "100mb")
const app3 = new descargarApp("100", "5 estrellas", "1900mb")
const app4 = new descargarApp("16000", "4 estrellas", "230mb")
const app5 = new descargarApp("500", "2 estrellas", "490mb")
const app6 = new descargarApp("80", "4 estrellas", "200mb")
const app7 = new descargarApp("160", "1 estrellas", "30mb")

// app.instalar()
// app.abrir()
// app.cerrar()
// app.desinstalar()

document.write(`
                ${app1.appInfo()} <br>
                ${app2.appInfo()} <br>
                ${app3.appInfo()} <br>
                ${app4.appInfo()} <br>
                ${app5.appInfo()} <br>
                ${app6.appInfo()} <br>
                ${app7.appInfo()} <br>
                `)

