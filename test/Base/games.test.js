const Games = require('../../src/Base/games.js')
const Players = require('../../src/Base/players.js')

test("Check correct game result recording", () => { 
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    players = Players.getPlayerArray()
    g = Games.game_init(player_a, player_b, 0)
    Games.game_result(g, 'w', players)
    expect(player_a.points).toStrictEqual(1.0)
});

test("Return proper color player_a", () =>{
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    players = Players.getPlayerArray()
    g = Games.game_init(player_a, player_b, 0)
    Games.game_result(g, 'w', players)
    expect(Games.get_color(g, player_a)).toStrictEqual(1)
});

test("Return proper color player_b", () =>{
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    players = Players.getPlayerArray()
    g = Games.game_init(player_a, player_b, 0)
    Games.game_result(g, 'w', players)
    expect(Games.get_color(g, player_b)).toStrictEqual(-1)
});

