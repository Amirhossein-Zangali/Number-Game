let randomNum = Math.trunc(Math.random()*20) + 1;
function writeMessage (message){
    document.querySelector('.message').textContent = message;
}
let score = 20;
let userHighScore = 0;

document.querySelector('.check').addEventListener("click" , function () {
    const guess = Number(document.querySelector('.guess').value);
    if (guess > 20 || guess <= 0){
        writeMessage('Please Enter Number Between 1 And 20');
    } else if (guess !== randomNum){
        writeMessage((guess < randomNum) ? "To Low And Increase":"To High And Decrease");
        score > 0 ? score-- : writeMessage("You Lost");
    } else if (guess === randomNum){
        writeMessage('Good Job!')
        document.querySelector("body").style.backgroundColor = "green";
        
        if (userHighScore < score){
        document.querySelector('.highscore').textContent = score;
        userHighScore = score;
        }
    }
    document.querySelector('.score').textContent = score;
})

document.querySelector('.again').addEventListener("click" , function() {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.score').textContent = 20;
    writeMessage('Start guessing...');
    randomNum = Math.trunc(Math.random()*20) + 1;
})
