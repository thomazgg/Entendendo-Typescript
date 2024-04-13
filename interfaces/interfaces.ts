interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Ola, ' + pessoa.nome + '!')
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'Joao',
  idade: 21,
  saudar(sobrenome: string) {
    console.log('Ola, menu nome e '
      + this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.90 })
pessoa.saudar('Sywalker')

// Usando Classes...
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log('Ola, menu nome e '
      + this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface funcao
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(2, 4))
console.log(Math.pow(2, 4))
console.log(2 ** 4)