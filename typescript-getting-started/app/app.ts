function startGame() {
    //hello World
    let name:string = "Nisar";
    const playerName: string = "Rubicon";

    logPlayer(playerName);


    let message  = document.getElementById("messages");
    message!.innerText = 'Hello World';
}
function logPlayer(name: string){
    console.log(`New game has been started by ${name}`)
}

document.getElementById('startGame')!.addEventListener('click',startGame);