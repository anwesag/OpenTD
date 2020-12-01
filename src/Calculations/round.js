//This will run an entire round and create the games needed
const Rules = require('./weights.js')
const Players = require('../Base/players.js')
const Games = require('../Base/games.js')

/*
* We need to seperate out the array into categories based on points
* We need to make sure we have an even number of Players
* If not, we need to take out the lowest ranking person without a bye
* Adjust arrays so every array has an even amount of people
* Run rules for everyone
*/


exports.run_round = (array, round_num) => {

  //Determine if bye is needed
  playing_array = integrate_bye(array)

  //Seperate into intervals
  intervals = interval_seperation(playing_array)
  //Run rules for every player
  let points = run_rules(playing_array, intervals)

  let games = pair_everyone(points, playing_array, round_num)
}

//If there is an odd number of players
exports.integrate_bye = (array) => {
  if(array.length % 2 == 0) {
    return array
  }
  let index_lowest = array.length - 1
  let byes_lowest = array[index_lowest].byes

  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i].byes === 0) {
      index_lowest = i
      byes_lowest = array[i].byes
      break;
    }

    if(array[i].byes < byes_lowest) {
      index_lowest = i
      byes_lowest = array[i].byes
    }
  }

  array.splice(index_lowest, 1);
  return array
}


//Every time, return an array of indexes where points are split up
exports.interval_seperation = (array) => {
  var intervals = {}
  let begin = 0
  let end = 0
  while(end < array.length - 1){
    console.log(end)
    while(end < array.length && array[begin].points === array[end].points){
      console.log(end)
      end += 1
    }
    intervals[array[begin].points] = [begin, end - 1]
    begin = end
  }
  return intervals
}


exports.run_rules = (array, intervals) => {
  //2D array to return
  let points = new Array(array.length)
  for (let i = 0; i < points.length; i++) {
    points[i] = new Array(array.length)
  }

  for(var player1 of array) {
    for(var player2 of array){
      same_points_array = array.slice(intervals[player1.points][0], intervals[player1.points][1])
      points[i][j] = rule_1_already_played(player1, player2) +
                     rule_2_similar_scores(player1, player2) +
                     rule_3_split(player1, player2, same_points_array) +
                     Math.max(rule_4_equalizing_colors(player1, 1), rule_4_equalizing_colors(player1, -1)) +
                     Math.max(rule_5_alternate_colors(player1, 1), rule_5_alternate_colors(player1, -1))
    }
  }
  return points
}



exports.pair_everyone = (grid, array, round_num) => {
  let completed = new Array(array.length)
  let to_return = []
  for (let i = 0; i < array.length; i++) {
    completed[i] = 0
  }

  let largest = 0
  let largest_index = -1
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if((i == j)) {
        continue
      }
      sum = grid[i][j] + grid[j][i]
      if((sum > largest || largest_index == -1) && completed[j] === 0) {
        largest = sum
        largest_index = j
      }
    }
    completed[largest_index] = 1
    completed[i] = 1
    //Determine color
    if(array[i].color >= 0 && array[largest_index] <= 0) {
      to_return.push(Games.game_init(array[i], array[largest_index], round_num))
    } else {
      to_return.push(Games.game_init(array[largest_index], array[i], round_num))
    }
    largest_index = -1

  }
  return to_return

}


