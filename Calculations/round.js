//This will run an entire round and create the games needed


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
    playing_array = integrate_bye(array)
  }
  //Create 2D array to store everything
  let letters = new Array(3); // Indices 0,1,2


// Loop through the array, adding a
// new array to each location
  for (let i = 0; i < letters.length; i++) {
    letters[i] = new Array(3);// new array of 3 locations
  } 
  //Seperate into intervals
  //Run rules for every player
}

//If there is an odd number of players
function integrate_bye(array) {

}


//Every time, return an array of indexes where points are split up
function interval_seperation(array) {

}
