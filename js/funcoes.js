let primeiroNumero = parseFloat(prompt ("Informe o primeiro numero"));
console.log (typeof primeiroNumero);

let operacao = parseInt (prompt ("Digite 1 para soma, 2 para sobtração, 3 para multiplicação e 4 para divisão"));



let segundoNumero = parseFloat (prompt ("Infome o segundo numero"));

let resultado = primeiroNumero + segundoNumero;
document.write("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>");