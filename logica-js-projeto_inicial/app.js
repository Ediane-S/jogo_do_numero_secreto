alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

        if (chute == numeroSecreto) {
            break;
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O númer secreto é maior que ${chute}`);
            }
            //tentativas = tentativas + 1;
            tentativas++;
        }
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    
    //if (tentativas > 1) {
    //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    //} else {
    //    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
    // esse codigo é igual ao de cima da linha 22, só com menas palavras.}