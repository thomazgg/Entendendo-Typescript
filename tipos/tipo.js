"use strict";
// string
let nome = 'Joao';
console.log(nome);
// nome = 28
// numbers
let idade = 27;
// idade ='Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 21;
console.log(typeof minhaIdade);
minhaIdade = '21';
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 123, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// enums 
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
