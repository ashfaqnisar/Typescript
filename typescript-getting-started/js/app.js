"use strict";
function startGame() {
    var message = document.getElementById("messages");
    message.innerText = 'Hello World';
}
document.getElementById('startGame').addEventListener('click', startGame);
