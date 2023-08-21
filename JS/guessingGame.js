let maxInp = parseInt(prompt("Enter Max Number: "));
let guess = prompt("Guess the number");

let guessCount = 1;

let num = Math.floor(Math.random()*maxInp) + 1;

while (guess.toLowerCase() !== 'q'){
    if (guess == num){
        prompt(`Congrats, The Number is ${num}`)
        break;
    }
    if (guess<num){
        prompt(`Too Low, Guess Again`);
    }
    else if (guess > num){
        prompt(`Too High, Guess Again`)
    }

}
// prompt(typeof(num));