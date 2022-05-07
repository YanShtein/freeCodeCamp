function sumAll(arr) {
    // preparation
    let newArr = []; // numbers between the first and second number will later be pushed to the new array
    let largest = Math.max(...arr) // find the largest number in the array(i = smallest)
    let smallest = Math.min(...arr) // find the smallest number in the array(i <= largest)
  
    for (let i = smallest; i <= largest; i++) {
      newArr.push(i) // we use i to push all numbers between the smallest and the largest
    }
    return newArr.reduce((previous, current) => previous + current) // having all the numbers between we can use reduce
  }
  
  console.log(sumAll([5, 10]));
//   --------------------------------------------------------------------------
function diffArray(arr1, arr2) {
    let newArr = [];
  
    function check(first, second) {
      first.forEach(elem => {
      if (!second.includes(elem)) {
        newArr.push(elem)
      }
    })
    } 
    check(arr1, arr2);
    check(arr2, arr1);
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//   --------------------------------------------------------------------------
function destroyer(arr, ...destroy) {
    let newArr = [];
  
    arr.forEach(num => {
      if (!destroy.includes(num)) {
        newArr.push(num)
      }
    })
    return newArr
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//   --------------------------------------------------------------------------
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
  
    for (let col in collection) { // for each object(key-value pair) in collection
      let add = true; // to track if to add current col object to array or not(line 10)
      for (let sor in source) { // for each object(key-value pair) in source
        // if collection object doesnt have a source object property or doesnt have the same value for property
        if (!collection[col].hasOwnProperty(sor) || collection[col][sor] !== source[sor]) {
          add = false; // we want to add the correct keys only one time
        }
      }
      if (add) { // if above evaluates to true, continue here
        arr.push(collection[col]);
      };
    };
   
    // Only change code above this line
    return arr;
  };
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
//   --------------------------------------------------------------------------

function spinalCase(str) {
return str
    .split(/\s|_|(?=[A-Z])/) // split by space or _ or Positive lookahead group with a chracter containing upper space
    .join("-")
    .toLowerCase()
}

console.log(spinalCase("thisIsSpinalTap"));  
//   --------------------------------------------------------------------------
function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']; // vowels variable consists of vowels letters
  let newArr = ""; // to save the new word

  if (vowels.indexOf(str[0]) > -1) { // if letter from vowels is the first letter in str, add "way" to it and print.
    newArr = str + "way";
    return newArr;
  } else {
    let firstVowel = str.match(/[aeiou]/g) || 0; // we search for the first vowel in str or 0 we word has no vowel in it
    let startFrom = str.indexOf(firstVowel[0]); // firstVowel will give us the first index of first vowel to be found in str
    let add = str.substring(startFrom) + str.substring(0, startFrom) + "ay"; // we use substring to return the word starting from
    // the first vowel to the end: 'california'-> alifornia + beginning of original up to first vowel: 'c' + adding 'ay' at the end.
    newArr = add; // save the new word in newArr
  }

  return newArr;
}

console.log(translatePigLatin("rhythm"));  
//   --------------------------------------------------------------------------
function myReplace(str, before, after) {
  let big = /^[A-Z]/

  if (!before[0].match(big)) {
    return str.replace(before, after[0].toLowerCase() + after.substring(1))
  } else {
    let upper = after[0].toUpperCase() + after.substring(1);
    return str.replace(before, upper)
  }

}

console.log(myReplace("I think we should look up there", "up", "Down"));
//   --------------------------------------------------------------------------
function pairElement(str) {
  // create an object of key-value pairs. for each key in the argument a value will be returned_
  // in array(line 10)
  let dnaPairs = { 
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  // first we split by "," converting the string into array with each own element, 
  // than we map over each element returning in 2D array its own pair from {dnaPairs} object.
  return str.split("").map(i => [i, dnaPairs[i]]); // we should return the result in 2D array
}

console.log(pairElement("GCG"));
//   --------------------------------------------------------------------------
function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    let letter = str.charCodeAt(i)
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      return String.fromCharCode(letter - 1)
    }
  }
}

