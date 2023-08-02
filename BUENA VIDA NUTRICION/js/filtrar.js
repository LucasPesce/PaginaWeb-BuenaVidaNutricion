var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function(){                       //Captura el ingreso de datos
    var pacientes = document.querySelectorAll(".paciente");             //Selecciona todos los sub-elementos de la lista de pacientes
    
    if (this.value.length > 0){                                        //Si es mayor que 0, comprame el input con los nombres de los pacientes
        
        for (var i=0; i < pacientes.length; i++){                      //Buscar pacientes que coincidan con el nombre ingresado
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");                //Objeto que ignora el uso de mayus y minus
    
            if(!expresion.test(nombre)){                     //Verifica si la expresion esta dentro del nombre.
                paciente.classList.add("invisible");        //Si cumple la condicion, se adiciona al paciente a la clase invisible.
            }
            else{
                paciente.classList.remove("invisible");     //Remueve de la clase invisible
            }
        }
    }
    else{                                                  // Si no hay coincidencias entre input y la lista, se remueve la clase invisible
        for (var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible")
        } 
    }


});