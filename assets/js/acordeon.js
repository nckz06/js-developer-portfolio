// ANIMACAO PARA O ACORDEON
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement
        const isActive = acordeon.classList.contains('active')

        if (isActive) {
            acordeon.classList.remove('active')
        } else {
            acordeon.classList.add('active')
        }
    })
})