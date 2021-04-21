class GAME {
    constructor() {
    }

    getState() {
        db.ref('gameState').on("value", function (data) {
            gameState = data.val()
        })
    }

    updateGameState(state) {
        db.ref('/').update({
            gameState: state
        })
    }

    start() {
        if (gameState == 0) {
            form = new FORM();
            form.dispaly();
            player = new Player();
            Player.getPlayercount() ;
        }
        console.log(gameState)
    }



}