var botonAdicionar = document.querySelector("#adicionar-paciente"); //Selecciono el boton adicionar de la pagina

botonAdicionar.addEventListener("click",function(event){        
//Captura el evento "click" definifa con respecto a la variable BotonAdicionar
// Se utiliza una funcion anonima, que solo sera utilizada en este evento

    event.preventDefault();                                     //Quita el comportamiento predeterminado del evento click, de actualizar la pagina automaticamente

    var form = document.querySelector("#form-adicionar");       // Captura el elemento formulario
    var paciente = capturarDatosPaciente(form);                 // Llama a la funcion que con los datos del formulario crea el objeti paciente. 
    
    var errores = validarPaciente(paciente);

    if(errores.length > 0){                                     //En caso de error muestra el Spam del archivo html
        exhibirMensajesErrores(errores);                        //Llamo a la funcion de exhibir mensaje
        return;                                                 // Al returnar un vacio, no se ingresa los datos a la tabla
    }
    adicionarPacienteTabla(paciente);
    form.reset();                                               //Resetea las cajas de usuarios tras presionar el boton

    var mensajeErrores = document.querySelector("#mensaje-errores");
    mensajeErrores.innerHTML = "";                         // Al corregir el dato cierra la lista de errores. *innerHTML edita el string del elemento interno de HTML
})

//FUNCION QUE PERMITE AGREGAR PACIENTES A LA TABLA
function adicionarPacienteTabla(paciente){
    var pacienteTr = construirTr(paciente);                     // Utiliza los datos del objeto paciente para crear la tabla  
    var tabla = document.querySelector("#tabla-pacientes");     // Captura los elementos del cuerpo de la tabla 
    tabla.appendChild(pacienteTr);                              //Vincula y adiciona pacienteTr a la tabla
}


    
//CAPTURA LOS DATOS DEL FORMULARIO
function capturarDatosPaciente(form){
    var paciente = {                                            //Asigna los datos capturados a un objeti. Cada propiedad se separa con ","                                
        nombre: form.nombre.value,                         
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)    //El objeto llama a la funcion, y utiliza los datos de la clase.
    }
    return paciente;
}

function construirTr (paciente){

        //CREA LOS TDS Y UN TR
        var pacienteTr = document.createElement("tr");              //Crea una etiqueta <tr>
        pacienteTr.classList.add("paciente");                       //Todo paciente nuevo que se adicione, se agregara a la lista PACIENTE.
       
        //ASIGNACION AL TR A LOS TD
        pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));  //Vincula nombreTr a la variable pacienteTr y (Llamo a la funcion para crea una etiqueta <td>)
        pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
        pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
        pacienteTr.appendChild(construirTd(paciente.imc,"info-imc")); 
        
        return pacienteTr;
}

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td
}

function validarPaciente(paciente){
    var errores = [];
    
    if(paciente.nombre.length == 0){              
        errores.push("ERROR. Ingrese nombre del paciente.");
    }
    if(paciente.peso.length == 0){              
        errores.push("ERROR. Ingrese peso del paciente.");
    }
    if(paciente.altura.length == 0){              
        errores.push("ERROR. Ingrese altura del paciente.");
    }
    if(paciente.gordura.length == 0){              
        errores.push("ERROR. Ingrese %gordura del paciente.");
    }
    if(!validarPeso(paciente.peso)){              //Llamo a la funcion del otro archivo JS
    errores.push("ERROR. Verifique el dato peso.");
    }
    if(!validarAltura(paciente.altura)){              
        errores.push("ERROR. Verifique el dato altura.");
    }

    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensaje-errores");            //Crea una variable lista, que selecciona el elemento lista de HTML
    ul.innerHTML = "";                                              //Cierra la lista de errores.
    
    errores.forEach(function(error){                                
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);

    /*Llama a la lisita "errores", por cada elemento de esta lista, se crea una funcion anonima, que integrara cada error.
    Se crea una variable que sera un sub-item de la lista, que invocara la creacion de elemento lista en HTML
    el contenido de ese item sera asignado al parametro error
    Por ultimo se le asigna a la lista, cada sub-item generado, con "appenChild*/
    })  
}
    