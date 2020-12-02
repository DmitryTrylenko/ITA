/* 
    The maximum number of players in a team is 11, the minimum is 6 when there are 6 players left in any team,
     the game ends and the team with 6 players loses.
    0 - the player has no cards
    1 - the player has yellow card
    2 - the player has red card
*/
export default function menStillStanding(data) {
    let A = [0,0,0,0,0,0,0,0,0,0,0];
    let B = [0,0,0,0,0,0,0,0,0,0,0];
    let playersA = 0;
    let playersB = 0;
    const maxPlayers = 11;
    const minPlayers = 6;

    for (let i = 0; i < data.length; i++) {
        let team = data[i].match(/^A|B/).join('');
        let numPlayer = Number(data[i].match(/\d+/).join(''));
        let cardColor = data[i].match(/Y|R$/).join('');

        if (team === 'A') {
            if (cardColor === 'Y') {
                A[numPlayer]++;
            } else {
                A[numPlayer] += 2;
            }
        }

        if (team === 'B') {
            if (cardColor === 'Y') {
                B[numPlayer]++;
            } else {
                B[numPlayer] += 2;
            }
        }
    }

    playersA = A.filter(item => item > 1).length;
    playersB = B.filter(item => item > 1).length;

    if (maxPlayers - playersA === minPlayers || maxPlayers - playersB === minPlayers) {
        return [maxPlayers - playersA, maxPlayers - playersB];
    }

    return [maxPlayers - playersA, maxPlayers - playersB];
}