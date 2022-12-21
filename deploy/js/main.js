const mainState = {
    repeat: false,
    type: '',
    n: 0,
    k: [],
    result: 0
}

const verTypesButton = document.querySelectorAll('.s-button, .p-button, .r-button')
verTypesButton.forEach(btn => {
    btn.addEventListener('click', event => {
        verTypesButton.forEach(tag => tag.style.backgroundColor = 'white')
        btn.style.backgroundColor = 'lightblue'
        mainState.type = btn.className
        if (mainState.type === 'p-button' && document.querySelector('.input-repeat').checked === false) {
            document.querySelector('.input-k').style.display = 'none';
        }
        else {
            document.querySelector('.input-k').style.display = 'inline-block';
        }
    })
})

const checkboxDiv = document.querySelector('.check-box-div')
checkboxDiv.addEventListener('click', event => {
    if (mainState.type === '') {
        alert('Сначала выберите закон')
        document.querySelector('.input-repeat').checked = false
    }
    else {
        if (mainState.type === 'p-button' && document.querySelector('.input-repeat').checked === false) {
            document.querySelector('.input-k').style.display = 'none';
        }
        else {
            document.querySelector('.input-k').style.display = 'inline-block';
        }
    }
    if (mainState.type === 'p-button' && document.querySelector('.input-repeat').checked === true) {
        document.querySelector('.input-k').type = "text"
    }
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
    if (mainState.n > 0) {
        alert('Неверные данные')
    }
    if (mainState.n === '' && mainState.k === '') {
        alert('Пустые данные')
    }
    document.querySelectorAll('.formula').forEach(form => form.style.display = 'none')
    mainState.n = Number(mainState.n)
    if (!(mainState.repeat === true && mainState.type === 'p-button')) {
        mainState.k = Number(mainState.k)
    }
    if (mainState.type === 'p-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(Number(mainState.n))
            document.querySelector('.fpb').style.display = 'block'
        }
        else {
            mainState.result = factorial(mainState.n) / proiz(mainState.k)
            document.querySelector('.fps').style.display = 'block'
        }
    }
    if (mainState.type === 'r-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(mainState.n) / factorial(mainState.n - mainState.k)
            document.querySelector('.frb').style.display = 'block'
        }
        else {
            mainState.result = Math.pow(mainState.n, mainState.k)
            document.querySelector('.frs').style.display = 'block'
        }
    }
    if (mainState.type === 's-button') {
        if (mainState.repeat === false) {
            mainState.result = factorial(mainState.n) / (factorial(mainState.n - mainState.k) * factorial(mainState.k))
            document.querySelector('.fsb').style.display = 'block'
        }
        else {
            mainState.result = factorial(mainState.n + mainState.k - 1) / (factorial(mainState.n - 1) * factorial(mainState.k))
            document.querySelector('.fss').style.display = 'block'
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

const proiz = (k) => {
    let res = 1;
    k = k.toString().split(' ')
    k.forEach(n => {
        n = factorial(Number(n))
        res = n * res
    })
    return res
}


