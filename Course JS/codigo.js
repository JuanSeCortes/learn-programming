const materias = {
    Fisica:[90,6,3,"Fisica:"],
    Matematicas:[84,8,2,"Matematicas:"],
    Logica:[92,8,4,"Logica:"],
    Quimica:[96,8,4,"Quimica:"],
    Calculo:[91,6,3,"Calculo:"],
    Programacion:[79,7,4,"Programacion:"],
    Biologia:[75,9,2,"Biologia:"],
    Ingles:[98,9,1,"Ingles:"],
    Algebra:[100,10,4,"Algebra:"],
}

console.log("%cSi usted tiene al menos un requerimiento en rojo esta ¡Reprobado!","color:yellow")

const aprobadoONo = ()=>{
    for (materia in materias){
        let asistencia = materias[materia][0];
        let trabajos = materias[materia][2];
        let promedios = materias[materia][1];

        
        console.log(materias[materia][3]);

        if (asistencia >= 90){
            console.log("%c  Asistencias en Orden","color:green");
        } else {
            console.log("%c  Inasistencia","color:red");
        }

        if (promedios >= 7){
            console.log("%c  Promedio en Orden","color:green");
        } else {
            console.log("%c  Promedio Insuficiente","color:red");
        }
        
        if (trabajos >= 90){
            console.log("%c  Trabajos en Orden","color:green");
        } else {
            console.log("%c  Trabajos Insuficientes","color:red");
        }
    }
}

aprobadoONo()