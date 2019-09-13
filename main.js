//Top Left is origin

//*DEBUG
var objs = []
for (let i = 0; i < 50000; i++) {
  objs[i] = new Game2D2Object({sx: Math.random() * maxX, sy: Math.random() * maxY, vx: (Math.random() - 0.5) * 20, vy: (Math.random() - 0.5) * 20, ax: (Math.random() - 0.5) * 5, ay: (Math.random() - 0.5) * 5, as: (Math.random() - 0.5) * 4, av: (Math.random() - 0.5) * 10, aa: (Math.random() - 0.5) * 1, r: (Math.random() - 0.5) * 25})
}
/**/

function main() {
  const Math_PI = Math.PI
  const Math_2PI = Math_PI * 2
  
  const canvas = document.getElementById("gameCanvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')
  
  if (document.activeElement && document.activeElement != canvas) {document.activeElement.blur()}
  canvas.focus() //not 100% sure what this does
  
  var canvasWidth = canvas.width
  var canvasHeight = canvas.height
  
  var gameCanvasRatio = Math.min(canvasWidth / maxX, canvasHeight / maxY)
  var gameWidth = maxX * gameCanvasRatio, gameHeight = maxY * gameCanvasRatio
  var gameLeft = (canvasWidth - gameWidth) / 2, gameRight = gameLeft + gameWidth, gameTop = (canvasHeight - gameHeight) / 2, gameBottom = gameTop + gameHeight
  
  var dt = 0
  
  function beforeFrame(time) { //let's name it something better later
    
    dt = time - dt
   
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    if (canvasWidth !== window.innerWidth || canvasHeight != window.innerHeight) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      canvasWidth = canvas.width
      canvasHeight = canvas.height
      
    }
    
    //var aspect = canvas.clientWidth / canvas.clientHeight; // needed for later probs
    
    //All updating and drawing code... here!
    
    for (let i = objs.length; i--;) {
      let objsI = objs[i]
      
      ctx.beginPath()
      ctx.arc((gameLeft + objsI.sx * gameCanvasRatio) | 0, (gameTop + objsI.sy * gameCanvasRatio) | 0, (objsI.r * gameCanvasRatio) | 0, 0, Math_2PI)
      ctx.strokeStyle = "#0000FF"
      ctx.fillStyle = "#FFFFFF"
      ctx.fill()
      ctx.closePath()
    }
    
    requestAnimationFrame(beforeFrame)
  }
  requestAnimationFrame(beforeFrame)
}

// Check if we're running in jQuery // Not entirely sure what this does either
if (window.$) {
  window.$(function(){
    main();
  });
} else {
  window.addEventListener('load', main)
}
