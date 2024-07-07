// const numbers = [1, 2, 3, 4, 5, 6];
//const dubnums = numbers.map(num => num * 2);
//console.log(dubnums)

//const even = numbers.filter(num => num % 2 === 0);
//console.log(even)

//const found = numbers.find(num => num === 6);
//console.log(found)

//const sum = numbers.reduce((acc, num) => (acc + num));
//console.log(sum)

//const odds = numbers.filter(num => num % 3 === 0);
//console.log(odds)

/* const sum = numbers.reduce((acc, num) => (acc + num));
console.log(sum); */

/* let promise = new Promise((resolve, reject) => {
  // Do some async operation
  let success = false; // This is just an example condition
  if (success) {
    resolve('Operation was successful');
  } else {
    reject('Operation failed');
  }
});

promise.then((message) => {
  console.log(message); // If the promise is resolved
}).catch((error) => {
  console.error(error); // If the promise is rejected
});

promise.catch((error) => {
  console.error(error); // Handle error
});

promise.finally(() => {
  console.log('Promise has been settled (fulfilled or rejected).');
});
*/

/* 
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(3, 7)); */



/* function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(33, 77)) */

document.addEventListener('DOMContentLoaded', (event) => {
  const inputField = document.getElementById('inputField');
  const myButton = document.getElementById('myButton');
  const output = document.getElementById('output');

  myButton.addEventListener('click', () => {
      const inputValue = inputField.value;
      output.textContent = `You entered: ${inputValue}`;
  });
});


