/* This file pairs a round. As part of the round, we give an event a weight.
*  These stay constants, but can(and as rules change, should) be tweaked to improve
*  reliability.
*  The higher your number, the better the match.
*  The contants below says what should be added to your score if in an ideal
*  situation. The less ideal, the lower points assigned to that matchup.
*/

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

function rule_5_alternate_colors(player1, player2, color_player_1) {

}
