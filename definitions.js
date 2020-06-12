// template for a person

let player = {
  firstName: 'Mihir',
  lastName: 'Bafna',
  id: 1448489,
  rating: 1849,
  points: 0,
  color: 0,
  played: [], // game objects,
  teams: []   //not sure where to access team information from
}

// template for a game
let game = {
  id_white: 12345,
  id_black: 45123,
  result: 'w' // w  = white won, b = black won, d = draw, n = no result
}

let teams = {
  id_num: 12,
  id_name: 'team1',
  players: []
}

let games = []

//player1 is white, player 2 is black
function game_init(player1, player2) {
  let currGame = {
    id_white: player1.id,
    id_black: player2.id,
    result = 'n'
  }

  games.push(currGame)
  player1.played.push(currGame)
  player2.played.push(currGame)
  return currGame
}

//// TODO: Function that can mark the result of a game

// TODO: Print a game

// TODO: Print all games

// TODO: Print all games in a round




function played (player1, player2) {
  for (let i = 0; i < player.played.length; i++) {
    if (player1[i].id_white === player2.id || player1[i].id_black === player2.id) {
      return true
    }
  }
  return false
}

function sameteam (player1, player2){  //potential same-team-checker
  for(let i = 0; i < player1.teams.length; i++){
    for(let j = 0; j < player2.teams.length; j++){
      if(player1.teams[i] === player2.teams[j]){
        return true
      }
    }
    return false
}

function color_check (player1, player2){  //same-color-checker
  return (player1.color * player2.color <= 0)
}

function check_scores (player1, player2){ //same-score-checker
  return (player1.points - player2.points)
}
