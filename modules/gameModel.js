//For now Leave this stuff as it is

maxX = 1024
maxY = 1024

grid = []
gridCellX = 64
gridCellY = 64
gridX = maxX / gridCellX
gridY = maxY / gridCellY

for (let i = 0; i < gridX; i++) {
  grid[i] = []
  for (let j = 0; j < gridY; j++) {
    grid[i][j] = []
  }
}

var objArr = []
//------------------------------------------------
//Put your setup code here. eg. -

for (let i = 0; i < 50; i++) {
  objArr[i] = new Game2D2Object({sx: Math.random() * maxX, sy: Math.random() * maxY, vx: (Math.random() - 0.5) * 40, vy: (Math.random() - 0.5) * 40, ax: (Math.random() - 0.5) * 0.01, ay: (Math.random() - 0.5) * 0.01, as: (Math.random() - 0.5) * 4, av: (Math.random() - 0.5) * 10, aa: (Math.random() - 0.5) * 1, r: Math.random() * 100})
  objArr[i].playerHealth = 100
}
//------------------------------------------------
//Every frame, the below occurs. All custom code goes in update() and afterColl()
// update(dt)
// simPhysics(objArr, dt)
// const collisions = colCheck(objArr)
// afterColl(collisions)

function update(dt) { //dt is time in seconds that have passed since last frame
  
}

function afterColl(collisions, dt) { //collisions is an array of pairs of objects that collide
  for(let i = 0; i< collisions.length; i++) {
   collisions[i][0].playerhealth -= 10*dt
   collisions[i][1].playerhealth -= 10*dt
   
  }
    
}