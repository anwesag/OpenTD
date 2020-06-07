// template for a person

let player = {
  firstName: 'Mihir',
  lastName: 'Bafna',
  id: 1448489,
  rating: 1849,
  points: 0,
  color: 0,
  played: [] // game objects,
  //teamnum: 0   //not sure where to access team information from
}




// template for a game

let game = {
  id_white: 12345,
  id_black: 45123,
  result: 'w' // w  = white won, b = black won, d = draw
}




function played (player1, player2) {
  for (let i = 0; i < player.played.length; i++) {
    if (player1[i].id_white === player2.id || player1[i].id_black === player2.id) {
      return true
    }
  }
  return false
}

// function sameteam (player1, player2){  //potential same-team-checker
//    return (player1.teamnum == player2.teamnum)
// }

function colorcheck (player1, player2){  //same-color-checker
  return (player1.color == player2.color)
}

function checkscores (player1, player2){ //same-score-checker
  return (player1.points == player2.points)
}
