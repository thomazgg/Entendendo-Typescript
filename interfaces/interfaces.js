"use strict";
function saudarComOla(pessoa) {
    console.log('Ola, ' + pessoa.nome + '!');
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Joao',
    idade: 21,
    saudar(sobrenome) {
        console.log('Ola, menu nome e '
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.90 })
pessoa.saudar('Sywalker');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Ola, menu nome e '
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 4));
console.log(Math.pow(2, 4));
console.log(2 ** 4);
