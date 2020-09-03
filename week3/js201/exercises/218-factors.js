// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

gcd = (num1,num2) => {

    let a = Math.abs(num1);
    let b = Math.abs(num2);
    let temp = 0;
    while(b) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  //console.log(gcd(50, 20))



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

factors =  (num) => {
    let factors = [];
    for(let i = 1; i <= num;i++){
        if(num % i === 0) {
            factors.push(i);
        }
    }
    console.log(factors);
}

factors(12)
