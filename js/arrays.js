const usuarios = [`Peter`, `Bruno`, `Cintia`]

const gen = {
    Homem : Symbol(`M`),
    Mulher : Symbol(`F`)
}

const pessoas = [
    {
        nome: `Peter`,
        idade: 44,
        // genero: `M`
        genero: gen.Homem
    },
    {
        nome: `Bruno`,
        idade: 42,
        // genero: `M`
        genero: gen.Homem
    },
    {
        nome: `Cintia`,
        idade: 40,
        // genero: `F`
        genero: gen.Mulher
    },
    {
        nome: `Ray`,
        idade: 55,
        // genero: `F`
        genero: gen.Mulher
    }    
]

console.log(pessoas[0].gen)

pessoas.forEach (pessoas => {
    console.log(`${pessoas.nome} tem ${pessoas.idade} anos`)
}
)

const homens = pessoas.filter(pessoas => pessoas.genero === gen.Homem)
const mulheres = pessoas.filter(pessoas => pessoas.genero === gen.Mulher)

console.log(homens)
console.log(mulheres)

var total = 0
const totalIdade = pessoas.forEach(pessoas => {    
    total += pessoas.idade
    console.log(total)
})
console.log(total);

const idadeTotal = pessoas.reduce((age, pessoas) => {
    age += pessoas.idade
    console.log(age)
    return age
}, 0)    
console.log(idadeTotal)