const Rounds = require('../../src/Calculations/round.js')
const Games = require('../../src/Base/games.js')
const Players = require('../../src/Base/players.js')

test("Bye not given", () => { 
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    player_a.byes++
    players = Players.getPlayerArray()
    expect(Rounds.integrate_bye(players)).toEqual(players)
});


test("Bye given", () => { 
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init('Anwesa', 'Goswami', 12345765, 9000, []) 
    player_c = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])

    player_a.byes++
    players = Players.getPlayerArray()
    arr = players
    arr.pop()
    expect(Rounds.integrate_bye(players)).toEqual(arr)
});

test("no split", () => { 
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init('Anwesa', 'Goswami', 12345765, 9000, []) 
    player_c = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    players = Players.getPlayerArray()
    console.log(players)
    arr = {'0' : [0, 2]}
    expect(Rounds.interval_seperation(players)).toEqual(arr)
});
