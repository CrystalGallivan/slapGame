
// let activeCharacter = 1500;
// let characters1 = [{
//   name: "Mario",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png']
// },
// {
//   name: "Koopa Troopa",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/koopa1.png', 'assets/koopa2.png', 'assets/koopa3.png']
// },
// {
//   name: "Yoshi",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/yoshi1.png', 'assets/yoshi2.png', 'assets/yoshi3.png']
// }]
// let characters2 = [{
//   name: "Wario",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/wario1.png', 'assets/wario2.png', 'assets/wario3.png']
// }, {
//   name: "Bowser",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/bowser1.png', 'assets/bowser2.png', 'assets/bowser3.png']
// },
// {
//   name: "Shy Guy",
//   moves: ['normal', 'attack', 'knockout'],
//   slash: -20,
//   rush: -50,
//   crit: -180,
//   damage: 1500,
//   moveIndex: 0,
//   images: ['assets/shy1.png', 'assets/shy2.png', 'assets/shy3.png']
// }
// ]
// let itemButtons = {
//   shell: -50,
//   banana: -20,
//   mushroom: 50
// }


// function slashAttack() {
//   let progressBar = document.getElementById('progressBar')
//   progressBar.
//     characters1[activeCharacter].slash++

//   if (characters1[activeCharacter].slash + itemButtons.shell) {
//     characters2[activeCharacter].damage - 70;

//   } else if (characters1[activeCharacter].slash + itemButtons.banana) {
//     document.getElementById('item2').innerText = setTimeout(attack, 20000).toString()
//   }
// }
// drawCharacters

// drawCharacters()
// function damageTaken() {
//   characters1[activeCharacter].damagecd

// }
// function attack(itemButtons) {
//   characters1[activeCharacter].slash++
//   if (characters1[activeCharacter].slash % characters1[activeCharacter].damage == 0) {
//     characters1[activeCharacter].moveIndex++;
//   }

// }
// drawCharacters()
// // function health() {
// //   let activeCharacter = document.getElementById("progressBar");
// //   let width = 1500;
// //   function frame() {
// //     if (width >= 1500) {

// //     } else {
// //       width--;
// //       activeCharacter.style.width = width + '%';

// //     }
// //   }
// // }

// function drawCharacters() {
//   document.getElementById('slashed').innerText = characters1[activeCharacter].slash.toString()
//   document.getElementById('rushed').innerText = characters1[activeCharacter].rush.toString()
//   document.getElementById('criticaled').innerText = characters1[activeCharacter].crit.toString()
//   document.getElementById('slashed1').innerText = characters2[activeCharacter].slash.toString()
//   document.getElementById('rushed1').innerText = characters2[activeCharacter].rush.toString()
//   document.getElementById('criticaled1').innerText = characters2[activeCharacter].crit.toString()
//   document.getElementById('Character1').setAttribute("src", characters1[activeCharacter].images[characters1[activeCharacter].moveIndex])
//   document.getElementById('Character2').setAttribute("src", characters2[activeCharacter].images[characters2[activeCharacter].moveIndex])
//   if (characters1[activeCharacter].moveIndex == characters1[activeCharacter].moves.length - 1 && characters2[activeCharacter].moveIndex == characters2[activeCharacter].moves.length - 1) {
//     document.getElementById('reset').disabled = true
//   }
// }
// drawCharacters()

// function reset() {
//   characters1[activeCharacter].moveIndex = 0
//   characters1[activeCharacter].damage = 1500
//   characters2[activeCharacter].moveIndex = 0
//   characters2[activeCharacter].damage = 1500

//   document.getElementById('reset').disabled = false
//   drawCharacters()
// }
// function setActiveCharacters(index) {
//   activeCharacter = index
//   drawCharacters()
// }

// function drawButtons() {
//   let template = ''
//   for (let i = 0; i < characters1.length; i++) {
//     template += `
//       <button class="btn btn-info" onclick="setActiveCharacters(${i})">${characters1[i].name}</button>
//       `
//   }
//   //   for (let i = 0; i < characters2.length; i++) {
//   //   template += `
//   //     <button class="btn btn-info" onclick="setActiveCharacters(${i})">${characters2[i].name}</button>
//   //     `
//   // }
//   document.getElementById('characters1-buttons').innerHTML = template
//   // document.getElementById('characters2-buttons').innerHTML = template
// }
// drawButtons()
let slash = 0
let character = {
  name: 'Mario',
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png']
}
function slashAttack() {
  slash -= 20;
  if (character.width < 1500) {
    character.moveIndex = 1;
  } else if (character.width = 0) {
    character.moveIndex[2]
  }
  drawCharacter()
  function progressBar(health) {
    let hp = document.getElementById('progressBar1.aria-valuenow').setAttribute('1500', 'aria-valuenow')
    health -= 1;
  }
}
// function damageTaken() {
//   character.width - slash
//   document.getElementById('width').setAttribute('width', 'value')

// let progressBar = character.width
function drawCharacter() {
  // document.getElementById('slashed').innerText = slash.toString()
  document.getElementById("Character1").setAttribute('src', character.images[character.moveIndex])
  document.getElementById('progressBar1.width').innerText = slash.toString()
}
drawCharacter()