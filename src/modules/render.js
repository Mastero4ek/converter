import { getData } from "./getData"

const changeImg = document.querySelector('.inputs__img > img'),
    convertBtn = document.querySelector('.setting__button'),
    radioAll = document.querySelectorAll('.setting__label');

function renderResult(data, input) {
    input.value = data.result.toFixed(2)
}

function render(to, from, amount, result) {
    changeImg.style.animation = `1s linear 0s normal none infinite running rotateImg`
    convertBtn.disabled = true


    radioAll.forEach(item => {
        item.style.opacity = '0.5'
        item.style.pointerEvents = 'none'
    })

    getData(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`)
        .then((data) => {
            renderResult(data, result)
            changeImg.style.animation = ''
            convertBtn.disabled = false

            radioAll.forEach(item => {
                item.style.opacity = ''
                item.style.pointerEvents = ''
            })

        })
        .catch(error => console.log('error', error));
}

export { render }