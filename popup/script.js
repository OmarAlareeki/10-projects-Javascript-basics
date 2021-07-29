const open = document.getElementById('open');
const close = document.getElementById('close');
const popContainer = document.getElementById('popContainer')

open.addEventListener('click', () => {
    popContainer.classList.add('active')
})

close.addEventListener('click', () => {
    popContainer.classList.remove('active')
})