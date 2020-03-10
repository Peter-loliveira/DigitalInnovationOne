console.log("Hoisting de Variaveis");
function fn() {
    console.log(texto)
    var texto = "peter"
    console.log(texto)
}
fn()

console.log("Execmplo de Hoisting de Função");
function fn2() {
    log()
    function log() {
        console.log( "Hoisting Funcionando")
    }    
}
fn2()