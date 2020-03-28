var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var encontrado = false

var teste = (a) => {
    for (i = 0; i < 10; i++) {
        if (a === x[i]) {
            return true
        } else {
            // return false
        }
    }
}

var y = 1
encontrado = teste(y)
console.log(`Valor ${y} foi encobntrado? ${encontrado}`)