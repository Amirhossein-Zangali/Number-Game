let randomNum;
let score = 20;
let userHighScore = 0;
function makeRandomNumber() {
    randomNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
}
function writeMessage(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener("click", function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if (guess > 20 || guess <= 0) {
        writeMessage('Please Enter a Number Between 1 and 20');
    } else if (guess !== randomNum) {
        writeMessage((guess < randomNum) ? "Too Low, Increase" : "Too High, Decrease");
        
        score > 0 ? score-- : writeMessage("You Lost");
    } else if (guess === randomNum) {
        writeMessage('Good Job!');
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector('.number').textContent = randomNum;
        if (userHighScore < score) {
        document.querySelector('.highscore').textContent = score;
        userHighScore = score;
        }
    }   
    document.querySelector('.score').textContent = score;
});
document.querySelector('.again').addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.score').textContent = 20;
    writeMessage('Start guessing...');
    document.querySelector('.number').textContent = "?";
    makeRandomNumber();
});
makeRandomNumber();