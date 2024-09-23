let estadoJogo = {};

function iniciarJogo() {
    estadoJogo = {};
    mostrarHistoria("inicio");
}

const opcoesHistoria = {
    "inicio": {
        texto: "Tenho que voltar para lá, aquele lugar me faz falta.",
        imagem: "img/cenario1.png",
        opcoes: [
            {
                texto: "Continuar andando",
                proximaCena: "continuar_andando1"
            },
            {
                texto: "Esperar",
                proximaCena: "esperar"
            }
        ]
    },
    "continuar_andando1": {
        texto: "Estou com um vazio enorme em mim, mas continuo andando...",
        imagem: "img/cenario1.png",
        opcoes: [
            {
                texto: "Continuar andando",
                proximaCena: "continuar_andando2"
            }
        ]
    },
    "continuar_andando2": {
        texto: "De pouco a pouco, estou me lembrando...",
        imagem: "img/cenario1.png",
        opcoes: [
            {
                texto: "Eu sei para onde devo ir...",
                proximaCena: "lembrando"
            },
            {
                texto: "Eu preciso tentar me lembrar",
                proximaCena: "lembrando_tentativa"
            }
        ]
    },
    "esperar": {
        texto: "Eu tenho dúvidas desse sentimento de que lugar se trata, para onde devo ir?",
        imagem: "img/cenario1.png",
        opcoes: [
            {
                texto: "Andar",
                proximaCena: "continuar_andando1"
            }
        ]
    },
    "lembrando": {
        texto: "Eu sei para onde devo ir... Devo ir para casa.",
        imagem: "img/casa.avif",
        opcoes: [
            {
                texto: "Fim do Jogo",
                proximaCena: "fim"
            }
        ]
    },
    "lembrando_tentativa": {
        texto: "Embora eu quisesse chegar até lá, estou muito cansado, não sei se aguento tudo isso...",
        imagem: "img/cenario1.png",
        opcoes: [
            {
                texto: "Eu desisto",
                proximaCena: "desistir"
            },
            {
                texto: "Continuar tentando",
                proximaCena: "lembrando"
            }
        ]
    },
    "desistir": {
        texto: "Em toda a minha trajetória, achei que poderia conseguir, mas quem se perdeu foi a minha alma...",
        imagem: "img/perdido.gif",
        opcoes: [
            {
                texto: "Fim do Jogo",
                proximaCena: "fim"
            }
        ]
    },
    // Cena de fim de jogo
    "fim": {
        texto: "Fim do Jogo. Obrigado por jogar!",
        imagem: "img/perdido.gif",
        opcoes: [
            {
                texto: "Jogar de Novo",
                proximaCena: "inicio"
            }
        ]
    }
};

function mostrarHistoria(cena) {
    const cenaAtual = opcoesHistoria[cena];
    document.getElementById("texto-historia").innerText = cenaAtual.texto;
    document.getElementById("imagem-fundo").src = cenaAtual.imagem;

    const botoesOpcoes = document.getElementById("opcoes");
    botoesOpcoes.innerHTML = "";

    if (cenaAtual.opcoes) {
        cenaAtual.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.innerText = opcao.texto;
            botao.onclick = () => mostrarHistoria(opcao.proximaCena);
            botoesOpcoes.appendChild(botao);
        });
    }
}

iniciarJogo();
