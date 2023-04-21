// Ввод имени
// let playerName1 = prompt('Введите имя первого игрока');
// let playerName2 = prompt('Введите имя второго игрока');

// document.querySelector('.player1 .stats__name span').innerHTML = playerName1;
// document.querySelector('.player2 .stats__name span').innerHTML = playerName2;

// Создание игроков
let player1 = {
  // name: playerName1,
  health: 30,
  currentDamageElem: 'attr',
  currentDefenseElem: 'attr'
};

let player2 = {
  // name: playerName2,
  health: 30,
  currentDamageElem: 'attr',
  currentDefenseElem: 'attr'
}

// Получение элементов с HTML
let playerElementDamage_1 = document.querySelectorAll('.player1 .element-damage .element'),
  playerElementDamage_2 = document.querySelectorAll('.player2 .element-damage .element'),
  playerElementDefense_1 = document.querySelectorAll('.player1 .element-defense .element'),
  playerElementDefense_2 = document.querySelectorAll('.player2 .element-defense .element'),
  nextStep = document.querySelector('.next-step'),
  playerHealth1 = document.querySelector('.health-player1'),
  playerHealth2 = document.querySelector('.health-player2'),
  playerDamage1 = document.querySelector('.damage-player1'),
  playerDamage2 = document.querySelector('.damage-player2')


// Собитие для кнопок
function getElementOnClick(elements) {
  elements.forEach(element => {
    element.addEventListener('click', function () {
      elements.forEach(e => {
        e.classList.remove('elem-checked');
      });
      element.classList.add('elem-checked')


      let playerCharacter = element.getAttribute("data-player"),
        playerType = element.getAttribute("data-type"),
        elemValue = element.getAttribute('data-value');

      if (playerCharacter == 'first') {
        if (playerType == 'damage') {
          player1.currentDamageElem = elemValue;
        } else {
          player1.currentDefenseElem = elemValue;
        }
      } else {
        if (playerType == 'damage') {
          player2.currentDamageElem = elemValue;
        } else {
          player2.currentDefenseElem = elemValue;
        }
      }

    });
  });
}

// Обработчик для кнопок
let selectedElement = getElementOnClick(playerElementDamage_1);
let selectedElement2 = getElementOnClick(playerElementDamage_2);
let selectedElement3 = getElementOnClick(playerElementDefense_1);
let selectedElement4 = getElementOnClick(playerElementDefense_2);







// Событие для кнопки "Следующий ход"
nextStep.addEventListener('click', function () {
  alert("Кнопка босилди ёпта")
  if (processForPlayer1 > 0) {
    alert("первый игрок умер")
  } else if (processForPlayer2 > 0) {
    alert("второй игрок умер")
  } else {

    if (player1.health <= 0) {
      alert('game over1');
      playerHealth1.innerHTML = 0
    } else if (player2.health <= 0) {
      alert('game over2');
      playerHealth2.innerHTML = 0

    } else {
      processForPlayer1();
      processForPlayer2();
      playerHealth1.innerHTML = player1.health;
      playerHealth2.innerHTML = player2.health;
    }
  }
});


