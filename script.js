
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