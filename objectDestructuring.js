let obj = {
    name : 'Raghu',
    age : 22,
    pos : '3rd',
    add (a,b){
        return (a+b);
    },
    address  : {
        city : 'Banglore',
        State : 'Karnataka'
    }
}

// const {name, pos, address : {city},add:add2 }= obj;

// console.log(name);
// console.log(add2(1,2));
// console.log(city);

//use in func
let obj2 ={
    name: 'Raghu',
    lname : 'Yadav'
}
// function fuulName({name ='Anonamus', lname = 'User'}){
//     console.log('Full name is '+name +' '+ lname)
// }
// fuulName(obj2);
// fuulName(obj);

let obj3 = {...obj, ...obj2};

console.log(obj3)