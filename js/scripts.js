
var player_turns = 0; //number of turns the human has made
var computa_turns = 0; //number of turns the computa has made
var player_spaces = []; //spaces selected by the human player
var computa_spaces = []; //spaces selected by the computa player
var winna_winna = [147,258,369,123,456,789,159,357]; //the array of winning board combinations
var spaces_open = [1,2,3,4,5,6,7,8,9]; //starting array of open spaces on the board (all spaces)
var gameBoard;



function resetBoard() {
    gameBoard = new Array(3); //create a 3x3 board
    var space_labler = 1;
    for (var i = 0; i < 3; i++) {
        gameBoard[i] = new Array(3);
        for (var ii = 0; ii < 3; ii++) {
            gameBoard[i][ii] = space_labler;
            document.getElementById(space_labler).innerHTML = space_labler;
            space_labler++;
        }
    }
    player_turns = 0; //reset number of turns the human has made
    computa_turns = 0; //reset number of turns the computa has made
    player_spaces = []; //reset spaces selected by the human player
    computa_spaces = []; //reset spaces selected by the computa player
    spaces_open = [1,2,3,4,5,6,7,8,9]; //reset open spaces
    //console.log(gameBoard);
}

function makeaMoveHuman(space) {
    playIt('human_player',space); //have the human make a play with the selected move
}

/* Allows a move to be made by passing in who is making a move and the
 location of the space selected. Keeps track of the number of turns each player has made.
 ================================= */

function playIt(playerid, space) {
    var token;
    if (playerid == 'human_player') {
        token = "X";
        player_turns++;
    } else {
        token = "O";
        computa_turns++;
    }
    document.getElementById(space).innerHTML = token;
    document.getElementById(space).onclick="#";
    updateBoard(token, space);
    doWeHavaWinner();
    //updateBoard(playerid, space); // old function
    //scoreDaThang(playerid, space); // old function
}

/* Updates the list of spaces the player and computer have
selected into an array, and updates what spaces are left
available on the gameboard
 ================================= */

function updateBoard(token, space) {
    var coords = getBoardLocation(space);
    var x = coords[0];
    console.log[x];
    var y = coords[1];
    console.log[y];
    //gameBoard.push[x][y] = token;
    document.getElementById(space).innerHTML = token;
    var index = spaces_open.indexOf(space);
    spaces_open.splice(index, 1);
    console.log(gameBoard);
}

function getBoardLocation(space) {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (gameBoard[x][y] == space) {
                return [x, y];
            }
        }
    }
}

/*

-- sunset this version
function updateBoard(playerid, space) {
    // update the players chosen spaces into the array
    if (playerid == 'human_player') {
        player_spaces.push(space);
        //console.log("humanspaces:", player_spaces);
    } else {
        computa_spaces.push(space);
        //console.log("computaspaces:", computa_spaces);
    }
    // update the spaces left available on the board
    var index = spaces_open.indexOf(space);
    spaces_open.splice(index, 1);
}*/

/* Once a move is made, checks to see if there is
a tie, human win, or human loss
 ================================= */


/*
-- sunset this for scoreDaThing2

function scoreDaThang(playerid, space) {
    if (spaces_open.length == 0) {
        tie();
    } else if (playerid == 'human_player') {
        if (doWeHavaWinner(player_spaces, player_turns) == true) {
            win();
        } else {
            //console.log("take a turn, computa!")
            computasTurn();
        }
    } if (playerid == 'computa_player') {
        if (doWeHavaWinner(computa_spaces, computa_turns) == true) {
            lose();
        }
    }
}*/

/* Call this when the human wins!
================================= */



/* Checks to see if spaces that the player (human or computa)
has selected are winning combos (defined in winna_winna array)
 ================================= */

function doWeHavaWinner(num_turns) {
      if (scoreColumns() != false) {
          // do this
    } return false;
}

function scoreColumns() {
    var y;
    for (var x = 0; x < gameBoard.length; x++) {
        y = 0;
        while (true) {
            if (y+1 > gameBoard.length) {
                console.log("winner in column ", x);
                //return (gameBoard[column][cell]);
            }
            if (gameBoard[x][y] != gameBoard[x][y+1]) {
                console.log(gameBoard[x][y], " ", gameBoard[x][y+1]);
                console.log("no winner in column", x);
                break;
            }
            y++;

        }
    }
    console.log("No winner in any columns");
    return false;
}

function win() {
    document.getElementById("gameOver").innerHTML = "yeah, you WON!";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
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
    document.getElementById("gameOver").innerHTML = "TIE...breaker!";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("gameOver").style.display = "flex";
}

/* Call to have the computa make a move
- contains the computa's brain - fancy!
 ================================= */

function computasTurn() {
    var move = Math.floor(Math.random() * spaces_open.length);
    playIt('computa_player', spaces_open[move]);
}
