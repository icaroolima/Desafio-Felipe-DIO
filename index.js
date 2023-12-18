let res = saldoVitorias(70,15)
let rank

function saldoVitorias(win, defeats){
    return win - defeats
}

if (res <= 10) {
    rank = "Ferro"
} else if (res > 10 && res <= 20) {
    rank = "Bronze"
} else if (res > 20 && res <= 50) {
    rank = "Prata"
} else if (res > 50 && res <= 80) {
    rank = "Ouro"
} else if (res > 80 && res <= 90) {
    rank = "Diamante"
} else if (res > 90 && res <= 100) {
    rank = "Lendario"
} else if (res > 100) {
    rank = "Imortal"
} console.log(`O Herói tem saldo de ${res} vitorias, e está no nivel de ${rank}.`)