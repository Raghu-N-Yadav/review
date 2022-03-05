const matchesJson = require('./matches.json')
function filterMatchesPlayedPerYear(matchData) {
    let idArray = [];
    matchData.map(value => {
        if(value['season'] =='2015'){
            idArray.push(Math.floor(value['id']))
        }
    })
    return idArray;
//     let hashMap={}
//     matchData.map((idx) => {
//         if(!hashMap[idx['season']]){
//             hashMap[idx['season']] ={}

//             let hashmap2 = {}
//             matchData.map(idx2 => {
//                 if(idx2['season'] === idx['season']){
//                     if(!hashmap2[idx2['winner']]){
//                         hashmap2[idx2['winner']] = 1;
//                     }else {
//                         hashmap2[idx2['winner']]++
//                     }
//                 }
//             })
//             hashMap[idx['season']] = hashmap2;
//         }
//         // console.log(idx.season)

//     })
//     return hashMap
}

const filteredMatchesPerYear = filterMatchesPlayedPerYear(matchesJson)
console.log(filteredMatchesPerYear, filteredMatchesPerYear[0]+filteredMatchesPerYear[1]);