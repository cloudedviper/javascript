const numbers = [1, 2, 3, 4, 5, 6];
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

const sum = numbers.reduce((acc, num) => (acc + num));
console.log(sum);

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve ("Success")
    } else {
        reject ("Failure")
    }
})

