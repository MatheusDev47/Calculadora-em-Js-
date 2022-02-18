function calc() {
	const field = document.getElementById('resultField')
	const numbers = $('.value')
	const actions = $('.action')
	const pi = $('.pi')
	const showResult = $('.result')
	const deleteNumber = $('.delete')

	numbers.on('click', e => { field.value += e.target.value })

	actions.on('click', e => { field.value += e.target.value })

	deleteNumber.on('click', () => { field.value = '' })

	pi.on('click', () => { field.value += Math.PI })

	showResult.on('click', () => {
		const resultField = eval(field.value)

		if (isNaN(resultField) || !isFinite(resultField)) {
			field.value = 'Digite algo válido'
			setTimeout(() => {
				field.value = ''
			}, 2000)

		} else {
			field.value = resultField
		}
	})
}

calc()






