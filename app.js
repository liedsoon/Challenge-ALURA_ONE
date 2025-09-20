let amigos = [];

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
        limparCampo("amigo");
        document.getElementById("resultado").innerHTML = "";
        exibirAmigos();
    }else{
        alert("Por favor, insira um nome válido!");
    }
}

function limparCampo(id) {
    document.getElementById(id).value = '';
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

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let quantidadeAmigos = amigos.length;

    if(quantidadeAmigos === 0){
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }else{
        let idAmigoSorteado = parseInt(Math.random() * quantidadeAmigos + 1);
        resultado.innerHTML = `O amigo sorteado foi: ${amigos[idAmigoSorteado - 1]}`;
        console.log(idAmigoSorteado);
    }
}

function reset() {
    amigos = [];
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos:');
    exibirTextoNaTela('#resultado', '');
    exibirAmigos();
}
