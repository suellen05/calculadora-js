let primeiroNumero = parseFloat(prompt("Informe o primeiro numero"));
console.log(typeof primeiroNumero);

let operacao = parseInt(prompt("Digite 1 para soma, 2 para sobtração, 3 para multiplicação e 4 para divisão"));

let segundoNumero = parseFloat(prompt("Informe o segundo numero"));

if (operacao == 1) {
    let resultado = primeiroNumero + segundoNumero;
    document.write("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>");
}
else if (operacao == 2) {
    let resultado = primeiroNumero - segundoNumero;
    document.write("<h2>" + primeiroNumero + " - " + segundoNumero + " = " + resultado + "</h2>");
}
    else if (operacao == 3) {
        let resultado = primeiroNumero * segundoNumero;
        document.write("<h2>" + primeiroNumero + " x " + segundoNumero + " = " + resultado + "</h2>");
    }
        else if (operacao == 4) {
            let resultado = primeiroNumero / segundoNumero;
            document.write("<h2>" + primeiroNumero + " / " + segundoNumero + " = " + resultado + "</h2>");

        }
