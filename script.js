// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type
    } 

    attack(){
        if (this.type.toLowerCase() === "mago") {
            return `${this.type} atacou usando magia!`
        } 

        if (this.type.toLowerCase() === "guerreiro") {
            return `${this.type} atacou usando espada!`
        }

        if (this.type.toLowerCase() === "monge") {
            return `${this.type} atacou usando artes marciais!`
        }

        return `${this.type} atacou usando shuriken!`
    }

}

const mago = new Hero("Lucildo", 20, "Mago")
const guerreiro = new Hero("João", 24, "guerreiro")

console.log(mago.attack())
console.log(guerreiro.attack())
console.log(mago)
console.log(guerreiro)