const mainState = {
    repeat: false,
    type: '',
    n: 0,
    k: [],
    result: 0
}

const formulaState = {
    fpb: "fpb",
    fps: "fps",
    frb: "frb",
    frs: "frs",
    fsb: "fsb",
    fss: "fss",
}

const verTypesButton = document.querySelectorAll('.s-button, .p-button, .r-button')
verTypesButton.forEach(btn => {
    btn.addEventListener('click', event => {
        verTypesButton.forEach(tag => tag.style.backgroundColor = 'white')
        btn.style.backgroundColor = 'lightblue'
        mainState.type = btn.className
    })
})

const checkbox = document.querySelector('.input-repeat')
const resultButton = document.querySelector('.result-button')
resultButton.addEventListener('click', event => {
    mainState.n = document.querySelector('.input-n').value
    mainState.k = document.querySelector('.input-k').value
    mainState.repeat = checkbox.checked
    result()
    document.querySelector('.result-output').textContent = mainState.result
})


const result = () => {
    mainState.n = Number(mainState.n)
    mainState.k = Number(mainState.k)
    if (mainState.type === 'p-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(Number(mainState.n))
        }
        else {
            //fsdf
        }
    }
    if (mainState.type === 'r-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(mainState.n) / factorial(mainState.n - mainState.k)
        }
        else {
            mainState.result = Math.pow(mainState.n, mainState.k)
        }
    }
    if (mainState.type === 's-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(mainState.n) / (factorial(mainState.n - mainState.k) * factorial(mainState.k))
        }
        else {
            mainState.result = factorial(mainState.n + mainState.k - 1) / (factorial(mainState.n - 1) * factorial(mainState.k))
        }
    }
}

const factorial = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = i * res
    }
    return res
}


