const Weights = require('../../src/Calculations/weights.js')
const Games = require('../../src/Base/games.js')
const Players = require('../../src/Base/players.js')

test("Check if already played", () => { 
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, [])
    game_a = Games.game_init(player_a, player_b, 0)
    weight_player = Weights.rule_1_already_played(player_a, player_b)
    expect(weight_player).toStrictEqual(-100)
});

test("Check if similar scores", () => {
    player_a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    player_b = Players.player_init("Bihir", "Mafna", 7654321, 8100, []) 
    player_c = Players.player_init('Anwesa', 'Goswami', 2345678, 1800, []) 
    player_d = Players.player_init("Gnwesa", "Aoswami", 8765432, 8100, [])
    game_a = Games.game_init(player_a, player_b, 0)
    game_b = Games.game_init(player_c, player_d, 0)
    Games.game_result(game_a, 'w', [player_a, player_b])
    Games.game_result(game_b, 'w', [player_c, player_d])
    weight_player = Weights.rule_2_similar_scores(player_a, player_c)
    expect(weight_player).toStrictEqual(40)
});