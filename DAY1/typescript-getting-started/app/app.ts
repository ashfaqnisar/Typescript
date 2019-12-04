function startGame() {
    let message  = document.getElementById("messages");
    message!.innerText = 'Hello World';
}
document.getElementById('startGame')!.addEventListener('click',startGame);