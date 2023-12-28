let free = false;

const validarCliente = (time)=>{
    let edad = prompt ("¿Cual es tu edad?");
    if (edad > 18){
        if (time >= 2 && time < 7 && free==false){
            alert("Podes pasar ¡Gratis! porque sos la primer persona despues de las 2am");
            free = true;
        } else {
            alert(`Son las ${time}:00Hs. Podes pasar, pero tenes que pagar el cover`);
        }

    } else {
        alert("Estas peque nene, ve con tu mamá colele, colele");
    }
}

validarCliente(20);
validarCliente(21);
validarCliente(22);
validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);
validarCliente(6);
validarCliente(7);
