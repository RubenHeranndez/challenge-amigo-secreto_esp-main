// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigoSecreto = [];
function agregarAmigo(nombre) {
    nombre = document.getElementById('amigo').value
    if(nombre == ''){
        alert("Por favor, inserte un nombre!!!!");
    }else {
        nombreAmigoSecreto.push (nombre);
        let agregandoListaAmigos = document.getElementById("listaAmigos");
        let contenido = "";
        for (let amigo of nombreAmigoSecreto){
            contenido += `<li>${amigo}</li>`;
            agregandoListaAmigos.innerHTML = contenido;
        }
        limpiarInput();
    }
    console.log(nombreAmigoSecreto);
}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (nombreAmigoSecreto == ""){
        alert("Por favor, inserte un nombre!!!!");  
    }else {
        let indiceAleatorio = Math.floor(Math.random()*nombreAmigoSecreto.length);
        let amigoAleatorio = nombreAmigoSecreto[indiceAleatorio];
        console.log(indiceAleatorio);
        console.log(amigoAleatorio);
    }
}

/*Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:
Validar que haya amigos disponibles: Antes de sortear, 
comprobar si el array amigos no está vacío.

Generar un índice aleatorio: 
Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: 
Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: 
Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.*/