import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: 'number',
    name: 'guessednumber',
    message: 'Guess a number between 1-4 '
});
if (userInput.guessednumber === roundNumber) {
    console.log('Congratulations!  You guessed correctly!');
}
else {
    console.log(`Sorry! try next time. correct ans is: ${roundNumber}`);
}
