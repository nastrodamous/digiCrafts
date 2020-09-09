// var numArray = [-10,-9,-8,-7,-6,0,1,2,3,4,5,6,7];

// numArray.filter(function (element) {
//     return element > 0;
// });

// numArray.filter(function (element) {
//     return element % 2 == 0;
// });

// numArray.filter(function (element) {
//     return element * element;
// });

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
//   ];

//   var newArr = cities.filter(function (element) {
//     return element.temperature > 70;
//   });

//    console.log(newArr);

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];

//   people.forEach(function (name) {
//       console.log(`Good Job, ${name}`);
//   });

// console.log(people.sort());

// var newArr = people.sort((a,b) => {
//     return a.length - b.length;
// })

// console.log(newArr)

//  var arr = [
//      [1, 3, 4],
//      [2, 4, 6, 8],
//      [3, 6]
//    ];

//    let sum = (el) => el.reduce((a,b) => a + b);
//    arr.sort((a,b) => sum(a) - sum(b));
//    console.log(arr);

//  function call3Times(fun) {
//      fun();
//      fun();
//      fun();
//    }

//    helloWorld = () => {
//      console.log("Hello World");
//    }

//   callntimes = (fun,times) => {
//       for(i = 0; i < times;i++)
//       fun();
//   }

//   callntimes(helloWorld,5);

// sumNumbers = (num) =>
// {
//     const reducer = (sum, current) => sum + current;
//     console.log(num.reduce(reducer));
// }

//  sumNumbers([1,2,3]);

// acronym = (arr) => {
//         console.log(arr.reduce((current, char) => current + char[0], ""));
//     }
    
//     acronym(['very', 'important', 'person'])         