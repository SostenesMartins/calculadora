const calc = () => {
    const number1 = document.getElementById('input1').value
    const number2 = document.getElementById('input2').value

    const soma = document.querySelector('.soma')
    const subtracao = document.querySelector('.subtracao')
    const multiplicacao = document.querySelector('.multiplicacao')
    const divisao = document.querySelector('.divisao')

    const n1 = parseInt(number1)
    const n2 = parseInt(number2)

    soma.innerHTML = (`A soma de ${n1} + ${n2} = ${n1 + n2}`)
    subtracao.innerHTML = (`A subtração de ${n1} - ${n2} = ${n1 - n2}`)
    multiplicacao.innerHTML = (`A mutiplicação de ${n1} x ${n2} = ${n1 * n2}`)
    divisao.innerHTML = (`A divisão de ${n1} / ${n2} = ${n1 / n2}`)
}

const btnClick = document.querySelector('.btn')
btnClick.addEventListener('click', calc)


