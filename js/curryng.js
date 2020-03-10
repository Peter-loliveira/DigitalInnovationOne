// function soma(a , b) {
//     return a + b
// }
// console.log("Funcionamento NORMAL da Função")
// console.log( soma(2,2))
// console.log( soma(2,3))
// console.log( soma(2,4))
// console.log( soma(2,5))

// function c1(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (e) {
//                     return a + b + c + d + e
//                 }
//             }
//         }
//     }
// }

// for (i=0.;i<=4;i++){
//     c1 = c1(parseInt(prompt("Digite um valor")))

// }
// console.log(c1);

function curr(a) {
    return function (b) {
        return a + b        
    }    
}
var soma = curr(2)
console.log(soma(3))
console.log(soma(4))
console.log(soma(5))
console.log(soma(1))
console.log(soma(63))
console.log(soma(4))
console.log(soma(10))

/*
Quando atribuimos à variavel somas2 na linha 18 p valor de somas com um parametro ele ja grava isso no PRIMERO agumento,
no caso o argumento "a".
Quando então na nova função (somas2) é chamada com um argumento o JS coloca esse argumento como o segundo argumento da função somas

*/