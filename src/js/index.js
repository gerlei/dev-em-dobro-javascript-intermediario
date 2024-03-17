const inputs = document.querySelectorAll('.input')
const botao = document.querySelector('.botao')

botao.addEventListener('click', function () {
    inputs.forEach(input => {

        const alerta = input.nextElementSibling

        if (input.value === "") {
            input.classList.add('campo-vazio')
            alerta.classList.add('ativo')
        } else {
            input.classList.remove('campo-vazio')
            alerta.classList.remove('ativo')
        }
    })

})







