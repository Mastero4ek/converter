import { render } from "./render"

const app = () => {
	const checkboxUsd = document.getElementById('USD'),
		checkboxRub = document.getElementById('RUB'),
		checkboxEur = document.getElementById('EUR'),

		inputUsd = document.getElementById('input-usd'),
		inputRub = document.getElementById('input-rub'),
		inputEur = document.getElementById('input-eur'),

		inputs = document.querySelectorAll('.input'),
		convertBtn = document.querySelector('.setting__button');

	convertBtn.disabled = true

	convertBtn.addEventListener('click', () => {
		inputs.forEach((item) => {
			if (item.disabled == false && item.value == '') item.style.borderColor = 'red'
		})

		switch (true) {
			case checkboxUsd.checked && inputUsd.value != '':
				render(checkboxRub.value, checkboxUsd.value, inputUsd.value, inputRub)
				render(checkboxEur.value, checkboxUsd.value, inputUsd.value, inputEur)
				break

			case checkboxRub.checked && inputRub.value != '':
				render(checkboxUsd.value, checkboxRub.value, inputRub.value, inputUsd)
				render(checkboxEur.value, checkboxRub.value, inputRub.value, inputEur)
				break

			case checkboxEur.checked && inputEur.value != '':
				render(checkboxUsd.value, checkboxEur.value, inputEur.value, inputUsd)
				render(checkboxRub.value, checkboxEur.value, inputEur.value, inputRub)
				break
		}
	})
}

export default app