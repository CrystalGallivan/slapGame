let activeAttack = 0
let health = 100
let name1 = 'Mario'
let hits = 0

function slashAttack() {
  health--;
  hits++
}
update()
function rushAttack() {
  health -= 5;
  hits++
}
update()
function critAttack() {
  health -= 10;
  hits++
}
update()

function update() {
  document.getElementById('health').innerText = 'health'
  document.getElementById('hits').innerText = 'hits'
}
update()