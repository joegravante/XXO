var player_turns = 0;
var computa_turns = 0;
var player_score = 0;
var computa_score = 0;
var winna_winna = [6, 12, 15, 18, 24];

function makeaMoveSucka(playerid, space) {
    var token;
    if (playerid == 1) {
        token = "X";
    } else {
        token = "O";
    }
    document.getElementById(space).innerHTML = token;
    document.getElementById(space).onclick="#";

    countTurns(playerid, space);
}

function countTurns(playerid, space) {
    if (playerid = 1) {
        player_turns ++;
        player_score += space;
    } else {
        computa_turns ++;
        computa_score += space;
    }
}

function scoreGame(playerid, score, num_turns) {
    if (num_terns > 2) {
        for (var i = 0; i < winna_winna.length; i++) {
            if (winna_winna[i] == score) {
                if (playerid = 1) {
                    document.getElementById(winner).style.display = block;
                } else {
                    document.getElementById(loser).style.display = block;
                }
            }
        }

    }
}
