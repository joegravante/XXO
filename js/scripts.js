var player_turns = 0; //number of turns the human has made
var computa_turns = 0; //number of turns the computa has made
var player_spaces = []; //spaces selected by the human player
var computa_spaces = []; //spaces selected by the computa player
var winna_winna = [147,258,369,123,456,789,159,357]; //the array of winning board combinations
var spaces_open = [1,2,3,4,5,6,7,8,9]; //starting array of open spaces on the board (all spaces)

/* Allows a player to make a move by passing in the playerid
and Id of the space selected. Keeps track of the number of turns each player has made.
 ================================= */

function makeaMoveSucka(playerid, space) {
    console.log("player", playerid, "is making a move");
    var token;
    if (playerid == 1) {
        token = "X";
        player_turns++;
    } else {
        token = "O";
        computa_turns++;
    }
    document.getElementById(space).innerHTML = token;
    document.getElementById(space).onclick="#";
    updateBoard(playerid, space);
    scoreDaThang(playerid, space);
}

/* Updates the list of spaces the player and computer have
selected into an array, and updates what spaces are left
available on the gameboard
 ================================= */

function updateBoard(playerid, space) {
    // update the players chosen spaces into the array
    if (playerid == 1) {
        player_spaces.push(space);
        console.log("playerspaces:", player_spaces);
    } else {
        computa_spaces.push(space);
        console.log("computaspaces:", computa_spaces);
    }
    // update the spaces left available on the board
    var index = spaces_open.indexOf(space);
    spaces_open.splice(index, 1);
}

/* Once a move is made, checks to see if there is
a tie, human win, or human loss
 ================================= */

function scoreDaThang(playerid, space) {
    if (spaces_open.length == 0) {
        tie();
    } else if (playerid == 1) {
        if (doWeHavaWinner(player_spaces, player_turns) == true) {
            win();
        } else {
            console.log("take a turn, computa!")
            computasTurn();
        }
    } if (playerid == 2 ) {
        if (doWeHavaWinner(computa_spaces, computa_turns) == true) {
            lose();
        }
    }
}

/* Call this when the human wins!
================================= */

function win() {
    document.getElementById("gameOver").innerHTML = "yeah, you WON!";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
    console.log("we have a winner here, folks");
}

/* Call this when the computa wins!
 ================================= */

function lose() {
    document.getElementById("gameOver").innerHTML = "ugh, you LOST!";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
}

/* Call this when there is a tie!
 ================================= */

function tie() {
    console.log("its a tie");
    document.getElementById("gameOver").innerHTML = "TIE...breaker!";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
}

/* Checks to see if spaces that the player (human or computa)
has selected are winning combos (defined in winna_winna array)
 ================================= */

function doWeHavaWinner(spaces, num_turns) {
    if (num_turns > 2) {
        var check;
        var checkitem;
        for (var i = 0; i < winna_winna.length; i++) {
            check = winna_winna[i];
            for (var x = 0; x < 3; x++) {
                console.log(check," ", x);
                checkitem = String(check).charAt(x);
                if (spaces.indexOf(Number(checkitem)) == -1) {
                    break;
                }
                if (x == 2) {
                    console.log("we have a winna");
                    return true;
                }
            }
        }
    }
    console.log("not a winna, yet");
    return false;
}

/* Call to have the computa make a move
- contains the computa's brain - fancy!
 ================================= */

function computasTurn() {
    makeaMoveSucka(2, spaces_open[0]);
}
