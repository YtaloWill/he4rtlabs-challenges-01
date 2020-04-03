$("#btnCalculate").click((e) => {
	e.preventDefault()
	let valorProjeto = parseInt($("#projectValue").val())
	let diasEfetivos = parseInt($("#workDays").val())
	let horasDiarias = parseInt($("#diaryTime").val())
	let diasFerias = parseInt($("#vacationDay").val())
	if (valorProjeto && diasEfetivos && horasDiarias && diasFerias) {
		valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
		console.log(valorHora)
		$(".modal-body").html("<p>O valor da sua hora é: " + valorHora.toFixed(2) + "</p>")
		$("#resultModal").modal()
	} else {
		alert("Preencha todos os campos!")
	}
})

// https://imgur.com/a/WXy7lwN

// valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )