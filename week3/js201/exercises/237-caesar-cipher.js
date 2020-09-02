// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'

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