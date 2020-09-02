// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

longVowels = (newString) => {
    var vowels = ["a", "e", "i", "o", "u"];
    let string1 ="";
    for(i = 0; i < newString.length;i++) {
        if(vowels.includes(newString[i])) {
            string1 += newString[i].repeat(5);
        }
    }
    console.log(string1);
}