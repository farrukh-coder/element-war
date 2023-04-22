let playerHealth = 50;
let botHealth = 50;

// Создание игроков
let player1 = {
  // name: playerName1,
  health: playerHealth,
  currentDamageElem: 'attr',
  currentDefenseElem: 'attr'
};

let player2 = {
  // name: playerName2,
  health: botHealth,
  currentDamageElem: 'attr',
  currentDefenseElem: 'attr'
}



let nextStep = document.querySelector('.next-step'),
  stepModal = document.querySelector('.step-modal'),
  winnerModal = document.querySelector('.winner-modal'),
  loserModal = document.querySelector('.loser-modal');


// Собитие для кнопок выбора стихий
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
getElementOnClick(document.querySelectorAll('.player1 .element-damage .element'));
getElementOnClick(document.querySelectorAll('.player1 .element-defense .element'));


// Переменные которые будут хранить русские названия стихий
let myPlayerDamage, myPlayerDefense, myBotDamage, myBotDefense;


function setAttrElem(element) {
  let playerCharacter = element.getAttribute("data-player"),
    playerType = element.getAttribute("data-type"),
    elemValue = element.getAttribute('data-value');

  if (playerCharacter == 'first') {
    if (playerType == 'damage') {
      player1.currentDamageElem = elemValue;

      document.querySelector('.current-damage-style-1').innerHTML = myPlayerDamage = getElementRus(elemValue);

    } else {
      player1.currentDefenseElem = elemValue;
      document.querySelector('.current-defense-style-1').innerHTML = myPlayerDefense = getElementRus(elemValue);
    }
  } else {
    if (playerType == 'damage') {
      player2.currentDamageElem = elemValue;
      document.querySelector('.current-damage-style-2').innerHTML = myBotDamage = getElementRus(elemValue);
    } else {
      player2.currentDefenseElem = elemValue;
      document.querySelector('.current-defense-style-2').innerHTML = myBotDefense = getElementRus(elemValue);
    }
  }
}


let damageElementList = document.querySelectorAll('.player2 .element-damage .element');
let defenseElementList = document.querySelectorAll('.player2 .element-defense .element');
let randomElement;








// Событие для кнопки "Следующий ход"
nextStep.addEventListener('click', function () {
  autoPlay(damageElementList);
  autoPlay(defenseElementList);

  attack(myPlayerDamage, myPlayerDefense, myBotDamage, myBotDefense);

});


// Модальное окно
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
  }, 5000);
}

function closeStepModal() {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
  document.querySelector('.step-modal__inner').style.transform = 'scaleY(0)';
  document.querySelector('.step-modal__timer span').innerHTML = 5;
  setTimeout(() => {
    stepModal.style.opacity = '0';
  }, 150);

  setTimeout(() => {
    stepModal.classList.add('step-modal_hidden');
  }, 300);
}
document.querySelector('.step-modal__close').addEventListener('click', closeStepModal);

function showModal(modal, modaltype, modalInner) {
  modal.classList.remove(modaltype);
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 150);

  setTimeout(() => {
    document.querySelector(modalInner).style.transform = 'scaleY(1)';
  }, 300);
}

document.querySelector('.restart-btn').addEventListener('click', function () {
  location.reload();
});



let damageToPlayer = 0,
  damageToBot = 0;

function attack(playerAttack, playerDefense, botAttack, botDefense) {
  const damageTable = {
    'Вода-Вода': 5,
    'Вода-Огонь': 10,
    'Вода-Воздух': 6,
    'Вода-Молния': 3,
    'Вода-Камень': 0,
    'Огонь-Вода': 0,
    'Огонь-Огонь': 5,
    'Огонь-Воздух': 10,
    'Огонь-Молния': 6,
    'Огонь-Камень': 3,
    'Воздух-Вода': 3,
    'Воздух-Огонь': 0,
    'Воздух-Воздух': 5,
    'Воздух-Молния': 10,
    'Воздух-Камень': 6,
    'Молния-Вода': 6,
    'Молния-Огонь': 3,
    'Молния-Воздух': 0,
    'Молния-Молния': 5,
    'Молния-Камень': 10,
    'Камень-Вода': 10,
    'Камень-Огонь': 6,
    'Камень-Воздух': 3,
    'Камень-Молния': 0,
    'Камень-Камень': 5
  };
  const attackKey = `${playerAttack}-${botDefense}`;
  const defenseKey = `${botAttack}-${playerDefense}`;

  damageToPlayer = damageTable[defenseKey];
  damageToBot = damageTable[attackKey];

  playerHealth -= damageToPlayer;
  botHealth -= damageToBot;

  if (playerHealth <= 0) {
    playerHealth = 0;
    showModal(loserModal, 'loser-modal_hidden', '.loser-modal__inner');

  } else if (botHealth <= 0) {
    botHealth = 0;
    showModal(winnerModal, 'winner-modal_hidden', '.winner-modal__inner');

  } else {
    console.log('Игра идёт...');
    showStepModal();
  }
  updateIndicators();
}



function updateIndicators() {
  let playerHealthStat = document.querySelectorAll('.player-health'),
    playerDamageStat = document.querySelectorAll('.player-damage'),
    botHealthStat = document.querySelectorAll('.bot-health'),
    botDamageStat = document.querySelectorAll('.bot-damage');


  for (let i = 0; i < playerHealthStat.length; i++) {
    playerHealthStat[i].innerHTML = playerHealth;
    playerDamageStat[i].innerHTML = damageToBot;
    botHealthStat[i].innerHTML = botHealth;
    botDamageStat[i].innerHTML = damageToPlayer;
  }
}


// Случайный выбор стихии - для бота
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