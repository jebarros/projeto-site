let income = prompt("Qual e o valor da entrada?");

let costs =  prompt("Qual e o valor da saida?");

let taxPercent = prompt("Qual a porcentagem dos impostos?");

let grossProfit = income - costs;

let tax = grossProfit * taxPercent/100;

let netIncome = grossProfit - tax;

document.write("Sua renda liquida e de $" + netIncome);