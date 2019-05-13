// let activeCharacters = 0
const health = 100;
let character = {
  name: "Mario",
  moves: ['normal', 'attack', 'knockout'],
  health: 100,
  hits: 0,
  moveIndex: 0,
  images: ['/assets/mario1.png', '/assets/mario2.png', '/assets/mario3.png'],
  items: []
}
// let characters1 = [{
//   name: "Mario",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/mario1.png', '/assets/mario2.png', '/assets/mario3.png'],
//   items: []
// },
// {
//   name: "Koopa Troopa",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/koopa1.png', '/assets/koopa2.png', '/assets/koopa3.png'],
//   items: []
// },
// {
//   name: "Yoshi",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/yoshi1.png', '/assets/yoshi2.png', '/assets/yoshi3.png'],
//   items: []
// }]
// // chacacter2 array allows for a secondary character selection
// let characters2 = [{
//   name: "Wario",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/wario1.png', '/assets/wario5.png', '/assets/wario4.jpg'],
//   items: []
// }, {
//   name: "Bowser",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/bowser1.png', '/assets/bowser2.png', '/assets/bowser3.png'],
//   items: []
// },
// {
//   name: "Shy Guy",
//   moves: ['normal', 'attack', 'knockout'],
//   health: 100,
//   hits: 0,
//   moveIndex: 0,
//   images: ['/assets/shy1.png', '/assets/shy2.png', '/assets/shy3.png'],
//   items: []
// }
// ]
// itemButtons & attacks librarys allows easy storage and access of variables
let itemButtons = {
  shell: { name: 'Shell', modifier: 2, description: 'OUCH!' },
  banana: { name: 'Banana', modifier: 8, description: 'Whoops!' },
  mushroom: { name: 'Mushroom', modifier: -5, description: 'Heal' }
}

let attacks = {
  slash: 1,
  rush: 5,
  crit: 10
}

function giveItemShell() {
  character.items.push(itemButtons.shell)
}
function giveItemBanana() {
  character.items.push(itemButtons.banana)
}
function giveItemMushroom() {
  character.items.push(itemButtons.mushroom)

}

// function giveItems2() {
//   characters2[activeCharacters].items.push(itemButtons.shell)
//   characters2[activeCharacters].items.push(itemButtons.banana)
//   characters2[activeCharacters].items.push(itemButtons.mushroom)
// }
function addMods() {
  let combo = 0
  for (let index = 0; index < character.items.length; index++) {
    let item = character.items[index];
    combo += item.modifier
  }
  return combo
}

// function addMods2(attacks) {
//   let combo = 0
//   for (let index = 0; index < characters2[activeCharacters].items.length; index++) {
//     let element = characters2[activeCharacters].items[index];
//     if (itemButtons.shell) {
//       combo = attacks + 2
//     } else if (itemButtons.banana) {
//       combo = attacks + 8
//     } else if (itemButtons.shell) {
//       combo = attacks - 5
//     }

//   }
// }
function imgChange(num) {
  if (character.health == 0) {
    character.moveIndex = 2;
  } else if (character.health < 100) {
    character.moveIndex = 1;
  }
}
function rushAttack(num) {

  character.health -= attacks.rush + addMods();
  character.hits++
  update()
  console.log(character.health)
}
// alert(character.health)
function slashAttack(num) {

  character.health -= attacks.slash + addMods();
  character.hits++
  update()
  console.log(character.health)

}



function critAttack(num) {
  character.health -= attacks.crit + addMods();
  character.hits++
  update()
  console.log(character.health)
}

update()
// function slashAttack2() {
//   characters2[activeCharacters].health -= 1;
//   characters2[activeCharacters].hits++
//   if (characters2[activeCharacters].health < 100) {
//     characters2[activeCharacters].moveIndex = 1;
//   } else if (characters2[activeCharacters].health = 0) {
//     characters2[activeCharacters].moveIndex[2]
//   }
//   alert(characters2[activeCharacters].health)
//   console.log(characters2[activeCharacters].health)
// }
// update()
// function rushAttack2() {
//   characters2[activeCharacters].health -= 5;
//   characters2[activeCharacters].hits++
//   if (characters2[activeCharacters].health < 100) {
//     characters2[activeCharacters].moveIndex = 1;
//   } else if (characters2[activeCharacters].health = 0) {
//     characters2[activeCharacters].moveIndex[2]
//   }
//   alert(characters2[activeCharacters].health)
// }
// update()
// function critAttack2() {
//   characters2[activeCharacters].health -= 10;
//   characters2[activeCharacters].hits++
//   if (characters2[activeCharacters].health < 100) {
//     characters2[activeCharacters].moveIndex = 1;
//   } else if (characters2[activeCharacters].health = 0) {
//     characters2[activeCharacters].moveIndex[2]
//   }
//   alert(characters2[activeCharacters].health)
// }


function update() {

  resetButtons()
  imgChange()
  document.getElementById('health').innerText = character.health.toString()
  document.getElementById('hits').innerText = character.hits.toString()

  document.getElementById('Character1').setAttribute("src", character.images[character.moveIndex])
  // document.getElementById('health').innerText = characters2[activeCharacters].health.toString()
  // document.getElementById('hits').innerText = characters2[activeCharacters].hits.toString()
  // document.getElementById('Character2').setAttribute("src", characters2[activeCharacters].images[characters2[activeCharacters].moveIndex])

  // document.getElementById('progressBar2').style.width = characters2[activeCharacters].health


  if (character.health == 0) {
    document.getElementById('reset').innerText.disabled = true

  } else {
    document.getElementById('reset').innerText.disabled = false
  }
}
update()
function reset() {
  character.health = 100
  // characters2[activeCharacters].health = 100
  character.hits = 0
  character.moveIndex = 0
  // characters2[activeCharacters].hits = 0
  update()
}


function resetButtons() {
  let buttons = document.getElementsByClassName('but')
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    if (character.health <= 0) {
      button.setAttribute('disabled', false)
    } else {
      button.removeAttribute('disabled')
    }
  }
}
// document.getElementById('progressBar1').style.width = character.health
// function drawItemButtons() {
//   let template = ''
//   for (let i = 0; i < characters1[activeCharacters].length; i++) {
//     let character = characters1[i];
//     template += `
//         <button class="btn btn-info" onclick="setActiveCat(${i})">${characters1[activeCharacters].names}</button>
//            `
//   }
//   document.getElementById('characters1-buttons').innerHTML = template
// }

// drawItemButtons()
// function setActiveCharacters(index) {
//   activeCharacters = index
//   update()
// }
// function setActiveCharacters(index) {
//   activeCharacters = index
//   update()
// }
// function progressBar1() {
//   if (character.health <= ) {
//     document.getElementById('progressBar1').style.width = character.health
//   }
// }