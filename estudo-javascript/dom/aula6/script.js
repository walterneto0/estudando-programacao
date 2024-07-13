/*
Pegar os valores dos inputs
Definir o começo da sequência
Definir o fim da sequência
Fazer o valor 1 pular a quantidade de números que foi definida em "passos"
Exibir na tela a sequência
*/

function clicar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passos = document.getElementById('passos');
    let res = document.getElementById('res');

    if (inicio.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = `Impossível contar`;
    } else {
        res.innerHTML = 'Contando:';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);

        if (p == 0) {
            alert("Passo inválido, considerando-o como '1'.")
            p = 1
        }

        if (i < f) {
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else if (i == f){ 
            res.innerHTML += ` ${i} \u{1F3C1}`;
        } else {
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
            res.innerHTML += `\u{1F3C1}`;            
        }
    }
}