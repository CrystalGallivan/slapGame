
// setting activeCharacter allows for multiple characters
let activeCharacter = 0;
// setting activeAttack allows for multiple attacks
let activeAttack = 0;
// setting activeItemButton allows for multiple item buttons
let activeitemButton = 0;
// chatacter1 array allows for character selection
let characters1 = [{
  name: "Mario",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png']
},
{
  name: "Koopa Troopa",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/koopa1.png', 'assets/koopa2.png', 'assets/koopa3.png']
},
{
  name: "Yoshi",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/yoshi1.png', 'assets/yoshi2.png', 'assets/yoshi3.png']
}]
// chacacter2 array allows for a secondary character selection
let characters2 = [{
  name: "Wario",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/wario1.png', 'assets/wario2.png', 'assets/wario3.png']
}, {
  name: "Bowser",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/bowser1.png', 'assets/bowser2.png', 'assets/bowser3.png']
},
{
  name: "Shy Guy",
  moves: ['normal', 'attack', 'knockout'],
  width: 1500,
  moveIndex: 0,
  images: ['assets/shy1.png', 'assets/shy2.png', 'assets/shy3.png']
}
]
// itemButtons & attacks librarys allows easy storage and access of variables
let itemButtons = {
  shell: 0,
  banana: 0,
  mushroom: 0
}
let attacks = {
  slash: 0,
  rush: 0,
  crit: 0
}
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

function drawCharacters() {
  document.getElementById('slashed').innerText = characters1[activeCharacter].slash.toString()
  document.getElementById('rushed').innerText = characters1[activeCharacter].rush.toString()
  document.getElementById('criticaled').innerText = characters1[activeCharacter].crit.toString()
  document.getElementById('slashed1').innerText = characters2[activeCharacter].slash.toString()
  document.getElementById('rushed1').innerText = characters2[activeCharacter].rush.toString()
  document.getElementById('criticaled1').innerText = characters2[activeCharacter].crit.toString()
  document.getElementById('Character1').setAttribute("src", characters1[activeCharacter].images[characters1[activeCharacter].moveIndex])
  document.getElementById('Character2').setAttribute("src", characters2[activeCharacter].images[characters2[activeCharacter].moveIndex])
  // if (characters1[activeCharacter].moveIndex == characters1[activeCharacter].moves.length - 1 && characters2[activeCharacter].moveIndex == characters2[activeCharacter].moves.length - 1) {
  //   document.getElementById('reset').disabled = true
}
}
drawCharacters()

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

function slashAttack() {
  attacks[activeAttack].slash -= 20;
  if (characters1[activeAttack].width < 1500) {
    characters1[activeAttack].moveIndex = 1;
  } else if (characters1[activeAttack].width = 0) {
    characters1[activeAttack].moveIndex[2]
  }

  function rushAttack() {
    attacks[activeAttack].rush -= 200;
    if (characters1[activeAttack].width < 1500) {
      characters1[activeAttack].moveIndex = 1;
    } else if (characters1[activeAttack].width = 0) {
      characters1[activeAttack].moveIndex[2]
    }
    drawCharacters()
    function critAttack() {
      attacks[activeAttack].rush -= 500;
      if (characters1[activeAttack].width < 1500) {
        characters1[activeAttack].moveIndex = 1;
      } else if (characters1[activeAttack].width = 0) {
        characters1[activeAttack].moveIndex[2]
      }
      drawCharacters()
      function setActiveAttacks(index) {
        activeAttack = index
        drawCharacters()
      }
      function changeProgressBar1(id) {
        let el = document.getElementById(id);
        el.style.width = '1500';
      }
      function progressBar(id) {
        let el = document.getElementById(id);
        // el.style.width =
        characters1[activeAttack].width--;
      }
    }

    // function drawCharacter() {
    //   document.getElementById("Character1").setAttribute('src', characters1[activeAttack].images[characters1[activeAttack].moveIndex])
    //   document.getElementById('Character2').setAttribute('src', characters2[activeAttack].images[characters2[activeAttack].moveIndex])
    // }
    // drawCharacter()