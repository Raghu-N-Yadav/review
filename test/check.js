//update nested objects without using for loops
//object 1
let obj = {
    a:{
        x:'1',
        y:'2'
    }
}
//object 2
let obj2 = {
    x:'1',
    y:'6',
    k:'9'
}

//get keys
let key = Object.keys(obj2)

key.map(k => {
    if(!obj['a'][k]){
        obj['a'][k] = Math.floor(obj2[k]) 
    }else {
        obj['a'][k] = Math.floor(obj['a'][k])+Math.floor(obj2[k]) 
    }
})

console.log(obj)
//console.log(key);

//way to sort an object on basis of values

let object = {
    k :1,
    j:9,
    d:8
}
const sortable = Object.fromEntries(
    Object.entries(object).sort(([,a],[,b]) => a-b)
);

console.log(sortable);
