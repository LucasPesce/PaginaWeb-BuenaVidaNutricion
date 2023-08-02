var pacientes = document.querySelectorAll(".paciente"); //Captura todos los elementos de la clase asignada.
// var Paciente = document.querySelector("#paciente");
//Creo una variable, le asigno con *querySelector, un elemento de htmml. "#" para id y "." para class

for(var i = 0; i< pacientes.length;i++){    //.lenght es la posicion del elemento en la lista.
    var paciente = pacientes[i];            //Paciente sera igual a la posicion del elemento de la lista de pacientes
    
    var tdPeso = paciente.querySelector(".info-peso");  //*querySelector selecciona un subelemento.
    var peso = tdPeso.textContent;                      //*textContent hace referencia al contenido del elemento seleccionado
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");
    
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    function calcularIMC(peso, altura){
        var imc = peso / (altura * altura);
        return imc.toFixed(2);                                      //.toFixed, limita la cantidad de decimales deseadas
    }
    
    function validarPeso(peso){
        if(peso > 0 && peso < 1000){
            return true;
        }

        else{
            return false;
        }
    } 
    function validarAltura(altura){
        if(altura > 0 && altura < 3.00){
            return true;
        }

        else{
            return false;
        }
    }
    
    if(!pesoEsValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");          //Agrego al elemento a la clase asignada.
    }      
    if(!alturaEsValida){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }    
    if(pesoEsValido && alturaEsValida){
        var imc = peso / (altura * altura);
        tdIMC.textContent = calcularIMC(peso, altura);                     
    }        
}

