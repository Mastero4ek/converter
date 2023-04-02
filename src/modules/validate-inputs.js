import { validateInput } from "./helpers"

const validate = () => {
    const inputs = document.querySelectorAll('.input')

    inputs.forEach((item) => {
        item.value = ''
        item.disabled = true

        item.addEventListener('input', (e) => {
            item.style.borderColor = ''
            validateInput(e)
        })
    })
}

export default validate