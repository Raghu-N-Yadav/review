//defining an object

// let obj = {}

// let name = input('Enter your name::')
// settning key value pairs
let obj = {
    a: 1,
    b: 2,
    c: 5
}

//assigning and setting the values by destructing 

// let { a: k, b,c, d = 5 } = obj;

// obj.a = 50;
// delete obj.a

// console.log(obj)


// setting up a outside varibale 

// writing a function to create an object

const makeObj = (name, age, group) => {
    let obj = {
        name,
        age,
        group
    }
    return obj
}

let user1 = makeObj('Raghu', 22, 'O+')
// console.log(user1)
// for (let key in user1) {
//     console.log(user1[key])
// }

//to check existance of a property inside an object
// console.log('name' in user1)

//function to check object is emptyor filled
const isEmpty = (object) => {
    for (key in object) {
        return false
    }
    return true
}
const user2 = {}
// console.log(isEmpty(user2))

//gettung sum of salries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sumSal = (obj) => {
    let sum = 0;
    for (key in obj) {
        if (key === undefined) return sum

        sum += obj[key]
    }
    return sum
}

let sal = {}
// console.log(sumSal(sal))

//multiply numeric value by 2
const mul = (obj) => {
    for (key in obj) {
        if (typeof obj[key] === 'number') obj[key] *= 2
    }
}

let object3 = {
    a: 2,
    c: 4,
    n: 'Taghu'
}

// console.log(object3)
// mul(object3)
// console.log(object3)

//cloning an object]
const clone = (obj) => {
    let coloneObj = {}
    for (key in obj) {
        coloneObj[key] = obj[key]
    }
    return coloneObj
}

let copiedObject = clone(object3)
// console.log(copiedObject)
// console.log(object3)

// using Object.assign to do the same thing
let demoObj = {}
Object.assign(demoObj, copiedObject)
// console.log(demoObj)


//defining a function insdie an object
let object9 = {
    name: 'Raghu',
    sayHi() {
        console.log(`hello ${this.name}`);
    }
}

// object9.sayHi()

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(`Sum is ${calculator.sum()}`);
alert(`Mul is ${calculator.mul()}`);