// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigoSecreto = [];
function agregarAmigo(nombre) {
    nombre = document.getElementById('amigo').value
    if(nombre == ''){
        alert("Por favor, inserte un nombre!!!!")
    }else {
        nombreAmigoSecreto.push (nombre);
        limpiarInput();
    }
    console.log(nombreAmigoSecreto);
}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}

/*Crea una función que recorra el array amigos y agregue 
cada nombre como un elemento <li> dentro de una lista HTML. 
Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() 
o document.querySelector() para seleccionar la lista donde se mostrarán 
los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" 
para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo 
amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo 
elemento de lista.*/
function insertarElemento(listaAmigos) {
    
}