// Игровая логика для первого игрока
function processForPlayer1() {
  if (player1.currentDamageElem == "water" && player2.currentDefenseElem == "water") {
    playerDamage1.innerHTML = 2;
    return player2.health = player2.health - 2;
  } else if (player1.currentDamageElem == "water" && player2.currentDefenseElem == "fire") {
    playerDamage1.innerHTML = 10;
    return player2.health = player2.health - 10;
  } else if (player1.currentDamageElem == "water" && player2.currentDefenseElem == "air") {
    playerDamage1.innerHTML = 6;
    return player2.health = player2.health - 6;
  } else if (player1.currentDamageElem == "water" && player2.currentDefenseElem == "lightning") {
    playerDamage1.innerHTML = 3;
    return player2.health = player2.health - 3;
  } else if (player1.currentDamageElem == "water" && player2.currentDefenseElem == "stone") {
    playerDamage1.innerHTML = 0;
    return player2.health = player2.health - 0;
  }
  // for fire
  else if (player1.currentDamageElem == "fire" && player2.currentDefenseElem == "water") {
    playerDamage1.innerHTML = 0
    return player2.health = player2.health - 0;
  } else if (player1.currentDamageElem == "fire" && player2.currentDefenseElem == "fire") {
    playerDamage1.innerHTML = 5
    return player2.health = player2.health - 5;
  } else if (player1.currentDamageElem == "fire" && player2.currentDefenseElem == "air") {
    playerDamage1.innerHTML = 10
    return player2.health = player2.health - 10;
  } else if (player1.currentDamageElem == "fire" && player2.currentDefenseElem == "lightning") {
    playerDamage1.innerHTML = 6
    return player2.health = player2.health - 6;
  } else if (player1.currentDamageElem == "fire" && player2.currentDefenseElem == "stone") {
    playerDamage1.innerHTML = 3
    return player2.health = player2.health - 3;
  }
  // for air
  else if (player1.currentDamageElem == "air" && player2.currentDefenseElem == "water") {
    playerDamage1.innerHTML = 3
    return player2.health = player2.health - 3;
  } else if (player1.currentDamageElem == "air" && player2.currentDefenseElem == "fire") {
    playerDamage1.innerHTML = 0
    return player2.health = player2.health - 0;
  } else if (player1.currentDamageElem == "air" && player2.currentDefenseElem == "air") {
    playerDamage1.innerHTML = 5
    return player2.health = player2.health - 5;
  } else if (player1.currentDamageElem == "air" && player2.currentDefenseElem == "lightning") {
    playerDamage1.innerHTML = 10
    return player2.health = player2.health - 10;
  } else if (player1.currentDamageElem == "air" && player2.currentDefenseElem == "stone") {
    playerDamage1.innerHTML = 6
    return player2.health = player2.health - 6;
  }
  // for lightning
  else if (player1.currentDamageElem == "lightning" && player2.currentDefenseElem == "water") {
    playerDamage1.innerHTML = 6
    return player2.health = player2.health - 6;
  } else if (player1.currentDamageElem == "lightning" && player2.currentDefenseElem == "fire") {
    playerDamage1.innerHTML = 3
    return player2.health = player2.health - 3;
  } else if (player1.currentDamageElem == "lightning" && player2.currentDefenseElem == "air") {
    playerDamage1.innerHTML = 0
    return player2.health = player2.health - 0;
  } else if (player1.currentDamageElem == "lightning" && player2.currentDefenseElem == "lightning") {
    playerDamage1.innerHTML = 5
    return player2.health = player2.health - 5;
  } else if (player1.currentDamageElem == "lightning" && player2.currentDefenseElem == "stone") {
    playerDamage1.innerHTML = 10
    return player2.health = player2.health - 10;
  }
  // for stone
  else if (player1.currentDamageElem == "stone" && player2.currentDefenseElem == "water") {
    playerDamage1.innerHTML = 10
    return player2.health = player2.health - 10;
  } else if (player1.currentDamageElem == "stone" && player2.currentDefenseElem == "fire") {
    playerDamage1.innerHTML = 6
    return player2.health = player2.health - 6;
  } else if (player1.currentDamageElem == "stone" && player2.currentDefenseElem == "air") {
    playerDamage1.innerHTML = 3
    return player2.health = player2.health - 3;
  } else if (player1.currentDamageElem == "stone" && player2.currentDefenseElem == "lightning") {
    playerDamage1.innerHTML = 0
    return player2.health = player2.health - 0;
  } else if (player1.currentDamageElem == "stone" && player2.currentDefenseElem == "stone") {
    playerDamage1.innerHTML = 5
    return player2.health = player2.health - 5;
  }
}


