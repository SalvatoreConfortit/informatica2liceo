let x = 0
let y = 0
var notas = []
let total = 0
let t = 0
let z = parseFloat(prompt("ingresa el numero de notas"))
while (x<z) {
    y =parseFloat(prompt("ingresar una de las notas"))
    if (0<y<10 && Number.isIntegrer(y)) {
    notas.push (y)
    console.log (notas)
    x = x+1
    total= total + notas [t]
    console.log(total)
    t = t+1
}
}
console.log (total/z)
alert (total/z)