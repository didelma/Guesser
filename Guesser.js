//Guesser game

//define a function called 'letterGuesser'
function letterGuesser() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //index 0 to 24
    let ranAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
    let letter_guesser = prompt(`Your letter is: ${ranAlphabet} Guess it's index number`); 
    if (letter_Guesser = true) {
      alert("You definitely know the alphabet!");
    } else(letter_Guesser = false) =>{ 
      alert("incorrect, you will have to re-learn the abc's. The index of ranAlphabet is actually ranAlphabeth.");
    }
}
