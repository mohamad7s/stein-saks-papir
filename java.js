const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const choicesArray = ['stein', 'papir', 'saks'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;
        resultDisplay.textContent = result;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) {
        return 'Uavgjort!';
    }
    if ((user === 'rock' && computer === 'scissors') || 
        (user === 'paper' && computer === 'rock') || 
        (user === 'scissors' && computer === 'paper')) {
        return 'Du vant!';
    }
    return 'Maskinen vant!';
}
