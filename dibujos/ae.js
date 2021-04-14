let canvas = document.querySelector("#theCanvas")
let ctx = canvas.getContext("2d")
ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(200,200,20,200)
ctx.lineWidth=2
ctx.fillStyle = "black"
ctx.beginPath()
ctx.strokeRect(200,200,20,200)
ctx.moveTo(200,200)
ctx.lineTo(210,150)
ctx.lineTo(220,200)
ctx.stroke()
ctx.fill()
ctx.fillStyle = "pink"
ctx.fillRect(200,400,20,30)
ctx.strokeRect(200,400,20,30)
ctx.stroke()
ctx.fill()
ctx.fillStyle= "black"
ctx.fillRect(300,200,150,300)
ctx.fillStyle="gray"
ctx.fillRect(320,220,120,270)