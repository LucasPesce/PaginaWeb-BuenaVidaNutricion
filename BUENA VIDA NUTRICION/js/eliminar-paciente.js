var pacientes = document.querySelectorAll(".paciente"); //Captura el elemento paciente

var tabla = document.querySelector("#tabla-pacientes");//Captura toda la tabla

tabla.addEventListener("dblclick",function(evento){       //Captura eventos que sucede en la table. Se especifica el evento doble click
    evento.target.parentNode.classList.add("fadeOut");   //Animacion de borrado
    setTimeout(function(){                               //funcion de intervalo de tiempo entre una instruccion y otra
        evento.target.parentNode.remove(); 
    },500);                                             //Indica los milisegundos que debe esperarse.

    //*.target: Indica el lugar donde sucede el evento. 
    //*parentNode: Indica que se afecte la categoria superior del elemento que se esta afectando.
    //*remove: Indica que se elimine lo seleccionado
});