// Игровая логика для второго игрока
function processForPlayer2() {
  if (player2.currentDamageElem == "water" && player1.currentDefenseElem == "water") {
    playerDamage2.innerHTML = 2
    return player1.health = player1.health - 2;
  } else if (player2.currentDamageElem == "water" && player1.currentDefenseElem == "fire") {
    playerDamage2.innerHTML = 10
    return player1.health = player1.health - 10;
  } else if (player2.currentDamageElem == "water" && player1.currentDefenseElem == "air") {
    playerDamage2.innerHTML = 6
    return player1.health = player1.health - 6;
  } else if (player2.currentDamageElem == "water" && player1.currentDefenseElem == "lightning") {
    playerDamage2.innerHTML = 3
    return player1.health = player1.health - 3;
  } else if (player2.currentDamageElem == "water" && player1.currentDefenseElem == "stone") {
    playerDamage2.innerHTML = 0
    return player1.health = player1.health - 0;
  }
  // for fire
  else if (player2.currentDamageElem == "fire" && player1.currentDefenseElem == "water") {
    playerDamage2.innerHTML = 0
    return player1.health = player1.health - 0;
  } else if (player2.currentDamageElem == "fire" && player1.currentDefenseElem == "fire") {
    playerDamage2.innerHTML = 5
    return player1.health = player1.health - 5;
  } else if (player2.currentDamageElem == "fire" && player1.currentDefenseElem == "air") {
    playerDamage2.innerHTML = 10
    return player1.health = player1.health - 10;
  } else if (player2.currentDamageElem == "fire" && player1.currentDefenseElem == "lightning") {
    playerDamage2.innerHTML = 6
    return player1.health = player1.health - 6;
  } else if (player2.currentDamageElem == "fire" && player1.currentDefenseElem == "stone") {
    playerDamage2.innerHTML = 3
    return player1.health = player1.health - 3;
  }
  // for air
  else if (player2.currentDamageElem == "air" && player1.currentDefenseElem == "water") {
    playerDamage2.innerHTML = 3
    return player1.health = player1.health - 3;
  } else if (player2.currentDamageElem == "air" && player1.currentDefenseElem == "fire") {
    playerDamage2.innerHTML = 0
    return player1.health = player1.health - 0;
  } else if (player2.currentDamageElem == "air" && player1.currentDefenseElem == "air") {
    playerDamage2.innerHTML = 5
    return player1.health = player1.health - 5;
  } else if (player2.currentDamageElem == "air" && player1.currentDefenseElem == "lightning") {
    playerDamage2.innerHTML = 10
    return player1.health = player1.health - 10;
  } else if (player2.currentDamageElem == "air" && player1.currentDefenseElem == "stone") {
    playerDamage2.innerHTML = 6
    return player1.health = player1.health - 6;
  }
  // for lightning
  else if (player2.currentDamageElem == "lightning" && player1.currentDefenseElem == "water") {
    playerDamage2.innerHTML = 6
    return player1.health = player1.health - 6;
  } else if (player2.currentDamageElem == "lightning" && player1.currentDefenseElem == "fire") {
    playerDamage2.innerHTML = 3
    return player1.health = player1.health - 3;
  } else if (player2.currentDamageElem == "lightning" && player1.currentDefenseElem == "air") {
    playerDamage2.innerHTML = 0
    return player1.health = player1.health - 0;
  } else if (player2.currentDamageElem == "lightning" && player1.currentDefenseElem == "lightning") {
    playerDamage2.innerHTML = 5
    return player1.health = player1.health - 5;
  } else if (player2.currentDamageElem == "lightning" && player1.currentDefenseElem == "stone") {
    playerDamage2.innerHTML = 10
    return player1.health = player1.health - 10;
  }
  // for stone
  else if (player2.currentDamageElem == "stone" && player1.currentDefenseElem == "water") {
    playerDamage2.innerHTML = 10
    return player1.health = player1.health - 10;
  } else if (player2.currentDamageElem == "stone" && player1.currentDefenseElem == "fire") {
    playerDamage2.innerHTML = 6
    return player1.health = player1.health - 6;
  } else if (player2.currentDamageElem == "stone" && player1.currentDefenseElem == "air") {
    playerDamage2.innerHTML = 3
    return player1.health = player1.health - 3;
  } else if (player2.currentDamageElem == "stone" && player1.currentDefenseElem == "lightning") {
    playerDamage2.innerHTML = 0
    return player1.health = player1.health - 0;
  } else if (player2.currentDamageElem == "stone" && player1.currentDefenseElem == "stone") {
    playerDamage2.innerHTML = 5
    return player1.health = player1.health - 5;
  }
}