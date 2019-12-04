function startGame() {
    //hello World
    let name:string = "Nisar";
    let playerName: string = "Rubicon";

    logPlayer(playerName);


    let message: HTMLElement | string ;

    if (typeof message ==='string'){
        return message
    }else{
        return message
    }


    message = document.getElementById("messages");
    message!.innerText = 'Hello World';
}
function logPlayer(name: string){
    console.log(`New game has been started by ${name}`)
}

document.getElementById('startGame')!.addEventListener('click',startGame);