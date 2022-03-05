function add(x,y) {
    return x+y;
}

console.log(add(11,19));

//using settimeout


function ayeach(array,cb){
    array.forEach(()=>{
        setTimeout(cb,1000);
    })
}

ayeach([1,2,3],()=>{
    console.log('wow');
})