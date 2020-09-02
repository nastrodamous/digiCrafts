// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3


testWhile = (num1,num2) => {
  let i = num1;
  let str =" ";
  while(i <= num2) {
    if(i < num2) {
      str += `${i}_`
    } else {
      str += i
    }
    i++;
  }
  console.log(str);
}

//testWhile(1,10);


testFor = (num1,num2) => {
  let i = num1;
  let str = "";
  for(num1;i <= num2;i++) {
    if(i < num2) {
      str += `${i}_`
    } else {
      str += i
    }   
  }
  console.log(str)
}

//testFor(1,5)

fancyJoin = (num1,num2,char = '_') => {
  let i = num1;
  let str = "";
  for(num1;i <= num2;i++) {
    if(i < num2) {
      str += `${i}${char}`
    } else {
      str += i
    }   
  }
  console.log(str)
 
}

fancyJoin(1,2,'~')
