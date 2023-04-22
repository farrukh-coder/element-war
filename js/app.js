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
  playerElementDefense_1 = document.querySelectorAll('.player1 .element-defense .element'),
  playerElementDamage_2 = document.querySelectorAll('.player2 .element-damage .element'),
  playerElementDefense_2 = document.querySelectorAll('.player2 .element-defense .element'),
  nextStep = document.querySelector('.next-step'),
  playerHealth1 = document.querySelector('.health-player1'),
  playerHealth2 = document.querySelector('.health-player2'),
  playerDamage1 = document.querySelector('.damage-player1'),
  playerDamage2 = document.querySelector('.damage-player2'),
  modalPlayerDamage1 = document.querySelector('.player-current-dam-1'),
  modalPlayerDamage2 = document.querySelector('.player-current-dam-2'),
  stepModal = document.querySelector('.step-modal'),
  stepModalTimer = document.querySelector('.step-modal__timer span'),
  playerHealthModal1 = document.querySelector('.step-modal-health-1'),
  playerHealthModal2 = document.querySelector('.step-modal-health-2');






// Собитие для кнопок
function getElementOnClick(elements) {
  elements.forEach(element => {
    element.addEventListener('click', function () {
      elements.forEach(e => {
        e.classList.remove('elem-checked');
      });
      element.classList.add('elem-checked');
      setAttrElem(element);
    });
  });
}

// Запуск функции кнопок
getElementOnClick(playerElementDamage_1);
getElementOnClick(playerElementDefense_1);

function setAttrElem(element) {
  let playerCharacter = element.getAttribute("data-player"),
    playerType = element.getAttribute("data-type"),
    elemValue = element.getAttribute('data-value');

  if (playerCharacter == 'first') {
    if (playerType == 'damage') {
      player1.currentDamageElem = elemValue;
      document.querySelector('.current-damage-style-1').innerHTML = getElementRus(elemValue);

    } else {
      player1.currentDefenseElem = elemValue;
      document.querySelector('.current-defense-style-1').innerHTML = getElementRus(elemValue);
    }
  } else {
    if (playerType == 'damage') {
      player2.currentDamageElem = elemValue;
      document.querySelector('.current-damage-style-2').innerHTML = getElementRus(elemValue);
    } else {
      player2.currentDefenseElem = elemValue;
      document.querySelector('.current-defense-style-2').innerHTML = getElementRus(elemValue);
    }
  }
}


let damageElementList = document.querySelectorAll('.player2 .element-damage .element');
let defenseElementList = document.querySelectorAll('.player2 .element-defense .element');
let randomElement;




function autoPlay(damageType) {
  let randomIndex = Math.floor(Math.random() * damageType.length);
  randomElement = damageType[randomIndex];
  damageType.forEach(e => {
    e.classList.remove('elem-checked');
  });
  randomElement.classList.add('elem-checked');
  setAttrElem(randomElement);
  return randomElement;
}



// Событие для кнопки "Следующий ход"
nextStep.addEventListener('click', function () {
  autoPlay(damageElementList);
  autoPlay(defenseElementList);
  if (processForPlayer1() === false) {
    alert('error');

  } else {
    if (player1.health <= 0) {
      alert('game over1');
      playerHealth1.innerHTML = 0
      console.log('game over 1');

    } else if (player2.health <= 0) {
      alert('game over2');
      playerHealth2.innerHTML = 0
      console.log('game over 2');


    } else {
      // processForPlayer1();
      processForPlayer2();
      playerHealth1.innerHTML = player1.health;
      playerHealth2.innerHTML = player2.health;

      playerHealthModal1.innerHTML = player1.health;
      playerHealthModal2.innerHTML = player2.health;

      modalPlayerDamage1.innerHTML = playerDamage1.innerHTML;
      modalPlayerDamage2.innerHTML = playerDamage2.innerHTML;

      showStepModal();
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
  } else {
    return false;
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
  } else {
    return false;
  }
}





// модалка

let intervalId, timeoutId;

function showStepModal() {

  stepModal.classList.remove('step-modal_hidden');
  setTimeout(() => {
    stepModal.style.opacity = '1';
  }, 150);

  setTimeout(() => {
    document.querySelector('.step-modal__inner').style.transform = 'scaleY(1)';
  }, 300);


  intervalId = setInterval(function () {
    document.querySelector('.step-modal__timer span').innerHTML--;
  }, 1000);

  // Останавливаем интервал через 7 секунд
  timeoutId = setTimeout(function () {
    clearInterval(intervalId);
    closeStepModal();
  }, 7000);

}

document.querySelector('.step-modal__close').addEventListener('click', closeStepModal);

function closeStepModal() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  document.querySelector('.step-modal__inner').style.transform = 'scaleY(0)';
  document.querySelector('.step-modal__timer span').innerHTML = 7;
  setTimeout(() => {
    stepModal.style.opacity = '0';
  }, 150);

  setTimeout(() => {
    stepModal.classList.add('step-modal_hidden');
  }, 300);
}



// функция которая возвращает русское слово стихии в зависимости от передаваемого в него атрибута
function getElementRus(attrElem) {
  if (attrElem == 'water') {
    return "Вода";
  } else if (attrElem == 'fire') {
    return "Огонь"
  } else if (attrElem == 'air') {
    return "Воздух"
  } else if (attrElem == 'lightning') {
    return "Молния"
  } else if (attrElem == 'stone') {
    return "Камень"
  }
}