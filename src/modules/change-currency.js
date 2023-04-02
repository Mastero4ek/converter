const changeCurrency = () => {
    const currency = document.querySelectorAll('[name="currency"]'),
        inputs = document.querySelectorAll('.input'),
        convertBtn = document.querySelector('.setting__button');

    currency.forEach((item, index) => {
        item.checked = false

        item.addEventListener('change', (e) => {
            inputs.forEach(input => {
                input.disabled = true
                input.style.borderColor = ''
            })

            inputs[index].disabled = false
            convertBtn.disabled = false
        })
    })
}

export default changeCurrency