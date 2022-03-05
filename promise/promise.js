const promise = new Promise((res, rej) => {
    let task = '';
    if(task){
        res('hello');
    } else {
        rej('bye');
    }
})

promise.then(res => console.log(res)).catch(err => console.log(err));