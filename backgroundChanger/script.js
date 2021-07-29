const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = getColor();
})

function getColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`
}