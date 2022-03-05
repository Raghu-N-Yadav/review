import fetch from "node-fetch";

// const queryData = async (callback) => {
//     try {
//         const data = await fetch('https://anapioficeandfire.com/api/characters/583')
//         const jsonData = await data.json()
//         callback(jsonData);
//         // const keys = Object.keys(jsonData);

//     } catch (err) {
//         if (err) {
//             console.log(err);
//         }
//     }
// }

// const printSomeData = (jsonData) => {
//     const povData = jsonData['povBooks'];

//     const numbers = povData.map(url => url.slice(-1)).reduce((acc, cv) => {
//         return Math.floor(acc) + Math.floor(cv)
//     })
//     console.log(numbers);
// }
// queryData(printSomeData);


// const checkData = fetch('https://anapioficeandfire.com/api/characters/583');

// checkData
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         if (err) {
//             console.log('Some error', err);
//         }
//     })

const queryData = (url) => {
    try {
        let info = new Promise(async (res, rej) => {
            let data = await fetch(url);
            let jsonData = await data.json();
            res(jsonData);

        });
        return info;

    } catch (err) { if (err) throw err }
}

const test = async () => {
    try {
        let output = await queryData('https://anapioficeandfire.com/api/characters/583');
        let url1 = output.povBooks[0];
        let output2 = await queryData(url1)
        let chr = output2.povCharacters.map(url => url.slice(-2))
            .reduce((acc, cv) => Number(acc) + Number(cv));
        console.log(chr);
    } catch (err) {
        if (err) console.log(err)
    }

}
test();