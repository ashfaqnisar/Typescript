function startGame() {
    //hello World
    var name = "Nisar";
    var playerName;
    logPlayer(playerName);
    var message = document.getElementById("messages");
    message.innerText = 'Hello World';
}
function logPlayer(name) {
    console.log("New game has been started by " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map