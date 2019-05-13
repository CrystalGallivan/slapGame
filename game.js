let activeCharacters = 9

let characters1 = [{
  name: "Mario",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  moveIndex: 0,
  images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png'],
  items: []
},
{
  name: "Koopa Troopa",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  moveIndex: 0,
  images: ['assets/koopa1.png', 'assets/koopa2.png', 'assets/koopa3.png'],
  items: []
},
{
  name: "Yoshi",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  moveIndex: 0,
  images: ['assets/yoshi1.png', 'assets/yoshi2.png', 'assets/yoshi3.png'],
  items: []
}]
// chacacter2 array allows for a secondary character selection
let characters2 = [{
  name: "Wario",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  images: ['assets/wario1.png', 'assets/wario2.png', 'assets/wario3.png'],
  items: []
}, {
  name: "Bowser",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  images: ['assets/bowser1.png', 'assets/bowser2.png', 'assets/bowser3.png'],
  items: []
},
{
  name: "Shy Guy",
  moves: ['normal', 'attack', 'knockout'],
  health: 1500,
  hits: 0,
  images: ['assets/shy1.png', 'assets/shy2.png', 'assets/shy3.png'],
  items: []
}
]
// itemButtons & attacks librarys allows easy storage and access of variables
let itemButtons = {
  shell: { name: 'Shell', modifier: 20, description: 'OUCH!' },
  banana: { name: 'Banana', modifier: setTimeout(critAttack, 2000), description: 'Whoops!' },
  mushroom: { name: 'Mushroom', modifier: -50, description: 'What The!' }
}

// let attacks = {
//   slash: 0,
//   rush: 0,
//   crit: 0
// }
function giveItems() {
  characters1[activeCharacters].items.push(itemButtons.shell)
  characters1[activeCharacters].items.push(itemButtons.banana)
  characters1[activeCharacters].items.push(itemButtons.mushroom)
}
function giveItems2() {
  characters2[activeCharacters].items.push(itemButtons.shell)
  characters2[activeCharacters].items.push(itemButtons.banana)
  characters2[activeCharacters].items.push(itemButtons.mushroom)
}
function addMods(attack) {
  let combo = 0
  for (let index = 0; index < characters1[activeCharacters].items.length; index++) {
    let element = characters1[activeCharacters].items[index];
    if (itemButtons.shell) {
      combo = attack + 20
    } else if (itemButtons.banana) {
      combo = setTimeout(critAttack, 2000)
    } else if (itemButtons.shell) {
      combo = attack - 50
    }

  }
}
function addMods2(attack) {
  let combo = 0
  for (let index = 0; index < characters2[activeCharacters].items.length; index++) {
    let element = characters2[activeCharacters].items[index];
    if (itemButtons.shell) {
      combo = attack + 20
    } else if (itemButtons.banana) {
      combo = setTimeout(critAttack, 2000)
    } else if (itemButtons.shell) {
      combo = attack - 50
    }

  }
}
function slashAttack() {
  characters1[activeCharacters].health -= 10;
  characters1[activeCharacters].hits++
  if (characters1[activeCharacters].health < 1500) {
    characters1[activeCharacters].moveIndex = 1;
  } else if (characters1[activeCharacters].health = 0) {
    characters1[activeCharacters].moveIndex[2]
  }
}
update()
function rushAttack() {
  characters1[activeCharacters].health -= 50;
  characters1[activeCharacters].hits++
  if (characters1[activeCharacters].health < 1500) {
    characters1[activeCharacters].moveIndex = 1;
  } else if (characters1[activeCharacters].health = 0) {
    characters1[activeCharacters].moveIndex[2]
  }
}
update()
function critAttack() {
  characters1[activeCharacters].health -= 100;
  characters1[activeCharacters].hits++
  if (characters1[activeCharacters].health < 1500) {
    characters1[activeCharacters].moveIndex = 1;
  } else if (characters1[activeCharacters].health = 0) {
    characters1[activeCharacters].moveIndex[2]
  }
  update()
  function slashAttack2() {
    characters2[activeCharacters].health -= 10;
    characters2[activeCharacters].hits++
    if (characters2[activeCharacters].health < 1500) {
      characters2[activeCharacters].moveIndex = 1;
    } else if (characters2[activeCharacters].health = 0) {
      characters2[activeCharacters].moveIndex[2]
    }
  }
  update()
  function rushAttack2() {
    characters2[activeCharacters].health -= 50;
    characters2[activeCharacters].hits++
    if (characters2[activeCharacters].health < 1500) {
      characters2[activeCharacters].moveIndex = 1;
    } else if (characters2[activeCharacters].health = 0) {
      characters2[activeCharacters].moveIndex[2]
    }
  }
  update()
  function critAttack2() {
    characters2[activeCharacters].health -= 100;
    characters2[activeCharacters].hits++
    if (characters2[activeCharacters].health < 1500) {
      characters2[activeCharacters].moveIndex = 1;
    } else if (characters2[activeCharacters].health = 0) {
      characters2[activeCharacters].moveIndex[2]
    }
  }
  update()

  function update() {
    document.getElementById('health').innerText = characters1[activeCharacters].health.toString()
    document.getElementById('hits').innerText = characters1[activeCharacters].hits.toString()
    document.getElementById('Character1').setAttribute("src", characters1[activeCharacters].images[characters1[activeCharacters].moveIndex])
    document.getElementById('health').innerText = characters2[activeCharacters].health.toString()
    document.getElementById('hits').innerText = characters2[activeCharacters].hits.toString()
    document.getElementById('Character2').setAttribute("src", characters2[activeCharacters].images[characters2[activeCharacters].moveIndex])
    if (characters1[activeCharacters].health = 0) {
      document.getElementById('reset').innerText.disabled = true
    } else {
      document.getElementById('reset').innerText.disabled = false
    }
  }
  update()
  function reset() {
    characters1[activeCharacters].health = 0
    characters2[activeCharacters].health = 0
    characters1[activeCharacters].hits = 0
    characters2[activeCharacters].hits = 0
  }
  update()
  function drawItemButtons() {
    let template = ''
    for (let i = 0; i < characters1[activeCharacters].names.length; i++) {
      let character = characters1[i];
      template += `
        <button class="btn btn-info" onclick="setActiveCat(${i})">${characters1[activeCharacters].names}</button>
           `
    }
    document.getElementById('characters1-buttons').innerHTML = template
  }

  drawItemButtons()
  function setActiveCharacters(index) {
    activeCharacters = index
    update()
  }