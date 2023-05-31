const express = require("express");
const index = express();

let contador = 0;

index.get("/", function (req, res) {
  res.send("Hello World!");
});

index.get("/ola", function (req, res) {
  res.send("Olá Mundo!");
});

index.get("/contador1", function (req, res) {
  ++contador;
  res.send({ contador });
});

index.get('/contador', (req, res) => {
  res.send(`Valor atual do contador: ${contador}`);
});

index.get("/contador5", function (req, res) {
  contador = 5 + contador;
  res.send({ contador });
});

index.get('/relatorio', (req, res) => {
  const relatorio = {
    valorAtual: contador,
    contador1: contador,
    contador5: contador + 5
  };
  res.json(relatorio);
});

index.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});
