let planetas = [
    {nombre: "Mercurio", diametro:4879}
    {nombre: "Venus", diametro:12104}
    {nombre: "Tierra", diametro:12756}
    {nombre: "Marte", diametro:6792}
]
let tabla = document.querySelector("#planetas")
let contenidoTable = "<tr><th>nombre</th><th>diametro</th></tr>"
for (planeta of planetas){
    contenidoTabla += "<tr><td> ${planeta.imagen} "
}