function compareTriplets(a, b) {
    let alicesScore = 0;
    let bobsScore = 0;
    const score = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            //switch statement failed - using IF, ELSE IF, ELSE pattern
            if (a[0] > b[0] || b[0] < a[0]) {
                alicesScore ++;
                console.log("Alice has scored a point!", alicesScore);
            } else if (a[0] < b[0] || b[0] > a[0]) {
                    bobsScore++;
                    console.log("Bob has scores a point!", bobsScore);
            } else {
                if (a[0] < b[0]) {
                    console.log('This round is a TIE!', alicesScore, bobsScore);
                }
            };

            if (a[1] > b[1] || b[1] < a[1]) {
              alicesScore++;
              console.log("Alice has scored a point!", alicesScore);
            } else if (a[1] < b[1] || b[1] > a[1]) {
              bobsScore++;
              console.log("Bob has scores a point!", bobsScore);

            } else {
              if (a[1] === b[1]) {
                console.log('This round is a TIE!', alicesScore, bobsScore);
              }
            };

            if (a[2] > b[2] || b[2] < a[2]) {
              alicesScore++;
              console.log("Alice has scored a point!", alicesScore);
            } else if (a[2] < b[2] || b[2] > a[2]) {
              bobsScore++;
              console.log("Bob has scores a point!", bobsScore);

            } else {
              if (a[2] === b[2]) {
                console.log('This round is a TIE!', alicesScore, bobsScore);
              }
            };
      }
  }
    score.push(alicesScore, bobsScore);
    // score.push(bobsScore);
    console.log("FINAL SCORE: ", score);
    if (alicesScore > bobsScore || bobsScore < alicesScore) {
      console.log(`ALICE IS THE WINNER! ALICE: ${alicesScore}, BOB: ${bobsScore}`);
    } else if (bobsScore > alicesScore || alicesScore < bobsScore) {
      console.log(`BOB IS THE WINNER! BOB: ${bobsScore}, ALICE: ${alicesScore}`);
    } else {
      if (bobsScore === alicesScore) {
        console.log('THE GAME HAS ENDED IN A TIE!  NOW WE MOVE INTO INSTANT-DEATH!');
      }
    }
    return score;
};


console.log(compareTriplets([5,6,7], [3,6,10]));
console.log(compareTriplets([17,28,30], [99,16,6]));







const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
// console.log(sum(1, 2, 3)); // 6





const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((pos) => pos > 0 && pos % parseInt(pos) === 0).map((sqr) => sqr **2);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);





// function freezeObj() {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch( ex ) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

//this worked in freecodecamp's IDE but not in this version on the browser...
//why??



const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  for (let i = 0; i < s.length; i++) {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // console.log(s);
  }
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


//We have an array of objects representing different people in our contacts lists.

//A lookUpProfile function that takes name and a property (prop) as arguments 
//has been pre-written for you.

//The function should check if name is an actual contact's firstName and the 
//given property (prop) is a property of that contact.

//If both are true, then return the "value" of that property.

//If name does not correspond to any contacts then return "No such contact"

//If prop does not correspond to any valid properties of a contact found to match 
//name then return "No such property"

function lookUpProfile(name, prop){
// Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name){
      if (contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
// console.log(lookUpProfile("Kristian", "lastName")); //should return "Vos"
// console.log(lookUpProfile("Sherlock", "likes")); //should return ["Intriguing Cases", "Violin"]
// console.log(lookUpProfile("Harry","likes")); //should return an array
// console.log(lookUpProfile("Bob", "number")); //should return "No such contact"
// console.log(lookUpProfile("Bob", "potato")); //should return "No such contact"
// console.log(lookUpProfile("Akira", "address")); //should return "No such property"



function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){

    for (let j = 0; j < arr[i].length; j++){

      product *= arr[i][j];
      console.log('nested loop: ', product);

    }
  }
  // Only change code above this line
  return product;
};

// Modify values below to test your code
// console.log(multiplyAll([[1],[2],[3]])); //should return 6
// console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); //should return 5040
// console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); //should return 54


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop !== "tracks" && value !== ""){
    collection[id][prop] = value;
  }
  else if (prop === "tracks" && !collection[id]['tracks']) {
      collection[id][prop] = [];
      collection[id][prop] = [value];
  }
  else if (prop === "tracks" && value !== ""){
    collection[id][prop].push(value);
  }
  else if (value === "") {
    delete collection[id][prop];
  }
  return collection;
};

// Alter values below to test your code
// console.log(collectionCopy);
// updateRecords(5439, "artist", "ABBA") //artist should be "ABBA"
// updateRecords(5439, "tracks", "Take a Chance on Me"); //tracks should have "Take a Chance on Me" as the last element.
// updateRecords(2548, "artist", "") //artist should not be set
// updateRecords(1245, "tracks", "Addicted to Love") //tracks should have "Addicted to Love" as the last element.
// updateRecords(2468, "tracks", "Free") //tracks should have "1999" as the first element.
// updateRecords(2548, "tracks", "") //tracks should not be set
// updateRecords(1245, "album", "Riptide") //album should be "Riptide"
// console.log(collection);