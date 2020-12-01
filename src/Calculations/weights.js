const Players = require('../Base/players.js')
const Games = require('../Base/games.js')

/* This file pairs a round. As part of the round, we give an event a weight.
*  These stay constants, but can(and as rules change, should) be tweaked to improve
*  reliability.
*  The higher your number, the better the match.
*  The contants below says what should be added to your score if in an ideal
*  situation. The less ideal, the lower points assigned to that matchup.
*/

/* TODO: If 2 people are on same team, reduce score */
//Rule 1: Avoid meeting players twice. Subtract 100 everytime played this player 1 or more times
const rule_1 = 100

/* Rule 2: Ideally play people with equal scores. Subtract 10 points for each difference in points
*  Ex: Player 1 (4.0) vs Player 2 (4.0) -> 40 points
*  Ex: Player 1 (4.0) vs PLayer 2 (2.0) -> 20 points
*/
const rule_2 = 40

/* Rule 3: Upper half vs Lower Half: Based on middle determined by helper function, determine how ideal of a placement a player is at.
*  Score decreases based on distance from middle
*/
const rule_3 = 15

/* Rule 4: Equalizing colors: Play someone so that your colors become equal. Reduce if color integer goes away from 0.
*/
const rule_4 = 5

/* Rule 5: Alternate colors: Play someone so the color you play is different from last round. Not added if does not happen.
*/
const rule_5 = 1


exports.rule_1_already_played = (player1, player2) => {
  let weight = 0
  for (var round in player1.played) {
    if(player1.played[round].id_white === player2.id || player1.played[round].id_black === player2.id){
      weight -= rule_1
    }
  }
  return weight
}


exports.rule_2_similar_scores = (player1, player2) => {
  return rule_2 - (10 * Math.abs(player1.points - player2.points))
}

//assume array is even
exports.rule_3_split = (player1, player2, array) => {
  if(!(array.includes(player2))){
    return 0
  }
  const half = Math.ceil(array.length / 2);

  let player1_index = -1
  let player2_index = -1
  for(let i = 0; i < array.length; i++) {
    if(array[i] === player1) {
      player1_index = i
    }

    if(array[i] === player2) {
      player2_index = i
    }
  }

  return rule_3 - Math.abs((player1_index % half) - (player2_index % half))

}


exports.rule_4_equalizing_colors = (player1, color_player_1) => {
  let fake_number = player1.color + color_player_1
  return rule_4 - Math.abs(fake_number)
}



exports.rule_5_alternate_colors = (player1, color_player_1) => {
  //Check if color matches from previous game
  if(Games.get_color(player1.played[player.played.length - 1], player1) != color_player_1) {
    return rule_5
  }
  return 0
}
