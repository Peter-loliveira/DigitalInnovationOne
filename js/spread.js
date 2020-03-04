var x = "Peter"
var y = " Lange Oliveira"

var Peter = []
for (i = 0; i < x.length; i++){
    Peter.push(x[i])
}
for (i = 0; i < y.length; i++){
    Peter.push(y[i])
}
console.log(Peter)

peter = []//Zera o array para o exemplo abaixo
//Tudo, desde a linha 5 até a linha 10 pode ser escrito como na linha a seguir:
peter = [...x, ...y]
console.log(Peter)

var xy = x + y
console.log(xy)

var xy = [x, y]
console.log(xy)

var xy = []
console.log(xy)

console.log(...x, ...y, ..." Utilizando Spread")
console.log(xy.length)

var xy = [...x, ...y, ..." Utilizando Spread"]
console.log(xy)
console.log(xy.length)

var mussum = []
mussum = [..."Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."]
console.log(mussum)
console.log("Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.")

var teste = []
var teste2 = [1,2,3,6,5,4,8,9]
teste = [...teste2]
console.log(teste)