console.log(fearNotLetter("bcdf"));
//   --------------------------------------------------------------------------
function uniteUnique(...arr) {
  let outerArr = [...arr]
  let newArr = [];
  
  outerArr.forEach(innerArr => innerArr.forEach(elem => {
    if (!newArr.includes(elem)) {
      newArr.push(elem)
    }
  }))

  return newArr; 
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//   --------------------------------------------------------------------------
function convertHTML(str) {
  let chars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  }

  let newString = str.replace(/[&<>"']/g, char => chars[char])
  return newString;

}

console.log(convertHTML("Schindler's List")); 
//   --------------------------------------------------------------------------
function sumFibs(num) {
  let list = [0, 1, ];

  let fibo = (previous, current) => {
    let next = previous + current;
    return next;
  }

  for (let i = 0; list[list.length - 1] <= num; i++) {
    let result = fibo(list[i], list[i+1]);
    if (result > num) {
      break;
    } list.push(result)
  }
  
  let x = 0;
  list.forEach(number => {
    if (number % 2 !== 0) {
      x += number;
    }
  })
  
  return x;
}

console.log(sumFibs(4));
//   --------------------------------------------------------------------------
function sumPrimes(num) {
  let list = [];
  for (let i = 2; i <= num; i++) {
    if (list.every((prime) => i % prime !== 0)) {
      list.push(i)
    }
  }

  return list.reduce((previous, current) => previous + current);
}

console.log(sumPrimes(10));
//   --------------------------------------------------------------------------
function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let list = [];
  let multiple = []; //first in for

  for (min; min <= max; min++) {
    list.push(min)
    list.reverse().sort((a,b) => b-a)
  };

  for (let i = 2; i < list.length; i++) {
    let first = list[0] * list[1];
    if (first % list[2] !== 0) {
      console.log(first, list[i])
      first *= list[i]
      multiple = first;
    }
  }
  console.log(list)
  return multiple;
}

console.log(smallestCommons([2,10]));  
//   --------------------------------------------------------------------------
function dropElements(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], func(arr[i]), arr.slice(i,))
    if (func(arr[i])) {
      return arr.slice(i,)
    }
  }

  return result;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5}));
//   --------------------------------------------------------------------------
function steamrollArray(arr) {
  let list = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      list.push(...steamrollArray(arr[i]));
      // recursively flatten entries that are arrays
    } else {
    list.push(arr[i])
    }
  }

  return list;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
//   --------------------------------------------------------------------------
function binaryAgent(str) {
  let binary = str.split(" ");

  return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
//   --------------------------------------------------------------------------
function truthCheck(collection, pre) {
  // let result = true;

  return collection.every(elem => elem[pre])

  // for (let i = 0; i < collection.length; i++) {
  //   if (!collection[i][pre] == result) {
  //     return false;
  //   }
  // }

  // return true;
}

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"))
//   --------------------------------------------------------------------------
function addTogether(a, b) {
  if (typeof(a) !== "number") {
    return undefined;
  }
  if (b === undefined) {
    return (b) => addTogether(a, b);
  }
  if (typeof(b) !== "number") {
    return undefined;
  }


  return a + b
}

console.log(addTogether(2)(3));
//   --------------------------------------------------------------------------
const Person = function(firstAndLast) {
  let fullName = firstAndLast;
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  }
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last
  }
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.setLastName());
//   --------------------------------------------------------------------------
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  function average(avg) {
    let orbital = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + avg, 3)/GM));
    return orbital;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i]['avgAlt'] = average(arr[i]['avgAlt'])
    arr[i]['orbitalPeriod'] = arr[i]['avgAlt']
    delete arr[i]['avgAlt'];
  }
  
  return arr;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
// OR
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];

  for (let elem in arr) {
    let orbital = Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + arr[elem].avgAlt, 3)/GM));
    newArr.push({name: arr[elem].name, orbitalPeriod: orbital})
  }
  
  return newArr;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
