// function sayHi() {
//     alert("Hello, it's an alert");
// }

// global functions are methods of the global object:
// window.sayHi();

//changong background color
// setTimeout(() => {
//     document.body.style.background = 'blue'

// }, 2000)

//using BOM attributes

// alert(location.href) //show curent url

// if (confirm('wanna visit Google.com')) {
//     location.href = 'https://www.google.com'
// }

// //creating a list inside the document
// let list = document.createElement('ul');
// document.body.append(list)
// let times = Number(prompt('how many list iteams you have'))

// let count = 0
// let arr = []
// while (count < times) {
//     let itemName = prompt('Enter item name')
//     // alert(count)
//     let li = document.createElement('li')
//     li.textContent = itemName;
//     arr.push(li)
//     // list.append(li)
//     count++
// }
// list.append(...arr)

// let beforeEle = prompt('What to enter before list')
// list.before(beforeEle)

//creating an un ordered list of given object

// let data = {
//     "Fish": {
//         "trout": {},
//         "salmon": {}
//     },

//     "Tree": {
//         "Huge": {
//             "sequoia": {},
//             "oak": {}
//         },
//         "Flowering": {
//             "apple tree": {},
//             "magnolia": {}
//         }
//     }
// };

// const createtree = (data) => {
//     if (!Object.keys(data).length) return

//     let ul = document.createElement('ul')
//     for (key in data) {
//         let li = document.createElement('li')
//         li.innerHTML = key

//         let childUl = createtree(data[key])
//         if (childUl) {
//             li.append(childUl)

//         }
//         ul.append(li)
//     }
//     return ul
// }

// document.body.append(createtree(data))

