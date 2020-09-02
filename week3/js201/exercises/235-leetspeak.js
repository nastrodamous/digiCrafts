// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

leetSpeak = (newString) => 
{
    let alphas = {
    A: 4,
    E: 3,
    G: 6,
    L: 1,
    O: 0,
    S: 5,
    T: 7
}

    let uppperString = newString.toUpperCase();
    for(i = 0;i < uppperString.length;i++) {
        if(alphas[uppperString[i]]) {
            console.log(uppperString[i]);
            console.log(alphas[uppperString[i]]);
            uppperString = uppperString.replace(uppperString[i], alphas[uppperString[i]]);
        }
    }
    console.log(uppperString);
}

leetSpeak("leet");
