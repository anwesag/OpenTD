const Players = require('../../src/Base/players.js')

test("Test player does not exist", () => {

    expect(Players.player_exists(14526)).toBe(-1)
});

test("Test initializing a player", () => {
    
    a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    expect(Players.player_exists(1234567)).toBe(a)
});

test("Test adding a team", () => {
    a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    b = Players.player_init('Mihir', 'Bafna', 1234567, 1800, ['ew']) 

    Players.add_team(a, 'ew')
    expect(a).toStrictEqual(b)
});

test("Test removing a valid team", () => {
    a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 
    b = Players.player_init('Mihir', 'Bafna', 1234567, 1800, []) 

    Players.add_team(a, 'ew')
    Players.remove_team(a, 'ew')
    expect(a).toStrictEqual(b)
});

test("Test same team", () => {
    a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, ['ew']) 
    b = Players.player_init('Mihir', 'Bafna', 1234567, 1800, ['ew']) 

    expect(Players.sameteam(a, b)).toStrictEqual(true)
});

test("Test not same team", () => {
    a = Players.player_init('Mihir', 'Bafna', 1234567, 1800, ['eww']) 
    b = Players.player_init('Mihir', 'Bafna', 1234567, 1800, ['ew']) 

    expect(Players.sameteam(a, b)).toStrictEqual(false)
});