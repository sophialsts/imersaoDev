// lista com bonecos

//calcular força de cada jogador e somar pra total

//calcular força de cada jogador e somar pro time do pc

//comparar times

personagens = ["" , "" , ""]

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

for(let i=0; i<3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i+1))
    escolhaPersonagem = personagens[i]
    forcaPersonagem += Math.floor(Math.random() * 10) + 1
}

for(let i=0; i<3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Dr.Octopus", "Venom", "Ultron", "Thanos", "Duende Verde", "Rei do crime", "Electro", "Caveira Vermelha", "Loki", "Hela"]    
    viloes[i] = violoesPossiveis[indiceAleatorio]
    forcaViloes += Math.floor(Math.random() * 10) + 1
}

if (forcaPersonagem > forcaViloes) {
    alert("Seu time foi superior!! Você ganhou a luta. Sua força foi " + forcaPersonagem)
}
else {
    if (forcaViloes > forcaPersonagem) {
        alert("Seu time perdeu :(( A força dos vilões foi: " + forcaViloes)
    }   
    else {
        alert("Deu empate!!! A força igualou em: " + forcaPersonagem)
    } 
}