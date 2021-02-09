let jugadores = [
    {Nombre:"Gianluigi Donnaruma", posición:"portero",edad:21,imagen:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/10/26/16037109203570.jpg"},
    {Nombre:"Theo Hernández", posición:"defensa",edad:23,imagen:"https://i0.wp.com/soycalcio.com/wp-content/uploads/2020/10/ac-milan-v-spezia-calcio-serie-a-16.jpg?resize=1080%2C675"},
    {Nombre:"Sandro Tonali", posición:"mediocampista",edad:20,imagen:"https://icdn.sempremilan.com/wp-content/uploads/2021/01/49860814.jpg"},
    {Nombre:"Hakan Calhanoglu", posición:"mediocampista",edad:26,imagen:"https://assets-es.imgfoot.com/media/cache/1200x1200/hakan-calhanoglu-2021.jpg"},
    {Nombre:"Zlatan Ibrahimovic", posición:"delantero",edad:39,imagen:"https://tmssl.akamaized.net/images/foto/normal/zlatan-ibrahimovic-ac-mailand-1603008323-49388.jpg?lm=1603008348"},
    {Nombre:"Mario Mandzukic", posición:"delantero",edad:34,imagen:"https://cdn.calciomercato.com/images/2021-01/Mandzukic.Milan.2020.211.1400x840.jpg"},
]
let tabla = document.querySelector('#jugadores')
let contenidoTabla = '<tr><th>Nombre</th><th>posición</th><th>edad</th><th>imagen</th></tr>'
for (jugador of jugadores){
    contenidoTabla = contenidoTabla + `<tr><td>${jugador.Nombre}</td><td>${jugador.posición}</td><td>${jugador.edad}</td>
    <td><img width="500px" src="${jugador.imagen}" alt=""></td></tr>`
}
tabla.innerHTML = contenidoTabla;
