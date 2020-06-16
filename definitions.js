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
let players = []

//create a player
function player_init(firstName, lastName, id, rating, teams) {
  let currPlayer = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    rating: rating,
    points: 0,
    color: 0,
    played: [], // game objects,
    teams: teams   //not sure where to access team information from
  }

  players.push(currPlayer)
  return currPlayer
}

//return player if they exist, else return NULL
function player_exists(id) {

}
//add a team
function add_team(id, team) {
  player1.played.push(team)
  return true
}



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
      players[i].points + ", " + players[i].rating + ")")
    }
  }
  for(let i = 0; i < players.length; i++){
    if(players[i].id == game.id_black){
      console.log(players[i].firstName + " " + players[i].lastName + " (" +
      players[i].points + ", " + players[i].rating + ")/n")
    }
  }
}

// TODO: Print all games
function all_games(games){ //array of games
  console.log("    White        Black    ")
  for(let i = 0; i < games.length; i++){
    single_game(game)
  }
}

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

function colorcheck (player1, player2){  //same-color-checker
  return (player1.color * player2.color <= 0)
}

function checkscores (player1, player2){ //same-score-checker
  return (player1.points - player2.points)
}
