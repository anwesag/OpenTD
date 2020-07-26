//This will run an entire round and create the games needed
const Rules = require(./weights.js)

/*
* We need to seperate out the array into categories based on points
* We need to make sure we have an even number of Players
* If not, we need to take out the lowest ranking person without a bye
* Adjust arrays so every array has an even amount of people
* Run rules for everyone
*/


function run_round(array) {
  playing_array = array

  //Determine if bye is needed
  if(array.length % 2 == 1) {
    playing_array = integrate_bye(playing_array)
  }

  //Create 2D array to store everything
  let points = new Array(playing_array.length)
  for (let i = 0; i < points.length; i++) {
    points[i] = new Array(playing_array.length)
  }

  //Seperate into intervals
  intervals = interval_seperation(playing_array)
  //Run rules for every player
  points = run_rules(playing_array, intervals)
}

//If there is an odd number of players
function integrate_bye(array) {
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
function interval_seperation(array) {
  var intervals = {}
  let begin = 0
  let end = 0
  while(end < array.length - 1){
    while(array[begin].points === array[end+1].points){
      end += 1
    }
    invervals[array[begin].points] = [begin, end]
    begin = end
  }
  return intervals
}


function run_rules(array, intervals) {
  //2D array to return
  let points = new Array(array.length)
  for (let i = 0; i < points.length; i++) {
    points[i] = new Array(array.length)
  }

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++){
      same_points_array = array.slice(intervals[array[i].points][0], intervals[array[i].points][1])
      points[i][j] = rule_1_already_played(array[i], array[j]) +
                     rule_2_similar_scores(array[i], array[j]) +
                     rule_3_split(array[i], array[j], same_points_array) +
                     max(rule_4_equalizing_colors(array[i], 1), rule_4_equalizing_colors(array[i], -1)) +
                     max(rule_5_alternate_colors(array[i], 1), rule_5_alternate_colors(array[i], -1))
    }
  }
}

function max(one, two){
  if(one > two) return one
  return two
}
