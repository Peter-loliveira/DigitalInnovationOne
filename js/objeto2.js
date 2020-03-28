var user = {
    "nome": "peter"
}

// console.log(user);
// console.log(user.nome)

user.nome = "Lange"
// console.log(user.nome)

user["nome"] = "Oliveira"
// console.log(user.nome)

var x = "nome"
user[x] = "Da Silva"
// console.log(user.nome)

user.lastName = "Lange Oliveira"
// console.log(user)

x = "nome"
user.x = "Peter"
// console.log(user.x)

y = "lastName"
user.y = "Lange Oliveira"
// console.log(user.y)

// console.log(user.x, user.y)
// console.log(user)

console.log(`Propriedades do USER: ${Object.values(user)}`)
    
console.log(user);
