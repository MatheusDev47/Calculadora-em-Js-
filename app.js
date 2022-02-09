
	function calc () {
		const field = document.getElementById('resultField')
		const numbers = $('.valor')
		const actions = $('.acao')
		const finalResult = $('.result')
		const deleteNumber = $('.delete')

		numbers.on('click', e =>{ field.value += e.target.value })

		actions.on('click', e =>{ field.value += e.target.value })

		finalResult.on('click', () =>{
			let resultField = eval(field.value)
			field.value = resultField
		})

		deleteNumber.on('click', () => { field.value = '' })
	}

	calc()

	

	
	
	

	