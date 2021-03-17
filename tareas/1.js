let tareas = [
    {Asignatura:"", Descripción:"",fecha:""},
  
]
let tabla = document.querySelector('#tareas')
function llenartabla() {
    let contenidoTabla = '<tr><th>Asignatura</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Asignatura}</td><td>${tarea.Descripción}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    
    tabla.innerHTML = contenidoTabla;
       
}
llenartabla();
let forme = document.querySelector("#adjuntartarea")
function addTarea(){
    let Asignatu = document.querySelector("input[name=Asignatura").value
    let descripci = document.querySelector("input[name=Descripción]").value
    let feecha = document.querySelector("input[name=fecha]").value

    let nuevatarea = {Asignatura:Asignatu, Descripción:descripci, fecha:feecha}
    console.log(nuevatarea)

    tareas.push(nuevatarea)
 localStorage.setItem("tareas",JSON.stringify(nuevatarea))
  llenartabla()
    return false;
}
forme.onsubmit = addTarea
let borrar =document.querySelector("#contenidoTabla")
borrar.onclick = Eliminar
function Eliminar(){
    contenidoTabla.style.size = 0  
}