// template for a person
//2D array
let player = {
  firstName: 'Mihir',
  lastName: 'Bafna',
  id: 1448489,
  rating: 1849,
  points: 0,
  color: 0,
  check_in: false,
  played: [], // game objects,
  teams: []   //not sure where to access team information from
}

// template for a game
let game = {
  id_white: 12345,
  id_black: 45123,
  round: -1,
  result: 'w' // w  = white won, b = black won, d = draw, n = no result
}

let teams = {
  id_num: 12,
  id_name: 'team1',
  players: []
}

let players = []
let rounds = []
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
  for(let i = 0; i < players.length; i++) {
    if(players[i].id === id) {
      return players[i]
    }
  }
  return NULL
}

//add a team
function add_team(player1, team) {
  player1.played.push(team)
  return true
}

//remove a team from a player
function remove_team(player1, team) {
  const index = player1.teams.indexOf(team)
  if(index > -1) {
    array.splice(index, 1)
  }
}

function check_in(player1) {
  player1.check_in = true
}

function check_out() {
  player.check_out = false
}


function print_players() {
  players.forEach((item, i) => {
    console.log(i + " " + item.firstName + " " + item.lastName + " " + item.rating + " "+ item.points)
  });
}


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
