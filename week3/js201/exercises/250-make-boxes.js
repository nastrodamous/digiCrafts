// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
        for(let i = 0;i <= num;i++ ) {
        console.log("*".repeat(num));
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(num1,num2) {
        for(let i = 1;i <= num1;i++) {
        for(let j = 1;j <= num2;j++){
            if(i == 1 || j == 1 || i == num1 || j == num2) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ")
            }   
        }
        process.stdout.write("\n")
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// *************************/ 


function makeBanner() {

    process.stdout.write("*".repeat(str.length + 2) + '\n');
    console.log(`*${str}*`);
    process.stdout.write("*".repeat(str.length + 2) + '\n');

}

