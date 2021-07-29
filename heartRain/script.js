function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add('heart');

    heart.innerHTML = `<i class="fa fa-heart"></i>`;

    heart.style.left = Math.floor(Math.random() * 100) + 'vw'

    document.body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 5000)
}
setInterval(createHeart, 300)