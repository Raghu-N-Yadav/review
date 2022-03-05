let a,b
a = 10;
b = 20;

c = [8,9];
let d =c;
d = d.concat(c);

function changeVal(c,val){
    //arr.push(6)
    c = c.concat(val);
    //return c;
}

console.log(c);
console.log(d);

console.log(changeVal(c,1));
console.log(c);
