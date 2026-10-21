/*

1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.

import express from "express";

const app = express();

app.get("/api/soma", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    res.send({ soma: num1 + num2 });
});

app.listen(3000, () => {
    console.log("servidor rodando");
});
*/


/*2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.


import express from "express";

const app = express();

app.get("/api/salario", (req, res) => {
    const valorHora = Number(req.query.valorHora);
    const horasTrabalhadas = Number(req.query.horasTrabalhadas);

    res.send({ salario: valorHora * horasTrabalhadas });
});

app.listen(3000, () => {
    console.log("servidor rodando");
});
*/

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado


/* import express from "express";

const app = express();

app.get("/api/peso", (req, res) => {
    const peso1 = Number(req.query.peso1);
    const peso2 = Number(req.query.peso2);
    const peso3 = Number(req.query.peso3);
    const peso4 = Number(req.query.peso4);
    const peso5 = Number(req.query.peso5);

    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;

    res.send({ media: media });
});

app.listen(3000, () => {
    console.log("servidor rodando");
});

http://localhost:3000/api/peso?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50
*/
/* 

4. Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5

import express from "express";

const app = express();

app.get("/api/temperatura", (req, res) =>{
    const celsius = Number(req.query.celsius);
    const fahrenheit = (9 * celsius + 160) / 5;

    res.send({ fahrenheit: fahrenheit });
  
});

app.listen(3000, () => {
    console.log("servidor rodando");

});   

http://localhost:3000/api/temperatura?celsius=30
*/

 //5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)

import express from "express";

const app = express();

app.get("/api/milhas", (req, res) =>{
    const distancia = Number(req.query.distancia);
const quilometros = distancia * 1.60934;

    res.send({ conversao: quilometros });

});

app.listen(3000, () => {
    console.log("servidor rodando");

}); 

//http://localhost:3000/api/milhas?distancia=10



