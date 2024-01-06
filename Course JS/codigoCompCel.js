class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("El celular está apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada con resolución ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

const celular1 = new Celular("Rojo","150g","5.5'","Full HD","2GB");
const celular2 = new Celular("Negro","180g","6.5'","HD","4GB");
const celular3 = new Celular("Blanco","190g","6.7'","4K","8GB");

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();