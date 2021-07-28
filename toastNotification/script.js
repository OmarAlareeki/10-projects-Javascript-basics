const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('toast');

    div.innerText = "Hello to my website pretty!"

    container.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 3000)
})