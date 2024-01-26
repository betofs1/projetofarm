class Pessoa {
  constructor(nome, idade) {
    this.nome = nome // Corrigindo: atribuir o parâmetro 'nome' à propriedade 'nome'
    this.idade = idade // Corrigindo: atribuir o parâmetro 'idade' à propriedade 'idade'
  }

  exibirInformacoes() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`) // Corrigindo: uso de template string
  }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Valberto", "Ferreira")

// Chamando o método da instância
pessoa1.exibirInformacoes()
