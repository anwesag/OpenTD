const Players = require('./players.js')

//player1 is white, player 2 is black
function game_init(player1, player2, round) {
  let currGame = {
    id_white: player1.id,
    id_black: player2.id,
    round: round
    result = 'n'
  }

  rounds[round].push(currGame)
  player1.played[round] = currGame
  player1.color++
  player2.played[round] = currGame
  player2.color--
  return currGame
}

//// TODO: Function that can mark the result of a game
function game_result(game, result) {
  game.result = result
  if(result ==='w'){
    for(let i = 0; i < players.length; i++){
      if(players[i].id == game.id_white){
        players[i].points += 1.0
      }
    }
  }
  else if(result ==='b'){
    for(let i = 0; i < players.length; i++){
      if(players[i].id == game.id_black){
        players[i].points += 1.0
      }
    }
  }
  else if(result ==='d'){
    for(let i = 0; i < players.length; i++){
      if(players[i].id == game.id_white || players[i].id == game.id_black){
        players[i].points += 0.5
      }
    }
  }
}

// TODO: Print a game
function single_game(game){
  for(let i = 0; i < players.length; i++){
    if(players[i].id == game.id_white){
      console.log(players[i].firstName + " " + players[i].lastName + " (" +
      players[i].points + ", " + players[i].rating + ")    ")
    }
  }
  for(let i = 0; i < players.length; i++){
    if(players[i].id == game.id_black){
      console.log(players[i].firstName + " " + players[i].lastName + " (" +
      players[i].points + ", " + players[i].rating + ")\n")
    }
  }
}


// TODO: Print all games in a round
function all_games_round(roundNum){
  console.log("ROUND " + roundNum)
  console.log("          White                     Black    ")
  for(let i = 0; i < rounds[roundNum].length; i++){
      single_game(rounds[roundNum][i])
    }
  }
}

// TODO: Print all games and rounds
function all_games(){ //array of games
  for(let i = 0; i < rounds.length; i++){
    all_games_round(i)
  }
}

//1 is white, -1 is black
function get_color(game, player) {
  if(player.id == game.id_white) {
    return 1
  }  else {
    return -1
  }
}
