let amigo = [];
let amigosSorteados = new Set();

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (amigo.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigo.push(nome);
    inputNome.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigo[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("A lista de amigos está vazia. Adicione algum nome.");
        return;
    }
    
    if (amigosSorteados.size === amigo.length) {
        alert("Todos os amigos já foram sorteados.");
        return;
    }
    
    let nomeSorteado;
    do {
        let indiceSorteado = Math.floor(Math.random() * amigo.length);
        nomeSorteado = amigo[indiceSorteado];
    } while (amigosSorteados.has(nomeSorteado));
    
    amigosSorteados.add(nomeSorteado);
    document.getElementById("resultado").innerHTML = `<li>O amigo sorteado é 🎉 : <strong>${nomeSorteado}</strong></li>`;
}

function reiniciarJogo() {
    amigo = [];
    amigosSorteados.clear();
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}




