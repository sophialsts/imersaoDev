rodada = 1

while (rodada <= 3) {
    console.log("Rodada: " + rodada)
    
    escolhaJogador = prompt("Nível: " + rodada + ", escolha entre 1 - Porta Vermelha, 2 - Porta Amarela ou 3 - Porta Roxa.")
    portaErrada = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == portaErrada) {
        alert("Você perdeu!")
        rodada = 1000
    }
    else {
        alert("Você passou pela rodada! A porta errada era a: ")
        cont = 0
        while(cont < 3) {
            cont++
            if(portaErrada == 1) {
                alert("Porta Vermelha.")
                cont = 4
            }
            else if(portaErrada == 2){
                alert("Porta Amarela.")
                cont = 4
            }
            else {
                alert("Porta Roxa.")
                cont = 4
            }
        }
    }

    rodada += 1
}

if(rodada == 4)alert("Parabéns! Você passou por todas as portas.")