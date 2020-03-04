console.log("Hoisting de Variaveis")
console.log("fn()")
function fn() {
    console.log(texto)

    var texto = "Peter"

    console.log(texto)
}
fn()

console.log("fn2()")
function fn2() {
    var texto
    console.log(texto)

    texto = "Peter"
    console.log(texto)
}
fn2()