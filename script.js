const a = 13;
const b = 13;
const c = "hamza";


const gh = "wkdwd"
// TODO: use these variables in logic later

console.log(gh);

const bton = 123;

console.log(bton);


const arr = [10, 20, 30, 40, 50];

arr.splice(0, 2);

console.log(arr)

let obj = {
    id: 1,
    name: "harsh",
    role: "developer"
}

console.log(obj);


// function add(a, b) {
//     console.log(a + b)
// }

// add(10, 20);

let cb = 868;

console.log(cb)

let add = 2873;

let db = 12;

let bjqh = 642

console.log(bjqh);

console.log(19);


function addtwoNum(a, b) {
    console.log(a + b);
}

addtwoNum(2.9);

function subtwoNum(a, b) {
    console.log(a - b);
}

subtwoNum(2.9);

for (let i = 1; i < 10; i++) {
    console.log(i * 1);
}

const kadj = 12


let arr1 = [12, 26, 383, 93, 93];

const largest = Math.max(...arr1);

console.log(largest)


let randomNum = Math.floor(Math.random(20) * 10);

console.log(randomNum);

console.log("hello " + 28)


let findArr = [10, 20, 30, 50];

let final = findArr.find((val) => {
    return val > 20
});

console.log(final)

findArr.map((val) => {
    return console.log(val * 10)
})


const userObj = {
    name: "harsh",
    age: 19
}

userObj.name = "ankit";

console.log(userObj)

const userObj2 = { ...userObj };


userObj2.age = 30;

console.log(userObj2);


function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([5, 2, 9, 1, 7])); // 9


function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10


function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // 3