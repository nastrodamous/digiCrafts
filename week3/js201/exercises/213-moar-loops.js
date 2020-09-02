// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]

  // create an empty array (we will fill this with strings from the previous array)
  let animalsWithoutZ = []
  animalsWithoutZ = animals.filter(element => (element.includes('z') === false));
  console.log(animalsWithoutZ);
  return animalsWithoutZ;
  // 2) loop through "animals"

  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"

}

//removeZAnimals();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)


removeAnyWordWithZ = (strings) => {
  let stringsNoZ =  [];
  const compare = /\z/gi;
  stringsNoZ = strings.filter(element => !(element.match(compare)))
  console.log(stringsNoZ);
}
//const z = ["zebra","dog","cat","zig","Zag","croc"];
//removeAnyWordWithZ(z);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']

removeWordsWithChar = (strings,char) => {
  let stringsNoZ =  [];
  const compare = new RegExp(`${char}`,'gi');
  stringsNoZ = strings.filter(element => !(element.match(compare)))
  console.log(stringsNoZ);
}  

//removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b')
