// hello = (name) => {
// if(name) {
//     console.log(`Hello ${name}`);
// } else {
//     console.log("hello world");
// }

// var outputName = (name) ? `Hello ${name}` : "hello world";
// console.log(outputName);
// }

// hello("kobe");


// madLib = (string1,string2) => {
//     return string = `${string1}'s favorite subject in school is ${string2}`
// }

// madLib("kobe","basketball")

// tipCalculator = (number,serviceLevel) => {
//     let tip;
//     if(serviceLevel == "good") {
//         tip = number * .2
//     } else if (serviceLevel == "fair") {
//         tip = number * .15
//     } else if (serviceLevel == "poor") {
//         tip = number * .10
//     } else {
//         tip = "shit service";
// }
// return tip;
// }

// tipCalculator(100, 'good');


// totalAmount = (number,serviceLevel) => {
    
//     let total = tipCalculator(number,serviceLevel) + number;
//     return total;
// }

// console.log("total function")
// totalAmount(100,'good');

//  splitAmount = (number,servicelevel,people) => {
//     let splitCost = totalAmount(number,servicelevel) / people
//     console.log(splitCost);

// }

// splitAmount(100,'good',5);

// printNumbers = (startNumber,endNumber) =>  {

//     for(let i = startNumber;i <= endNumber;i++) {
//         console.log(i)
//     }
// }

// printNumbers(1,10);


// printSquares = (num) => {
//     for(let i = 0;i <= num;i++ ) {
//         console.log("*".repeat(num));
//     }
// }
// printSquares(10);


// hollowSquare = (num1,num2) => {
//     for(let i = 1;i <= num1;i++) {
//         for(let j = 1;j <= num2;j++){
//             if(i == 1 || j == 1 || i == num1 || j == num2) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ")
//             }   
//         }
//         process.stdout.write("\n")
//     }
// }

// hollowSquare(6,4);

// printBanner = (str) => {
    
//     process.stdout.write("*".repeat(str.length + 2) + '\n');
//     console.log(`*${str}*`);
//     process.stdout.write("*".repeat(str.length + 2) + '\n');

// }

// printBanner("Andre Davis");

// calculateNum = (num) => {
//     let str = [];
//     for(let i = 1; i <= num;i++){
//         if (num % i == 0) {
//             str.push(i);
//         }
//     }
//     console.log(str);
// }

// calculateNum(232);





cipher = (message,key) => {
    const lowerMessage = message.toLowerCase();
    let encodeString = "";
    
    for(i = 0;i < lowerMessage.length;i++) {
        let char = lowerMessage.charCodeAt(i);

    //need to make sure char is between 97 and 122
    if (char >= 97 && char <= 97 + 25) 
    {         
        char -= 97;
        char = mod(char + key,26);
        char += 97
    }
    encodeString += String.fromCharCode(char);

}
console.log(encodeString);
    }

mod = (n, p) =>
{
    //MAKES SURE WE NEVER HIT THE UPPERBOUND OF THE CHARSET
    return n - p * Math.floor( n / p );
}

cipher("Test", 13);



// leetSpeak = (newString) => 
// {
//     let alphas = {
//     A: 4,
//     E: 3,
//     G: 6,
//     L: 1,
//     O: 0,
//     S: 5,
//     T: 7
// }

//     let uppperString = newString.toUpperCase();
//     for(i = 0;i < uppperString.length;i++) {
//         if(alphas[uppperString[i]]) {
//             console.log(uppperString[i]);
//             console.log(alphas[uppperString[i]]);
//             uppperString = uppperString.replace(uppperString[i], alphas[uppperString[i]]);
//         }
//     }
//     console.log(uppperString);
// }

// leetSpeak("leet");

// longVowels = (newString) => {
//     var vowels = ["a", "e", "i", "o", "u"];
//     let string1 ="";
//     for(i = 0; i < newString.length;i++) {
//         if(vowels.includes(newString[i])) {
//             string1 += newString[i].repeat(5);
//         }
//     }
//     console.log(string1);
// }

// longVowels("aeiou");

// sumNumbers = (num) => 
// {  
//     const reducer = (firstItem, currentValue) => firstItem + currentValue;
//     console.log(num.reduce(reducer));
// }

// sumNumbers([1,4,8]);








