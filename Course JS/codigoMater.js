const obtenerInformacion = (materia)=>{
    materias = {
        fisica:["Martha Lucia","Sebas","Pablo","Juan","Isa"],
        quimica:["Arturo Cardenas","Sebas","Paula","Pablo"],
        matematicas:["Silvia Rodriguez","Sebas","Paula","Pablo","Juan","Isa"],
        ingles:["Norberto Rios","Sebas","Paula","Pablo","Juan",],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor(a) de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style="color:blue" >
    ${alumno} </b> está en <b>${cantidadTotal} clases:</b> <b style="color:green" >
    ${clasesPresentes}</b><br><br>
    `;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("matematicas");
mostrarInformacion("ingles");

document.write(cantidadDeClases("Sebas"));
document.write(cantidadDeClases("Paula"));
document.write(cantidadDeClases("Pablo"));
document.write(cantidadDeClases("Juan"));
document.write(cantidadDeClases("Isa"));