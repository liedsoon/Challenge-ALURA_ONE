let amigos = [];
let numMax = amigos.length;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function msgInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos:');
}

msgInicial();

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;
    if(nome !== ""){
        amigos.push(nome);
        console.log(amigos);
        limparCampo("#amigo");
        exibirAmigos();
    }else{
        alert("Por favor, insira um nome válido!");
    }
}

function limparCampo(id) {
    document.querySelector(id).value = '';
}

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}