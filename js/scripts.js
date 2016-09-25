var player_turns = 0;
var computa_turns = 0;
var player_score = [];
var computa_score = [];
var winna_winna = [[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]];
var spaces_open = [2,3,5,7,11,13,17,19,23];

function makeaMoveSucka(playerid, space) {
    var token;
    if (playerid == 1) {
        token = "X";
    } else {
        token = "O";
    }
    document.getElementById(space).innerHTML = token;
    document.getElementById(space).onclick="#";
    updateBoard(playerid, space);
    scoreDaThang(playerid, space);
}

function updateBoard(playerid, space) {
    // update the players chosen spaces into the array
    if (playerid = 1) {
        player_score.push(space);
    } else {
        computa_score.push(space);
    }
    // update the spaces left available on the board
    var index = spaces_open.indexOf(space);
    spaces_open.splice(index, 1);
    for (var i = 0; i < winna_winna.length; i++) {
        console.log (winna_winna[0, i]);
    }
}

function scoreDaThang(playerid, space) {
    if (playerid = 1) {
        player_turns ++;
        //player_score += space;
        if (doWeHavaWinner(player_score, player_turns) == true) {
            document.getElementById("gameOver").innerHTML = "yeah, I won!";
            document.getElementById("gameboard").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            console.log("we have a winner here, folks");
        }
        computasTurn();
    } else {
        computa_turns ++;
        //computa_score += space;
        if (doWeHavaWinner(computa_score, computa_turns) == true) {
            document.getElementById("gameOver").innerHTML = "crap I lost!";
            document.getElementById("gameboard").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
        }
    }
}


function doWeHavaWinner(score, num_turns) {
    if (num_turns > 2) {
        for (var i = 0; i < winna_winna.length; i++) {
            if (winna_winna[i] == score) {
                return true;
            }
        } return false;
    } return false;
}

function computasTurn() {


}