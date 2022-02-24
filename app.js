const field = document.getElementById('resultField')
const numbers = $('.value')
const actions = $('.action')
const pi = $('.pi')
const resolve = $('.result')
const deleteNumber = $('.delete')

numbers.click(e =>{ field.value += e.target.value })
actions.click(e =>{ field.value += e.target.value })
deleteNumber.click(() => { field.value = '' })
pi.click(() => { field.value += Math.PI })

function calc() {
	const resultField = eval(field.value)

	if (isNaN(resultField) || !isFinite(resultField)) {
		field.value = 'Digite algo válido'
		setTimeout(() => {
			field.value = ''
		}, 2000)

	} else {
		field.value = resultField
	}

}

resolve.click(() =>{ calc() })








