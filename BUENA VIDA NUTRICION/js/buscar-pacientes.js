var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){                                        //Captura el evento click en el boton buscar
    var xhr = new XMLHttpRequest;                                                       //Permite conectar e intercambiar datos con un servidor externo
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");   //Abre y obtiene el link del sevidor que queremos conectar
    xhr.addEventListener("load", function(){                                            //Captura el eventos "load", Que es la carga de respuestas
        
        var errorAjax = document.querySelector("#error-ajax")
        if(xhr.status == 200){                                                          //Si el status es 200 adicionamos pacientes
            errorAjax.classList.add("invisible");                                       //Si no hay error, no mostrar el spam
            var respuesta = xhr.responseText;                                           //Variable respuestas del servidor
        
            var pacientes = JSON.parse(respuesta);                                      //Variable pacientes: son los valores de la variable respuesta, que son convertidos de string a JSON
            
            pacientes.forEach(function(paciente){                                       //Itero entre todos los pacientes
                adicionarPacienteTabla(paciente);                                       //Llamo a la funcion que permite adicionarlos a la tabla
            });
        }
        else{                                                                           //Si el estatus no es 200
            errorAjax.classList.remove("invisible");                                    //Si hay error remover la invisibilidad del espam
        }
    });
    xhr.send();                                                                          //Envia los datos del link.
});

