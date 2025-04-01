idade = prompt("Quantos anos você tem?")

if (idade < 18) alert("Você não pode jogar!")
else {
    escolhaJogador = prompt("Escolhe 1 - Para pedra, 2 - Para papel ou 3 - Para tesoura.")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
}


if(escolhaJogador == escolhaComputador) alert("Empate!")
else if(escolhaJogador == 1) {
    if(escolhaComputador == 2) alert("Você perdeu :( O computador jogou papel.")
    else alert("Você ganhou :D O computador jogou tesoura.")
}
else if(escolhaJogador == 2) {
    if(escolhaComputador == 3) alert("Você perdeu :( O computador jogou tesoura.")
    else alert("Você ganhou :D O computador jogou pedra.")
}
else {
    if(escolhaComputador == 1) alert("Você perdeu :( O computador jogou pedra.")
    else alert("Você ganhou :D O computador jogou papel.")
}
