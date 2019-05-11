let activeCharacter = 1500;
let characters1 = [{
  name: "Mario",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/mario1.png', 'assets/mario2.png', 'assets/mario3.png']
},
{
  name: "Koopa Troopa",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/koopa1.png', 'assets/koopa2.png', 'assets/koopa3.png']
},
{
  name: "Yoshi",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/yoshi1.png', 'assets/yoshi2.png', 'assets/yoshi3.png']
}]
let characters2 = [{
  name: "Wario",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/wario1.png', 'assets/wario2.png', 'assets/wario3.png']
}, {
  name: "Bowser",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/bowser1.png', 'assets/bowser2.png', 'assets/bowser3.png']
},
{
  name: "Shy Guy",
  moves: ['normal', 'attack', 'knockout'],
  slash: -20,
  rush: -50,
  crit: -180,
  damage: 1500,
  moveIndex: 0,
  images: ['assets/shy1.png', 'assets/shy2.png', 'assets/shy3.png']
}
]

function attack() {
  characters1[activeCharacter].slash++
  if (characters1[activeCharacter].slash % characters1[activeCharacter].damage == 0) {

  }

}

function health() {
  let activeCharacter = document.getElementById("progressBar");
  let width = 1500;
  function frame() {
    if (width >= 1500) {

    } else {
      width--;
      activeCharacter.style.width = width + '%';

    }
  }
}

function drawCharacters() {
  document.getElementById('slashed').innerText = characters1[activeCharacter].slash.toString()
  document.getElementById('rushed').innerText = characters1[activeCharacter].rush.toString()
  document.getElementById('criticaled').innerText = characters1[activeCharacter].crit.toString()
  document.getElementById('slashed1').innerText = characters2[activeCharacter].slash.toString()
  document.getElementById('rushed1').innerText = characters2[activeCharacter].rush.toString()
  document.getElementById('criticaled1').innerText = characters2[activeCharacter].crit.toString()
  document.getElementById('Character1').setAttribute("src", characters1[activeCharacter].images[characters[activeCharacter].moveIndex])
  document.getElementById('Character2').setAttribute("src", characters2[activeCharacter].images[characters[activeCharacter].moveIndex])
}