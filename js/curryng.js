function soma(a , b) {
    return a + b
}
console.log("Funcionamento NORMAL da Função")
console.log( soma(2,2))
console.log( soma(2,3))
console.log( soma(2,4))
console.log( soma(2,5))


console.log("Funcionamento da Função CURRYNG")
function somas(a){
    return function (b) {
        return a + b
    }
}

const somas2 = somas("PETER")

console.log(somas2(" Lange"))
console.log(somas2(" Oliveira"))

/*
Quando atribuimos à variavel somas2 na linha 18 p valor de somas com um parametro ele ja grava isso no PRIMERO agumento, 
no caso o argumento "a". 
Quando então na nova função (somas2) é chamada com um argumento o JS coloca esse argumento como o segundo argumento da função somas

*/