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
        alert("No hay nombres en la lista de amigas!!!!Porfavor ingrese lista de amigos");  
    }else {
        let indiceAleatorio = Math.floor(Math.random()*nombreAmigoSecreto.length);
        let amigoAleatorio = nombreAmigoSecreto[indiceAleatorio];
        console.log(indiceAleatorio);
        console.log(amigoAleatorio);
        let resultadoSorteo = document.getElementById('resultado');
        resultadoSorteo.innerHTML = `FELICIDADES ${amigoAleatorio} GANASTE!!!!`;  
    }
}


