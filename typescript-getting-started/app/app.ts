function startGame(): void {
    //hello World
    let name: string = "Nisar";
    let playerName: string | undefined = getInputValue("playername");

    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5,playerName)
}

function logPlayer(name: string = "Rubicon"): void {
    console.log(`New game has been started by ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    const inputElement :HTMLInputElement = document.getElementById(elementId) as HTMLInputElement;
    if(inputElement.value===""){
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = "Rubicon"):void{
    let logger: (value:string) => void;
    if (score<0){
        logger = logError
    }else{
        logger = logMessage
    }

    const scoreElement:HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`)
}

const logMessage = (message:string):void=> {
  console.log(message)
};
const logError = (err:string):void =>{
    console.error(err)
};

logError("Hello Error");
logMessage("Hello World, this is an arrow function");
document.getElementById('startGame')!.addEventListener('click', startGame);