const increase = (num, num1) => {
    num += num1
    alert(num)
}

const decrease = (num, num1) => {
    num -= num1
    alert(num)
}

const action = (num) => {
    const secinput = Number(window.prompt('To increse enter 1, and to decrease enter 0'))

    if (secinput === 1) {
        const incCounter = Number(window.prompt('Enter increment counter'))
        increase(num, incCounter)
    } else if (secinput === 0) {
        const decCounter = Number(window.prompt('enter decrement counter'))
        decrease(num, decCounter)
    }
}

const inputNum = () => {
    const userInput = Number(window.prompt('What is your number'))

    if (userInput) {
        const confirmNum = window.confirm(`your number is ${userInput}`)

        if (confirmNum) {
            action(userInput)
        } else {
            inputNum()
        }

    } else return alert('Tata BYE ')


}

const handle = () => {
    const sure = window.confirm('wanna repeat')
    if (sure) return true
    else return false
}

const run = () => {
    inputNum()
    const con = handle()
    if (con) inputNum()
    else return alert('Bye')
}
// inputNum()
run()