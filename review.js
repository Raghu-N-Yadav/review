// let number = [1,2,3,4,5];

// const square = number.map(function(num){
//     return num*num
// })


// console.log(square);

// //square(number);

// //console.log(number);

// const filteredArray = number.filter(num => num %2 == 0)

// console.log(filteredArray);

// const sum = number.reduce((acc, current) => {
//     acc= acc + current
//     return acc
// },10);

// console.log(sum);

// const allInOne = number.map(num => num*num).filter(num1 => num1%2 === 0).reduce((acc,curr) => acc + curr);

// console.log(allInOne);

const path = require('path')

let p = path.resolve('f', 'g/h')
console.log('\n' + p)