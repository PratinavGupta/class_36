var form;
var heading, textbox, subButton, heading2, val;
var db, gameState, playerCount, name;
var player, game

function setup() {

    createCanvas(800, 600);

    db = firebase.database();

    db.ref('gameState').on("value", function (data) {
        gameState = data.val()
    })

    game = new GAME();
    game.getState();
    game.start()
}

function draw() {





}