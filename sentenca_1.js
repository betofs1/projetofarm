const pessoa = {
  nome: "Beto",
  idade: 5,
  endereço: {
    Rua: "Cosme Luiz 218",
    Número: 999,
  },
}
const { nome, idade, endereço } = pessoa //Destructuring retira elementos de um objeto, usando chaves {}//
console.log(nome, idade)
console.log(endereço)

const { sobrenome = true, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const[n1, ,n3, ,n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5,n6)
