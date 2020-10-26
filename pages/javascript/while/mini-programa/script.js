alert("Seja bem-vindo e clique para seguir");

var sair = Number(prompt("Digite 0 para sair."));
while (sair != 0) {
    var sair = Number(prompt("Você ainda está no programa"));
}
alert("Você saiu do programa");

function clicar() {
    document.getElementById("voltar").innerHTML = `Olá, ${nome}, você clicou no botão.`
}