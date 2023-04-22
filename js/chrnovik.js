

function processForPlayer(attrElem, player1Damage, player2Health) {
  if (attrElem == "water" && player2.currentDefenseElem == "water") {
    player1Damage = 2;
    return player2Health = player2Health - 2;
  } else if (attrElem == "water" && player2.currentDefenseElem == "fire") {
    player1Damage = 10;
    return player2Health = player2Health - 10;
  } else if (attrElem == "water" && player2.currentDefenseElem == "air") {
    player1Damage = 6;
    return player2Health = player2Health - 6;
  } else if (attrElem == "water" && player2.currentDefenseElem == "lightning") {
    player1Damage = 3;
    return player2Health = player2Health - 3;
  } else if (attrElem == "water" && player2.currentDefenseElem == "stone") {
    player1Damage = 0;
    return player2Health = player2Health - 0;
  }
  // for fire
  else if (attrElem == "fire" && player2.currentDefenseElem == "water") {
    player1Damage = 0
    return player2Health = player2Health - 0;
  } else if (attrElem == "fire" && player2.currentDefenseElem == "fire") {
    player1Damage = 5
    return player2Health = player2Health - 5;
  } else if (attrElem == "fire" && player2.currentDefenseElem == "air") {
    player1Damage = 10
    return player2Health = player2Health - 10;
  } else if (attrElem == "fire" && player2.currentDefenseElem == "lightning") {
    player1Damage = 6
    return player2Health = player2Health - 6;
  } else if (attrElem == "fire" && player2.currentDefenseElem == "stone") {
    player1Damage = 3
    return player2Health = player2Health - 3;
  }
  // for air
  else if (attrElem == "air" && player2.currentDefenseElem == "water") {
    player1Damage = 3
    return player2Health = player2Health - 3;
  } else if (attrElem == "air" && player2.currentDefenseElem == "fire") {
    player1Damage = 0
    return player2Health = player2Health - 0;
  } else if (attrElem == "air" && player2.currentDefenseElem == "air") {
    player1Damage = 5
    return player2Health = player2Health - 5;
  } else if (attrElem == "air" && player2.currentDefenseElem == "lightning") {
    player1Damage = 10
    return player2Health = player2Health - 10;
  } else if (attrElem == "air" && player2.currentDefenseElem == "stone") {
    player1Damage = 6
    return player2Health = player2Health - 6;
  }
  // for lightning
  else if (attrElem == "lightning" && player2.currentDefenseElem == "water") {
    player1Damage = 6
    return player2Health = player2Health - 6;
  } else if (attrElem == "lightning" && player2.currentDefenseElem == "fire") {
    player1Damage = 3
    return player2Health = player2Health - 3;
  } else if (attrElem == "lightning" && player2.currentDefenseElem == "air") {
    player1Damage = 0
    return player2Health = player2Health - 0;
  } else if (attrElem == "lightning" && player2.currentDefenseElem == "lightning") {
    player1Damage = 5
    return player2Health = player2Health - 5;
  } else if (attrElem == "lightning" && player2.currentDefenseElem == "stone") {
    player1Damage = 10
    return player2Health = player2Health - 10;
  }
  // for stone
  else if (attrElem == "stone" && player2.currentDefenseElem == "water") {
    player1Damage = 10
    return player2Health = player2Health - 10;
  } else if (attrElem == "stone" && player2.currentDefenseElem == "fire") {
    player1Damage = 6
    return player2Health = player2Health - 6;
  } else if (attrElem == "stone" && player2.currentDefenseElem == "air") {
    player1Damage = 3
    return player2Health = player2Health - 3;
  } else if (attrElem == "stone" && player2.currentDefenseElem == "lightning") {
    player1Damage = 0
    return player2Health = player2Health - 0;
  } else if (attrElem == "stone" && player2.currentDefenseElem == "stone") {
    player1Damage = 5
    return player2Health = player2Health - 5;
  }
}