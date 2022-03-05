let arr = [1,2,3,4]
let arr2 = [9,77,8]

// const [a,, ...rest] = arr;

// console.log(a);
// console.log(rest);

// let arr3 = [...arr, ...arr2]

// const [c,,,, d] = arr3;

// console.log(arr3);
// console.log(c);
// console.log(d);
function sumArray(a,b){
    return [a+b, a*b]
}
const output = sumArray(3,4);
const [x,div = 'lol',y = 'all'] = output;
console.log(x+3,div,y+3);