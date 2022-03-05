const fs = require('fs')


const data = [{ "id": 1, "currency": "$424.19", "name": "Philip", "country": "Israel" },
{ "id": 2, "currency": "$757.44", "name": "Leanna", "country": "Uzbekistan" },
{ "id": 3, "currency": "$398.97", "name": "Scot", "country": "Ukraine" },
{ "id": 4, "currency": "$610.95", "name": "Marigold", "country": "Thailand" },
{ "id": 5, "currency": "$621.69", "name": "Bel", "country": "France" },
{ "id": 6, "currency": "$879.75", "name": "Tomasina", "country": "Indonesia" },
{ "id": 7, "currency": "$406.28", "name": "Karina", "country": "Thailand" },
{ "id": 8, "currency": "$626.40", "name": "Forrester", "country": "Sri Lanka" },
{ "id": 9, "currency": "$321.66", "name": "Donnamarie", "country": "Mongolia" },
{ "id": 10, "currency": "$703.63", "name": "Dedra", "country": "Canada" },
{ "id": 11, "currency": "$876.87", "name": "Kamila", "country": "Philippines" },
{ "id": 12, "currency": "$14.26", "name": "Cherlyn", "country": "Poland" },
{ "id": 13, "currency": "$441.23", "name": "Juline", "country": "Thailand" },
{ "id": 14, "currency": "$168.17", "name": "Aubree", "country": "Sweden" },
{ "id": 15, "currency": "$304.19", "name": "Dynah", "country": "China" },
{ "id": 16, "currency": "$280.67", "name": "Roderick", "country": "China" },
{ "id": 17, "currency": "$73.08", "name": "Gabby", "country": "Philippines" },
{ "id": 18, "currency": "$425.12", "name": "Audry", "country": "Honduras" },
{ "id": 19, "currency": "$651.82", "name": "D'arcy", "country": "China" },
{ "id": 20, "currency": "$437.04", "name": "Collen", "country": "Morocco" },
{ "id": 21, "currency": "$274.63", "name": "Neils", "country": "Portugal" },
{ "id": 22, "currency": "$845.16", "name": "Haleigh", "country": "Indonesia" },
{ "id": 23, "currency": "$689.13", "name": "Rosalinde", "country": "Indonesia" },
{ "id": 24, "currency": "$641.58", "name": "Izzy", "country": "Portugal" },
{ "id": 25, "currency": "$807.53", "name": "Shanie", "country": "Argentina" },
{ "id": 26, "currency": "$226.13", "name": "Amelina", "country": "Canada" },
{ "id": 27, "currency": "$407.94", "name": "Sergent", "country": "Mexico" },
{ "id": 28, "currency": "$829.21", "name": "Gram", "country": "Belarus" },
{ "id": 29, "currency": "$347.44", "name": "Cathryn", "country": "Portugal" },
{ "id": 30, "currency": "$506.61", "name": "Shem", "country": "Portugal" },
{ "id": 200, "currency": "$424.19a", "name": "Zhou", "country": "China" }]

const dataPercountry = (data) => {
    return data.reduce((acc, curr) => {

        let currencyData = curr.currency.slice(1)

        //if currency is not a number then replace it with 0(zero)
        if (!isNaN(currencyData)) {
            if (acc[curr.country]) {
                acc[curr.country] += Number(currencyData)
            } else {
                acc[curr.country] = Number(currencyData)
            }

        }
        return acc

    }, {})
}


console.log(1)

fs.writeFile('./currencySum.json', JSON.stringify(dataPercountry(data)), err => {
    if (err) {
        console.error(err)
    } else {
        fs.readFile('./currencySum.json', 'utf-8', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                let myData = data
                console.log(myData)
            }
        })
        console.log('file created !')
    }
})

console.log(2)




// console.log(dataPercountry(data))
// fs.unlink('./currencySum.json', err => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log('files deleted')
//     }
// })