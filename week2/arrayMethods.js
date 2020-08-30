// var numArray = [-10,-9,-8,-7,-6,0,1,2,3,4,5,6,7];

// numArray.filter(function (element) {
//     return element > 0;
// });

// numArray.filter(function (element) {
//     return element % 2 == 0;
// });

// numArray.filter(function (element) {
//     return element * element;
// });

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
//   ];

//   var newArr = cities.filter(function (element) {
//     return element.temperature > 70;
//   });

//    console.log(newArr);

// var people = [
//     'Dom',
//     'Lyn',
//     'Kirk',
//     'Autumn',
//     'Trista',
//     'Jesslyn',
//     'Kevin',
//     'John',
//     'Eli',
//     'Juan',
//     'Robert',
//     'Keyur',
//     'Jason',
//     'Che',
//     'Ben'
//   ];

//   people.forEach(function (name) {
//       console.log(`Good Job, ${name}`);
//   });



// console.log(people.sort());

// var newArr = people.sort((a,b) => {
//     return a.length - b.length;
// })

// console.log(newArr)





var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

  var newArr = arr.forEach(function (arrList) {
    arrList.forEach(function (newArrList){
        return newArrList.reduce((a,b) => {
            console.log(a + b);
            return a + b;
        })
    })
});

console.log(arr.sort((a,b) => {
    return a > b;
}));





function call3Times(fun) {
    fun();
    fun();
    fun();
}

