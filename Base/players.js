let player = {
  firstName: 'Mihir',
  lastName: 'Bafna',
  id: 1448489,
  rating: 1849,
  points: 0,
  color: 0,
  check_in: false,
  played: [], // game objects,
  teams: [],   //not sure where to access team information from
  byes: 0

}


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
