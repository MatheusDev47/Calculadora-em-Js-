	function calc () {
		const field = document.getElementById('resultField')
		const numbers = $('.valor')
		const actions = $('.acao')
		const pi = $('.pi')
		const finalResult = $('.result')
		const deleteNumber = $('.delete')

		numbers.on('click', e =>{ field.value += e.target.value })

		actions.on('click', e =>{ field.value += e.target.value })

		pi.on('click', () =>{ field.value += Math.PI })	

		finalResult.on('click', () =>{
			let resultField = eval(field.value)
			if (field.value === 'undefined' || field.value === '') {
				field.value = 'Precisa teclar algo'
				setTimeout(() => {
					field.value = ''
				}, 2000);
			}else {
				field.value = resultField
			}
		})

		deleteNumber.on('click', () => { field.value = '' })
	}

	calc()
	

	
	
	

	