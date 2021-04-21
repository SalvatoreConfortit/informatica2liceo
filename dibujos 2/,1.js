let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")
ctx.strokeStyle = "black"
ctx.fillStyle = "white"
function peon(x,y){
ctx.arc(x,100,30, Math.PI,0)
ctx.arc(x,70,15,0,2* Math.PI)
ctx.stroke()
}
for(let x = 50; x < 400; x = x+50){
    peon(x,y)}
