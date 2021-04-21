class PLAYER {

    constructor() {

    }
    getPlayercount() {
        db.ref('playerCount').on("value", function (data) {
            playerCount = data.val();
        })
    }

    updatePlayercount(playerCount){
        db.ref('/').update({
            playerCount : playerCount
        })
    }


}